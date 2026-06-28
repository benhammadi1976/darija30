(function () {
  const DEFAULT_SUPABASE_URL = 'https://ueovreadkfmwsniksohn.supabase.co';
  const CONFIG_STORAGE_KEY = 'darija30_supabase_media_config';
  const SESSION_STORAGE_KEY = 'darija30_supabase_media_session';

  function trimSlash(value) {
    return String(value || '').replace(/\/+$/g, '');
  }

  function safeJsonParse(value, fallback) {
    try {
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function readConfig() {
    const saved = safeJsonParse(localStorage.getItem(CONFIG_STORAGE_KEY), {});
    return {
      url: trimSlash(saved.url || window.DARIJA30_SUPABASE_URL || DEFAULT_SUPABASE_URL),
      publishableKey: saved.publishableKey || window.DARIJA30_SUPABASE_PUBLISHABLE_KEY || ''
    };
  }

  function saveConfig(nextConfig) {
    const current = readConfig();
    const clean = {
      url: trimSlash(nextConfig?.url || current.url || DEFAULT_SUPABASE_URL),
      publishableKey: String(nextConfig?.publishableKey || current.publishableKey || '').trim()
    };
    localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(clean));
    return clean;
  }

  function readSession() {
    const session = safeJsonParse(localStorage.getItem(SESSION_STORAGE_KEY), null);
    if (!session?.access_token) return null;
    if (session.expires_at && Number(session.expires_at) * 1000 <= Date.now()) {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }
    return session;
  }

  function saveSession(session) {
    if (!session?.access_token) return null;
    localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(session));
    return session;
  }

  function clearSession() {
    localStorage.removeItem(SESSION_STORAGE_KEY);
  }

  function requireConfig() {
    const config = readConfig();
    if (!config.url || !config.publishableKey) {
      throw new Error('Supabase URL and publishable key are required.');
    }
    return config;
  }

  async function signIn(email, password) {
    const config = requireConfig();
    const response = await fetch(`${config.url}/auth/v1/token?grant_type=password`, {
      method: 'POST',
      headers: {
        apikey: config.publishableKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload?.error_description || payload?.msg || payload?.message || 'Could not sign in to Supabase.');
    }
    return saveSession(payload);
  }

  async function signOut() {
    const config = readConfig();
    const session = readSession();
    if (config.publishableKey && session?.access_token) {
      try {
        await fetch(`${config.url}/auth/v1/logout`, {
          method: 'POST',
          headers: {
            apikey: config.publishableKey,
            Authorization: `Bearer ${session.access_token}`
          }
        });
      } catch (error) {
        // Local logout is still enough for this static admin integration.
      }
    }
    clearSession();
  }

  function assetPathToStorage(path, preferredBucket = '') {
    const clean = String(path || '').trim().replace(/^\.\//, '');
    if (!clean) return { bucket: preferredBucket || 'audio', path: '' };
    if (clean.startsWith('assets/audio/')) return { bucket: 'audio', path: clean.replace(/^assets\/audio\//, '') };
    if (clean.startsWith('assets/video/')) return { bucket: 'videos', path: clean.replace(/^assets\/video\//, '') };
    if (clean.startsWith('assets/images/')) return { bucket: 'images', path: clean.replace(/^assets\/images\//, '') };
    if (clean.startsWith('assets/posters/')) return { bucket: 'images', path: clean.replace(/^assets\/posters\//, 'posters/') };
    return { bucket: preferredBucket || 'audio', path: clean };
  }

  function replaceExtension(path, extension) {
    const ext = String(extension || '').replace(/^\./, '').toLowerCase();
    if (!ext) return path;
    return String(path || '').replace(/\.[a-z0-9]+$/i, '') + `.${ext}`;
  }

  function extensionFromFile(file, fallback = '') {
    const name = String(file?.name || '');
    const match = name.match(/\.([a-z0-9]+)$/i);
    if (match) return match[1].toLowerCase();
    const type = String(file?.type || '').toLowerCase();
    if (type.includes('mpeg') || type.includes('mp3')) return 'mp3';
    if (type.includes('mp4') || type.includes('aac')) return 'm4a';
    if (type.includes('ogg')) return 'ogg';
    if (type.includes('wav')) return 'wav';
    if (type.includes('webm')) return 'webm';
    return fallback || 'bin';
  }

  function publicUrl(bucket, path) {
    const config = readConfig();
    if (!config.url || !bucket || !path) return '';
    return `${config.url}/storage/v1/object/public/${encodeURIComponent(bucket)}/${String(path).split('/').map(encodeURIComponent).join('/')}`;
  }

  function audioCandidates(assetPath) {
    const { bucket, path } = assetPathToStorage(assetPath, 'audio');
    if (bucket !== 'audio' || !path) return [];
    const originalExt = (String(path).match(/\.([a-z0-9]+)$/i)?.[1] || '').toLowerCase();
    const extensions = [originalExt, 'mp3', 'webm', 'm4a', 'ogg', 'wav'].filter(Boolean);
    const seen = new Set();
    return extensions
      .map((ext) => replaceExtension(path, ext))
      .filter((candidatePath) => {
        if (seen.has(candidatePath)) return false;
        seen.add(candidatePath);
        return true;
      })
      .map((candidatePath) => publicUrl('audio', candidatePath))
      .filter(Boolean);
  }

  function publicUrlForAsset(assetPath, preferredBucket = '') {
    const target = assetPathToStorage(assetPath, preferredBucket);
    if (!target.bucket || !target.path) return '';
    return publicUrl(target.bucket, target.path);
  }

  function videoCandidates(assetPath) {
    const target = assetPathToStorage(assetPath, 'videos');
    if (target.bucket !== 'videos' || !target.path) return [];
    const url = publicUrl(target.bucket, target.path);
    return url ? [url] : [];
  }

  function imageCandidates(assetPath) {
    const target = assetPathToStorage(assetPath, 'images');
    if (target.bucket !== 'images' || !target.path) return [];
    const url = publicUrl(target.bucket, target.path);
    return url ? [url] : [];
  }

  async function uploadBlob(bucket, path, blob, contentType) {
    const config = requireConfig();
    const session = readSession();
    if (!session?.access_token) throw new Error('Admin login is required before upload.');
    if (!bucket || !path || !blob) throw new Error('Missing upload target or file.');

    const response = await fetch(`${config.url}/storage/v1/object/${encodeURIComponent(bucket)}/${String(path).split('/').map(encodeURIComponent).join('/')}`, {
      method: 'POST',
      headers: {
        apikey: config.publishableKey,
        Authorization: `Bearer ${session.access_token}`,
        'Content-Type': contentType || blob.type || 'application/octet-stream',
        'x-upsert': 'true'
      },
      body: blob
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(payload?.message || payload?.error || 'Supabase upload failed. Check admin login and storage policies.');
    }
    return {
      bucket,
      path,
      publicUrl: publicUrl(bucket, path),
      payload
    };
  }

  async function uploadFileForAsset(assetPath, file, preferredBucket = 'audio') {
    if (!file) throw new Error('Choose a file first.');
    const target = assetPathToStorage(assetPath, preferredBucket);
    const extension = extensionFromFile(file, String(target.path).match(/\.([a-z0-9]+)$/i)?.[1] || 'mp3');
    const uploadPath = preferredBucket === 'audio' ? replaceExtension(target.path, extension) : target.path;
    return uploadBlob(target.bucket, uploadPath, file, file.type || 'application/octet-stream');
  }

  function isReadyForAdminUpload() {
    const config = readConfig();
    return Boolean(config.url && config.publishableKey && readSession()?.access_token);
  }

  window.DarijaSupabaseMedia = {
    DEFAULT_SUPABASE_URL,
    readConfig,
    saveConfig,
    readSession,
    clearSession,
    signIn,
    signOut,
    assetPathToStorage,
    replaceExtension,
    extensionFromFile,
    publicUrl,
    publicUrlForAsset,
    videoCandidates,
    imageCandidates,
    audioCandidates,
    uploadBlob,
    uploadFileForAsset,
    isReadyForAdminUpload
  };
})();
