(function () {
  const LEVEL_COUNT = 12;
  const STORAGE_KEY = 'darija30_level_visibility_v1';
  const COLLAB_PREVIEW_KEY = 'darija30_collaborator_preview_v1';
  const STARTER_PACK_ACCESS_KEY = 'darija30_starter_pack_unlocked_v1';

  const DEFAULT_VISIBILITY = Object.freeze({
    1: 'public',
    2: 'collaborators'
  });

  const VISIBILITY_META = Object.freeze({
    admin: {
      key: 'admin',
      label: 'أدمن فقط',
      shortLabel: 'Admin only',
      tone: 'gray',
      description: 'المستوى يظهر للأدمن فقط ولا يظهر للمتعلمين أو المتعاونين.'
    },
    collaborators: {
      key: 'collaborators',
      label: 'للمتعاونين',
      shortLabel: 'Collaborators',
      tone: 'blue',
      description: 'المستوى يظهر للأدمن ولمن يملك رابط المعاينة التعاونية فقط.'
    },
    public: {
      key: 'public',
      label: 'ظاهر للعموم',
      shortLabel: 'Public',
      tone: 'green',
      description: 'المستوى يظهر في واجهة المتعلمين العامة.'
    }
  });

  function normalizeLevel(value) {
    const parsed = Number(value || 1);
    if (!Number.isFinite(parsed) || parsed < 1) return 1;
    return Math.min(Math.max(Math.round(parsed), 1), LEVEL_COUNT);
  }

  function normalizeVisibility(value) {
    return Object.prototype.hasOwnProperty.call(VISIBILITY_META, value) ? value : 'admin';
  }

  function readMap() {
    let saved = {};
    try {
      saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}') || {};
    } catch (error) {
      saved = {};
    }
    const merged = {};
    for (let level = 1; level <= LEVEL_COUNT; level += 1) {
      merged[level] = normalizeVisibility(saved[level] || DEFAULT_VISIBILITY[level] || 'admin');
    }
    return merged;
  }

  function writeMap(map) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(map || {}));
    } catch (error) {
      // Browser storage can fail in privacy mode. The UI still works for the current session.
    }
  }

  function getVisibility(level) {
    return readMap()[normalizeLevel(level)] || 'admin';
  }

  function setVisibility(level, visibility) {
    const map = readMap();
    const cleanLevel = normalizeLevel(level);
    map[cleanLevel] = normalizeVisibility(visibility);
    writeMap(map);
    return map[cleanLevel];
  }

  function getRouteParams(path) {
    const query = String(path || '').split('?')[1] || '';
    return new URLSearchParams(query);
  }

  function isStarterPackActivation(path) {
    const params = getRouteParams(path || window.location.hash.replace(/^#/, ''));
    const paid = String(params.get('paid') || params.get('subscribed') || '').toLowerCase();
    const unlock = String(params.get('unlock') || '').toLowerCase();
    const from = String(params.get('from') || '').toLowerCase();
    return paid === '1' ||
      paid === 'true' ||
      ['starter-pack', 'level1', 'paid', 'subscription'].includes(unlock) ||
      ['subscription', 'paid', 'starter-pack', 'login'].includes(from);
  }

  function unlockStarterPack() {
    try {
      localStorage.setItem(STARTER_PACK_ACCESS_KEY, '1');
    } catch (error) {
      // Storage may fail in private mode; the activation URL still opens the current route.
    }
  }

  function hasStarterPackAccess(path) {
    if (isStarterPackActivation(path)) {
      unlockStarterPack();
      return true;
    }
    try {
      return localStorage.getItem(STARTER_PACK_ACCESS_KEY) === '1';
    } catch (error) {
      return false;
    }
  }

  function clearStarterPackAccess() {
    try {
      localStorage.removeItem(STARTER_PACK_ACCESS_KEY);
    } catch (error) {}
  }

  function isAdminActive() {
    return Boolean(window.DarijaAdminSession?.isActive?.());
  }

  function isCollaboratorPreview(path) {
    const params = getRouteParams(path || window.location.hash.replace(/^#/, ''));
    if (params.get('collab') === '1' || params.get('collaborator') === '1') {
      try { localStorage.setItem(COLLAB_PREVIEW_KEY, '1'); } catch (error) {}
      return true;
    }
    try {
      return localStorage.getItem(COLLAB_PREVIEW_KEY) === '1';
    } catch (error) {
      return false;
    }
  }

  function clearCollaboratorPreview() {
    try { localStorage.removeItem(COLLAB_PREVIEW_KEY); } catch (error) {}
  }

  function canSeeLevel(level, path) {
    const visibility = getVisibility(level);
    if (isAdminActive()) return true;
    if (visibility === 'public') return true;
    if (visibility === 'collaborators') return isCollaboratorPreview(path);
    return false;
  }

  function lessonLevel(lesson) {
    return normalizeLevel(lesson?.level || lesson?.levelNumber || lesson?.levelId || 1);
  }

  function canSeeLesson(lesson, path) {
    return Boolean(lesson && canSeeLevel(lessonLevel(lesson), path));
  }

  function collaboratorLink(level) {
    return `#/app/lessons?collab=1&level=${normalizeLevel(level)}`;
  }

  function meta(visibility) {
    return VISIBILITY_META[normalizeVisibility(visibility)] || VISIBILITY_META.admin;
  }

  function levelMeta(level) {
    return meta(getVisibility(level));
  }

  window.DarijaLevelAccess = {
    LEVEL_COUNT,
    VISIBILITY_META,
    normalizeLevel,
    normalizeVisibility,
    readMap,
    getVisibility,
    setVisibility,
    getRouteParams,
    isStarterPackActivation,
    unlockStarterPack,
    hasStarterPackAccess,
    clearStarterPackAccess,
    isCollaboratorPreview,
    clearCollaboratorPreview,
    canSeeLevel,
    canSeeLesson,
    lessonLevel,
    collaboratorLink,
    meta,
    levelMeta
  };
})();
