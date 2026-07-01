(function () {
  const RECORDED_AUDIO = new Set([
    'assets/audio/day01/taxi-001-normal.mp3',
    'assets/audio/day01/taxi-001-slow.mp3',
    'assets/audio/day02/cafe-001-normal.mp3',
    'assets/audio/day02/cafe-001-slow.mp3',
    'assets/audio/day03/market-001-normal.mp3',
    'assets/audio/day03/market-001-slow.mp3',
    'assets/audio/day03/market-001-seller-khamsin-drham.mp3'
  ]);

  const READY_VIDEOS = new Set([
    'assets/video/day01/taxi-001-scene.mp4',
    'assets/video/day01/taxi-002-scene.mp4',
    'assets/video/day01/taxi-003-scene.mp4',
    'assets/video/day02/cafe-001-scene.mp4',
    'assets/video/day03/market-001-scene.mp4'
  ]);

  let state = {
    selectedLevel: 1,
    selectedDay: 1,
    selectedPhraseId: null,
    filter: 'all'
  };

  function lessons() {
    return Array.isArray(window.DARIJA30_LESSONS) ? window.DARIJA30_LESSONS : [];
  }


  const DARIJA30_LEVEL_COUNT = 12;

  function levelNumber(value) {
    const parsed = Number(value || 1);
    if (!Number.isFinite(parsed) || parsed < 1) return 1;
    return Math.min(Math.max(Math.round(parsed), 1), DARIJA30_LEVEL_COUNT);
  }

  function getLessonLevel(lesson) {
    return levelNumber(lesson?.level || lesson?.levelNumber || lesson?.levelId || 1);
  }

  function levelCode(value) {
    return `level${String(levelNumber(value)).padStart(2, '0')}`;
  }

  function dayCode(value) {
    return `day${String(value || 1).padStart(2, '0')}`;
  }

  function lessonKey(lesson) {
    return `${levelCode(getLessonLevel(lesson))}-${dayCode(lesson?.day || 1)}`;
  }

  function levelOptionsMarkup(selectedLevel = state.selectedLevel) {
    return Array.from({ length: DARIJA30_LEVEL_COUNT }, (_, index) => {
      const value = index + 1;
      const available = lessons().some((lesson) => getLessonLevel(lesson) === value);
      const visibility = window.DarijaLevelAccess?.getVisibility?.(value) || (value === 1 ? 'public' : (value === 2 ? 'collaborators' : 'admin'));
      const visibilityLabel = window.DarijaLevelAccess?.meta?.(visibility)?.shortLabel || visibility;
      const label = `Level ${String(value).padStart(2, '0')}${available ? '' : ' — مستقل لاحقاً'} • ${visibilityLabel}`;
      return `<option value="${value}" ${value === levelNumber(selectedLevel) ? 'selected' : ''}>${escapeHtml(label)}</option>`;
    }).join('');
  }

  function levelVisibility() {
    return window.DarijaLevelAccess?.getVisibility?.(state.selectedLevel) || (state.selectedLevel === 1 ? 'public' : (state.selectedLevel === 2 ? 'collaborators' : 'admin'));
  }

  function levelVisibilityMeta() {
    const access = window.DarijaLevelAccess;
    return access?.meta?.(levelVisibility()) || { label: 'أدمن فقط', tone: 'gray', description: 'المستوى للأدمن فقط.' };
  }

  function levelVisibilityBadgeMarkup(level = state.selectedLevel) {
    const access = window.DarijaLevelAccess;
    const visibility = access?.getVisibility?.(level) || (level === 1 ? 'public' : (level === 2 ? 'collaborators' : 'admin'));
    const meta = access?.meta?.(visibility) || { label: visibility, tone: 'gray' };
    return badge(meta.label || visibility, meta.tone || 'gray');
  }

  function renderLevelVisibilityControl() {
    const meta = levelVisibilityMeta();
    const visibility = levelVisibility();
    const collabLink = window.DarijaLevelAccess?.collaboratorLink?.(state.selectedLevel) || `#/app/lessons?collab=1&level=${state.selectedLevel}`;
    const options = [
      { key: 'admin', label: 'أدمن فقط', icon: '🔒' },
      { key: 'collaborators', label: 'للمتعاونين', icon: '🤝' },
      { key: 'public', label: 'للعموم', icon: '👁️' }
    ];
    return `
      <div class="rounded-2xl bg-gray-50 border border-gray-200 p-4 text-sm lg:max-w-md">
        <div class="flex items-center justify-between gap-3 mb-3">
          <div>
            <p class="text-[11px] font-black uppercase tracking-wide text-gray-400">صلاحية ظهور المستوى</p>
            <p class="font-extrabold text-gray-900">Level ${escapeHtml(String(state.selectedLevel).padStart(2, '0'))} — ${escapeHtml(meta.label)}</p>
          </div>
          ${levelVisibilityBadgeMarkup(state.selectedLevel)}
        </div>
        <div class="grid grid-cols-3 gap-2 mb-3">
          ${options.map((option) => `
            <button type="button" data-admin-level-visibility="${escapeHtml(option.key)}" class="rounded-xl border px-2 py-2 text-xs font-extrabold transition ${visibility === option.key ? 'bg-chefchaouen text-white border-chefchaouen' : 'bg-white text-gray-700 border-gray-200 hover:border-chefchaouen'}">
              <span class="block text-base">${option.icon}</span>${escapeHtml(option.label)}
            </button>
          `).join('')}
        </div>
        <div class="flex flex-wrap gap-2" dir="ltr">
          <a href="${escapeHtml(collabLink)}" class="bg-white border border-blue-200 text-blue-700 px-3 py-2 rounded-xl text-xs font-black hover:bg-blue-50">Collaborator preview</a>
          <button type="button" data-admin-copy-collab-link="${escapeHtml(collabLink)}" class="bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-xl text-xs font-black hover:bg-gray-50">Copy link</button>
        </div>
      </div>
    `;
  }


  function levelPublicFallbackVisibility(level) {
    const cleanLevel = levelNumber(level);
    return cleanLevel === 2 ? 'collaborators' : 'admin';
  }

  function renderLevelPublicCheckboxes() {
    const rows = Array.from({ length: DARIJA30_LEVEL_COUNT }, (_, index) => {
      const value = index + 1;
      const available = lessons().some((lesson) => getLessonLevel(lesson) === value);
      const visibility = window.DarijaLevelAccess?.getVisibility?.(value) || (value === 1 ? 'public' : levelPublicFallbackVisibility(value));
      const isPublic = visibility === 'public';
      const current = value === levelNumber(state.selectedLevel);
      return `
        <label class="flex items-center gap-2 rounded-xl border px-3 py-2 text-xs font-extrabold transition ${current ? 'border-chefchaouen bg-blue-50' : 'border-gray-200 bg-white'} ${available ? 'hover:border-chefchaouen cursor-pointer' : 'opacity-60 cursor-not-allowed'}">
          <input type="checkbox" data-admin-level-public-toggle="${value}" class="h-4 w-4 rounded border-gray-300 accent-emerald-600" ${isPublic ? 'checked' : ''} ${available ? '' : 'disabled'} aria-label="تفعيل Level ${String(value).padStart(2, '0')} للعموم">
          <span class="text-gray-900">Level ${String(value).padStart(2, '0')}</span>
        </label>
      `;
    }).join('');
    return `
      <div class="mt-4 rounded-2xl bg-white border border-gray-200 p-4">
        <div class="flex items-center justify-between gap-3 mb-3">
          <div>
            <p class="text-[11px] font-black uppercase tracking-wide text-emerald-700">تفعيل سريع للعموم</p>
            <p class="text-xs text-gray-600">ضع علامة في المربع بجانب المستوى لكي يظهر للمتعلمين في الواجهة العامة. إزالة العلامة تعيده إلى حالته غير العامة.</p>
          </div>
          <span class="rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-[11px] font-black">✓ Public toggle</span>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-2" dir="ltr">
          ${rows}
        </div>
      </div>
    `;
  }

  function lessonsForLevel(level = state.selectedLevel) {
    const selected = levelNumber(level);
    return lessons().filter((lesson) => getLessonLevel(lesson) === selected);
  }

  function selectedLevelLessons() {
    return lessonsForLevel(state.selectedLevel);
  }

  function firstLessonForLevel(level = state.selectedLevel) {
    return lessonsForLevel(level)[0] || null;
  }

  function ensureSelectedLessonInLevel() {
    const current = lessonsForLevel(state.selectedLevel).find((lesson) => String(lesson.day) === String(state.selectedDay));
    if (current) return current;
    const first = firstLessonForLevel(state.selectedLevel);
    if (first) state.selectedDay = first.day;
    return first;
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }


  function hasSupabaseAdminSession() {
    return Boolean(window.DarijaSupabaseMedia?.readSession?.()?.access_token);
  }

  function isAdminActive() {
    return Boolean(window.DarijaAdminSession?.isActive?.() && hasSupabaseAdminSession());
  }

  function adminGate() {
    if ((window.location.hash || '').replace(/^#/, '') !== '/admin/login') {
      window.location.replace('#/admin/login');
    }
  }

  function allPhrases() {
    return lessons().flatMap((lesson) => (lesson.phrases || []).map((phrase, index) => ({ lesson, phrase, index })));
  }

  function firstPhrase(lesson) {
    return lesson?.phrases?.[0] || null;
  }

  function findLesson(dayOrId) {
    const clean = String(dayOrId ?? state.selectedDay ?? '1');
    const sameLevel = lessonsForLevel(state.selectedLevel);
    return sameLevel.find((lesson) => String(lesson.day) === clean || lesson.id === clean)
      || lessons().find((lesson) => String(lesson.day) === clean || lesson.id === clean)
      || sameLevel[0]
      || lessons()[0]
      || null;
  }

  function findPhrase(id) {
    const found = allPhrases().find((entry) => entry.phrase.id === id);
    if (found) return found;
    const lesson = findLesson(state.selectedDay);
    return { lesson, phrase: firstPhrase(lesson), index: 0 };
  }

  function learnerPhraseHref(lesson, phrase, index = 0, source = 'admin') {
    const safeDay = encodeURIComponent(String(lesson?.day || 1));
    const phraseIndex = Math.max(Number(index) || 0, 0) + 1;
    const phraseId = phrase?.id ? `&phraseId=${encodeURIComponent(String(phrase.id))}` : '';
    const level = `&level=${encodeURIComponent(String(getLessonLevel(lesson)))}`;
    const from = source ? `&from=${encodeURIComponent(String(source))}` : '';
    return `#/app/lesson/${safeDay}?admin=1${level}&phrase=${phraseIndex}${phraseId}${from}`;
  }

  function learnerPhraseHrefFromPhrase(lesson, phrase, source = 'admin') {
    const phrases = Array.isArray(lesson?.phrases) ? lesson.phrases : [];
    const index = Math.max(phrases.findIndex((item) => item === phrase || item?.id === phrase?.id), 0);
    return learnerPhraseHref(lesson, phrase, index, source);
  }

  const MEDIA_UPLOAD_STATUS_STORAGE_KEY = 'darija30_admin_media_upload_status_v1';

  function readMediaUploadStatus() {
    try {
      const saved = JSON.parse(localStorage.getItem(MEDIA_UPLOAD_STATUS_STORAGE_KEY) || '{}');
      return saved && typeof saved === 'object' ? saved : {};
    } catch (error) {
      return {};
    }
  }

  function writeMediaUploadStatus(status) {
    try {
      localStorage.setItem(MEDIA_UPLOAD_STATUS_STORAGE_KEY, JSON.stringify(status || {}));
    } catch (error) {
      // The media center should still work even if localStorage is unavailable.
    }
  }

  function markMediaUploaded(assetPath, result) {
    if (!assetPath) return;
    const status = readMediaUploadStatus();
    status[assetPath] = {
      uploadedAt: new Date().toISOString(),
      bucket: result?.bucket || '',
      path: result?.path || '',
      publicUrl: result?.publicUrl || ''
    };
    writeMediaUploadStatus(status);
  }

  function isMediaUploaded(assetPath) {
    if (!assetPath) return false;
    return Boolean(readMediaUploadStatus()[assetPath]);
  }

  function audioStatus(path) {
    if (!path) return { label: 'غير محدد', tone: 'gray' };
    return RECORDED_AUDIO.has(path) || isMediaUploaded(path)
      ? { label: 'موجود', tone: 'green' }
      : { label: 'ينتظر التسجيل', tone: 'yellow' };
  }

  function videoStatus(path) {
    if (!path) return { label: 'غير محدد بعد', tone: 'gray' };
    return READY_VIDEOS.has(path) || isMediaUploaded(path)
      ? { label: 'موجود', tone: 'green' }
      : { label: 'ينتظر الفيديو', tone: 'yellow' };
  }

  function visualStatus(path, hasOriginalVisual = false) {
    if (!path) return { label: 'غير محدد بعد', tone: 'gray' };
    return isMediaUploaded(path) || Boolean(hasOriginalVisual)
      ? { label: 'موجود', tone: 'green' }
      : { label: 'ينتظر الصورة', tone: 'yellow' };
  }

  function badge(text, tone = 'gray') {
    const map = {
      green: 'bg-green-100 text-green-700 border-green-200',
      yellow: 'bg-yellow-100 text-yellow-700 border-yellow-200',
      red: 'bg-red-100 text-red-700 border-red-200',
      blue: 'bg-blue-100 text-blue-700 border-blue-200',
      purple: 'bg-purple-100 text-purple-700 border-purple-200',
      gray: 'bg-gray-100 text-gray-600 border-gray-200'
    };
    return `<span class="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-extrabold ${map[tone] || map.gray}">${escapeHtml(text)}</span>`;
  }

  function pathBox(label, path, tone = 'gray') {
    return `
      <div class="rounded-xl border border-gray-200 bg-gray-50 p-3" dir="ltr">
        <p class="text-[11px] font-extrabold uppercase tracking-wide text-gray-400 mb-1">${escapeHtml(label)}</p>
        <code class="block text-xs text-gray-700 break-all">${escapeHtml(path || 'Not assigned yet')}</code>
      </div>
    `;
  }

  function buildAdminAudioTargetPath(lesson, phrase, kind) {
    const existing = kind === 'slow' ? phrase?.audioSlow : phrase?.audioNormal;
    if (existing) return existing;
    const day = String(lesson?.day || '1').padStart(2, '0');
    const phraseId = String(phrase?.id || `day${day}-phrase`).trim() || `day${day}-phrase`;
    return `assets/audio/${levelCode(getLessonLevel(lesson))}/day${day}/${phraseId}-${kind === 'slow' ? 'slow' : 'normal'}.mp3`;
  }

  function buildAdminVideoTargetPath(lesson, phrase) {
    if (phrase?.sceneVideo) return phrase.sceneVideo;
    const day = String(lesson?.day || '1').padStart(2, '0');
    const phraseId = String(phrase?.id || `day${day}-phrase`).trim() || `day${day}-phrase`;
    return `assets/video/${levelCode(getLessonLevel(lesson))}/day${day}/${phraseId}-scene.mp4`;
  }

  function buildAdminVisualTargetPath(lesson, phrase) {
    if (phrase?.sceneVisual) return phrase.sceneVisual;
    const day = String(lesson?.day || '1').padStart(2, '0');
    const phraseId = String(phrase?.id || `day${day}-phrase`).trim() || `day${day}-phrase`;
    return `assets/images/lesson-scenes/${levelCode(getLessonLevel(lesson))}/day${day}-${phraseId}-scene.webp`;
  }

  function getMediaItemConfig(kind) {
    const config = {
      normal: { label: 'Normal', bucket: 'audio', accept: '.mp3,audio/mpeg,audio/mp3', requiredExt: 'mp3', error: 'ارفع ملف MP3 فقط للصوت العادي.' },
      slow: { label: 'Slow', bucket: 'audio', accept: '.mp3,audio/mpeg,audio/mp3', requiredExt: 'mp3', error: 'ارفع ملف MP3 فقط للصوت البطيء.' },
      video: { label: 'Video', bucket: 'videos', accept: '.mp4,video/mp4', requiredExt: 'mp4', error: 'ارفع فيديو MP4 فقط.' },
      visual: { label: 'Visual', bucket: 'images', accept: '.jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp', requiredExt: 'image', error: 'ارفع صورة JPG أو PNG أو WEBP فقط.' }
    };
    return config[kind] || config.normal;
  }

  function isAllowedMediaFile(file, kind) {
    const name = String(file?.name || '').toLowerCase();
    const type = String(file?.type || '').toLowerCase();
    if (kind === 'normal' || kind === 'slow') return name.endsWith('.mp3') || type === 'audio/mpeg' || type === 'audio/mp3';
    if (kind === 'video') return name.endsWith('.mp4') || type === 'video/mp4';
    if (kind === 'visual') return /\.(jpe?g|png|webp)$/i.test(name) || ['image/jpeg', 'image/png', 'image/webp'].includes(type);
    return false;
  }

  function mediaPathForKind(lesson, phrase, kind) {
    if (kind === 'normal') return buildAdminAudioTargetPath(lesson, phrase, 'normal');
    if (kind === 'slow') return buildAdminAudioTargetPath(lesson, phrase, 'slow');
    if (kind === 'video') return buildAdminVideoTargetPath(lesson, phrase);
    if (kind === 'visual') return buildAdminVisualTargetPath(lesson, phrase);
    return '';
  }

  function statusForKind(lesson, phrase, kind) {
    const path = mediaPathForKind(lesson, phrase, kind);
    if (kind === 'normal' || kind === 'slow') return audioStatus(path);
    if (kind === 'video') return videoStatus(path);
    if (kind === 'visual') return visualStatus(path, Boolean(phrase?.sceneVisual));
    return { label: 'غير محدد', tone: 'gray' };
  }

  function mediaStatusButton(lesson, phrase, kind) {
    const path = mediaPathForKind(lesson, phrase, kind);
    const status = statusForKind(lesson, phrase, kind);
    const config = getMediaItemConfig(kind);
    const actionText = status.label === 'موجود' ? 'اضغط للاستبدال' : 'اضغط للرفع';
    return `
      <div class="admin-media-cell" data-admin-media-cell data-media-kind="${escapeHtml(kind)}" data-media-path="${escapeHtml(path)}" data-media-bucket="${escapeHtml(config.bucket)}">
        <input type="file" class="hidden" data-admin-media-file accept="${escapeHtml(config.accept)}">
        <button type="button" class="admin-media-status-btn admin-media-status-btn--${escapeHtml(status.tone)}" data-admin-media-upload title="${escapeHtml(actionText)}">
          <span class="admin-media-status-btn__label">${escapeHtml(status.label)}</span>
          <span class="admin-media-status-btn__hint">${escapeHtml(actionText)}</span>
        </button>
        <code class="admin-media-path" dir="ltr">${escapeHtml(path || 'Not assigned yet')}</code>
        <p class="admin-media-upload-note" data-admin-media-note></p>
      </div>
    `;
  }

  function adminAudioRecorderCard(lesson, phrase, kind) {
    const label = kind === 'slow' ? 'Slow audio' : 'Normal audio';
    const targetPath = buildAdminAudioTargetPath(lesson, phrase, kind);
    const status = audioStatus(targetPath);
    return `
      <article class="admin-mp3-upload-card rounded-2xl border border-gray-200 bg-white p-4" data-admin-mp3-recorder data-admin-mp3-kind="${escapeHtml(kind)}" data-admin-mp3-path="${escapeHtml(targetPath)}">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div>
            <p class="text-[11px] font-black uppercase tracking-wide text-gray-400">${escapeHtml(label)} target</p>
            <h3 class="text-base font-black text-gray-900">${escapeHtml(label)}</h3>
          </div>
          ${badge(status.label, status.tone)}
        </div>
        <div class="admin-mp3-upload-card__path rounded-xl bg-gray-50 border border-gray-200 p-3 mb-3" dir="ltr">
          <p class="text-[11px] font-extrabold uppercase tracking-wide text-gray-400 mb-1">Official MP3 path</p>
          <code data-admin-record-path class="block text-xs text-gray-800 break-all">${escapeHtml(targetPath)}</code>
        </div>
        <input data-admin-audio-file type="file" accept=".mp3,audio/mpeg,audio/mp3" class="hidden">
        <button type="button" data-admin-audio-choose class="admin-record-mp3-btn admin-record-mp3-btn--start w-full">رفع ملف MP3</button>
        <p data-admin-record-status class="admin-record-mp3-status mt-3">اختر ملف MP3 رسمي لهذه الجملة.</p>
      </article>
    `;
  }

  function adminRecorderMimeType() {
    if (!window.MediaRecorder?.isTypeSupported) return '';
    return [
      'audio/mpeg',
      'audio/mp3',
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/mp4',
      'audio/ogg;codecs=opus'
    ].find((type) => window.MediaRecorder.isTypeSupported(type)) || '';
  }

  function isMp3Mime(mimeType) {
    return /audio\/(mpeg|mp3)/i.test(String(mimeType || ''));
  }

  function audioExtensionForMime(mimeType) {
    const type = String(mimeType || '').toLowerCase();
    if (type.includes('mpeg') || type.includes('mp3')) return 'mp3';
    if (type.includes('mp4') || type.includes('aac')) return 'm4a';
    if (type.includes('ogg')) return 'ogg';
    if (type.includes('wav')) return 'wav';
    return 'webm';
  }

  function fileNameFromAudioPath(path, extension) {
    const clean = String(path || 'darija30-audio.mp3').split('/').pop() || 'darija30-audio.mp3';
    const base = clean.replace(/\.[a-z0-9]+$/i, '');
    return `${base}.${extension || 'mp3'}`;
  }

  function setAdminRecorderStatus(card, message, tone = '') {
    const status = card?.querySelector('[data-admin-record-status]');
    if (!status) return;
    status.textContent = message;
    status.classList.remove('is-error', 'is-success', 'is-recording', 'is-warning');
    if (tone) status.classList.add(tone);
  }


  function supabaseMediaAdminPanel() {
    const media = window.DarijaSupabaseMedia;
    const config = media?.readConfig?.() || { url: 'https://ueovreadkfmwsniksohn.supabase.co', publishableKey: '' };
    const session = media?.readSession?.() || null;
    const email = session?.user?.email || '';
    const ready = Boolean(config.url && config.publishableKey && session?.access_token);
    return `
      <div class="admin-supabase-panel rounded-3xl ${ready ? 'bg-green-50/70 border-green-100' : 'bg-yellow-50/80 border-yellow-200'} border p-5 mb-6" data-admin-supabase-panel>
        <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <p class="text-[11px] font-black uppercase tracking-wide ${ready ? 'text-green-700' : 'text-yellow-800'}">Admin Gateway</p>
            <h3 class="text-xl font-black text-gray-900">${ready ? 'الأدمن متصل بمركز ملفات الدروس' : 'دخول الأدمن مطلوب'}</h3>
            <p class="text-sm ${ready ? 'text-green-900' : 'text-yellow-900'}">${ready ? `تم الدخول كـ ${escapeHtml(email || 'admin')}. يمكنك رفع الملفات وتعديل الجمل.` : 'سجّل الدخول من بوابة الأدمن بالبريد وكود الأدمن قبل رفع الملفات أو حفظ الجمل.'}</p>
          </div>
          <div class="flex flex-wrap gap-2">
            ${ready ? '<button type="button" data-supabase-logout class="admin-record-mp3-btn admin-record-mp3-btn--stop">خروج من بوابة الأدمن</button>' : '<a href="#/admin/login" class="admin-record-mp3-btn admin-record-mp3-btn--start text-center">دخول بوابة الأدمن</a>'}
          </div>
        </div>
        <p data-supabase-status class="admin-record-mp3-status ${ready ? 'is-success' : 'is-warning'} mt-3">${ready ? `Logged in as ${escapeHtml(email || 'admin')}.` : 'Admin login is required before upload or phrase save.'}</p>
      </div>
    `;
  }

  function renderAdminLoginGateway() {
    const root = document.getElementById('adminLoginGatewayRoot');
    if (!root) return;
    const media = window.DarijaSupabaseMedia;
    const config = media?.readConfig?.() || { url: 'https://ueovreadkfmwsniksohn.supabase.co', publishableKey: '' };
    const session = media?.readSession?.() || null;
    const isReady = Boolean(config.url && config.publishableKey);
    if (window.DarijaAdminSession?.isActive?.() && session?.access_token) {
      root.innerHTML = `
        <div class="rounded-2xl bg-green-50 border border-green-100 p-5 text-center" dir="rtl">
          <p class="font-black text-green-800 mb-2">أنت داخل كأدمن</p>
          <p class="text-sm text-green-900 mb-4">${escapeHtml(session?.user?.email || 'admin')}</p>
          <a href="#/admin/lesson-media" class="inline-flex bg-terracotta hover:bg-red-700 text-white px-6 py-3 rounded-xl font-extrabold transition">افتح مركز ملفات الدروس</a>
        </div>
      `;
      return;
    }
    root.innerHTML = `
      <form data-admin-gateway-form class="space-y-5">
        <div>
          <label class="block text-sm font-extrabold text-medina mb-2">Admin Email</label>
          <input data-admin-gateway-email type="email" autocomplete="username" class="w-full bg-blue-50/70 border border-gray-200 rounded-xl px-4 py-4 font-bold text-medina focus:outline-none focus:ring-2 focus:ring-chefchaouen/20 focus:border-chefchaouen" placeholder="admin@example.com" required>
        </div>
        <div>
          <label class="block text-sm font-extrabold text-medina mb-2">Admin Code</label>
          <input data-admin-gateway-password type="password" autocomplete="current-password" class="w-full bg-blue-50/70 border border-gray-200 rounded-xl px-4 py-4 font-bold text-medina focus:outline-none focus:ring-2 focus:ring-chefchaouen/20 focus:border-chefchaouen" placeholder="Admin password" required>
          <p class="text-xs text-gray-500 mt-2">Admin Code هو كلمة سر Supabase الآمنة، وليست كودًا مكشوفًا داخل الموقع.</p>
        </div>
        <button type="submit" class="w-full bg-medina hover:bg-gray-900 text-white font-extrabold py-4 px-6 rounded-xl transition">دخول لوحة الأدمن</button>
        <div data-admin-gateway-status class="hidden rounded-2xl border px-4 py-3 text-sm font-extrabold"></div>
      </form>
      <details class="mt-6 rounded-2xl bg-gray-50 border border-gray-200 p-4">
        <summary class="cursor-pointer text-sm font-extrabold text-gray-600">إعداد تقني لأول مرة</summary>
        <div class="mt-4 space-y-3" dir="ltr">
          <label class="block text-[11px] font-extrabold uppercase tracking-wide text-gray-400">Project URL</label>
          <input data-admin-gateway-url class="admin-supabase-input" value="${escapeHtml(config.url || '')}" placeholder="https://...supabase.co">
          <label class="block text-[11px] font-extrabold uppercase tracking-wide text-gray-400">Publishable key</label>
          <input data-admin-gateway-key class="admin-supabase-input" type="password" value="" placeholder="${isReady ? 'Saved in this browser' : 'Paste sb_publishable_... here once'}">
          <button type="button" data-admin-gateway-save-config class="admin-record-mp3-btn admin-record-mp3-btn--copy">Save admin gateway config</button>
          <p class="text-xs text-gray-500" dir="rtl">هذا الإعداد يُحفظ محليًا في المتصفح. لا نستخدم Secret key داخل الواجهة.</p>
        </div>
      </details>
    `;
    bindAdminLoginGateway(root);
  }

  function setAdminGatewayStatus(root, message, tone = '') {
    const status = root?.querySelector('[data-admin-gateway-status]');
    if (!status) return;
    status.classList.remove('hidden', 'bg-red-50', 'text-red-800', 'border-red-200', 'bg-green-50', 'text-green-800', 'border-green-200', 'bg-blue-50', 'text-blue-800', 'border-blue-200');
    const className = tone === 'error'
      ? 'bg-red-50 text-red-800 border-red-200'
      : tone === 'success'
        ? 'bg-green-50 text-green-800 border-green-200'
        : 'bg-blue-50 text-blue-800 border-blue-200';
    status.className = `rounded-2xl border px-4 py-3 text-sm font-extrabold ${className}`;
    status.textContent = message;
  }

  function bindAdminLoginGateway(root) {
    root.querySelector('[data-admin-gateway-save-config]')?.addEventListener('click', () => {
      const url = root.querySelector('[data-admin-gateway-url]')?.value || '';
      const publishableKey = root.querySelector('[data-admin-gateway-key]')?.value || '';
      try {
        window.DarijaSupabaseMedia?.saveConfig?.({ url, publishableKey });
        setAdminGatewayStatus(root, 'تم حفظ إعداد بوابة الأدمن في هذا المتصفح.', 'success');
      } catch (error) {
        setAdminGatewayStatus(root, 'تعذر حفظ إعداد بوابة الأدمن.', 'error');
      }
    });
    root.querySelector('[data-admin-gateway-form]')?.addEventListener('submit', async (event) => {
      event.preventDefault();
      const email = root.querySelector('[data-admin-gateway-email]')?.value || '';
      const password = root.querySelector('[data-admin-gateway-password]')?.value || '';
      try {
        setAdminGatewayStatus(root, 'جاري الدخول إلى بوابة الأدمن...', 'info');
        await window.DarijaSupabaseMedia?.signIn?.(email, password);
        setAdminGatewayStatus(root, 'تم الدخول. سيتم فتح مركز ملفات الدروس الآن.', 'success');
        window.DarijaAdminSession?.setActive?.(true, { redirect: '#/admin/lesson-media' });
      } catch (error) {
        setAdminGatewayStatus(root, error?.message || 'تعذر الدخول. تأكد من الإيميل وكود الأدمن.', 'error');
      }
    });
  }

  function setSupabasePanelStatus(panel, message, tone = '') {
    const status = panel?.querySelector('[data-supabase-status]');
    if (!status) return;
    status.textContent = message;
    status.classList.remove('is-error', 'is-success', 'is-recording', 'is-warning');
    if (tone) status.classList.add(tone);
  }

  function stopAdminRecorderTracks(session) {
    try {
      session?.stream?.getTracks?.().forEach((track) => track.stop());
    } catch (error) {
      // Ignore cleanup errors in static admin preview.
    }
  }

  const adminRecorderSessions = new WeakMap();

  async function startAdminAudioRecording(card) {
    if (!card) return;
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setAdminRecorderStatus(card, 'This browser does not support recording. Try Chrome or Edge.', 'is-error');
      return;
    }
    const startButton = card.querySelector('[data-admin-record-start]');
    const stopButton = card.querySelector('[data-admin-record-stop]');
    const playButton = card.querySelector('[data-admin-record-play]');
    const downloadButton = card.querySelector('[data-admin-record-download]');
    const audio = card.querySelector('[data-admin-record-audio]');
    const previous = adminRecorderSessions.get(card);
    if (previous?.url) URL.revokeObjectURL(previous.url);
    stopAdminRecorderTracks(previous);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: false, noiseSuppression: true, autoGainControl: false } });
      const mimeType = adminRecorderMimeType();
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
      const chunks = [];
      const session = { recorder, stream, chunks, url: '', blob: null, mimeType: '' };
      adminRecorderSessions.set(card, session);

      recorder.addEventListener('dataavailable', (event) => {
        if (event.data && event.data.size > 0) chunks.push(event.data);
      });
      recorder.addEventListener('stop', () => {
        stopAdminRecorderTracks(session);
        const actualMime = recorder.mimeType || mimeType || chunks[0]?.type || 'audio/webm';
        const blob = new Blob(chunks, { type: actualMime });
        const url = URL.createObjectURL(blob);
        session.blob = blob;
        session.url = url;
        session.mimeType = actualMime;
        if (audio) {
          audio.src = url;
          audio.classList.remove('hidden');
        }
        if (startButton) {
          startButton.disabled = false;
          startButton.textContent = `● Record ${card.dataset.adminMp3Kind || 'audio'}`;
          startButton.classList.remove('is-recording');
        }
        if (stopButton) stopButton.disabled = true;
        if (playButton) playButton.disabled = false;
        if (downloadButton) {
          downloadButton.disabled = false;
          downloadButton.textContent = isMp3Mime(actualMime) ? '⬇ Download MP3' : `⬇ Download ${audioExtensionForMime(actualMime).toUpperCase()} source`;
        }
        if (supabaseUploadButton) supabaseUploadButton.disabled = false;
        const target = card.dataset.adminMp3Path || '';
        if (isMp3Mime(actualMime)) {
          setAdminRecorderStatus(card, `MP3 ready. Download it and place it at: ${target}`, 'is-success');
        } else {
          setAdminRecorderStatus(card, `Recording saved as ${actualMime || 'browser audio'}. Convert it to MP3, then use: ${target}`, 'is-warning');
        }
      });

      recorder.start();
      if (startButton) {
        startButton.disabled = true;
        startButton.textContent = 'Recording...';
        startButton.classList.add('is-recording');
      }
      if (stopButton) stopButton.disabled = false;
      if (playButton) playButton.disabled = true;
      if (downloadButton) downloadButton.disabled = true;
      setAdminRecorderStatus(card, 'Recording... speak clearly, then press Stop.', 'is-recording');
    } catch (error) {
      if (startButton) startButton.disabled = false;
      if (stopButton) stopButton.disabled = true;
      setAdminRecorderStatus(card, 'Could not access microphone. Check browser permission and try again.', 'is-error');
    }
  }

  function stopAdminAudioRecording(card) {
    const session = adminRecorderSessions.get(card);
    if (session?.recorder && session.recorder.state === 'recording') {
      session.recorder.stop();
    }
  }

  function playAdminAudioRecording(card) {
    const audio = card?.querySelector('[data-admin-record-audio]');
    if (!audio?.src) {
      setAdminRecorderStatus(card, 'Record first, then play.', 'is-error');
      return;
    }
    audio.currentTime = 0;
    audio.play().catch(() => setAdminRecorderStatus(card, 'Could not play recording in this browser.', 'is-error'));
  }

  function downloadAdminAudioRecording(card) {
    const session = adminRecorderSessions.get(card);
    if (!session?.blob) {
      setAdminRecorderStatus(card, 'Record first, then download.', 'is-error');
      return;
    }
    const extension = audioExtensionForMime(session.mimeType);
    const filename = fileNameFromAudioPath(card.dataset.adminMp3Path, extension);
    const link = document.createElement('a');
    link.href = session.url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    if (extension === 'mp3') {
      setAdminRecorderStatus(card, `Downloaded ${filename}. Put it in the final MP3 path.`, 'is-success');
    } else {
      setAdminRecorderStatus(card, `Downloaded ${filename}. Convert to MP3, then rename/place it using the final path.`, 'is-warning');
    }
  }


  async function uploadAdminRecordingToSupabase(card) {
    const session = adminRecorderSessions.get(card);
    if (!session?.blob) {
      setAdminRecorderStatus(card, 'Record first, then save to Supabase.', 'is-error');
      return;
    }
    const media = window.DarijaSupabaseMedia;
    if (!media?.uploadBlob) {
      setAdminRecorderStatus(card, 'Supabase media helper is not loaded.', 'is-error');
      return;
    }
    const extension = audioExtensionForMime(session.mimeType);
    const target = media.assetPathToStorage(card.dataset.adminMp3Path || '', 'audio');
    const uploadPath = media.replaceExtension(target.path, extension);
    try {
      setAdminRecorderStatus(card, 'Uploading recording to Supabase...', 'is-recording');
      const result = await media.uploadBlob(target.bucket, uploadPath, session.blob, session.mimeType || session.blob.type || 'audio/webm');
      const finalNote = extension === 'mp3'
        ? 'Saved as MP3. Learner buttons can play it from any device.'
        : `Saved as ${extension.toUpperCase()}. Learner buttons will try it from Supabase; replace with MP3 later if needed.`;
      setAdminRecorderStatus(card, `${finalNote} Public URL: ${result.publicUrl}`, 'is-success');
    } catch (error) {
      setAdminRecorderStatus(card, error?.message || 'Supabase upload failed.', 'is-error');
    }
  }

  async function uploadAdminChosenAudioFile(card) {
    const input = card?.querySelector('[data-admin-audio-file]');
    const file = input?.files?.[0];
    if (!file) {
      setAdminRecorderStatus(card, 'اختر ملف MP3 أولاً.', 'is-error');
      return;
    }
    const isMp3File = /\.mp3$/i.test(file.name || '') || /audio\/(mpeg|mp3)/i.test(file.type || '');
    if (!isMp3File) {
      if (input) input.value = '';
      setAdminRecorderStatus(card, 'ارفع MP3 فقط. حوّل الملف أولاً إلى MP3 ثم أعد المحاولة.', 'is-error');
      return;
    }
    const media = window.DarijaSupabaseMedia;
    if (!media?.uploadFileForAsset) {
      setAdminRecorderStatus(card, 'Supabase media helper is not loaded.', 'is-error');
      return;
    }
    try {
      setAdminRecorderStatus(card, `Uploading ${file.name} to Supabase...`, 'is-recording');
      const result = await media.uploadFileForAsset(card.dataset.adminMp3Path || '', file, 'audio');
      setAdminRecorderStatus(card, `تم رفع MP3 بنجاح. المتعلم يستطيع تشغيله من: ${result.publicUrl}`, 'is-success');
    } catch (error) {
      setAdminRecorderStatus(card, error?.message || 'Supabase upload failed.', 'is-error');
    } finally {
      if (input) input.value = '';
    }
  }

  function bindAdminAudioRecorders(root) {
    root.querySelectorAll('[data-admin-mp3-recorder]').forEach((card) => {
      card.querySelector('[data-admin-audio-choose]')?.addEventListener('click', () => card.querySelector('[data-admin-audio-file]')?.click());
      card.querySelector('[data-admin-audio-file]')?.addEventListener('change', () => uploadAdminChosenAudioFile(card));
    });
  }

  function mediaSummary(lessonList = lessons()) {
    const entries = lessonList.flatMap((lesson) => (lesson.phrases || []).map((phrase, index) => ({ lesson, phrase, index })));
    const total = entries.length;
    const normalReady = entries.filter(({ lesson, phrase }) => statusForKind(lesson, phrase, 'normal').label === 'موجود').length;
    const slowReady = entries.filter(({ lesson, phrase }) => statusForKind(lesson, phrase, 'slow').label === 'موجود').length;
    const videoReady = entries.filter(({ lesson, phrase }) => statusForKind(lesson, phrase, 'video').label === 'موجود').length;
    const visualReady = entries.filter(({ lesson, phrase }) => statusForKind(lesson, phrase, 'visual').label === 'موجود').length;
    return { total, normalReady, slowReady, videoReady, visualReady };
  }

  const ADMIN_AUDIO_OPEN_STORAGE_KEY = 'darija30_admin_audio_open_lessons_v2';

  function readAdminAudioOpenDays() {
    try {
      const saved = JSON.parse(localStorage.getItem(ADMIN_AUDIO_OPEN_STORAGE_KEY) || '[]');
      if (Array.isArray(saved)) return new Set(saved.map(String));
    } catch (error) {
      // Ignore corrupted localStorage and fall back to a clean default.
    }
    return new Set([lessonKey(firstLessonForLevel(state.selectedLevel) || { level: 1, day: 1 })]);
  }

  function writeAdminAudioOpenDays(openDays) {
    try {
      localStorage.setItem(ADMIN_AUDIO_OPEN_STORAGE_KEY, JSON.stringify(Array.from(openDays).map(String)));
    } catch (error) {
      // Static admin preview should still work when localStorage is unavailable.
    }
  }

  function lessonMediaStats(lesson) {
    const phrases = Array.isArray(lesson?.phrases) ? lesson.phrases : [];
    const total = phrases.length;
    const normal = phrases.filter((phrase) => statusForKind(lesson, phrase, 'normal').label === 'موجود').length;
    const slow = phrases.filter((phrase) => statusForKind(lesson, phrase, 'slow').label === 'موجود').length;
    const videos = phrases.filter((phrase) => statusForKind(lesson, phrase, 'video').label === 'موجود').length;
    const visuals = phrases.filter((phrase) => statusForKind(lesson, phrase, 'visual').label === 'موجود').length;
    const complete = total > 0 && normal === total && slow === total && videos === total;
    return { total, normal, slow, videos, visuals, complete };
  }


  function phraseContentButton(lesson, phrase) {
    const dynamic = phrase?.__darija30DynamicOverride?.updatedAt;
    return `
      <button type="button" class="admin-phrase-title-btn" data-admin-edit-phrase="${escapeHtml(phrase?.id || '')}" title="اضغط لتعديل الجملة من نفس المركز">
        <span class="admin-phrase-title-btn__latin" dir="ltr">${escapeHtml(phrase?.friendlyLatin || '—')}</span>
        <span class="admin-phrase-title-btn__english">${escapeHtml(phrase?.english || phrase?.meaning || '—')}</span>
        <span class="admin-phrase-title-btn__hint">تعديل الجملة</span>
        ${dynamic ? `<span class="admin-phrase-title-btn__saved">محفوظ ديناميكياً</span>` : ''}
      </button>
    `;
  }

  function phraseEditModalMarkup() {
    return `
      <div class="admin-phrase-edit-backdrop hidden" data-admin-phrase-edit-modal aria-hidden="true">
        <section class="admin-phrase-edit-card" role="dialog" aria-modal="true" aria-label="تعديل الجملة">
          <div class="admin-phrase-edit-card__head">
            <div>
              <p class="text-[11px] font-black uppercase tracking-wide text-terracotta">Inline Phrase Editor</p>
              <h3 class="text-xl font-black text-gray-900">تعديل الجملة من مركز الملفات</h3>
              <p class="text-sm text-gray-500">عدّل النص ثم احفظ. تظهر التغييرات للمتعلمين من Supabase، مع الرجوع للنسخة الأصلية إذا لم يوجد حفظ.</p>
            </div>
            <button type="button" class="admin-phrase-edit-card__close" data-admin-phrase-edit-close aria-label="إغلاق">×</button>
          </div>
          <input type="hidden" data-phrase-edit-id>
          <input type="hidden" data-phrase-edit-day>
          <div class="admin-phrase-edit-grid">
            <label class="admin-phrase-edit-field admin-phrase-edit-field--ltr">
              <span>Friendly Latin Darija</span>
              <input data-phrase-edit-field="friendlyLatin" dir="ltr" class="admin-phrase-edit-input" placeholder="weqef hna aafak">
            </label>
            <label class="admin-phrase-edit-field">
              <span>English meaning</span>
              <input data-phrase-edit-field="english" class="admin-phrase-edit-input" placeholder="Stop here, please.">
            </label>
            <label class="admin-phrase-edit-field admin-phrase-edit-field--wide">
              <span>Scenario</span>
              <textarea data-phrase-edit-field="scenario" class="admin-phrase-edit-textarea" rows="2"></textarea>
            </label>
            <label class="admin-phrase-edit-field admin-phrase-edit-field--wide">
              <span>Goal</span>
              <textarea data-phrase-edit-field="goal" class="admin-phrase-edit-textarea" rows="2"></textarea>
            </label>
            <label class="admin-phrase-edit-field admin-phrase-edit-field--wide">
              <span>Cultural Intent</span>
              <textarea data-phrase-edit-field="intent" class="admin-phrase-edit-textarea" rows="2"></textarea>
            </label>
            <label class="admin-phrase-edit-field admin-phrase-edit-field--wide">
              <span>Culture Note</span>
              <textarea data-phrase-edit-field="cultureNote" class="admin-phrase-edit-textarea" rows="2"></textarea>
            </label>
            <label class="admin-phrase-edit-field admin-phrase-edit-field--wide">
              <span>Memory Hook</span>
              <textarea data-phrase-edit-field="memoryHook" class="admin-phrase-edit-textarea" rows="2"></textarea>
            </label>
          </div>
          <p data-phrase-edit-status class="admin-record-mp3-status mt-3">احفظ بعد تسجيل دخول الأدمن في Supabase.</p>
          <div class="admin-phrase-edit-card__actions">
            <button type="button" class="admin-phrase-edit-cancel" data-admin-phrase-edit-close>إلغاء</button>
            <button type="button" class="admin-phrase-edit-save" data-admin-phrase-edit-save>حفظ الجملة</button>
          </div>
        </section>
      </div>
    `;
  }

  function renderAudioPhraseRow(lesson, phrase, index) {
    return `
      <tr class="hover:bg-gray-50 align-top">
        <td class="p-3 font-black text-terracotta">${index + 1}</td>
        <td class="p-3 min-w-[240px]">${phraseContentButton(lesson, phrase)}</td>
        <td class="p-3 min-w-[170px]">${mediaStatusButton(lesson, phrase, 'normal')}</td>
        <td class="p-3 min-w-[170px]">${mediaStatusButton(lesson, phrase, 'slow')}</td>
        <td class="p-3 min-w-[170px]">${mediaStatusButton(lesson, phrase, 'video')}</td>
        <td class="p-3 min-w-[170px]">${mediaStatusButton(lesson, phrase, 'visual')}</td>
        <td class="p-3"><a href="${escapeHtml(learnerPhraseHref(lesson, phrase, index, 'media-center'))}" class="text-blue-700 font-bold hover:underline">عرض</a></td>
      </tr>
    `;
  }


  function renderAudioDayGroup(lesson, openDays) {
    const stats = lessonMediaStats(lesson);
    const dayKey = lessonKey(lesson);
    const isOpen = openDays.has(dayKey);
    const statusTone = stats.complete ? 'green' : (stats.normal || stats.slow || stats.videos ? 'yellow' : 'red');
    const statusText = stats.complete ? 'Ready' : 'Needs recording';
    return `
      <article class="admin-audio-day rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden" data-admin-audio-day="${escapeHtml(dayKey)}">
        <button type="button" data-admin-audio-toggle="${escapeHtml(dayKey)}" class="admin-audio-day__toggle w-full text-right p-5 hover:bg-gray-50 transition" aria-expanded="${isOpen ? 'true' : 'false'}">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div class="flex items-start gap-3">
              <span class="admin-audio-day__chevron ${isOpen ? 'is-open' : ''}" data-admin-audio-chevron>▾</span>
              <div>
                <p class="text-xs font-black text-terracotta uppercase tracking-wide">Level ${escapeHtml(getLessonLevel(lesson))} • Day ${escapeHtml(lesson.day)} • ${stats.total} phrases</p>
                <h2 class="text-xl font-black text-gray-900">${escapeHtml(lesson.title)}</h2>
                <p class="text-sm text-gray-500 mt-1">${escapeHtml(lesson.situation || lesson.module || '')}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              ${badge(`${stats.normal}/${stats.total} Normal`, stats.normal === stats.total ? 'green' : 'yellow')}
              ${badge(`${stats.slow}/${stats.total} Slow`, stats.slow === stats.total ? 'green' : 'yellow')}
              ${badge(`${stats.videos}/${stats.total} Video`, stats.videos ? 'green' : 'gray')}
              ${badge(`${stats.visuals}/${stats.total} Visual`, stats.visuals ? 'blue' : 'gray')}
              ${levelVisibilityBadgeMarkup(getLessonLevel(lesson))}
              ${badge(statusText, statusTone)}
            </div>
          </div>
        </button>
        <div class="admin-audio-day__panel ${isOpen ? '' : 'hidden'}" data-admin-audio-panel>
          <div class="overflow-x-auto border-t border-gray-100">
            <table class="w-full text-sm text-right">
              <thead class="bg-gray-50 text-gray-500">
                <tr><th class="p-3">#</th><th class="p-3">الجملة</th><th class="p-3">Normal</th><th class="p-3">Slow</th><th class="p-3">Video</th><th class="p-3">Visual</th><th class="p-3">Learner</th></tr>
              </thead>
              <tbody class="divide-y divide-gray-100">
                ${(lesson.phrases || []).map((phrase, index) => renderAudioPhraseRow(lesson, phrase, index)).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </article>
    `;
  }

  function adminHeader(title, subtitle) {
    return `
      <div class="mb-8">
        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <span class="inline-flex rounded-full bg-red-50 border border-red-100 text-terracotta px-4 py-1 text-xs font-extrabold uppercase tracking-wide mb-3">Static Admin Preview قبل Backend</span>
            <h1 class="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">${escapeHtml(title)}</h1>
            <p class="text-gray-600 max-w-3xl">${escapeHtml(subtitle)}</p>
          </div>
          <div class="flex flex-wrap gap-2" dir="ltr">
            <span class="bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-xl font-black text-sm">ADMIN ACTIVE</span>
            <a href="#/app/lessons?view=learner" class="bg-white border border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-4 py-2 rounded-xl font-bold text-sm transition">Learner View</a>
            <button type="button" data-admin-logout class="bg-gray-900 text-white hover:bg-black px-4 py-2 rounded-xl font-bold text-sm transition">Logout Admin</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderDashboard() {
    const root = document.getElementById('page-admin-dashboard');
    if (!root) return;
    const summary = mediaSummary();
    root.innerHTML = `
      <div class="max-w-6xl mx-auto px-4" dir="rtl">
        ${adminHeader('رؤية الموقع من جهتين', 'هذه ليست لوحة إدارة حقيقية بعد، بل لوحة رؤية وتشغيل للمحتوى تساعدك أن ترى نفس الدرس كمتعلم وكأدمين قبل بناء Backend وقاعدة البيانات.')}

        <div class="grid md:grid-cols-2 gap-6 mb-8">
          <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-2xl">👤</div>
              <div>
                <h2 class="text-2xl font-extrabold text-gray-900 mb-1">جهة المتعلم</h2>
                <p class="text-gray-600 text-sm">يرى الدرس كما سيشاهده الزائر: جملة، صوت، فيديو، صورة ذاكرة، ثقافة، وتدريب.</p>
              </div>
            </div>
            <div class="space-y-2 text-sm text-gray-700 mb-5">
              <p>✅ يرى أول 3 دروس مجانية كاملة.</p>
              <p>✅ يرى الدروس المقفولة كـ English outcomes فقط.</p>
              <p>✅ يتنقل عبر Dashboard / Lessons / Review / Favorites.</p>
            </div>
            <a href="#/app/lesson/1" class="inline-flex bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-bold transition">افتح مثال كمتعلم</a>
          </div>

          <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
            <div class="flex items-start gap-4 mb-4">
              <div class="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-2xl">🛠️</div>
              <div>
                <h2 class="text-2xl font-extrabold text-gray-900 mb-1">جهة الأدمين</h2>
                <p class="text-gray-600 text-sm">يرى الدرس كمحتوى قابل للإدارة: الجمل، مسارات الصوت، الفيديو، الصور، وما الذي ينقص.</p>
              </div>
            </div>
            <div class="space-y-2 text-sm text-gray-700 mb-5">
              <p>✅ يعرف أين يضع الصوت Normal/Slow.</p>
              <p>✅ يعرف أين يضع الفيديو لكل جملة.</p>
              <p>✅ يدير المستوى واليوم والجملة والملفات من مكان واحد.</p>
            </div>
            <a href="#/admin/lesson-media" class="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold transition">افتح مركز ملفات الدروس</a>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          ${statCard('المستويات', '12', 'independent levels', 'blue')}
          ${statCard('دروس Level 1', lessonsForLevel(1).length, 'current data', 'purple')}
          ${statCard('صوت Normal', `${summary.normalReady}/${summary.total}`, 'recorded now', 'green')}
          ${statCard('صوت Slow', `${summary.slowReady}/${summary.total}`, 'recorded now', 'yellow')}
          ${statCard('الفيديوهات', `${summary.videoReady}/${summary.total}`, 'ready now', 'red')}
        </div>

        <div class="grid lg:grid-cols-[1fr_1.1fr] gap-6">
          <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
            <h2 class="text-xl font-extrabold text-gray-900 mb-4">مسار العمل قبل Backend</h2>
            <div class="space-y-4">
              ${workflowStep('1', 'ثبت المحتوى', 'تم تجهيز 30 درس و150 جملة داخل lessons-data.js.', 'green')}
              ${workflowStep('2', 'سلم الصوت والفيديو', 'عندما تجهز الملفات، نضعها في assets/audio و assets/video حسب المسارات.', 'yellow')}
              ${workflowStep('3', 'راجع كمتعلم', 'افتح Learner View وتأكد أن الجملة والصوت والفيديو تظهر كما تريد.', 'blue')}
              ${workflowStep('4', 'بعدها نبني Admin الحقيقي', 'عند ثبات المحتوى ننتقل إلى Backend + Database + Uploads.', 'purple')}
            </div>
          </div>

          <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
            <h2 class="text-xl font-extrabold text-gray-900 mb-4">أولويات الإدخال الآن</h2>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-right">
                <thead class="bg-gray-50 text-gray-500">
                  <tr><th class="p-3">الأولوية</th><th class="p-3">ماذا نضيف؟</th><th class="p-3">السبب</th></tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr><td class="p-3 font-bold">1</td><td class="p-3">صوت 15 جملة مجانية</td><td class="p-3 text-gray-600">يثبت وعد audio-first.</td></tr>
                  <tr><td class="p-3 font-bold">2</td><td class="p-3">فيديوهات الجمل المجانية المهمة</td><td class="p-3 text-gray-600">يثبت منهج الموقف الحقيقي.</td></tr>
                  <tr><td class="p-3 font-bold">3</td><td class="p-3">مراجعة دروس الدفع</td><td class="p-3 text-gray-600">قبل أي Stripe أو اشتراك.</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function statCard(label, value, helper, tone) {
    const color = {
      blue: 'text-blue-700 bg-blue-50 border-blue-100',
      purple: 'text-purple-700 bg-purple-50 border-purple-100',
      green: 'text-green-700 bg-green-50 border-green-100',
      yellow: 'text-yellow-700 bg-yellow-50 border-yellow-100',
      red: 'text-red-700 bg-red-50 border-red-100'
    }[tone] || 'text-gray-700 bg-gray-50 border-gray-100';
    return `
      <div class="rounded-2xl bg-white border border-gray-200 p-5 shadow-sm">
        <p class="text-xs font-extrabold text-gray-400 uppercase tracking-wide mb-2">${escapeHtml(label)}</p>
        <p class="text-3xl font-black ${color.split(' ')[0]}">${escapeHtml(value)}</p>
        <p class="text-xs text-gray-500 mt-1" dir="ltr">${escapeHtml(helper)}</p>
      </div>
    `;
  }

  function workflowStep(num, title, body, tone) {
    const color = {
      green: 'bg-green-100 text-green-700',
      yellow: 'bg-yellow-100 text-yellow-700',
      blue: 'bg-blue-100 text-blue-700',
      purple: 'bg-purple-100 text-purple-700'
    }[tone] || 'bg-gray-100 text-gray-700';
    return `
      <div class="flex gap-4">
        <div class="shrink-0 w-9 h-9 rounded-full ${color} flex items-center justify-center font-black">${num}</div>
        <div><p class="font-extrabold text-gray-900">${escapeHtml(title)}</p><p class="text-sm text-gray-600">${escapeHtml(body)}</p></div>
      </div>
    `;
  }

  function lessonRows() {
    return lessons().filter((lesson) => {
      if (state.filter !== 'missing') return true;
      return lesson.phrases.some((p) => statusForKind(lesson, p, 'normal').label !== 'موجود' || statusForKind(lesson, p, 'slow').label !== 'موجود' || statusForKind(lesson, p, 'video').label !== 'موجود');
    }).map((lesson) => {
      const phraseCount = lesson.phrases?.length || 0;
      const normal = lesson.phrases.filter((p) => statusForKind(lesson, p, 'normal').label === 'موجود').length;
      const slow = lesson.phrases.filter((p) => statusForKind(lesson, p, 'slow').label === 'موجود').length;
      const videos = lesson.phrases.filter((p) => statusForKind(lesson, p, 'video').label === 'موجود').length;
      const selected = String(lesson.day) === String(state.selectedDay);
      return `
        <tr class="hover:bg-red-50/40 ${selected ? 'bg-red-50' : ''}">
          <td class="p-3 font-black text-terracotta">${escapeHtml(lesson.day)}</td>
          <td class="p-3"><button type="button" data-admin-select-lesson="${escapeHtml(lesson.day)}" class="text-right"><span class="font-extrabold text-gray-900 block">${escapeHtml(lesson.title)}</span><span class="text-xs text-gray-500">${escapeHtml(lesson.module || 'Module')}</span></button></td>
          <td class="p-3">${phraseCount}/5</td>
          <td class="p-3">${badge(`${normal}/${phraseCount} Normal`, normal === phraseCount ? 'green' : 'yellow')} <span class="mx-1"></span>${badge(`${slow}/${phraseCount} Slow`, slow === phraseCount ? 'green' : 'yellow')}</td>
          <td class="p-3">${badge(`${videos}/${phraseCount}`, videos ? 'green' : 'gray')}</td>
          <td class="p-3"><a href="#/app/lesson/${encodeURIComponent(String(lesson.day))}?admin=1" class="text-blue-700 hover:underline font-bold">كمتعلم</a></td>
        </tr>
      `;
    });
  }

  function lessonDetail(lesson) {
    if (!lesson) return '<div class="rounded-3xl bg-white border border-gray-200 p-6">No lesson selected.</div>';
    const first = firstPhrase(lesson);
    return `
      <aside class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 lg:sticky lg:top-28 self-start">
        <div class="flex items-start justify-between gap-3 mb-5">
          <div>
            <p class="text-xs font-extrabold text-terracotta uppercase tracking-wide">Lesson Detail</p>
            <h2 class="text-2xl font-black text-gray-900">Day ${escapeHtml(lesson.day)}: ${escapeHtml(lesson.title)}</h2>
            <p class="text-sm text-gray-600 mt-1">${escapeHtml(lesson.situation)}</p>
          </div>
          ${lesson.isFree ? badge('Free', 'green') : badge('Locked preview', 'red')}
        </div>
        <div class="grid grid-cols-2 gap-3 mb-5">
          <a href="#/app/lesson/${escapeHtml(lesson.day)}?admin=1" class="text-center bg-terracotta hover:bg-red-700 text-white px-4 py-3 rounded-xl font-bold transition">افتح كمتعلم</a>
          <a href="#/admin/lesson-media" class="text-center bg-white border border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-4 py-3 rounded-xl font-bold transition">مركز الملفات</a>
        </div>
        <div class="space-y-3">
          ${(lesson.phrases || []).map((phrase, index) => {
            const n = audioStatus(phrase.audioNormal);
            const s = audioStatus(phrase.audioSlow);
            const v = videoStatus(phrase.sceneVideo);
            return `
              <div class="rounded-2xl border border-gray-100 bg-gray-50 p-4">
                <div class="flex items-start justify-between gap-3">
                  <div>
                    <p class="text-xs text-gray-400 font-bold">Phrase ${index + 1}</p>
                    <p class="font-mono font-extrabold text-gray-900" dir="ltr">${escapeHtml(phrase.friendlyLatin)}</p>
                    <p class="text-sm text-gray-600">${escapeHtml(phrase.english)}</p>
                  </div>
                  <button type="button" data-admin-select-phrase="${escapeHtml(phrase.id)}" class="text-xs bg-white border border-gray-200 text-gray-700 px-3 py-2 rounded-xl font-bold hover:border-terracotta hover:text-terracotta">تفاصيل</button>
                </div>
                <div class="mt-3 flex flex-wrap gap-2">${badge('Normal: ' + n.label, n.tone)}${badge('Slow: ' + s.label, s.tone)}${badge('Video: ' + v.label, v.tone)}</div>
              </div>
            `;
          }).join('')}
        </div>
      </aside>
    `;
  }

  function phraseEditorMock(lesson, phrase) {
    if (!lesson || !phrase) return '<div class="rounded-3xl bg-white border border-gray-200 p-6">No phrase selected.</div>';
    const n = audioStatus(phrase.audioNormal);
    const s = audioStatus(phrase.audioSlow);
    const v = videoStatus(phrase.sceneVideo);
    return `
      <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
        <div class="flex items-start justify-between gap-4 mb-6">
          <div>
            <p class="text-xs font-extrabold text-terracotta uppercase tracking-wide">Phrase Form Preview</p>
            <h2 class="text-2xl font-black text-gray-900">Day ${escapeHtml(lesson.day)} — ${escapeHtml(lesson.title)}</h2>
            <p class="text-sm text-gray-600">هذا شكل الحقول التي سيدخلها الأدمين لاحقاً من لوحة حقيقية.</p>
          </div>
          <a href="${escapeHtml(learnerPhraseHrefFromPhrase(lesson, phrase, 'phrase-editor'))}" class="bg-terracotta hover:bg-red-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition">شاهد كمتعلم</a>
        </div>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          ${readOnlyField('English outcome', phrase.english)}
          ${readOnlyField('Friendly Latin Darija', phrase.friendlyLatin, true)}
          ${readOnlyField('Scenario', phrase.scenario)}
          ${readOnlyField('Goal', phrase.goal)}
          <div class="md:col-span-2">${readOnlyField('Cultural Intent', phrase.intent || phrase.cultureNote)}</div>
          <div class="md:col-span-2">${readOnlyField('Memory Hook', phrase.memoryHook)}</div>
        </div>
        <div class="grid md:grid-cols-2 gap-4 mb-6">
          <div>${mediaStatusButton(lesson, phrase, 'normal')}</div>
          <div>${mediaStatusButton(lesson, phrase, 'slow')}</div>
          <div>${mediaStatusButton(lesson, phrase, 'video')}</div>
          <div>${mediaStatusButton(lesson, phrase, 'visual')}</div>
        </div>
        <div class="rounded-2xl bg-blue-50 border border-blue-100 p-5">
          <h3 class="font-extrabold text-blue-900 mb-2">مركز ملفات الدروس</h3>
          <p class="text-sm text-blue-900 mb-3">كل حالة أعلاه زر مباشر: اضغط على “ينتظر التسجيل” أو “موجود” لرفع أو استبدال الملف من الحاسوب. لإدارة كل الجمل بسرعة افتح مركز ملفات الدروس.</p>
          <div class="flex flex-wrap gap-2" dir="ltr">
            <a href="#/admin/lesson-media" class="bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-blue-100">Open Lesson Media Center</a>
            <a href="${escapeHtml(learnerPhraseHrefFromPhrase(lesson, phrase, 'phrase-editor'))}" class="bg-blue-700 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-blue-800">Learner Preview</a>
          </div>
        </div>
      </div>
    `;
  }

  function readOnlyField(label, value, ltr = false) {
    return `
      <div>
        <label class="block text-xs font-extrabold uppercase tracking-wide text-gray-400 mb-2">${escapeHtml(label)}</label>
        <div class="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 min-h-[48px] text-gray-800 ${ltr ? 'font-mono' : ''}" ${ltr ? 'dir="ltr"' : ''}>${escapeHtml(value || '—')}</div>
      </div>
    `;
  }



  function renderLevelLessonControls(selectedLesson, selectedLessons) {
    const dayOptions = selectedLessons.map((lesson) => `<option value="${escapeHtml(lesson.day)}" ${String(lesson.day) === String(selectedLesson?.day) ? 'selected' : ''}>Day ${escapeHtml(lesson.day)} — ${escapeHtml(lesson.title)}</option>`).join('');
    return `
      <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-5 mb-6">
        <div class="flex flex-col lg:flex-row lg:items-end gap-4">
          <div class="flex-1">
            <label class="block text-xs font-extrabold uppercase tracking-wide text-gray-400 mb-2">المستوى</label>
            <select data-admin-level-select class="w-full border border-gray-200 rounded-2xl px-4 py-3 bg-white font-extrabold text-gray-900">
              ${levelOptionsMarkup(state.selectedLevel)}
            </select>
            <p class="text-xs text-gray-500 mt-2">كل مستوى مستقل: دروسه، جمله، ملفاته، تقدمه، ومراجعته لاحقاً.</p>
            ${renderLevelPublicCheckboxes()}
          </div>
          <div class="flex-1">
            <label class="block text-xs font-extrabold uppercase tracking-wide text-gray-400 mb-2">اليوم / الدرس</label>
            <select data-admin-day-select class="w-full border border-gray-200 rounded-2xl px-4 py-3 bg-white font-extrabold text-gray-900" ${selectedLessons.length ? '' : 'disabled'}>
              ${dayOptions || '<option>لا توجد دروس لهذا المستوى بعد</option>'}
            </select>
            <p class="text-xs text-gray-500 mt-2">اعمل على درس واحد في كل مرة لتفادي التكرار والفوضى.</p>
          </div>
          ${renderLevelVisibilityControl()}
          <div class="rounded-2xl bg-blue-50 border border-blue-100 p-4 text-sm text-blue-900 lg:max-w-sm">
            <p class="font-extrabold mb-1">قاعدة D68B</p>
            <p>مركز ملفات الدروس هو المكان الرئيسي: الجملة تفتح التعديل، والحالات ترفع Normal / Slow / Video / Visual.</p>
          </div>
        </div>
      </div>
    `;
  }

  function renderNoLevelLessonsMessage() {
    return `
      <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-8 text-center">
        <div class="text-4xl mb-3">🧱</div>
        <h2 class="text-2xl font-black text-gray-900 mb-2">هذا المستوى مستقل وجاهز لاحقاً</h2>
        <p class="text-gray-600 max-w-2xl mx-auto">لم نضف دروس Level ${escapeHtml(state.selectedLevel)} بعد. عندما نضيفه سيظهر هنا بنفس النظام بدون إعادة بناء لوحة الأدمن.</p>
      </div>
    `;
  }

  function renderAudio() {
    const root = document.getElementById('page-admin-audio');
    if (!root) return;
    const selectedLessons = selectedLevelLessons();
    const selectedLesson = ensureSelectedLessonInLevel();
    const summary = mediaSummary(selectedLessons);
    const openDays = readAdminAudioOpenDays();
    if (selectedLesson) openDays.add(lessonKey(selectedLesson));
    const lessonContent = selectedLesson ? renderAudioDayGroup(selectedLesson, openDays) : renderNoLevelLessonsMessage();
    root.innerHTML = `
      <div class="admin-lesson-media-shell max-w-7xl mx-auto px-4" dir="rtl">
        <header class="admin-lesson-media-title text-center mb-6">
          <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-2">مركز ملفات الدروس</h1>
          <p class="text-gray-600 max-w-3xl mx-auto">المركز الرئيسي لإدارة كل مستوى مستقل: اختر Level ثم Day، وعدّل الجملة أو ارفع Normal / Slow / Video / Visual من نفس الجدول.</p>
        </header>
        <div class="grid md:grid-cols-4 gap-4 mb-6">
          ${statCard('Normal Ready', `${summary.normalReady}/${summary.total}`, 'MP3 normal', 'green')}
          ${statCard('Slow Ready', `${summary.slowReady}/${summary.total}`, 'MP3 slow', 'yellow')}
          ${statCard('Videos Ready', `${summary.videoReady}/${summary.total}`, 'MP4 scenes', 'red')}
          ${statCard('Visuals Ready', `${summary.visualReady}/${summary.total}`, 'images/SVG', 'blue')}
        </div>
        ${supabaseMediaAdminPanel()}
        <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 mb-6">
          <h2 class="text-xl font-extrabold text-gray-900 mb-3">قاعدة تسمية الملفات للمستويات 12</h2>
          <p class="text-sm text-gray-500 mb-4">المسارات الحالية لـ Level 1 تبقى كما هي إذا كانت موجودة في البيانات. المسارات الجديدة لاحقاً تستعمل levelXX حتى يبقى كل مستوى مستقلاً.</p>
          <div class="grid md:grid-cols-4 gap-4" dir="ltr">
            ${pathBox('normal audio', 'assets/audio/level01/day01/phrase-id-normal.mp3')}
            ${pathBox('slow audio', 'assets/audio/level01/day01/phrase-id-slow.mp3')}
            ${pathBox('micro video', 'assets/video/level01/day01/phrase-id-scene.mp4')}
            ${pathBox('visual image', 'assets/images/lesson-scenes/level01/day01-phrase-id-scene.webp')}
          </div>
        </div>
        ${renderLevelLessonControls(selectedLesson, selectedLessons)}
        <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-5 mb-5">
          <h2 class="text-xl font-extrabold text-gray-900">جدول الدرس المختار</h2>
          <p class="text-sm text-gray-500">اضغط على الجملة لتعديلها. اضغط على حالة الملف للرفع أو الاستبدال. مركز ملفات الدروس هو المكان الرسمي الآن.</p>
        </div>
        <div class="space-y-4">
          ${lessonContent}
        </div>
        ${phraseEditModalMarkup()}
      </div>
    `;
    bindAdminControls(root);
  }

  function renderUsers() {
    const root = document.getElementById('page-admin-users');
    if (!root) return;
    root.innerHTML = `
      <div class="max-w-6xl mx-auto px-4" dir="rtl">
        ${adminHeader('المستخدمون — نموذج مستقبلي', 'هذه الصفحة ستعرض لاحقاً المتعلمين، تقدمهم، مشترياتهم، وآخر درس فتحوه. حالياً هي رؤية فقط قبل Backend.')}
        <div class="grid md:grid-cols-3 gap-4 mb-8">
          ${statCard('الحسابات', 'لاحقاً', 'Backend users', 'blue')}
          ${statCard('التقدم', 'لاحقاً', 'Progress sync', 'green')}
          ${statCard('المشتريات', 'لاحقاً', 'Stripe access', 'yellow')}
        </div>
        <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
          <h2 class="text-xl font-extrabold text-gray-900 mb-3">ما سيظهر هنا لاحقاً</h2>
          <ul class="space-y-2 text-gray-700 text-sm">
            <li>✅ اسم المتعلم والبريد.</li>
            <li>✅ هل اشترى Starter Pack أم يستخدم المجاني فقط.</li>
            <li>✅ آخر درس فتحه ونسبة التقدم.</li>
            <li>✅ الجمل المحفوظة والمفضلة.</li>
          </ul>
        </div>
      </div>
    `;
  }

  function renderPayments() {
    const root = document.getElementById('page-admin-payments');
    if (!root) return;
    root.innerHTML = `
      <div class="max-w-6xl mx-auto px-4" dir="rtl">
        ${adminHeader('الدفع والطلبات — نموذج مستقبلي', 'هذه الصفحة ستتصل لاحقاً بـ Stripe وتتحكم في فتح الدروس المدفوعة. حالياً التسعير ظاهر فقط في الموقع ولا يوجد دفع حقيقي.')}
        <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
          <h2 class="text-xl font-extrabold text-gray-900 mb-3">ما سيحدث بعد Stripe</h2>
          <div class="grid md:grid-cols-3 gap-4">
            <div class="rounded-2xl bg-gray-50 border border-gray-100 p-5"><p class="font-bold">1. دفع $29</p><p class="text-sm text-gray-600">المستخدم يشتري Starter Pack.</p></div>
            <div class="rounded-2xl bg-gray-50 border border-gray-100 p-5"><p class="font-bold">2. فتح الدروس</p><p class="text-sm text-gray-600">Backend يفتح 30 درساً للحساب.</p></div>
            <div class="rounded-2xl bg-gray-50 border border-gray-100 p-5"><p class="font-bold">3. متابعة التقدم</p><p class="text-sm text-gray-600">الحساب يحفظ التقدم عبر الأجهزة.</p></div>
          </div>
        </div>
      </div>
    `;
  }



  function setAdminMediaCellNote(cell, message, tone = '') {
    const note = cell?.querySelector('[data-admin-media-note]');
    if (!note) return;
    note.textContent = message || '';
    note.classList.remove('is-error', 'is-success', 'is-recording', 'is-warning');
    if (tone) note.classList.add(tone);
  }

  function setAdminMediaCellStatus(cell, label = 'موجود', tone = 'green') {
    const button = cell?.querySelector('[data-admin-media-upload]');
    if (!button) return;
    button.className = `admin-media-status-btn admin-media-status-btn--${tone}`;
    const labelNode = button.querySelector('.admin-media-status-btn__label');
    const hintNode = button.querySelector('.admin-media-status-btn__hint');
    if (labelNode) labelNode.textContent = label;
    if (hintNode) hintNode.textContent = label === 'موجود' ? 'اضغط للاستبدال' : 'اضغط للرفع';
  }

  async function uploadAdminMediaFromCell(cell) {
    const input = cell?.querySelector('[data-admin-media-file]');
    const file = input?.files?.[0];
    const kind = cell?.dataset.mediaKind || 'normal';
    const assetPath = cell?.dataset.mediaPath || '';
    const config = getMediaItemConfig(kind);
    if (!file) return;
    if (!isAllowedMediaFile(file, kind)) {
      if (input) input.value = '';
      setAdminMediaCellNote(cell, config.error, 'is-error');
      return;
    }
    const media = window.DarijaSupabaseMedia;
    if (!media?.uploadFileForAsset) {
      setAdminMediaCellNote(cell, 'Supabase media helper is not loaded.', 'is-error');
      return;
    }
    try {
      setAdminMediaCellNote(cell, `Uploading ${file.name}...`, 'is-recording');
      const result = await media.uploadFileForAsset(assetPath, file, config.bucket);
      markMediaUploaded(assetPath, result);
      setAdminMediaCellStatus(cell, 'موجود', 'green');
      setAdminMediaCellNote(cell, `تم الرفع بنجاح.`, 'is-success');
    } catch (error) {
      setAdminMediaCellNote(cell, error?.message || 'Supabase upload failed.', 'is-error');
    } finally {
      if (input) input.value = '';
    }
  }

  function bindAdminMediaUploadButtons(root) {
    root.querySelectorAll('[data-admin-media-cell]').forEach((cell) => {
      cell.querySelector('[data-admin-media-upload]')?.addEventListener('click', (event) => {
        event.stopPropagation();
        cell.querySelector('[data-admin-media-file]')?.click();
      });
      cell.querySelector('[data-admin-media-file]')?.addEventListener('change', () => uploadAdminMediaFromCell(cell));
    });
  }


  function setPhraseEditStatus(modal, message, tone = '') {
    const status = modal?.querySelector('[data-phrase-edit-status]');
    if (!status) return;
    status.textContent = message || '';
    status.classList.remove('is-error', 'is-success', 'is-recording', 'is-warning');
    if (tone) status.classList.add(tone);
  }

  function fieldValue(modal, key, value) {
    const field = modal?.querySelector(`[data-phrase-edit-field="${key}"]`);
    if (!field) return '';
    if (arguments.length >= 3) field.value = value ?? '';
    return field.value || '';
  }

  function openPhraseEditModal(root, phraseId) {
    const modal = root.querySelector('[data-admin-phrase-edit-modal]');
    if (!modal) return;
    const found = findPhrase(phraseId);
    const lesson = found.lesson;
    const phrase = found.phrase;
    if (!lesson || !phrase) return;
    modal.querySelector('[data-phrase-edit-id]').value = phrase.id || '';
    modal.querySelector('[data-phrase-edit-day]').value = lesson.day || '';
    fieldValue(modal, 'friendlyLatin', phrase.friendlyLatin || '');
    fieldValue(modal, 'english', phrase.english || phrase.meaning || '');
    fieldValue(modal, 'scenario', phrase.scenario || '');
    fieldValue(modal, 'goal', phrase.goal || '');
    fieldValue(modal, 'intent', phrase.intent || '');
    fieldValue(modal, 'cultureNote', phrase.cultureNote || '');
    fieldValue(modal, 'memoryHook', phrase.memoryHook || '');
    setPhraseEditStatus(modal, phrase.__darija30DynamicOverride?.updatedAt ? 'هذه الجملة لها تعديل محفوظ ديناميكياً. يمكنك تحديثه.' : 'عدّل الحقول ثم اضغط حفظ.', phrase.__darija30DynamicOverride?.updatedAt ? 'is-success' : '');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    setTimeout(() => modal.querySelector('[data-phrase-edit-field="friendlyLatin"]')?.focus(), 0);
  }

  function closePhraseEditModal(root) {
    const modal = root.querySelector('[data-admin-phrase-edit-modal]');
    if (!modal) return;
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }

  async function savePhraseEditModal(root) {
    const modal = root.querySelector('[data-admin-phrase-edit-modal]');
    if (!modal) return;
    const phraseId = modal.querySelector('[data-phrase-edit-id]')?.value || '';
    const found = findPhrase(phraseId);
    if (!found.lesson || !found.phrase) return;
    const fields = {
      friendlyLatin: fieldValue(modal, 'friendlyLatin'),
      english: fieldValue(modal, 'english'),
      meaning: fieldValue(modal, 'english'),
      scenario: fieldValue(modal, 'scenario'),
      goal: fieldValue(modal, 'goal'),
      intent: fieldValue(modal, 'intent'),
      cultureNote: fieldValue(modal, 'cultureNote'),
      memoryHook: fieldValue(modal, 'memoryHook')
    };
    if (!fields.friendlyLatin.trim() || !fields.english.trim()) {
      setPhraseEditStatus(modal, 'الجملة و English meaning ضروريان.', 'is-error');
      return;
    }
    const media = window.DarijaSupabaseMedia;
    if (!media?.savePhraseOverride) {
      setPhraseEditStatus(modal, 'Supabase phrase helper is not loaded.', 'is-error');
      return;
    }
    try {
      setPhraseEditStatus(modal, 'Saving phrase to Supabase...', 'is-recording');
      await media.savePhraseOverride(found.lesson, found.phrase, fields);
      setPhraseEditStatus(modal, 'تم حفظ الجملة بنجاح. ستظهر للمتعلمين من Supabase.', 'is-success');
      setTimeout(() => {
        closePhraseEditModal(root);
        renderAudio();
      }, 500);
    } catch (error) {
      setPhraseEditStatus(modal, error?.message || 'لم يتم حفظ الجملة. تأكد من Login admin.', 'is-error');
    }
  }

  function bindPhraseInlineEditor(root) {
    root.querySelectorAll('[data-admin-edit-phrase]').forEach((button) => {
      button.addEventListener('click', () => openPhraseEditModal(root, button.dataset.adminEditPhrase));
    });
    root.querySelectorAll('[data-admin-phrase-edit-close]').forEach((button) => {
      button.addEventListener('click', () => closePhraseEditModal(root));
    });
    root.querySelector('[data-admin-phrase-edit-modal]')?.addEventListener('click', (event) => {
      if (event.target?.matches?.('[data-admin-phrase-edit-modal]')) closePhraseEditModal(root);
    });
    root.querySelector('[data-admin-phrase-edit-save]')?.addEventListener('click', () => savePhraseEditModal(root));
  }

  function bindSupabaseMediaControls(root) {
    const panel = root.querySelector('[data-admin-supabase-panel]');
    if (!panel) return;
    panel.querySelector('[data-supabase-save-config]')?.addEventListener('click', () => {
      const url = panel.querySelector('[data-supabase-url]')?.value || '';
      const publishableKey = panel.querySelector('[data-supabase-key]')?.value || '';
      try {
        window.DarijaSupabaseMedia?.saveConfig?.({ url, publishableKey });
        setSupabasePanelStatus(panel, 'Supabase media config saved locally in this browser.', 'is-success');
      } catch (error) {
        setSupabasePanelStatus(panel, 'Could not save config in this browser.', 'is-error');
      }
    });
    panel.querySelector('[data-supabase-login]')?.addEventListener('click', async () => {
      const email = panel.querySelector('[data-supabase-email]')?.value || '';
      const password = panel.querySelector('[data-supabase-password]')?.value || '';
      try {
        setSupabasePanelStatus(panel, 'Logging in to Supabase...', 'is-recording');
        await window.DarijaSupabaseMedia?.signIn?.(email, password);
        setSupabasePanelStatus(panel, `Logged in as ${email}. You can upload lesson media now.`, 'is-success');
      } catch (error) {
        setSupabasePanelStatus(panel, error?.message || 'Supabase login failed.', 'is-error');
      }
    });
    panel.querySelector('[data-supabase-logout]')?.addEventListener('click', async () => {
      await window.DarijaSupabaseMedia?.signOut?.();
      setSupabasePanelStatus(panel, 'Logged out from Supabase media admin.', 'is-warning');
      window.DarijaAdminSession?.setActive?.(false, { redirect: '#/admin/login' });
    });
  }

  function bindAdminControls(root) {
    root.querySelector('[data-admin-level-select]')?.addEventListener('change', (event) => {
      state.selectedLevel = levelNumber(event.target.value);
      const first = firstLessonForLevel(state.selectedLevel);
      state.selectedDay = first?.day || 1;
      state.selectedPhraseId = firstPhrase(first)?.id || null;
      renderAudio();
    });
    root.querySelector('[data-admin-day-select]')?.addEventListener('change', (event) => {
      state.selectedDay = event.target.value;
      const lesson = findLesson(state.selectedDay);
      state.selectedPhraseId = firstPhrase(lesson)?.id || null;
      const openDays = readAdminAudioOpenDays();
      if (lesson) openDays.add(lessonKey(lesson));
      writeAdminAudioOpenDays(openDays);
      renderAudio();
    });
    root.querySelectorAll('[data-admin-level-visibility]').forEach((button) => {
      button.addEventListener('click', () => {
        const nextVisibility = button.dataset.adminLevelVisibility || 'admin';
        window.DarijaLevelAccess?.setVisibility?.(state.selectedLevel, nextVisibility);
        renderAudio();
      });
    });
    root.querySelectorAll('[data-admin-level-public-toggle]').forEach((input) => {
      input.addEventListener('change', () => {
        const level = levelNumber(input.dataset.adminLevelPublicToggle);
        const nextVisibility = input.checked ? 'public' : levelPublicFallbackVisibility(level);
        window.DarijaLevelAccess?.setVisibility?.(level, nextVisibility);
        renderAudio();
      });
    });
    root.querySelector('[data-admin-copy-collab-link]')?.addEventListener('click', async (event) => {
      const link = event.currentTarget.dataset.adminCopyCollabLink || '';
      const absolute = `${window.location.origin}${window.location.pathname}${link}`;
      try {
        await navigator.clipboard?.writeText?.(absolute);
        event.currentTarget.textContent = 'Copied';
      } catch (error) {
        window.prompt('Copy collaborator link:', absolute);
      }
    });
    root.querySelectorAll('[data-admin-audio-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const dayKey = String(button.dataset.adminAudioToggle);
        const dayCard = button.closest('[data-admin-audio-day]');
        const panel = dayCard?.querySelector('[data-admin-audio-panel]');
        const chevron = dayCard?.querySelector('[data-admin-audio-chevron]');
        const openDays = readAdminAudioOpenDays();
        const nextOpen = panel?.classList.contains('hidden');
        panel?.classList.toggle('hidden', !nextOpen);
        button.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
        chevron?.classList.toggle('is-open', Boolean(nextOpen));
        if (nextOpen) openDays.add(dayKey);
        else openDays.delete(dayKey);
        writeAdminAudioOpenDays(openDays);
      });
    });

    root.querySelector('[data-admin-audio-open-all]')?.addEventListener('click', () => {
      const openDays = new Set(selectedLevelLessons().map((lesson) => lessonKey(lesson)));
      root.querySelectorAll('[data-admin-audio-day]').forEach((dayCard) => {
        dayCard.querySelector('[data-admin-audio-panel]')?.classList.remove('hidden');
        dayCard.querySelector('[data-admin-audio-toggle]')?.setAttribute('aria-expanded', 'true');
        dayCard.querySelector('[data-admin-audio-chevron]')?.classList.add('is-open');
      });
      writeAdminAudioOpenDays(openDays);
    });

    root.querySelector('[data-admin-audio-close-all]')?.addEventListener('click', () => {
      root.querySelectorAll('[data-admin-audio-day]').forEach((dayCard) => {
        dayCard.querySelector('[data-admin-audio-panel]')?.classList.add('hidden');
        dayCard.querySelector('[data-admin-audio-toggle]')?.setAttribute('aria-expanded', 'false');
        dayCard.querySelector('[data-admin-audio-chevron]')?.classList.remove('is-open');
      });
      writeAdminAudioOpenDays(new Set());
    });

    bindPhraseInlineEditor(root);
    bindSupabaseMediaControls(root);
    bindAdminMediaUploadButtons(root);
    bindAdminAudioRecorders(root);
  }

  function renderForPath(path) {
    if (!String(path || '').startsWith('/admin')) return;
    if (path === '/admin/reset-password') return;
    if (path === '/admin/audio' || path === '/admin/lessons' || path === '/admin/phrases') {
      window.location.replace('#/admin/lesson-media');
      return;
    }
    if (path === '/admin/login') {
      renderAdminLoginGateway();
      return;
    }
    if (!isAdminActive()) {
      adminGate(path);
      return;
    }
    if (path === '/admin') renderDashboard();
    else if (path === '/admin/lesson-media') renderAudio();
    else if (path === '/admin/users') renderUsers();
    else if (path === '/admin/payments') renderPayments();
  }

  window.DarijaAdminPreview = { renderForPath };
})();
