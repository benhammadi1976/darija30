(function () {
  const state = {
    phraseIndexByLesson: Object.create(null),
    practiceModeByLesson: Object.create(null),
    situationIndexByLesson: Object.create(null),
    appliedRoutePhraseByLesson: Object.create(null),
    freeLessonId: 'lesson-001',
    weeklyWheel: {
      planKey: 'week1',
      challengeSize: 5,
      usedIdsByPlan: Object.create(null),
      resultsByPlan: Object.create(null),
      currentId: '',
      wheelRotation: 0,
      spinStartRotation: 0,
      spinDurationMs: 4200,
      theme: (typeof localStorage !== 'undefined' && localStorage.getItem('darija30_weekly_wheel_theme')) || 'dark',
      mode: 'wheel',
      isSpinning: false,
      openTimer: 0,
      resultTimer: 0,
      returnRootId: '',
      returnEmbedded: false,
      returnPlanKey: 'week1',
      level: 1
    }
  };

  const userRecordingsByPhraseId = Object.create(null);

  const Store = () => window.DarijaProgress;

  function lessons() {
    return Array.isArray(window.DARIJA30_LESSONS) ? window.DARIJA30_LESSONS : [];
  }

  function lessonLevel(lesson) {
    return window.DarijaLevelAccess?.lessonLevel?.(lesson) || Math.max(1, Math.round(Number(lesson?.level || lesson?.levelNumber || lesson?.levelId || 1) || 1));
  }

  function requestedLevel(path) {
    const params = getRouteParams(path || window.location.hash.replace(/^#/, ''));
    const parsed = Number(params.get('level') || params.get('lvl') || 1);
    return window.DarijaLevelAccess?.normalizeLevel?.(parsed) || Math.max(1, Math.round(parsed || 1));
  }

  function canSeeLesson(lesson, path) {
    return window.DarijaLevelAccess?.canSeeLesson?.(lesson, path || window.location.hash.replace(/^#/, '')) ?? (lessonLevel(lesson) === 1);
  }

  function routeBase(path) {
    return String(path || '').split('?')[0];
  }

  function appLessonHref(lesson, extraParams = '') {
    if (!lesson) return '#/app/lessons';
    const day = encodeURIComponent(String(lesson.day || lesson.id || 1));
    const level = lessonLevel(lesson);
    const cleanExtra = String(extraParams || '').replace(/^&+/, '');
    return `#/app/lesson/${day}?level=${encodeURIComponent(String(level))}${cleanExtra ? `&${cleanExtra}` : ''}`;
  }

  function appLessonsHref(level, extraParams = '') {
    const cleanLevel = window.DarijaLevelAccess?.normalizeLevel?.(level) || Math.max(1, Math.round(Number(level || 1) || 1));
    const cleanExtra = String(extraParams || '').replace(/^&+/, '');
    return `#/app/lessons?level=${encodeURIComponent(String(cleanLevel))}${cleanExtra ? `&${cleanExtra}` : ''}`;
  }

  const LEVEL2_BRIDGE_KEY = 'darija30_level2_day1_bridge_unlocked_v1';

  function lessonsForLevel(level) {
    const cleanLevel = window.DarijaLevelAccess?.normalizeLevel?.(level) || Math.max(1, Math.round(Number(level || 1) || 1));
    return lessons()
      .filter((lesson) => lessonLevel(lesson) === cleanLevel)
      .sort((a, b) => Number(a.day || 0) - Number(b.day || 0));
  }

  function levelCompletion(level) {
    const levelLessons = lessonsForLevel(level);
    const completed = levelLessons.filter((lesson) => Store()?.isLessonComplete(lesson)).length;
    const total = levelLessons.length || 30;
    return {
      completed,
      total,
      percent: total ? Math.round((completed / total) * 100) : 0,
      complete: total > 0 && completed >= Math.min(total, 30)
    };
  }

  function isLevelComplete(level) {
    return levelCompletion(level).complete;
  }

  function readLevel2BridgeUnlock() {
    try {
      return localStorage.getItem(LEVEL2_BRIDGE_KEY) === '1';
    } catch (error) {
      return false;
    }
  }

  function writeLevel2BridgeUnlock() {
    try {
      localStorage.setItem(LEVEL2_BRIDGE_KEY, '1');
    } catch (error) {
      // Keep the navigation usable even if localStorage is unavailable.
    }
  }

  function isLevel2BridgeRequest(path) {
    const params = getRouteParams(path || window.location.hash.replace(/^#/, ''));
    const source = params.get('bridge') || params.get('from') || params.get('gift') || '';
    return ['level1', 'level1-certificate', 'certificate', 'teacher-bridge'].includes(String(source));
  }

  function isLevel2BridgeLesson(lesson, path = window.location.hash.replace(/^#/, '')) {
    if (!lesson) return false;
    if (lessonLevel(lesson) !== 2 || Number(lesson.day || 0) !== 1) return false;
    if (!isLevelComplete(1)) return false;
    if (isLevel2BridgeRequest(path)) {
      writeLevel2BridgeUnlock();
      return true;
    }
    return readLevel2BridgeUnlock();
  }

  function isLevelCollaboratorOpen(lesson, path) {
    const access = window.DarijaLevelAccess;
    if (!lesson || !access) return false;
    const level = lessonLevel(lesson);
    const visibility = access.getVisibility(level);
    if (level <= 1) return false;
    if (visibility === 'public') return true;
    return visibility === 'collaborators' && access.isCollaboratorPreview(path || window.location.hash.replace(/^#/, ''));
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }


  function normalizeWeeklyWheelTheme(value) {
    const allowed = ['dark', 'warm', 'light'];
    return allowed.includes(value) ? value : 'dark';
  }

  function setWeeklyWheelTheme(theme) {
    const nextTheme = normalizeWeeklyWheelTheme(theme);
    state.weeklyWheel.theme = nextTheme;
    try {
      localStorage.setItem('darija30_weekly_wheel_theme', nextTheme);
    } catch (error) {
      /* ignore storage errors */
    }
  }

  function weeklyWheelThemeOptions() {
    return [
      { key: 'dark', label: 'Dark', swatch: '#06070b' },
      { key: 'warm', label: 'Warm', swatch: '#d9c0a0' },
      { key: 'light', label: 'Light', swatch: '#dfe8f2' }
    ];
  }

  function findLesson(identifier) {
    const all = lessons();
    const routePath = window.location.hash.replace(/^#/, '');
    const level = requestedLevel(routePath);
    if (!identifier) return all.find((lesson) => lessonLevel(lesson) === level) || all[0] || null;
    const clean = String(identifier).trim();
    const asNumber = Number(clean);
    const sameLevel = all.filter((lesson) => lessonLevel(lesson) === level);
    return sameLevel.find((lesson) => (
      lesson.id === clean ||
      String(lesson.day) === clean ||
      (!Number.isNaN(asNumber) && Number(lesson.day) === asNumber)
    )) || all.find((lesson) => lesson.id === clean) || sameLevel[0] || all[0] || null;
  }

  function firstPhrase(lesson) {
    return lesson?.phrases?.[0] || null;
  }

  function currentPhraseIndex(lesson) {
    if (!lesson) return 0;
    const max = Math.max((lesson.phrases || []).length - 1, 0);
    const stored = state.phraseIndexByLesson[lesson.id] || 0;
    return Math.min(Math.max(stored, 0), max);
  }

  function setPhraseIndex(lesson, index) {
    if (!lesson) return;
    const max = Math.max((lesson.phrases || []).length - 1, 0);
    state.phraseIndexByLesson[lesson.id] = Math.min(Math.max(index, 0), max);
    state.practiceModeByLesson[lesson.id] = false;
  }

  function isLessonPracticeUnlocked(lesson) {
    if (!lesson) return false;
    const progress = Store()?.lessonProgress(lesson);
    return Boolean(progress?.complete);
  }

  function isLessonPracticeOpen(lesson) {
    return Boolean(lesson && state.practiceModeByLesson[lesson.id] && isLessonPracticeUnlocked(lesson));
  }

  function setLessonPracticeOpen(lesson, isOpen = true) {
    if (!lesson) return;
    state.practiceModeByLesson[lesson.id] = Boolean(isOpen);
  }

  function currentSituationIndex(lesson) {
    if (!lesson) return 0;
    const max = Math.max((lesson.phrases || []).length - 1, 0);
    const stored = state.situationIndexByLesson[lesson.id] || 0;
    return Math.min(Math.max(stored, 0), max);
  }

  function setSituationIndex(lesson, index) {
    if (!lesson) return;
    const max = Math.max((lesson.phrases || []).length - 1, 0);
    state.situationIndexByLesson[lesson.id] = Math.min(Math.max(index, 0), max);
  }

  function nextLesson(lesson) {
    const all = lessons();
    const currentDay = Number(lesson?.day || 0);
    const currentLevel = lessonLevel(lesson);
    return all.find((item) => lessonLevel(item) === currentLevel && Number(item.day) === currentDay + 1) || null;
  }

  function getRouteLessonId(path) {
    const match = String(path || '').match(/^\/app\/lesson\/([^/?#]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  }

  function getRouteParams(path) {
    const query = String(path || '').split('?')[1] || '';
    return new URLSearchParams(query);
  }

  function routePhraseIndex(lesson, path) {
    const phrases = Array.isArray(lesson?.phrases) ? lesson.phrases : [];
    if (!phrases.length) return null;
    const params = getRouteParams(path || window.location.hash.replace(/^#/, ''));
    const rawId = params.get('phraseId') || params.get('phrase_id') || params.get('id');
    if (rawId) {
      const byId = phrases.findIndex((phrase) => String(phrase?.id || '') === String(rawId));
      if (byId >= 0) return byId;
    }
    const rawIndex = params.get('phraseIndex') || params.get('phrase') || params.get('p');
    if (rawIndex == null || rawIndex === '') return null;
    const parsed = Number(rawIndex);
    if (!Number.isFinite(parsed)) return null;
    // Admin preview links use human phrase numbers (1..5). phraseIndex=0 still works for dev/debug links.
    const zeroBased = parsed <= 0 ? 0 : parsed - 1;
    return Math.min(Math.max(zeroBased, 0), phrases.length - 1);
  }

  function applyRoutePhraseTarget(lesson, path) {
    if (!lesson?.id) return;
    const params = getRouteParams(path || '');
    const hasTarget = Boolean(params.get('phrase') || params.get('phraseIndex') || params.get('phraseId') || params.get('phrase_id') || params.get('p') || params.get('id'));
    if (!hasTarget) return;
    const routeKey = `${lesson.id}:${params.get('phraseId') || params.get('phrase_id') || params.get('id') || ''}:${params.get('phraseIndex') || params.get('phrase') || params.get('p') || ''}`;
    if (state.appliedRoutePhraseByLesson[lesson.id] === routeKey) return;
    const index = routePhraseIndex(lesson, path);
    if (index == null) return;
    state.phraseIndexByLesson[lesson.id] = index;
    state.practiceModeByLesson[lesson.id] = false;
    state.appliedRoutePhraseByLesson[lesson.id] = routeKey;
  }

  function isAdminActive() {
    return Boolean(window.DarijaAdminSession?.isActive?.());
  }

  function learnerPreviewForced(path) {
    const params = getRouteParams(path || window.location.hash.replace(/^#/, ''));
    return params.get('view') === 'learner' || params.get('learner') === '1';
  }

  function isLearnerLockedLesson(lesson) {
    return Boolean(lesson && !lesson.isFree && lesson.isLocked);
  }

  function adminCanOpenLockedLesson(path) {
    return isAdminActive() && !learnerPreviewForced(path);
  }

  function adminLockNoticeMarkup(lesson) {
    if (!isAdminActive() || !isLearnerLockedLesson(lesson)) return '';
    return `
      <div class="mb-5 rounded-2xl border border-blue-200 bg-blue-50 p-4 text-left">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <p class="text-xs font-black uppercase tracking-wide text-blue-700 mb-1">Admin full content view</p>
            <p class="text-sm text-blue-900"><strong>القفل مفعل للمتعلم.</strong> أنت الآن داخل وضع الأدمين، لذلك ترى المحتوى الكامل للمراجعة وتجهيز الصوت والفيديو.</p>
          </div>
          <div class="flex flex-wrap gap-2" dir="ltr">
            <a href="#/admin/lesson-media" class="bg-white border border-blue-200 text-blue-700 px-3 py-2 rounded-xl text-xs font-black hover:bg-blue-100">Media center</a>
            <a href="#/app/lesson/${escapeHtml(lesson.day)}?level=${lessonLevel(lesson)}&view=learner" class="bg-blue-700 text-white px-3 py-2 rounded-xl text-xs font-black hover:bg-blue-800">View as learner</a>
          </div>
        </div>
      </div>
    `;
  }

  function lessonBackTarget(path) {
    const params = getRouteParams(path);
    const from = params.get('from') || params.get('back');
    if (from === 'free' || from === 'free-lesson') {
      return { href: '#/free-lesson', label: 'Back to free lesson' };
    }
    return { href: '#/app/lessons', label: 'Back to lessons' };
  }

  function methodPill() {
    return `
      <div class="rounded-2xl bg-white border border-gray-100 p-4 shadow-sm">
        <p class="text-xs font-bold text-terracotta uppercase tracking-wide mb-1">Darija30 Method</p>
        <p class="text-sm text-gray-600">Listen first. Speak first. Arabic script is optional support, not the starting point.</p>
      </div>
    `;
  }

  function dialogueLinesMarkup(phrase) {
    const lines = Array.isArray(phrase?.dialogueLines) ? phrase.dialogueLines : [];
    if (!lines.length) return '';
    return `
      <div class="mt-4 rounded-2xl border border-blue-100 bg-blue-50 p-4 text-left">
        <p class="text-xs font-extrabold uppercase tracking-wide text-chefchaouen mb-3">Video Dialogue</p>
        <div class="space-y-3">
          ${lines.map((line) => `
            <div class="rounded-xl ${line.isCore ? 'bg-red-50 border border-red-100' : 'bg-white border border-gray-100'} p-3">
              <div class="flex items-center justify-between gap-3 mb-1">
                <p class="text-xs font-extrabold uppercase tracking-wide ${line.isCore ? 'text-terracotta' : 'text-gray-500'}">${escapeHtml(line.speaker || 'Speaker')}</p>
                ${line.isCore ? '<span class="rounded-full bg-terracotta text-white text-[10px] font-black px-2 py-1 uppercase tracking-wide">Core phrase</span>' : '<span class="rounded-full bg-gray-100 text-gray-500 text-[10px] font-black px-2 py-1 uppercase tracking-wide">You may hear</span>'}
              </div>
              <p class="font-mono font-extrabold ${line.isCore ? 'text-terracotta' : 'text-medina'}">${escapeHtml(line.friendlyLatin)}</p>
              <p class="text-sm text-gray-600">${escapeHtml(line.english)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }


  function sceneVisualMarkup(phrase) {
    if (!phrase?.sceneVisual) return '';
    const memoryPhrase = phrase.memoryBubble || phrase.memoryImagePhrase || phrase.friendlyLatin || '';
    const supabaseImage = window.DarijaSupabaseMedia?.imageCandidates?.(phrase.sceneVisual)?.[0] || '';
    const primaryImage = supabaseImage || phrase.sceneVisual;
    const fallbackImage = phrase.sceneVisual;
    return `
      <div class="memory-visual-card mt-5 text-left" data-visual-system="scene-image-plus-ui-overlay">
        <div class="memory-visual-heading">
          <p class="memory-visual-title">Moment Visual</p>
          <span class="memory-visual-badge">Memory Image</span>
        </div>
        <div class="memory-visual-frame">
          <img src="${escapeHtml(primaryImage)}" ${supabaseImage ? `onerror="this.onerror=null;this.src='${escapeHtml(fallbackImage)}';"` : ''} alt="${escapeHtml(phrase.sceneVisualAlt || phrase.english || phrase.friendlyLatin || 'Darija30 scene visual')}" class="memory-scene-image" loading="lazy">
          ${memoryPhrase ? `
            <div class="memory-bubble" aria-label="Memory phrase: ${escapeHtml(memoryPhrase)}">
              <span>${escapeHtml(memoryPhrase)}</span>
            </div>
          ` : ''}
        </div>
        <p class="memory-visual-caption">A quick visual memory cue for this phrase. Use the final scene below to practice with your voice.</p>
      </div>
    `;

  }

  function nowYouSpeakMarkup(phrase) {
    const phraseText = phrase?.friendlyLatin || phrase?.english || '';
    return `
      <div class="now-you-speak-card mt-5" data-now-you-speak data-phrase-id="${escapeHtml(phrase?.id || '')}">
        <div class="now-you-speak-card__header">
          <span class="now-you-speak-card__icon">🎙️</span>
          <div>
            <p class="now-you-speak-card__eyebrow">Now You Speak</p>
            <h3 class="now-you-speak-card__title">Be the traveler. Say it yourself.</h3>
          </div>
        </div>
        <p class="now-you-speak-card__prompt">Record yourself saying:</p>
        <p class="now-you-speak-card__phrase">${escapeHtml(phraseText)}</p>
        <div class="now-you-speak-card__controls now-you-speak-card__controls--single">
          <button type="button" class="now-you-speak-btn now-you-speak-btn--record now-you-speak-btn--single" data-record-primary data-record-state="idle">● Record yourself</button>
        </div>
        <audio class="now-you-speak-card__audio hidden" data-record-audio></audio>
        <p class="now-you-speak-card__status" data-record-status>Your recording stays on this device and is not uploaded.</p>
      </div>
    `;
  }

  function imInMoroccoMarkup(phrase) {
    if (!phrase?.sceneVideo) return '';
    const supabaseVideo = window.DarijaSupabaseMedia?.videoCandidates?.(phrase.sceneVideo)?.[0] || '';
    return `
      <section class="im-morocco-card im-morocco-card--compact mt-5" data-im-morocco data-phrase-id="${escapeHtml(phrase?.id || '')}">
        <div class="im-morocco-card__copy">
          <p class="im-morocco-card__eyebrow">Final Practice</p>
          <h3 class="im-morocco-card__title">I’m in Morocco</h3>
          <p class="im-morocco-card__text">Play the taxi scene with your voice.</p>
        </div>
        <div class="im-morocco-card__video-wrap">
          <video class="im-morocco-card__video" data-im-morocco-video playsinline preload="metadata" ${phrase.scenePoster ? `poster="${escapeHtml(phrase.scenePoster)}"` : ''}>
            ${supabaseVideo ? `<source src="${escapeHtml(supabaseVideo)}" type="video/mp4">` : ''}
            <source src="${escapeHtml(phrase.sceneVideo)}" type="video/mp4">
            Your browser does not support this video.
          </video>
          <div class="im-morocco-card__overlay" data-im-morocco-overlay>Record your voice first</div>
        </div>
        <div class="im-morocco-card__actions">
          <button type="button" class="im-morocco-card__button" data-im-morocco-play disabled>▶ Play with my voice</button>
        </div>
        <p class="im-morocco-card__status" data-im-morocco-status>Record your voice first. Then enter the scene.</p>
      </section>
    `;
  }

  function supportCardsMarkup(phrase) {
    const cards = [];
    if (phrase?.cultureNote) {
      cards.push(`
        <div class="lesson-support-card lesson-support-card--culture">
          <p class="lesson-support-card__title">Culture Note</p>
          <p class="lesson-support-card__text">${escapeHtml(phrase.cultureNote)}</p>
        </div>
      `);
    }
    if (phrase?.memoryHook) {
      cards.push(`
        <div class="lesson-support-card lesson-support-card--memory">
          <p class="lesson-support-card__title">Memory Hook</p>
          <p class="lesson-support-card__text">${escapeHtml(phrase.memoryHook)}</p>
        </div>
      `);
    }
    if (!cards.length) return '';
    return `<div class="lesson-support-stack mt-4">${cards.join('')}</div>`;
  }


  function quickCheckStorageKey(lesson, phrase) {
    return `darija30_quick_check_open:${lesson?.id || 'lesson'}:${phrase?.id || 'phrase'}`;
  }

  function readQuickCheckOpenState(lesson, phrase) {
    try {
      return localStorage.getItem(quickCheckStorageKey(lesson, phrase)) === '1';
    } catch (error) {
      return false;
    }
  }

  function writeQuickCheckOpenState(lesson, phrase, isOpen) {
    try {
      localStorage.setItem(quickCheckStorageKey(lesson, phrase), isOpen ? '1' : '0');
    } catch (error) {
      // localStorage can be unavailable in private contexts; the toggle should still work for this page view.
    }
  }

  function phraseStepIndicatorMarkup(lesson, phraseIndex) {
    const phrases = Array.isArray(lesson?.phrases) ? lesson.phrases : [];
    if (phrases.length <= 1) return '';
    const practiceUnlocked = isLessonPracticeUnlocked(lesson);
    const practiceOpen = isLessonPracticeOpen(lesson);
    return `
      <div class="lesson-phrase-stepper mb-6" aria-label="Lesson phrase pages">
        <div class="lesson-phrase-stepper__copy">
          <p class="lesson-phrase-stepper__eyebrow">${practiceOpen ? 'Practice page unlocked' : '5 phrase pages inside this lesson'}</p>
          <p class="lesson-phrase-stepper__title">${practiceOpen ? 'Do you remember?' : `Phrase ${phraseIndex + 1} of ${phrases.length}`}</p>
        </div>
        <div class="lesson-phrase-stepper__buttons" role="tablist" aria-label="Phrase navigation">
          ${phrases.map((item, index) => {
            const isActive = !practiceOpen && index === phraseIndex;
            const isLearned = Boolean(Store()?.getState()?.learnedPhrases?.[item.id]);
            return `
              <button type="button"
                class="lesson-phrase-step ${isActive ? 'is-active' : ''} ${isLearned ? 'is-learned' : ''}"
                data-phrase-jump="${index}"
                aria-label="Open phrase ${index + 1}: ${escapeHtml(item.friendlyLatin || item.english || '')}"
                aria-selected="${isActive ? 'true' : 'false'}">
                <span>${index + 1}</span>
              </button>
            `;
          }).join('')}
          ${practiceUnlocked ? `
            <button type="button"
              class="lesson-phrase-step lesson-phrase-step--practice ${practiceOpen ? 'is-active' : ''}"
              data-open-situation-practice
              aria-label="Open Do you remember? practice page"
              aria-selected="${practiceOpen ? 'true' : 'false'}">
              <span>Do you remember?</span>
            </button>
          ` : ''}
        </div>
      </div>
    `;
  }

  function bonusPhrasesMarkup(lesson, phraseIndex) {
    return '';
  }

  function favoriteButtonMarkup(lesson, phrase) {
    const active = Store()?.isFavorite(phrase.id);
    return `
      <button type="button" data-favorite-phrase-id="${escapeHtml(phrase.id)}" data-lesson-id="${escapeHtml(lesson.id)}" class="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-bold transition ${active ? 'border-red-200 bg-red-50 text-red-600' : 'border-gray-200 bg-white text-gray-500 hover:border-red-200 hover:text-red-500'}">
        <span>${active ? '♥' : '♡'}</span>
        <span>${active ? 'Saved' : 'Save Phrase'}</span>
      </button>
    `;
  }

  function learnedButtonMarkup(lesson, phrase) {
    const progressState = Store()?.getState();
    const learned = Boolean(progressState?.learnedPhrases?.[phrase.id]);
    return `
      <button type="button" data-mark-learned data-phrase-id="${escapeHtml(phrase.id)}" data-lesson-id="${escapeHtml(lesson.id)}" class="w-full sm:w-auto px-6 py-3 rounded-xl font-bold transition ${learned ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-green-600 hover:bg-green-700 text-white shadow-sm'}">
        ${learned ? 'Learned ✓' : 'Mark Phrase Learned'}
      </button>
    `;
  }


  function isLockedLesson(lesson, path = window.location.hash.replace(/^#/, '')) {
    const routePath = path || window.location.hash.replace(/^#/, '');
    if (!lesson) return false;
    if (isAdminActive() && !learnerPreviewForced(routePath)) return false;
    if (lessonLevel(lesson) === 1 && window.DarijaLevelAccess?.hasStarterPackAccess?.(routePath)) return false;
    if (isLevel2BridgeLesson(lesson, routePath)) return false;
    if (!canSeeLesson(lesson, routePath)) return true;
    if (isLevelCollaboratorOpen(lesson, routePath)) return false;
    return Boolean(lesson && !lesson.isFree && lesson.isLocked);
  }

  function slugifyAudioKey(value) {
    return String(value || 'phrase')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '') || 'phrase';
  }

  function lockedPreviewAudioUrl(lesson, item, index) {
    if (item?.audioNormal) return item.audioNormal;
    if (item?.audio) return item.audio;
    const day = String(lesson?.day || 0).padStart(2, '0');
    const phraseKey = slugifyAudioKey(item?.friendlyLatin || `phrase-${index + 1}`);
    return `assets/audio/locked/day${day}/${phraseKey}-normal.mp3`;
  }

  function lockedPreviewOutcomeText(item) {
    return item?.outcome || item?.englishOutcome || item?.meaning || 'A practical phrase for this situation';
  }

  function resetInteractiveLessonBodyState(options = {}) {
    const lockedPreview = Boolean(options.lockedPreview);
    document.body.classList.remove('is-remember-standalone');
    document.body.classList.remove('is-weekly-wheel-embedded');
    document.body.classList.remove('is-weekly-wheel-fullscreen');
    document.body.classList.toggle('has-locked-preview', lockedPreview);
    const appNav = document.getElementById('app-nav');
    if (appNav) appNav.style.display = 'block';
    const publicNav = document.querySelector('header');
    if (publicNav && lockedPreview) publicNav.style.display = '';
  }

  function lockedLessonPreviewMarkup(lesson) {
    const preview = Array.isArray(lesson.previewPhrases) ? lesson.previewPhrases : [];
    return `
      <div class="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div class="bg-gradient-to-r from-red-50 via-white to-blue-50 p-6 md:p-8 text-center border-b border-gray-100">
          <span class="inline-block bg-terracotta text-white text-xs font-bold px-3 py-1 rounded-full mb-4">STARTER PACK PREVIEW</span>
          <h1 class="text-3xl md:text-4xl font-extrabold text-medina mb-3">Day ${escapeHtml(lesson.day)}: ${escapeHtml(lesson.title)}</h1>
          <p class="text-gray-600 max-w-2xl mx-auto">${escapeHtml(lesson.situation)}</p>
        </div>
        <div class="p-6 md:p-8">
          <div class="rounded-2xl border border-terracotta/20 bg-red-50 p-5 mb-6 text-center">
            <p class="text-xs font-extrabold uppercase tracking-widest text-terracotta mb-2">Preview only</p>
            <h2 class="text-2xl font-extrabold text-medina mb-2">These are the English meanings you will learn to say in Moroccan Darija.</h2>
            <p class="text-gray-600 max-w-2xl mx-auto">You already saw the full Darija30 method in the first free lesson. Inside this locked lesson, each line becomes a full phrase page with Darija pronunciation, normal and slow audio, video dialogue, cultural intent, and quick practice.</p>
          </div>

          <div class="grid md:grid-cols-3 gap-4 mb-8">
            <div class="rounded-2xl bg-blue-50 border border-blue-100 p-5"><p class="font-bold text-chefchaouen mb-1">Audio + slow audio</p><p class="text-sm text-blue-900">You learn how to say each English meaning in real Moroccan Darija.</p></div>
            <div class="rounded-2xl bg-green-50 border border-green-100 p-5"><p class="font-bold text-green-700 mb-1">Video situation</p><p class="text-sm text-green-900">You see when the phrase is used and what a Moroccan may say back.</p></div>
            <div class="rounded-2xl bg-yellow-50 border border-yellow-100 p-5"><p class="font-bold text-yellow-700 mb-1">Culture + practice</p><p class="text-sm text-yellow-900">You learn the social meaning, then check yourself with a quick exercise.</p></div>
          </div>

          <div class="rounded-2xl border border-gray-100 bg-gray-50 p-5 mb-8">
            <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">What you will learn to say</p>
            <p class="text-sm text-gray-600 mb-4">The Darija spelling and speaker audio stay inside the full lesson. This preview shows the useful English outcomes.</p>
            <div class="grid sm:grid-cols-2 gap-3">
              ${preview.length ? preview.map((item, index) => `
                <div class="bg-white rounded-xl border border-gray-100 p-4 flex items-start gap-3">
                  <span class="shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full bg-red-50 text-terracotta border border-red-100 font-extrabold text-sm">${index + 1}</span>
                  <div>
                    <p class="font-extrabold text-medina">${escapeHtml(lockedPreviewOutcomeText(item))}</p>
                    <p class="text-xs text-gray-500 mt-1">Learn this in Moroccan Darija with sound, video, situation, culture, and practice.</p>
                  </div>
                </div>
              `).join('') : `
                <div class="bg-white rounded-xl border border-gray-100 p-4"><p class="font-bold text-medina">5 practical meanings</p><p class="text-sm text-gray-600">The full lesson teaches each one as a Darija phrase with audio, video, cultural intent, and quick check.</p></div>
              `}
            </div>
          </div>

          <div class="rounded-2xl border-2 border-terracotta bg-red-50 p-6 text-center">
            <p class="text-sm font-bold text-terracotta uppercase tracking-wide mb-2">Not connected to Stripe yet</p>
            <h2 class="text-2xl font-bold text-medina mb-2">Starter Pack will unlock the full 30-day Level 1 plan for $29 one time.</h2>
            <p class="text-gray-600 mb-5">Unlock the full lesson to turn these English needs into Moroccan Darija you can say in real situations.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-3">
              <a href="#/pricing" class="bg-terracotta hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-md transition">View Pricing</a>
              <a href="#/free-lesson" class="bg-white border border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-6 py-3 rounded-xl font-bold transition">Try Day 1 Free First</a>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function phraseExperienceMarkup(lesson, phrase, phraseIndex, options = {}) {
    if (!lesson || !phrase) {
      return `<div class="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-500">Lesson content is not available yet.</div>`;
    }

    const total = lesson.phrases?.length || 1;
    const compact = Boolean(options.compact);
    const quiz = Array.isArray(lesson.quiz) ? lesson.quiz : [];
    const lessonRouteId = encodeURIComponent(String(lesson.day || lesson.id));
    const lessonUrl = compact ? `#/app/lesson/${lessonRouteId}?from=free-lesson` : `#/app/lesson/${lessonRouteId}`;

    return `
      <div class="lesson-player-shell bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-gray-100">
        ${adminLockNoticeMarkup(lesson)}
        ${!compact ? phraseStepIndicatorMarkup(lesson, phraseIndex) : ''}
        <div class="flex justify-end mb-4">
          ${favoriteButtonMarkup(lesson, phrase)}
        </div>
        <div class="lesson-main-grid lesson-main-grid--balanced grid lg:grid-cols-2 gap-6 items-stretch">
          <div class="lesson-learning-column rounded-2xl border border-gray-100 p-6 text-center">
            <div class="lesson-say-card">
              <div class="inline-block bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold mb-5">SAY THIS</div>
              <p class="font-mono text-4xl md:text-5xl font-extrabold text-chefchaouen mb-3">${escapeHtml(phrase.friendlyLatin)}</p>
              <p class="text-gray-400 text-sm mb-6">Friendly Latin Darija</p>

              <div class="flex flex-wrap justify-center gap-4 mb-3">
                <button data-audio-play data-speed="1" data-audio-url="${escapeHtml(phrase.audioNormal)}" class="flex items-center gap-2 bg-chefchaouen hover:bg-blue-700 text-white px-6 py-3 rounded-full font-bold transition">
                  <span>▶</span> Normal Speed
                </button>
                <button data-audio-play data-speed="0.5" data-audio-url="${escapeHtml(phrase.audioSlow)}" class="flex items-center gap-2 bg-white border-2 border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-full font-bold transition">
                  <span>🐌</span> Slow Speed
                </button>
              </div>
              <p class="audio-recording-hint inline-block rounded-full px-4 py-2 text-xs font-bold mb-3">If audio is not recorded yet, the button will show the exact missing MP3 path.</p>
              <p class="phrase-listen-tip" aria-label="Learning tip">🎧 Listen a few times. Then say it like you’re really in Morocco.</p>

              ${phrase.arabic ? `
              <details class="text-left bg-gray-50 rounded-xl p-4 mb-5">
                <summary class="cursor-pointer font-bold text-gray-600">Show optional Arabic script</summary>
                <p class="text-3xl font-bold text-chefchaouen mt-4 font-arabic text-center" dir="rtl">${escapeHtml(phrase.arabic)}</p>
              </details>
              ` : ''}

              <div class="grid sm:grid-cols-2 gap-4 text-left">
                <div class="bg-blue-50 border-l-4 border-chefchaouen p-4 rounded-r-xl">
                  <p class="text-xs font-bold text-chefchaouen uppercase mb-1">Meaning</p>
                  <p class="text-sm text-blue-900">${escapeHtml(phrase.meaning || phrase.english)}</p>
                </div>
                <div class="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-xl">
                  <p class="text-xs font-bold text-yellow-700 uppercase mb-1">Cultural Intent</p>
                  <p class="text-sm text-yellow-900">${escapeHtml(phrase.intent || phrase.cultureNote)}</p>
                </div>
              </div>
            </div>

            <div class="lesson-watch-repeat mt-5 text-left">
              <p class="text-xs font-bold text-terracotta uppercase tracking-widest mb-1">Watch & Repeat</p>
              <p class="text-xs text-gray-500 mb-3">Use the visual, then practice with your own voice.</p>
              ${sceneVisualMarkup(phrase)}
            </div>
          </div>

          <div class="lesson-practice-column rounded-2xl bg-gray-50 border border-gray-100 p-5 text-left">
            <div class="lesson-scenario-card">
              <p class="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Scenario</p>
              <h3 class="text-xl font-bold text-medina mb-3">${escapeHtml(phrase.scenario || lesson.situation)}</h3>
              <p class="text-gray-600 mb-5"><strong>Goal:</strong> ${escapeHtml(phrase.goal || lesson.method || 'Use this phrase in the right Moroccan situation.')}</p>
              ${methodPill()}
              ${phrase.moroccanChat ? `
                <details class="mt-4 text-sm text-gray-500">
                  <summary class="cursor-pointer font-bold">Show Moroccan chat spelling</summary>
                  <p class="font-mono mt-2 text-gray-700">${escapeHtml(phrase.moroccanChat)}</p>
                </details>
              ` : ''}
            </div>
            <div class="lesson-speaking-stack">
              ${nowYouSpeakMarkup(phrase)}
              ${imInMoroccoMarkup(phrase)}
              ${supportCardsMarkup(phrase)}
            </div>
          </div>
        </div>


        ${!compact ? `
          <div class="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button type="button" data-lesson-prev class="w-full sm:w-auto px-6 py-3 text-gray-500 font-bold hover:bg-gray-100 rounded-lg transition" ${phraseIndex <= 0 ? 'disabled aria-disabled="true"' : ''}>Previous</button>
            <span class="text-sm text-gray-400">Phrase ${phraseIndex + 1} / ${total}</span>
            <button type="button" data-lesson-next class="w-full sm:w-auto px-8 py-3 bg-terracotta hover:bg-red-700 text-white font-bold rounded-xl shadow-md transition" ${phraseIndex >= total - 1 ? 'disabled aria-disabled="true"' : ''}>Next Phrase</button>
          </div>
          <div class="mt-5 flex justify-center">
            ${learnedButtonMarkup(lesson, phrase)}
          </div>
          ${lessonCompletionChoiceMarkup(lesson, phraseIndex)}
          ${bonusPhrasesMarkup(lesson, phraseIndex)}
        ` : `
          <div class="mt-8 text-center">
            <a href="${lessonUrl}" class="inline-block bg-terracotta hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold shadow-md transition">Continue This Lesson</a>
          </div>
        `}
      </div>
    `;
  }


  function getSituationPromptLine(phrase) {
    const line = (phrase?.dialogueLines || []).find((item) => !item.isCore);
    if (!line) return null;
    return {
      speaker: line.speaker || 'Moroccan speaker',
      friendlyLatin: line.friendlyLatin || '',
      english: line.english || ''
    };
  }

  function optionPoolForChallenge(lesson, phrase, index) {
    const lessonPhrases = Array.isArray(lesson?.phrases) ? lesson.phrases : [];
    const others = lessonPhrases.filter((item) => item?.id !== phrase?.id);
    const fallback = allPhrasesForOptions().filter((entry) => entry.phrase?.id !== phrase?.id).map((entry) => entry.phrase);
    const source = others.length >= 2 ? others : others.concat(fallback);
    const distractors = source.slice(index, index + 2).concat(source.slice(0, Math.max(0, 2 - source.slice(index, index + 2).length))).slice(0, 2);
    const options = [phrase, ...distractors].filter(Boolean);
    return options
      .map((item) => ({ id: item.id, text: item.friendlyLatin || item.english || '' }))
      .sort((a, b) => String(a.id).localeCompare(String(b.id)));
  }

  function allPhrasesForOptions() {
    return lessons().flatMap((lesson) => (lesson.phrases || []).map((phrase) => ({ lesson, phrase })));
  }

  function situationChallengeCardMarkup(lesson, phrase, index, renderOptions = {}) {
    const promptLine = getSituationPromptLine(phrase);
    const options = optionPoolForChallenge(lesson, phrase, index);
    const visual = phrase.sceneVisual || lesson.phrases?.find((item) => item.sceneVisual)?.sceneVisual || '';
    const visualAlt = phrase.sceneVisualAlt || `${lesson.title || 'Darija30'} situation memory image`;
    const slideClass = renderOptions.slide ? ' situation-card--slide' : '';
    const total = lesson.phrases?.length || 5;
    const displayIndexRaw = Number(renderOptions.displayIndex);
    const displayTotalRaw = Number(renderOptions.displayTotal);
    const displayIndex = Number.isFinite(displayIndexRaw) ? displayIndexRaw : index;
    const displayTotal = Number.isFinite(displayTotalRaw) && displayTotalRaw > 0 ? displayTotalRaw : total;
    const isWeeklyWheel = Boolean(renderOptions.weeklyWheel);
    const next = nextLesson(lesson);
    const bodyMarkup = `
      <div class="situation-card__body${renderOptions.slide ? ' situation-card__body--slide' : ''}">
        <div class="situation-card__meta">
          <span>Situation ${displayIndex + 1} / ${displayTotal}</span>
          <span>${escapeHtml(phrase.goal || phrase.meaning || '')}</span>
        </div>

        <div class="situation-card__prompt">
          ${promptLine ? `
            <p class="situation-card__prompt-label">What you might hear:</p>
            <p class="situation-card__prompt-line" dir="ltr">${escapeHtml(promptLine.friendlyLatin)}</p>
            <p class="situation-card__prompt-meaning">${escapeHtml(promptLine.english)}</p>
          ` : `
            <p class="situation-card__prompt-label">Look at the situation and answer out loud.</p>
            <p class="situation-card__prompt-meaning">${escapeHtml(phrase.scenario || phrase.goal || '')}</p>
          `}
        </div>

        <div class="situation-card__actions">
          <button type="button" class="situation-btn situation-btn--record" data-situation-record>● Record your answer</button>
          <button type="button" class="situation-btn situation-btn--stop" data-situation-stop disabled hidden aria-hidden="true">■ Stop recording</button>
        </div>

        <audio class="situation-card__audio hidden" data-situation-audio controls></audio>
        <p class="situation-card__status" data-situation-status>First try: say the phrase from memory. Your recording stays on this device.</p>
        <p class="situation-card__transcript hidden" data-situation-transcript></p>

        <div class="situation-card__choices hidden" data-situation-choices>
          <p class="situation-card__choice-title">Choose the phrase you remember.</p>
          <div class="situation-card__choice-grid">
            ${options.map((option) => `
              <button type="button" class="situation-choice" data-situation-option="${escapeHtml(option.id)}">${escapeHtml(option.text)}</button>
            `).join('')}
          </div>
        </div>

        <div class="situation-card__return hidden" data-situation-return>
          <p>Not yet. Review this phrase, then try again.</p>
          <button type="button" class="situation-btn situation-btn--ghost situation-btn--icon" data-situation-review-phrase="${index}" aria-label="Review phrase" title="Review phrase">⟲</button>
        </div>

        ${renderOptions.slide && !isWeeklyWheel ? `
          <div class="practice-slide__side-nav" aria-label="Practice navigation">
            <button type="button" class="practice-slide__nav-btn practice-slide__nav-btn--prev" data-situation-practice-prev ${index <= 0 ? 'disabled aria-disabled="true"' : ''} aria-label="Previous situation" title="Previous situation">&lt;</button>
            <button type="button" class="practice-slide__nav-btn practice-slide__nav-btn--next" data-situation-practice-next ${index >= total - 1 ? 'disabled aria-disabled="true"' : ''} aria-label="Next situation" title="Next situation">&gt;</button>
          </div>
          <div class="practice-slide__exit-row">
            <button type="button" class="practice-slide__exit-btn" data-return-to-last-phrase aria-label="Review phrase" title="Review phrase">⟲</button>
            ${next ? `<a class="practice-slide__exit-btn practice-slide__exit-btn--warm" href="${escapeHtml(appLessonHref(next))}" data-start-next-day-lesson="${escapeHtml(next.id || next.day)}" aria-label="Start Day ${escapeHtml(next.day)} lesson" title="Start Day ${escapeHtml(next.day)} lesson">⏭</a>` : `<a class="practice-slide__exit-btn practice-slide__exit-btn--warm" href="#/app/lessons" aria-label="30-day plan" title="30-day plan">⌂</a>`}
          </div>
        ` : ''}
        ${renderOptions.slide && isWeeklyWheel ? `
          <div class="practice-slide__exit-row practice-slide__exit-row--weekly">
            <button type="button" class="practice-slide__exit-btn" data-weekly-back-to-wheel aria-label="Back to wheel" title="Back to wheel">⟲</button>
          </div>
        ` : ''}
      </div>
    `;

    if (renderOptions.slide) {
      return `
        <article class="situation-card${slideClass}" data-situation-card
          data-lesson-id="${escapeHtml(lesson.id)}"
          data-lesson-day="${escapeHtml(lesson.day)}"
          data-phrase-index="${index}"
          data-phrase-id="${escapeHtml(phrase.id)}"
          data-target="${escapeHtml(phrase.friendlyLatin || '')}"
          data-target-chat="${escapeHtml(phrase.moroccanChat || '')}"
          data-target-arabic="${escapeHtml(phrase.arabic || '')}"
          data-attempts="0"
          data-choice-attempts="0"
          data-weekly-wheel-return="${isWeeklyWheel ? '1' : '0'}"
          data-weekly-wheel-entry-id="${escapeHtml(renderOptions.weeklyEntryId || '')}"
          data-weekly-wheel-entry-number="${escapeHtml(renderOptions.weeklyEntryNumber || '')}"
          data-weekly-wheel-level="${escapeHtml(renderOptions.weeklyLevel || lessonLevel(lesson))}">
          <div class="situation-card__visual practice-slide__visual">
            ${visual ? `<img src="${escapeHtml(visual)}" alt="${escapeHtml(visualAlt)}" loading="lazy">` : `<div class="situation-card__placeholder"><span>🇲🇦</span><strong>${escapeHtml(lesson.title || 'Situation')}</strong><small>${escapeHtml(phrase.scenario || phrase.goal || '')}</small></div>`}
            <div class="practice-slide__topbar">
              <div>
                <span class="practice-slide__eyebrow">Do you remember?</span>
                <p class="practice-slide__instruction">You are in Morocco. What do you say?</p>
              </div>
              <div class="practice-slide__counter" aria-label="Situation ${displayIndex + 1} of ${displayTotal}">
                <strong>${displayIndex + 1}</strong><span>/ ${displayTotal}</span>
              </div>
            </div>
            <div class="situation-card__bubble" data-situation-bubble>
              <span class="situation-card__bubble-placeholder">...</span>
            </div>
            ${bodyMarkup}
            <div class="practice-slide__celebration" data-situation-celebration aria-live="polite" aria-hidden="true">
              <strong>Great!</strong>
              <span>You remembered it.</span>
            </div>
            <div class="golden-burst" aria-hidden="true" data-golden-burst></div>
          </div>
        </article>
      `;
    }

    return `
      <article class="situation-card${slideClass}" data-situation-card
        data-lesson-id="${escapeHtml(lesson.id)}"
        data-lesson-day="${escapeHtml(lesson.day)}"
        data-phrase-index="${index}"
        data-phrase-id="${escapeHtml(phrase.id)}"
        data-target="${escapeHtml(phrase.friendlyLatin || '')}"
        data-target-chat="${escapeHtml(phrase.moroccanChat || '')}"
        data-target-arabic="${escapeHtml(phrase.arabic || '')}"
        data-attempts="0"
        data-choice-attempts="0"
        data-weekly-wheel-return="${isWeeklyWheel ? '1' : '0'}"
        data-weekly-wheel-entry-id="${escapeHtml(renderOptions.weeklyEntryId || '')}"
        data-weekly-wheel-entry-number="${escapeHtml(renderOptions.weeklyEntryNumber || '')}">
        <div class="situation-card__visual">
          ${visual ? `<img src="${escapeHtml(visual)}" alt="${escapeHtml(visualAlt)}" loading="lazy">` : `<div class="situation-card__placeholder"><span>🇲🇦</span><strong>${escapeHtml(lesson.title || 'Situation')}</strong><small>${escapeHtml(phrase.scenario || phrase.goal || '')}</small></div>`}
          <div class="situation-card__bubble" data-situation-bubble>
            <span class="situation-card__bubble-placeholder">...</span>
          </div>
          <div class="golden-burst" aria-hidden="true" data-golden-burst></div>
        </div>
        ${bodyMarkup}
      </article>
    `;
  }

  function normalizeSituationSpeech(value) {
    return String(value || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[ًٌٍَُِّْـ]/g, '')
      .replace(/[إأآا]/g, 'ا')
      .replace(/[ة]/g, 'ه')
      .replace(/[ى]/g, 'ي')
      .replace(/[ؤ]/g, 'و')
      .replace(/[ئ]/g, 'ي')
      .replace(/[’'`´-]/g, ' ')
      .replace(/[^a-z0-9\u0600-\u06FF]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function levenshteinDistance(a, b) {
    const left = String(a || '');
    const right = String(b || '');
    const rows = left.length + 1;
    const cols = right.length + 1;
    const dp = Array.from({ length: rows }, () => Array(cols).fill(0));
    for (let i = 0; i < rows; i += 1) dp[i][0] = i;
    for (let j = 0; j < cols; j += 1) dp[0][j] = j;
    for (let i = 1; i < rows; i += 1) {
      for (let j = 1; j < cols; j += 1) {
        const cost = left[i - 1] === right[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + cost
        );
      }
    }
    return dp[left.length][right.length];
  }

  function similarityScore(a, b) {
    const left = normalizeSituationSpeech(a);
    const right = normalizeSituationSpeech(b);
    if (!left || !right) return 0;
    if (left === right) return 1;
    if (left.includes(right) || right.includes(left)) return 0.92;
    const compactLeft = left.replace(/\s+/g, '');
    const compactRight = right.replace(/\s+/g, '');
    const distance = levenshteinDistance(compactLeft, compactRight);
    return 1 - (distance / Math.max(compactLeft.length, compactRight.length, 1));
  }

  function transcriptMatchesPhrase(transcript, card) {
    const targets = [
      card.dataset.target,
      card.dataset.targetChat,
      card.dataset.targetArabic
    ].filter(Boolean);
    const normalizedTranscript = normalizeSituationSpeech(transcript);
    if (!normalizedTranscript) return false;
    return targets.some((target) => {
      const normalizedTarget = normalizeSituationSpeech(target);
      const targetTokens = normalizedTarget.split(' ').filter((token) => token.length > 1);
      const matchedTokens = targetTokens.filter((token) => normalizedTranscript.includes(token)).length;
      const overlap = targetTokens.length ? matchedTokens / targetTokens.length : 0;
      return similarityScore(normalizedTranscript, normalizedTarget) >= 0.58 || overlap >= 0.66;
    });
  }

  function setSituationStatus(card, message, tone = '') {
    const status = card.querySelector('[data-situation-status]');
    if (!status) return;
    status.textContent = message;
    status.classList.remove('is-error', 'is-success', 'is-recording', 'is-warning');
    if (tone) status.classList.add(tone);
  }

  function fillSituationBubble(card, text) {
    const bubble = card.querySelector('[data-situation-bubble]');
    if (!bubble) return;
    bubble.innerHTML = `<span class="situation-card__bubble-text">${escapeHtml(text)}</span>`;
    bubble.classList.add('is-filled');
  }

  function showSituationChoices(card, message = 'Good try. Choose the phrase you remember.', tone = 'is-warning') {
    card.querySelector('[data-situation-choices]')?.classList.remove('hidden');
    setSituationStatus(card, message, tone);
  }

  function isMobileSituationPractice() {
    try {
      return window.matchMedia?.('(max-width: 767px), (pointer: coarse)')?.matches || /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent || '');
    } catch (error) {
      return false;
    }
  }

  function showSituationReturn(card) {
    if (card?.dataset.weeklyWheelReturn === '1') card.dataset.weeklyMissed = '1';
    card.querySelector('[data-situation-return]')?.classList.remove('hidden');
    fillSituationBubble(card, 'Not yet — review this phrase.');
    setSituationStatus(card, 'Not yet. Review this phrase, then try again.', 'is-error');
  }

  function playMemorySuccessSound() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    try {
      const ctx = new AudioContext();
      const master = ctx.createGain();
      master.gain.setValueAtTime(0.001, ctx.currentTime);
      master.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.03);
      master.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.95);
      master.connect(ctx.destination);

      [523.25, 659.25, 783.99].forEach((frequency, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(frequency, ctx.currentTime + index * 0.09);
        gain.gain.setValueAtTime(0.001, ctx.currentTime + index * 0.09);
        gain.gain.exponentialRampToValueAtTime(0.18, ctx.currentTime + index * 0.09 + 0.025);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + index * 0.09 + 0.22);
        osc.connect(gain).connect(master);
        osc.start(ctx.currentTime + index * 0.09);
        osc.stop(ctx.currentTime + index * 0.09 + 0.24);
      });

      for (let i = 0; i < 5; i += 1) {
        const length = Math.max(1, Math.floor(ctx.sampleRate * 0.055));
        const buffer = ctx.createBuffer(1, length, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let j = 0; j < length; j += 1) {
          data[j] = (Math.random() * 2 - 1) * (1 - j / length);
        }
        const noise = ctx.createBufferSource();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();
        noise.buffer = buffer;
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(1200 + Math.random() * 900, ctx.currentTime);
        gain.gain.setValueAtTime(0.035, ctx.currentTime);
        noise.connect(filter).connect(gain).connect(master);
        const start = ctx.currentTime + 0.28 + i * 0.075;
        noise.start(start);
        noise.stop(start + 0.065);
      }

      window.setTimeout(() => {
        try { ctx.close(); } catch (error) { /* Context can already be closed. */ }
      }, 1300);
    } catch (error) {
      // Audio feedback is decorative; keep the test working without it.
    }
  }

  function showMemoryCelebration(card) {
    const celebration = card.querySelector('[data-situation-celebration]');
    if (!celebration) return;
    celebration.classList.add('is-visible');
    celebration.setAttribute('aria-hidden', 'false');
    window.clearTimeout(Number(celebration.dataset.hideTimer || 0));
    const timer = window.setTimeout(() => {
      celebration.classList.remove('is-visible');
      celebration.setAttribute('aria-hidden', 'true');
      celebration.dataset.hideTimer = '';
    }, 2600);
    celebration.dataset.hideTimer = String(timer);
  }

  function launchGoldenBurst(card) {
    const burst = card.querySelector('[data-golden-burst]');
    if (!burst) return;
    burst.innerHTML = '';
    const symbols = ['🎉', '✨', '⭐', '👏', '🏆', '✦'];
    for (let i = 0; i < 44; i += 1) {
      const item = document.createElement('span');
      item.textContent = symbols[i % symbols.length];
      item.style.left = `${6 + Math.random() * 88}%`;
      item.style.animationDelay = `${Math.random() * 0.24}s`;
      item.style.setProperty('--float-x', `${(Math.random() - 0.5) * 190}px`);
      item.style.setProperty('--float-y', `${160 + Math.random() * 160}px`);
      item.style.fontSize = `${1 + Math.random() * 1.2}rem`;
      burst.appendChild(item);
    }
    window.setTimeout(() => { burst.innerHTML = ''; }, 2200);
  }

  function maybeOpenWeeklyPromptAfterDailyCheck(card) {
    if (!card || card.dataset.weeklyWheelReturn === '1') return false;
    const lesson = findLesson(card.dataset.lessonId || '');
    const weeklyPlanKey = weeklyPlanKeyForCheckpointDay(lesson?.day);
    if (!weeklyPlanKey) return false;
    const total = Array.isArray(lesson?.phrases) ? lesson.phrases.length : 0;
    const index = Number(card.dataset.phraseIndex || 0);
    if (!total || index < total - 1) return false;
    window.clearTimeout(Number(card.dataset.weeklyPromptTimer || 0));
    const timer = window.setTimeout(() => {
      setLessonPracticeOpen(lesson, false);
      window.location.hash = `#/app/lesson/${encodeURIComponent(String(lesson.day))}?level=${encodeURIComponent(String(lessonLevel(lesson)))}&weekly=prompt`;
    }, 1900);
    card.dataset.weeklyPromptTimer = String(timer);
    return true;
  }

  function passSituationChallenge(card, assisted = false) {
    fillSituationBubble(card, card.dataset.target || '');
    card.dataset.passed = '1';
    card.querySelector('[data-situation-choices]')?.classList.add('hidden');
    card.querySelectorAll('[data-situation-option]').forEach((button) => { button.disabled = true; });
    const isWeekly = card.dataset.weeklyWheelReturn === '1';
    setSituationStatus(card, assisted ? 'Great! You remembered it.' : 'Great! You remembered it.', 'is-success');
    showMemoryCelebration(card);
    if (!isWeekly) launchGoldenBurst(card);
    playMemorySuccessSound();
    if (isWeekly) {
      const result = recordWeeklyWheelResult(card);
      window.clearTimeout(Number(card.dataset.weeklyReturnTimer || 0));
      const timer = window.setTimeout(() => {
        const planKey = state.weeklyWheel.returnPlanKey || state.weeklyWheel.planKey;
        const weeklyLevel = normalizeWeeklyLevel(card.dataset.weeklyWheelLevel || state.weeklyWheel.level || 1);
        const plan = weeklyWheelPlan(planKey);
        const bank = weeklySituationBank(plan, weeklyLevel);
        const challengeSize = Math.min(Number(state.weeklyWheel.challengeSize || 5), bank.length || 0);
        const score = weeklyWheelScore(planKey, challengeSize, weeklyLevel);
        state.weeklyWheel.mode = score.total >= challengeSize ? 'complete' : 'wheel';
        state.weeklyWheel.isSpinning = false;
        const returnRoot = document.getElementById(state.weeklyWheel.returnRootId || 'weeklyWheelRoot');
        renderWeeklyWheel({
          root: returnRoot || undefined,
          planKey,
          level: weeklyLevel,
          embedded: Boolean(state.weeklyWheel.returnEmbedded)
        });
      }, result?.correct ? 1700 : 1900);
      card.dataset.weeklyReturnTimer = String(timer);
    } else {
      maybeOpenWeeklyPromptAfterDailyCheck(card);
    }
  }

  function lessonCompletionChoiceMarkup(lesson, phraseIndex) {
    const phrases = Array.isArray(lesson?.phrases) ? lesson.phrases : [];
    const isLastPhrase = phrases.length && phraseIndex >= phrases.length - 1;
    if (!lesson || !isLastPhrase || !isLessonPracticeUnlocked(lesson)) return '';
    const next = nextLesson(lesson);
    return `
      <div class="lesson-completion-choice mt-8">
        <div>
          <p class="lesson-completion-choice__eyebrow">Great, you finished today’s phrases</p>
          <h3 class="lesson-completion-choice__title">Do you remember what to say in Morocco?</h3>
          <p class="lesson-completion-choice__copy">Test yourself in the daily big slide-style practice screen. On weekly checkpoint days, the optional weekly wheel appears after the daily check is complete.</p>
        </div>
        <div class="lesson-completion-choice__actions">
          <button type="button" class="lesson-completion-choice__primary" data-open-situation-practice>Do you remember?</button>
          ${next ? `<a class="lesson-completion-choice__secondary" href="${escapeHtml(appLessonHref(next))}">Continue to Day ${escapeHtml(next.day)}</a>` : `<a class="lesson-completion-choice__secondary" href="#/app/lessons">Back to the 30-day plan</a>`}
        </div>
      </div>
    `;
  }

  function renderQuizMarkup(quiz, lesson, phrase) {
    const progressState = Store()?.getState();
    const totalQuestions = quiz.length;
    const savedItems = quiz.map((item) => progressState?.quizAnswers?.[item.id]).filter(Boolean);
    const correctCount = savedItems.filter((item) => item?.isCorrect).length;
    const answeredCount = savedItems.length;
    const isOpen = readQuickCheckOpenState(lesson, phrase);
    const panelId = `quick-check-${escapeHtml(phrase?.id || 'phrase')}`;
    return `
      <div class="quick-check-card mt-8 bg-white border border-gray-100 rounded-2xl">
        <button type="button"
          class="quick-check-toggle"
          data-quick-check-toggle
          data-lesson-id="${escapeHtml(lesson?.id || '')}"
          data-phrase-id="${escapeHtml(phrase?.id || '')}"
          aria-expanded="${isOpen ? 'true' : 'false'}"
          aria-controls="${panelId}">
          <span class="quick-check-toggle__icon" data-quick-check-icon>${isOpen ? '▼' : '▶'}</span>
          <span class="quick-check-toggle__text">
            <span class="quick-check-toggle__title">Quick Check</span>
            <span class="quick-check-toggle__subtitle" data-quick-check-summary>
              ${answeredCount ? `${correctCount} / ${totalQuestions} correct • ${answeredCount} answered` : `${totalQuestions} questions • test yourself in 30 seconds`}
            </span>
          </span>
          <span class="quick-check-toggle__action">${isOpen ? 'Hide' : 'Open'}</span>
        </button>
        <div id="${panelId}" class="quick-check-panel ${isOpen ? '' : 'hidden'}" data-quick-check-panel data-total-questions="${totalQuestions}">
          <p class="text-sm text-gray-500 mb-5">Answer inside the lesson. No separate success page.</p>
          <div class="space-y-5">
            ${quiz.map((item) => {
              const saved = progressState?.quizAnswers?.[item.id];
              return `
                <div class="rounded-xl bg-gray-50 border border-gray-100 p-4" data-quiz-item data-question-id="${escapeHtml(item.id)}" data-answer="${escapeHtml(item.answer)}">
                  <p class="font-bold text-medina mb-3">${escapeHtml(item.question)}</p>
                  <div class="flex flex-wrap gap-2">
                    ${(item.options || []).map((option) => {
                      const selected = saved?.selected === option;
                      const correct = selected && saved?.isCorrect;
                      const wrong = selected && saved && !saved.isCorrect;
                      return `
                        <button type="button" data-quiz-option="${escapeHtml(option)}" class="rounded-lg border bg-white px-4 py-2 text-sm font-bold transition ${correct ? 'border-green-500 bg-green-50 text-green-700' : wrong ? 'border-red-500 bg-red-50 text-red-700' : 'border-gray-200 text-gray-700 hover:border-chefchaouen hover:text-chefchaouen'}">${escapeHtml(option)}</button>
                      `;
                    }).join('')}
                  </div>
                  <p class="mt-3 ${saved ? '' : 'hidden'} text-sm font-bold ${saved?.isCorrect ? 'text-green-700' : 'text-red-700'}" data-quiz-feedback>${saved ? (saved.isCorrect ? 'Correct. Saved to your progress.' : `Not yet. Correct answer: ${escapeHtml(item.answer)}`) : ''}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }



  function bindSituationChallenges(root, lesson, rerender) {
    if (!root) return;
    root.querySelectorAll('[data-situation-card]').forEach((card) => {
      const recordButton = card.querySelector('[data-situation-record]');
      const stopButton = card.querySelector('[data-situation-stop]');
      const audio = card.querySelector('[data-situation-audio]');
      const transcriptBox = card.querySelector('[data-situation-transcript]');
      let mediaRecorder = null;
      let stream = null;
      let chunks = [];
      let audioUrl = '';
      let recognition = null;
      let latestTranscript = '';
      let autoStopTimer = null;
      let silenceMonitorTimer = null;
      let silenceAudioContext = null;
      let silenceAnalyser = null;
      let silenceSource = null;
      let silenceStartedAt = null;
      let recordingStartedAt = 0;

      const cleanupStream = () => {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
          stream = null;
        }
      };

      const cleanupSilenceMonitor = () => {
        if (silenceMonitorTimer) {
          window.clearTimeout(silenceMonitorTimer);
          silenceMonitorTimer = null;
        }
        try {
          if (silenceSource) silenceSource.disconnect();
        } catch (error) {
          // Source can already be disconnected.
        }
        silenceSource = null;
        silenceAnalyser = null;
        silenceStartedAt = null;
        if (silenceAudioContext) {
          try {
            silenceAudioContext.close();
          } catch (error) {
            // Some browsers close the audio context automatically.
          }
          silenceAudioContext = null;
        }
      };

      const startSilenceMonitor = () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext || !stream || !mediaRecorder) return;
        try {
          silenceAudioContext = new AudioContext();
          silenceAnalyser = silenceAudioContext.createAnalyser();
          silenceAnalyser.fftSize = 1024;
          silenceSource = silenceAudioContext.createMediaStreamSource(stream);
          silenceSource.connect(silenceAnalyser);
          const samples = new Uint8Array(silenceAnalyser.fftSize);
          const silenceThreshold = 0.018;
          const silenceDurationMs = 1350;
          const armingDelayMs = 700;

          const checkSilence = () => {
            if (!mediaRecorder || mediaRecorder.state !== 'recording' || !silenceAnalyser) return;
            silenceAnalyser.getByteTimeDomainData(samples);
            let sum = 0;
            for (let i = 0; i < samples.length; i += 1) {
              const centered = (samples[i] - 128) / 128;
              sum += centered * centered;
            }
            const rms = Math.sqrt(sum / samples.length);
            const now = Date.now();
            const armed = now - recordingStartedAt > armingDelayMs;
            if (armed && rms < silenceThreshold) {
              if (!silenceStartedAt) silenceStartedAt = now;
              if (now - silenceStartedAt >= silenceDurationMs) {
                stopEverything();
                return;
              }
            } else {
              silenceStartedAt = null;
            }
            silenceMonitorTimer = window.setTimeout(checkSilence, 140);
          };

          silenceMonitorTimer = window.setTimeout(checkSilence, 320);
        } catch (error) {
          cleanupSilenceMonitor();
        }
      };

      const stopEverything = () => {
        if (autoStopTimer) {
          window.clearTimeout(autoStopTimer);
          autoStopTimer = null;
        }
        cleanupSilenceMonitor();
        try {
          if (recognition) recognition.stop();
        } catch (error) {
          // Speech recognition can already be stopped.
        }
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
        } else {
          cleanupStream();
        }
      };

      const finishAttempt = () => {
        const assisted = card.dataset.assistedChoice === '1';
        if (transcriptBox && latestTranscript) {
          transcriptBox.textContent = `Approximate capture: ${latestTranscript}`;
          transcriptBox.classList.remove('hidden');
        }
        if (assisted) {
          passSituationChallenge(card, true);
          return;
        }
        if (transcriptMatchesPhrase(latestTranscript, card)) {
          passSituationChallenge(card, false);
          return;
        }
        const attempts = Number(card.dataset.attempts || 0) + 1;
        card.dataset.attempts = String(attempts);
        if (isMobileSituationPractice()) {
          showSituationChoices(card, 'Recording saved. Voice check on phones can be limited. Tap the phrase you said to confirm.', '');
          return;
        }
        if (attempts < 2) {
          setSituationStatus(card, 'We did not catch it clearly. Try once more, slowly.', 'is-warning');
        } else {
          showSituationChoices(card);
        }
      };

      const resetAudioUrl = () => {
        if (audioUrl) {
          URL.revokeObjectURL(audioUrl);
          audioUrl = '';
        }
        if (audio) {
          audio.removeAttribute('src');
          audio.load();
          audio.classList.add('hidden');
        }
      };

      recordButton?.addEventListener('click', async () => {
        if (card.dataset.passed === '1') return;
        latestTranscript = '';
        resetAudioUrl();

        const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
          setSituationStatus(card, 'This browser does not support recording. Use the choices to review.', 'is-error');
          showSituationChoices(card);
          return;
        }

        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          mediaRecorder = new MediaRecorder(stream);
          chunks = [];

          mediaRecorder.addEventListener('dataavailable', (event) => {
            if (event.data?.size) chunks.push(event.data);
          });

          mediaRecorder.addEventListener('stop', () => {
            cleanupSilenceMonitor();
            cleanupStream();
            const type = mediaRecorder?.mimeType || 'audio/webm';
            const blob = new Blob(chunks, { type });
            audioUrl = URL.createObjectURL(blob);
            if (audio) {
              audio.src = audioUrl;
              audio.classList.remove('hidden');
            }
            if (recordButton) {
              recordButton.disabled = false;
              recordButton.textContent = '● Record your answer';
              recordButton.classList.remove('is-listening');
            }
            if (stopButton) {
              stopButton.disabled = true;
              stopButton.hidden = true;
              stopButton.setAttribute('aria-hidden', 'true');
            }
            card.classList.remove('is-recording');
            setSituationStatus(card, 'Recording saved. Checking your answer...', 'is-recording');
            window.setTimeout(finishAttempt, 320);
          });

          if (Recognition) {
            recognition = new Recognition();
            recognition.lang = isMobileSituationPractice() ? 'en-US' : 'ar-MA';
            recognition.interimResults = false;
            recognition.maxAlternatives = 3;
            recognition.addEventListener('result', (event) => {
              const transcripts = [];
              for (let i = event.resultIndex; i < event.results.length; i += 1) {
                for (let j = 0; j < event.results[i].length; j += 1) {
                  if (event.results[i][j]?.transcript) transcripts.push(event.results[i][j].transcript);
                }
              }
              latestTranscript = transcripts.join(' ');
            });
            recognition.addEventListener('error', () => {
              latestTranscript = '';
            });
            try {
              recognition.start();
            } catch (error) {
              recognition = null;
            }
          }

          mediaRecorder.start();
          recordingStartedAt = Date.now();
          startSilenceMonitor();
          if (recordButton) {
            recordButton.disabled = true;
            recordButton.textContent = 'Listening...';
            recordButton.classList.add('is-listening');
          }
          if (stopButton) {
            stopButton.disabled = false;
            stopButton.hidden = true;
            stopButton.setAttribute('aria-hidden', 'true');
          }
          card.classList.add('is-recording');
          setSituationStatus(card, Recognition ? 'Listening... speak once, then pause. It stops automatically.' : 'Listening... speak once, then pause. It stops automatically.', 'is-recording');

          autoStopTimer = window.setTimeout(stopEverything, 6500);
        } catch (error) {
          cleanupStream();
          if (recordButton) {
            recordButton.disabled = false;
            recordButton.textContent = '● Record your answer';
            recordButton.classList.remove('is-listening');
          }
          if (stopButton) {
            stopButton.disabled = true;
            stopButton.hidden = true;
            stopButton.setAttribute('aria-hidden', 'true');
          }
          setSituationStatus(card, 'Microphone permission was not granted. Use the choices to review.', 'is-error');
          showSituationChoices(card);
        }
      });

      stopButton?.addEventListener('click', stopEverything);

      card.querySelectorAll('[data-situation-option]').forEach((button) => {
        button.addEventListener('click', () => {
          if (card.dataset.passed === '1') return;
          const ok = button.dataset.situationOption === card.dataset.phraseId;
          card.querySelectorAll('[data-situation-option]').forEach((option) => {
            option.classList.remove('is-correct', 'is-wrong');
          });
          button.classList.add(ok ? 'is-correct' : 'is-wrong');
          if (ok) {
            card.dataset.assistedChoice = '1';
            fillSituationBubble(card, card.dataset.target || '');
            passSituationChallenge(card, true);
            return;
          }
          if (card.dataset.weeklyWheelReturn === '1') card.dataset.weeklyMissed = '1';
          showSituationReturn(card);
        });
      });

      card.querySelector('[data-situation-review-phrase]')?.addEventListener('click', (event) => {
        const index = Number(event.currentTarget.dataset.situationReviewPhrase);
        if (lesson && Number.isFinite(index)) {
          setPhraseIndex(lesson, index);
          rerender?.();
        }
      });
    });
  }

  function bindNowYouSpeakRecorders(root) {
    root.querySelectorAll('[data-now-you-speak]').forEach((card) => {
      const primaryButton = card.querySelector('[data-record-primary]');
      const audio = card.querySelector('[data-record-audio]');
      const status = card.querySelector('[data-record-status]');
      let mediaRecorder = null;
      let stream = null;
      let chunks = [];
      let audioUrl = '';
      let currentState = 'idle';
      let autoStopTimer = null;
      let silenceMonitorTimer = null;
      let silenceStartedAt = null;
      let silenceAudioContext = null;
      let silenceAnalyser = null;
      let silenceSource = null;
      let recordingStartedAt = 0;
      const phraseId = card.dataset.phraseId || '';

      const notifyRecordingReady = () => {
        if (!phraseId || !audioUrl) return;
        userRecordingsByPhraseId[phraseId] = {
          url: audioUrl,
          createdAt: Date.now()
        };
        window.dispatchEvent(new CustomEvent('darija30:recording-ready', {
          detail: { phraseId, audioUrl }
        }));
      };

      const notifyRecordingCleared = () => {
        if (!phraseId) return;
        delete userRecordingsByPhraseId[phraseId];
        window.dispatchEvent(new CustomEvent('darija30:recording-cleared', {
          detail: { phraseId }
        }));
      };

      const setStatus = (message, tone = '') => {
        if (!status) return;
        status.textContent = message;
        status.classList.remove('is-error', 'is-success', 'is-recording');
        if (tone) status.classList.add(tone);
      };

      const setButtonState = (state) => {
        currentState = state;
        if (!primaryButton) return;
        primaryButton.dataset.recordState = state;
        primaryButton.disabled = false;
        primaryButton.classList.remove('is-recording', 'is-ready', 'is-playing', 'is-retry');

        if (state === 'recording') {
          primaryButton.textContent = 'Listening...';
          primaryButton.disabled = true;
          primaryButton.classList.add('is-recording');
          return;
        }

        if (state === 'ready') {
          primaryButton.textContent = '▶ Play my voice';
          primaryButton.classList.add('is-ready');
          return;
        }

        if (state === 'playing') {
          primaryButton.textContent = 'Playing...';
          primaryButton.disabled = true;
          primaryButton.classList.add('is-playing');
          return;
        }

        if (state === 'played') {
          primaryButton.textContent = '↻ Record again';
          primaryButton.classList.add('is-retry');
          return;
        }

        primaryButton.textContent = '● Record yourself';
      };

      const cleanupStream = () => {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
          stream = null;
        }
      };

      const cleanupSilenceMonitor = () => {
        if (autoStopTimer) {
          window.clearTimeout(autoStopTimer);
          autoStopTimer = null;
        }
        if (silenceMonitorTimer) {
          window.clearTimeout(silenceMonitorTimer);
          silenceMonitorTimer = null;
        }
        silenceStartedAt = null;
        if (silenceSource) {
          try { silenceSource.disconnect(); } catch (error) {}
          silenceSource = null;
        }
        silenceAnalyser = null;
        if (silenceAudioContext) {
          try { silenceAudioContext.close(); } catch (error) {}
          silenceAudioContext = null;
        }
      };

      const stopRecording = () => {
        cleanupSilenceMonitor();
        if (mediaRecorder && mediaRecorder.state !== 'inactive') {
          mediaRecorder.stop();
        } else {
          cleanupStream();
        }
      };

      const startSilenceMonitor = () => {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext || !stream || !mediaRecorder) return;
        try {
          silenceAudioContext = new AudioContext();
          silenceAnalyser = silenceAudioContext.createAnalyser();
          silenceAnalyser.fftSize = 1024;
          silenceSource = silenceAudioContext.createMediaStreamSource(stream);
          silenceSource.connect(silenceAnalyser);
          const samples = new Uint8Array(silenceAnalyser.fftSize);
          const silenceThreshold = 0.018;
          const silenceDurationMs = 1250;
          const armingDelayMs = 750;

          const checkSilence = () => {
            if (!mediaRecorder || mediaRecorder.state !== 'recording' || !silenceAnalyser) return;
            silenceAnalyser.getByteTimeDomainData(samples);
            let sum = 0;
            for (let i = 0; i < samples.length; i += 1) {
              const centered = (samples[i] - 128) / 128;
              sum += centered * centered;
            }
            const rms = Math.sqrt(sum / samples.length);
            const now = Date.now();
            const armed = now - recordingStartedAt > armingDelayMs;
            if (armed && rms < silenceThreshold) {
              if (!silenceStartedAt) silenceStartedAt = now;
              if (now - silenceStartedAt >= silenceDurationMs) {
                stopRecording();
                return;
              }
            } else {
              silenceStartedAt = null;
            }
            silenceMonitorTimer = window.setTimeout(checkSilence, 140);
          };

          silenceMonitorTimer = window.setTimeout(checkSilence, 320);
        } catch (error) {
          cleanupSilenceMonitor();
        }
      };

      const resetRecording = () => {
        cleanupSilenceMonitor();
        cleanupStream();
        if (audioUrl) {
          notifyRecordingCleared();
          URL.revokeObjectURL(audioUrl);
          audioUrl = '';
        }
        chunks = [];
        if (audio) {
          audio.pause();
          audio.removeAttribute('src');
          audio.load();
          audio.classList.add('hidden');
        }
        card.classList.remove('is-recording');
        setButtonState('idle');
        setStatus('Your recording stays on this device and is not uploaded.');
      };

      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
        if (primaryButton) primaryButton.disabled = true;
        setStatus('Voice recording is not supported in this browser. You can still practice out loud.', 'is-error');
        return;
      }

      const startRecording = async () => {
        try {
          resetRecording();
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          mediaRecorder = new MediaRecorder(stream);
          chunks = [];

          mediaRecorder.addEventListener('dataavailable', (event) => {
            if (event.data?.size) chunks.push(event.data);
          });

          mediaRecorder.addEventListener('stop', () => {
            cleanupStream();
            const type = mediaRecorder?.mimeType || 'audio/webm';
            const blob = new Blob(chunks, { type });
            audioUrl = URL.createObjectURL(blob);
            if (audio) {
              audio.src = audioUrl;
              audio.classList.add('hidden');
            }
            card.classList.remove('is-recording');
            setButtonState('ready');
            setStatus('Recording ready. Tap the button to hear yourself, then use “I’m in Morocco”.', 'is-success');
            notifyRecordingReady();
          });

          mediaRecorder.start();
          recordingStartedAt = Date.now();
          card.classList.add('is-recording');
          setButtonState('recording');
          setStatus('Listening... say the phrase once, then pause. It stops automatically.', 'is-recording');
          startSilenceMonitor();
          autoStopTimer = window.setTimeout(stopRecording, 6500);
        } catch (error) {
          cleanupSilenceMonitor();
          cleanupStream();
          setButtonState('idle');
          setStatus('Microphone permission was not granted. You can still practice out loud.', 'is-error');
        }
      };

      const playRecording = () => {
        if (!audio?.src) return;
        setButtonState('playing');
        setStatus('Playing your voice. Tap again to record a new try.', 'is-success');
        audio.currentTime = 0;
        audio.play().catch(() => {
          setButtonState('ready');
          setStatus('Could not play the recording. Try recording again.', 'is-error');
        });
      };

      audio?.addEventListener('ended', () => {
        setButtonState('played');
        setStatus('Want another try? Tap Record again. You can also use “I’m in Morocco”.', 'is-success');
      });

      primaryButton?.addEventListener('click', () => {
        if (currentState === 'recording') {
          return;
        }
        if (currentState === 'ready') {
          playRecording();
          return;
        }
        if (currentState === 'playing') {
          return;
        }
        if (currentState === 'played') {
          resetRecording();
          startRecording();
          return;
        }
        startRecording();
      });

      setButtonState('idle');
    });
  }

  function bindImInMoroccoScenes(root) {
    root.querySelectorAll('[data-im-morocco]').forEach((card) => {
      const phraseId = card.dataset.phraseId || '';
      const video = card.querySelector('[data-im-morocco-video]');
      const playButton = card.querySelector('[data-im-morocco-play]');
      const status = card.querySelector('[data-im-morocco-status]');
      const overlay = card.querySelector('[data-im-morocco-overlay]');
      let learnerAudio = null;
      let voiceTimer = null;

      const recordingForCard = () => userRecordingsByPhraseId[phraseId] || null;

      const setReadyState = () => {
        const hasRecording = Boolean(recordingForCard()?.url);
        card.classList.toggle('is-ready', hasRecording);
        if (playButton) {
          playButton.disabled = !hasRecording;
          playButton.textContent = hasRecording ? '▶ Play with my voice' : '▶ Play with my voice';
        }
        if (overlay) {
          overlay.textContent = hasRecording ? 'Ready for your voice' : 'Record your voice first';
        }
        if (status) {
          status.textContent = hasRecording
            ? 'Ready. Play the Moroccan scene with your voice.'
            : 'Record your voice first. Then enter the scene.';
        }
      };

      const stopScene = () => {
        if (voiceTimer) {
          window.clearTimeout(voiceTimer);
          voiceTimer = null;
        }
        if (learnerAudio) {
          learnerAudio.pause();
          learnerAudio.currentTime = 0;
          learnerAudio = null;
        }
        if (video) {
          video.pause();
        }
        if (playButton) {
          playButton.disabled = !recordingForCard()?.url;
          playButton.textContent = '▶ Play with my voice';
        }
        card.classList.remove('is-playing');
        setReadyState();
      };

      const playSceneWithVoice = async () => {
        const recording = recordingForCard();
        if (!recording?.url || !video || !playButton) {
          setReadyState();
          return;
        }

        stopScene();
        learnerAudio = new Audio(recording.url);
        learnerAudio.preload = 'auto';
        learnerAudio.volume = 1;

        video.pause();
        video.currentTime = 0;
        video.muted = true;
        card.classList.add('is-playing');
        playButton.disabled = true;
        playButton.textContent = 'Playing...';
        if (overlay) overlay.textContent = 'You are the traveler';
        if (status) status.textContent = 'Playing the scene. The original video sound is muted so your voice stays clear.';

        const finish = () => {
          if (voiceTimer) {
            window.clearTimeout(voiceTimer);
            voiceTimer = null;
          }
          if (learnerAudio) {
            learnerAudio.pause();
            learnerAudio.currentTime = 0;
          }
          card.classList.remove('is-playing');
          setReadyState();
        };

        learnerAudio.addEventListener('ended', () => {
          if (status && !video.ended) status.textContent = 'Your voice finished. The scene is still playing.';
        }, { once: true });
        video.addEventListener('ended', finish, { once: true });

        try {
          await video.play();
          voiceTimer = window.setTimeout(() => {
            learnerAudio?.play?.().catch(() => {
              if (status) status.textContent = 'The scene played, but your browser blocked the voice playback. Tap again.';
              finish();
            });
          }, 650);
        } catch (error) {
          if (status) status.textContent = 'Could not play the scene. Try again.';
          finish();
        }
      };

      playButton?.addEventListener('click', playSceneWithVoice);
      window.addEventListener('darija30:recording-ready', (event) => {
        if (event.detail?.phraseId === phraseId) setReadyState();
      });
      window.addEventListener('darija30:recording-cleared', (event) => {
        if (event.detail?.phraseId === phraseId) stopScene();
      });
      video?.addEventListener('pause', () => {
        if (card.classList.contains('is-playing') && !video.ended) {
          if (learnerAudio) learnerAudio.pause();
        }
      });

      setReadyState();
    });
  }

  function bindSharedControls(root, lesson, rerender) {
    if (!root) return;
    window.DarijaAudio?.bindAudioButtons(root);
    bindNowYouSpeakRecorders(root);
    bindImInMoroccoScenes(root);
    bindSituationChallenges(root, lesson, rerender);

    root.querySelectorAll('[data-favorite-phrase-id]').forEach((button) => {
      button.addEventListener('click', () => {
        Store()?.toggleFavorite(button.dataset.favoritePhraseId, button.dataset.lessonId);
        rerender?.();
      });
    });

    root.querySelectorAll('[data-mark-learned]').forEach((button) => {
      button.addEventListener('click', () => {
        Store()?.markPhraseLearned(button.dataset.phraseId, button.dataset.lessonId);
        rerender?.();
      });
    });


    root.querySelectorAll('[data-quick-check-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const card = button.closest('.quick-check-card');
        const panel = card?.querySelector('[data-quick-check-panel]');
        const icon = card?.querySelector('[data-quick-check-icon]');
        const action = card?.querySelector('.quick-check-toggle__action');
        const nextOpen = panel?.classList.contains('hidden');
        panel?.classList.toggle('hidden', !nextOpen);
        button.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
        if (icon) icon.textContent = nextOpen ? '▼' : '▶';
        if (action) action.textContent = nextOpen ? 'Hide' : 'Open';
        const lessonObj = { id: button.dataset.lessonId };
        const phraseObj = { id: button.dataset.phraseId };
        writeQuickCheckOpenState(lessonObj, phraseObj, nextOpen);
      });
    });

    root.querySelectorAll('[data-quiz-option]').forEach((button) => {
      button.addEventListener('click', () => {
        const item = button.closest('[data-quiz-item]');
        const feedback = item?.querySelector('[data-quiz-feedback]');
        const answer = item?.dataset.answer;
        const selected = button.dataset.quizOption;
        const ok = selected === answer;
        Store()?.saveQuizAnswer(item?.dataset.questionId, selected, ok);
        item.querySelectorAll('[data-quiz-option]').forEach((optionButton) => {
          optionButton.classList.remove('border-green-500', 'bg-green-50', 'text-green-700', 'border-red-500', 'bg-red-50', 'text-red-700');
          optionButton.classList.add('border-gray-200', 'text-gray-700');
        });
        button.classList.remove('border-gray-200', 'text-gray-700');
        button.classList.add(ok ? 'border-green-500' : 'border-red-500', ok ? 'bg-green-50' : 'bg-red-50', ok ? 'text-green-700' : 'text-red-700');
        if (feedback) {
          feedback.classList.remove('hidden', 'text-green-700', 'text-red-700');
          feedback.classList.add(ok ? 'text-green-700' : 'text-red-700');
          feedback.textContent = ok ? 'Correct. Saved to your progress.' : `Not yet. Correct answer: ${answer}`;
        }
        const card = button.closest('.quick-check-card');
        const summary = card?.querySelector('[data-quick-check-summary]');
        const total = Number(card?.querySelector('[data-quick-check-panel]')?.dataset.totalQuestions || 0);
        const saved = Store()?.getState()?.quizAnswers || {};
        const items = Array.from(card?.querySelectorAll('[data-quiz-item]') || []);
        const answered = items.filter((quizItem) => Boolean(saved[quizItem.dataset.questionId])).length;
        const correct = items.filter((quizItem) => Boolean(saved[quizItem.dataset.questionId]?.isCorrect)).length;
        if (summary) {
          summary.textContent = `${correct} / ${total} correct • ${answered} answered`;
        }
      });
    });
  }

  function bindLessonControls(root, lesson) {
    if (!root || !lesson) return;
    const rerender = () => renderAppLesson(lesson.id);
    bindSharedControls(root, lesson, rerender);

    root.querySelector('[data-lesson-prev]')?.addEventListener('click', () => {
      setPhraseIndex(lesson, currentPhraseIndex(lesson) - 1);
      rerender();
    });
    root.querySelector('[data-lesson-next]')?.addEventListener('click', () => {
      setPhraseIndex(lesson, currentPhraseIndex(lesson) + 1);
      rerender();
    });
    root.querySelectorAll('[data-phrase-jump]').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.phraseJump);
        if (Number.isFinite(index)) {
          setPhraseIndex(lesson, index);
          rerender();
        }
      });
    });

    root.querySelectorAll('[data-open-situation-practice]').forEach((button) => {
      button.addEventListener('click', () => {
        if (!isLessonPracticeUnlocked(lesson)) return;
        setLessonPracticeOpen(lesson, true);
        setSituationIndex(lesson, currentSituationIndex(lesson));
        rerender();
      });
    });

    root.querySelector('[data-return-to-last-phrase]')?.addEventListener('click', () => {
      setPhraseIndex(lesson, Math.max((lesson.phrases || []).length - 1, 0));
      rerender();
    });

    root.querySelector('[data-situation-practice-prev]')?.addEventListener('click', () => {
      setSituationIndex(lesson, currentSituationIndex(lesson) - 1);
      setLessonPracticeOpen(lesson, true);
      rerender();
    });

    root.querySelector('[data-situation-practice-next]')?.addEventListener('click', () => {
      setSituationIndex(lesson, currentSituationIndex(lesson) + 1);
      setLessonPracticeOpen(lesson, true);
      rerender();
    });

    root.querySelectorAll('[data-situation-practice-jump]').forEach((button) => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.situationPracticeJump);
        if (Number.isFinite(index)) {
          setSituationIndex(lesson, index);
          setLessonPracticeOpen(lesson, true);
          rerender();
        }
      });
    });

    root.querySelectorAll('[data-start-next-day-lesson]').forEach((link) => {
      link.addEventListener('click', () => {
        const next = nextLesson(lesson);
        setLessonPracticeOpen(lesson, false);
        if (next) {
          setPhraseIndex(next, 0);
          setLessonPracticeOpen(next, false);
          setSituationIndex(next, 0);
        }
      });
    });
  }

  function lessonPracticePageMarkup(lesson) {
    const phrases = Array.isArray(lesson?.phrases) ? lesson.phrases : [];
    const index = currentSituationIndex(lesson);
    const phrase = phrases[index] || phrases[0];
    return `
      <div class="lesson-player-shell lesson-practice-shell lesson-practice-shell--fullscreen">
        <section class="practice-stage practice-stage--fullscreen">
          ${phrase ? situationChallengeCardMarkup(lesson, phrase, index, { slide: true }) : ''}
        </section>
      </div>
    `;
  }

  function renderFreeLesson() {
    const root = document.getElementById('freeLessonRoot');
    if (!root) return;
    const current = findLesson(state.freeLessonId);
    const phrase = firstPhrase(current);
    root.innerHTML = `
      <div class="text-center mb-8">
        <span class="inline-block bg-blue-50 text-chefchaouen px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-4">FREE LESSON • SCENARIO-FIRST</span>
        <h2 class="text-3xl md:text-4xl font-bold mb-2">${escapeHtml(current?.title || 'Free Lesson')}</h2>
        <p class="text-gray-500 max-w-2xl mx-auto">${escapeHtml(current?.situation || '')}</p>
      </div>
      ${phraseExperienceMarkup(current, phrase, 0, { compact: true })}
      <div class="mt-10 text-center">
        <p class="text-xl font-bold mb-4">This is the Darija30 method: simple, audio-first, scenario-based, culture-aware.</p>
        <div class="flex flex-wrap justify-center gap-3 mb-6">
          ${lessons().filter((lesson) => lesson.isFree).map((lesson) => `
            <button type="button" data-free-lesson-id="${escapeHtml(lesson.id)}" class="rounded-full border px-4 py-2 text-sm font-bold transition ${lesson.id === current?.id ? 'border-chefchaouen bg-blue-50 text-chefchaouen' : 'border-gray-200 bg-white text-gray-600 hover:border-chefchaouen hover:text-chefchaouen'}">
              Day ${escapeHtml(lesson.day)}: ${escapeHtml(lesson.title)}
            </button>
          `).join('')}
        </div>
        <a href="#/pricing" class="inline-block bg-terracotta hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold shadow-md transition">Unlock the 30-Day Starter Pack</a>
      </div>
    `;

    root.querySelectorAll('[data-free-lesson-id]').forEach((button) => {
      button.addEventListener('click', () => {
        state.freeLessonId = button.dataset.freeLessonId;
        renderFreeLesson();
      });
    });
    bindSharedControls(root, current, renderFreeLesson);
  }

  function statusBadge(lesson) {
    const progress = Store()?.lessonProgress(lesson);
    const level = lessonLevel(lesson);
    const access = window.DarijaLevelAccess;
    const visibility = access?.getVisibility?.(level) || (level === 1 ? 'public' : 'admin');
    if (isLevel2BridgeLesson(lesson)) return '<span class="text-sm text-green-700 font-bold">🎁 Free bridge</span>';
    if (level > 1 && visibility === 'collaborators') return '<span class="text-sm text-blue-700 font-bold">🤝 Collaborators</span>';
    if (level > 1 && visibility === 'admin') return '<span class="text-sm text-gray-500 font-bold">🔒 Admin only</span>';
    if (isLearnerLockedLesson(lesson) && isAdminActive()) return '<span class="text-sm text-blue-700 font-bold">🔓 Admin • 🔒 learner</span>';
    if (isLearnerLockedLesson(lesson)) return '<span class="text-sm text-terracotta font-bold">🔒 Preview</span>';
    if (progress?.complete) return '<span class="text-green-600 font-bold">Done ✓</span>';
    if (progress?.started) return `<span class="text-chefchaouen font-bold">${progress.percent}%</span>`;
    return `<span class="text-sm ${lesson.isFree ? 'text-green-600 font-bold' : 'text-gray-400'}">${lesson.isFree ? 'Free' : 'Open'}</span>`;
  }



  function weeklyWheelPlans() {
    return [
      {
        key: 'week1',
        label: 'Week 1',
        title: 'Weekly Wheel 1',
        days: 'Days 1–7',
        checkpointDay: 7,
        endDay: 7,
        bankSize: 35,
        challengeSizes: [5, 10, 15, 20, 35],
        description: 'Taxi, café, market, greetings, polite requests, introduction, and misunderstanding survival.'
      },
      {
        key: 'week2',
        label: 'Week 2',
        title: 'Weekly Wheel 2',
        days: 'Days 1–14',
        checkpointDay: 14,
        endDay: 14,
        bankSize: 70,
        challengeSizes: [5, 10, 15, 20, 35],
        description: 'A cumulative wheel: Week 2 situations plus a light review of Week 1.'
      },
      {
        key: 'week3',
        label: 'Week 3',
        title: 'Weekly Wheel 3',
        days: 'Days 1–21',
        checkpointDay: 21,
        endDay: 21,
        bankSize: 105,
        challengeSizes: [5, 10, 15, 20, 35],
        description: 'A bigger travel survival mix from the first three weeks.'
      },
      {
        key: 'week4',
        label: 'Week 4',
        title: 'Weekly Wheel 4',
        days: 'Days 1–28',
        checkpointDay: 28,
        endDay: 28,
        bankSize: 140,
        challengeSizes: [5, 10, 15, 20, 35],
        description: 'The full four-week wheel before the two final survival days.'
      },
      {
        key: 'final',
        label: 'Final',
        title: 'Final Survival Wheel',
        days: 'Days 1–30',
        checkpointDay: 30,
        endDay: 30,
        bankSize: 150,
        challengeSizes: [5, 10, 15, 20, 35],
        description: 'Day 29 is mixed real Morocco practice. Day 30 is the final survival challenge.'
      }
    ];
  }

  function weeklyWheelPlan(key) {
    const plans = weeklyWheelPlans();
    return plans.find((plan) => plan.key === key) || plans[0];
  }

  function weeklyPlanKeyForCheckpointDay(day) {
    const value = Number(day);
    if (value === 7) return 'week1';
    if (value === 14) return 'week2';
    if (value === 21) return 'week3';
    if (value === 28) return 'week4';
    return '';
  }

  function weeklyPlanCheckpointHref(plan, mode = 'prompt', level = 1) {
    const checkpointDay = Number(plan?.checkpointDay || plan?.endDay || 7);
    const safeMode = mode === 'wheel' ? '1' : 'prompt';
    const safeLevel = normalizeWeeklyLevel(level);
    return `#/app/lesson/${encodeURIComponent(String(checkpointDay))}?level=${encodeURIComponent(String(safeLevel))}&weekly=${safeMode}`;
  }

  function weeklyPlanDirectWheelHref(plan, level = 1) {
    const safeLevel = normalizeWeeklyLevel(level);
    return `#/app/weekly-wheel?level=${encodeURIComponent(String(safeLevel))}&week=${encodeURIComponent(String(plan?.key || 'week1'))}`;
  }

  function weeklyPlanCheckpointSummary(plan) {
    const bankSize = Number(plan?.bankSize || 0);
    const checkpointDay = Number(plan?.checkpointDay || plan?.endDay || 0);
    return `Day ${checkpointDay} • ${bankSize} situations`;
  }

  function levelOneWeeklyCheckpointPlans() {
    return weeklyWheelPlans().filter((plan) => ['week1', 'week2', 'week3', 'week4'].includes(plan.key));
  }


  function weeklyPromptNextLessonHref(lesson) {
    const next = nextLesson(lesson);
    return next ? appLessonHref(next) : appLessonsHref(lessonLevel(lesson));
  }

  function weeklyWheelPromptMarkup(lesson, planKey) {
    const plan = weeklyWheelPlan(planKey);
    const promptLevel = normalizeWeeklyLevel(lessonLevel(lesson));
    const bank = weeklySituationBank(plan, promptLevel);
    const promptEntries = weeklyRequiresSourceSpin(plan) ? weeklyMemorySourceEntries(plan) : bank;
    const promptNumberEntries = weeklyRequiresSourceSpin(plan) ? weeklySourcePhaseNumberBank(plan, promptLevel) : bank;
    const promptCenterBrandColor = weeklyRequiresSourceSpin(plan) ? '#111827' : weeklySourceColor(1);
    const nextHref = weeklyPromptNextLessonHref(lesson);
    const next = nextLesson(lesson);
    const nextLabel = next ? `Skip to Day ${escapeHtml(next.day)}` : 'Skip for now';
    const activeTheme = normalizeWeeklyWheelTheme(state.weeklyWheel.theme);
    const challengeSize = Math.min(Number(state.weeklyWheel.challengeSize || 5), bank.length || 0);
    return `
      <div class="weekly-wheel-page weekly-wheel-page--spin weekly-wheel-page--embedded weekly-wheel-page--fullscreen-wheel weekly-wheel-page--prompt-overlay" data-weekly-theme="${escapeHtml(activeTheme)}" aria-label="Optional weekly review prompt">
        <section class="weekly-wheel-game-card weekly-wheel-game-card--visual weekly-wheel-game-card--fullscreen weekly-wheel-game-card--prompt" aria-live="polite">
          ${weeklyWheelThemePicker()}
          ${weeklyWheelMemoryBackground(bank, null)}

          <div class="weekly-wheel-fullscreen-size-rail weekly-wheel-fullscreen-size-rail--behind" aria-label="Challenge sizes preview">
            ${(plan.challengeSizes || [5]).filter((size) => size <= Math.max(bank.length, 1)).map((size) => `
              <span class="weekly-wheel-size weekly-wheel-size--circle ${Number(size) === challengeSize ? 'is-active' : ''}" data-weekly-size-tip="${escapeHtml(weeklyChallengeSizeTooltip(size, bank.length))}" aria-hidden="true">${escapeHtml(size >= bank.length ? bank.length : size)}</span>
            `).join('')}
          </div>

          <div class="weekly-wheel-fullscreen-round" aria-live="polite">
            <span>${escapeHtml(plan.label)}</span>
            <strong>0 / ${escapeHtml(String(challengeSize || bank.length || 0))}</strong>
          </div>

          <div class="weekly-wheel-big-stage weekly-wheel-big-stage--memory weekly-wheel-big-stage--fullscreen weekly-wheel-big-stage--prompt ${weeklyRequiresSourceSpin(plan) ? 'weekly-wheel-big-stage--source-wheel' : ''}" data-two-step-phase="${weeklyRequiresSourceSpin(plan) ? 'source' : 'situation'}" aria-hidden="true" style="--wheel-start-rotation:0deg; --wheel-rotation:0deg; --wheel-spin-duration:4200ms; --wheel-slices:${escapeHtml(promptEntries.length || 1)}; --source-gradient:${weeklyRequiresSourceSpin(plan) ? weeklySourceWheelGradient(promptEntries) : 'none'}; --situation-color:${weeklySourceColor(1)}; --center-brand-color:${escapeHtml(promptCenterBrandColor)};">
            ${weeklyRequiresSourceSpin(plan) ? '' : weeklyWheelMemoryCards(bank, null)}
            <div class="weekly-wheel-pointer weekly-wheel-pointer--large weekly-wheel-pointer--fullscreen" aria-hidden="true"></div>
            <div class="weekly-wheel-number-ring" aria-hidden="true">
              ${weeklyWheelNumberMarks(promptNumberEntries, null, '')}
            </div>
            <div class="weekly-wheel-disc weekly-wheel-disc--large weekly-wheel-disc--fullscreen ${weeklyRequiresSourceSpin(plan) ? 'weekly-wheel-disc--source-week-wheel' : ''}">
              <div class="weekly-wheel-disc__inner weekly-wheel-disc__inner--large weekly-wheel-disc__inner--fullscreen" aria-hidden="true" data-wheel-state="brand"><span class="weekly-wheel-center-brand">darija30</span></div>
            </div>
          </div>

          <div class="weekly-prompt-overlay" role="dialog" aria-modal="false" aria-label="Weekly review is ready">
            <span class="weekly-prompt-overlay__eyebrow">Optional weekly review</span>
            <h1>Weekly Review is ready</h1>
            <p>You finished today’s daily check. You can now play the ${escapeHtml(plan.label)} Situation Wheel, or skip and continue to the next lesson.</p>
            <div class="weekly-prompt-overlay__stats" aria-label="Wheel bank size">
              <span>${escapeHtml(plan.label)}</span>
              <strong>${escapeHtml(String(bank.length))} situations</strong>
            </div>
            <div class="weekly-prompt-overlay__actions">
              <button type="button" class="weekly-prompt-overlay__primary" data-start-weekly-wheel>Start Weekly Wheel</button>
              <a class="weekly-prompt-overlay__secondary" href="${escapeHtml(nextHref)}">${nextLabel}</a>
            </div>
          </div>
        </section>
      </div>
    `;
  }

  function getWeeklyWheelRoutePlanKey(path) {
    const params = getRouteParams(path || window.location.hash.replace(/^#/, ''));
    const raw = params.get('week') || params.get('plan') || params.get('wheel') || '';
    return weeklyWheelPlans().some((plan) => plan.key === raw) ? raw : state.weeklyWheel.planKey;
  }

  function normalizeWeeklyLevel(value) {
    const parsed = Number(value);
    const clean = window.DarijaLevelAccess?.normalizeLevel?.(parsed) || Math.max(1, Math.round(parsed || 1));
    return Math.min(Math.max(clean, 1), 12);
  }

  function getWeeklyWheelRouteLevel(path, fallback = state.weeklyWheel.level || 1) {
    const params = getRouteParams(path || window.location.hash.replace(/^#/, ''));
    const raw = params.get('level') || params.get('lvl') || '';
    return normalizeWeeklyLevel(raw || fallback || 1);
  }

  function weeklyScopedKey(planKey, level = state.weeklyWheel.level || 1) {
    return `level${normalizeWeeklyLevel(level)}:${String(planKey || 'week1')}`;
  }

  function weeklySituationBank(plan, level = state.weeklyWheel.level || 1) {
    const selectedLevel = normalizeWeeklyLevel(level);
    let number = 0;
    return lessons()
      .filter((lesson) => lessonLevel(lesson) === selectedLevel)
      .filter((lesson) => Number(lesson.day) >= 1 && Number(lesson.day) <= Number(plan.endDay))
      .flatMap((lesson) => (lesson.phrases || []).map((phrase, phraseIndex) => {
        number += 1;
        return {
          id: `L${selectedLevel}:${lesson.id || lesson.day}:${phrase.id || phraseIndex}`,
          number,
          level: selectedLevel,
          lesson,
          phrase,
          phraseIndex
        };
      }));
  }

  function weeklySourceColor(weekNumber) {
    const colors = {
      1: '#f97316',
      2: '#22c55e',
      3: '#facc15',
      4: '#111827'
    };
    return colors[Number(weekNumber)] || '#2980b9';
  }

  function weeklySourceWheelGradient(entries) {
    const sourceEntries = Array.isArray(entries) ? entries : [];
    const count = Math.max(sourceEntries.length, 1);
    const step = 360 / count;
    const stops = sourceEntries.map((entry, index) => {
      const start = (index * step).toFixed(4);
      const end = ((index + 1) * step).toFixed(4);
      const color = weeklySourceColor(entry?.number);
      return `${color} ${start}deg ${end}deg`;
    }).join(', ');
    return `conic-gradient(from -90deg, ${stops})`;
  }

  function weeklyMemorySourceEntries(plan) {
    const endDay = Number(plan?.endDay || 7);
    const maxWeek = Math.min(Math.max(Math.ceil(endDay / 7), 1), 4);
    return Array.from({ length: maxWeek }, (_, index) => {
      const weekNumber = index + 1;
      const startDay = (weekNumber - 1) * 7 + 1;
      const end = Math.min(weekNumber * 7, endDay);
      return {
        key: `source-week${weekNumber}`,
        number: weekNumber,
        label: `Week ${weekNumber} Memory`,
        shortLabel: `Week ${weekNumber}`,
        startDay,
        endDay: end,
        color: weeklySourceColor(weekNumber),
        isSource: true
      };
    });
  }

  function weeklyRequiresSourceSpin(plan) {
    return weeklyMemorySourceEntries(plan).length > 1 && String(plan?.key || '') !== 'week1';
  }

  function weeklySourceEntryForKey(plan, key) {
    const entries = weeklyMemorySourceEntries(plan);
    return entries.find((entry) => entry.key === key) || entries[0] || null;
  }

  function weeklySourceSituationBank(plan, sourceKey, level = state.weeklyWheel.level || 1) {
    const source = weeklySourceEntryForKey(plan, sourceKey);
    if (!source) return weeklySituationBank(plan, level);
    return weeklySituationBank(plan, level)
      .filter((entry) => {
        const day = Number(entry?.lesson?.day || 0);
        return day >= Number(source.startDay) && day <= Number(source.endDay);
      })
      .map((entry, index) => ({
        ...entry,
        globalNumber: entry.number,
        number: index + 1,
        sourceWeekNumber: source.number,
        sourceWeekKey: source.key
      }));
  }

  function weeklySourcePhaseNumberBank(plan, level = state.weeklyWheel.level || 1) {
    const firstSource = weeklySourceEntryForKey(plan, 'source-week1');
    const firstWeekBank = firstSource ? weeklySourceSituationBank(plan, firstSource.key, level) : [];
    return firstWeekBank.length ? firstWeekBank : weeklySituationBank(plan, level).slice(0, 35).map((entry, index) => ({ ...entry, number: index + 1 }));
  }

  function weeklySituationWheelColor(plan, selectedSource) {
    const source = selectedSource || weeklySourceEntryForKey(plan, state.weeklyWheel.memorySourceKey || 'source-week1');
    return weeklySourceColor(source?.number || 1);
  }

  function weeklyActiveSituationBank(plan, level = state.weeklyWheel.level || 1) {
    if (!weeklyRequiresSourceSpin(plan)) return weeklySituationBank(plan, level);
    if (!state.weeklyWheel.memorySourceKey) return weeklySituationBank(plan, level);
    return weeklySourceSituationBank(plan, state.weeklyWheel.memorySourceKey, level);
  }

  function weeklyIsSourcePhase(plan) {
    return weeklyRequiresSourceSpin(plan) && state.weeklyWheel.memoryStep !== 'situation';
  }

  function weeklyTwoStepStatusMarkup(plan, isSourcePhase, selectedSource) {
    return '';
  }

  function readWeeklyUsedIds(planKey, level = state.weeklyWheel.level || 1) {
    const used = state.weeklyWheel.usedIdsByPlan[weeklyScopedKey(planKey, level)];
    return Array.isArray(used) ? used : [];
  }

  function setWeeklyUsedIds(planKey, usedIds, level = state.weeklyWheel.level || 1) {
    state.weeklyWheel.usedIdsByPlan[weeklyScopedKey(planKey, level)] = Array.isArray(usedIds) ? usedIds : [];
  }

  function readWeeklyResults(planKey, level = state.weeklyWheel.level || 1) {
    const results = state.weeklyWheel.resultsByPlan[weeklyScopedKey(planKey, level)];
    return Array.isArray(results) ? results : [];
  }

  function setWeeklyResults(planKey, results, level = state.weeklyWheel.level || 1) {
    state.weeklyWheel.resultsByPlan[weeklyScopedKey(planKey, level)] = Array.isArray(results) ? results : [];
  }

  function recordWeeklyWheelResult(card) {
    if (!card || card.dataset.weeklyWheelReturn !== '1') return null;
    const planKey = state.weeklyWheel.returnPlanKey || state.weeklyWheel.planKey;
    const level = normalizeWeeklyLevel(card.dataset.weeklyWheelLevel || state.weeklyWheel.level || 1);
    const entryId = card.dataset.weeklyWheelEntryId || state.weeklyWheel.currentId || '';
    if (!entryId) return null;
    const correct = card.dataset.weeklyMissed !== '1';
    const entryNumber = Number(card.dataset.weeklyWheelEntryNumber || 0);
    const results = readWeeklyResults(planKey, level).filter((item) => item && item.id !== entryId);
    results.push({ id: entryId, correct, number: entryNumber, level, at: Date.now() });
    setWeeklyResults(planKey, results, level);
    if (weeklyRequiresSourceSpin(weeklyWheelPlan(planKey))) {
      state.weeklyWheel.memoryStep = 'source';
      state.weeklyWheel.memorySourceKey = '';
      state.weeklyWheel.currentSourceKey = '';
    }
    return { entryId, correct, results };
  }

  function weeklyWheelScore(planKey, challengeSize, level = state.weeklyWheel.level || 1) {
    const results = readWeeklyResults(planKey, level).slice(0, Math.max(Number(challengeSize) || 0, 0));
    const total = results.length;
    const correct = results.filter((item) => item?.correct).length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    return { total, correct, percent, passed: percent >= 70 };
  }

  function weeklyConfettiMarkup(count = 34) {
    return `<div class="weekly-wheel-confetti" aria-hidden="true">${Array.from({ length: count }, (_, index) => `<i style="--confetti-x:${Math.round((Math.random() * 2 - 1) * 220)}px; --confetti-delay:${(Math.random() * 0.36).toFixed(2)}s; --confetti-rot:${Math.round(Math.random() * 540)}deg;"></i>`).join('')}</div>`;
  }

  function setWeeklyWheelPlan(planKey, level = state.weeklyWheel.level || 1) {
    const nextLevel = normalizeWeeklyLevel(level);
    const plan = weeklyWheelPlan(planKey);
    window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));
    window.clearTimeout(Number(state.weeklyWheel.resultTimer || 0));
    state.weeklyWheel.planKey = plan.key;
    state.weeklyWheel.level = nextLevel;
    const sizes = plan.challengeSizes || [5];
    if (!sizes.includes(state.weeklyWheel.challengeSize)) state.weeklyWheel.challengeSize = sizes[0];
    state.weeklyWheel.currentId = '';
    state.weeklyWheel.memoryStep = weeklyRequiresSourceSpin(plan) ? 'source' : 'situation';
    state.weeklyWheel.memorySourceKey = '';
    state.weeklyWheel.currentSourceKey = '';
    state.weeklyWheel.mode = 'wheel';
    state.weeklyWheel.isSpinning = false;
  }

  function setWeeklyWheelChallengeSize(size) {
    const plan = weeklyWheelPlan(state.weeklyWheel.planKey);
    const parsed = Number(size);
    const valid = (plan.challengeSizes || [5]).includes(parsed) ? parsed : (plan.challengeSizes || [5])[0];
    window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));
    window.clearTimeout(Number(state.weeklyWheel.resultTimer || 0));
    state.weeklyWheel.challengeSize = valid;
    state.weeklyWheel.currentId = '';
    state.weeklyWheel.memoryStep = weeklyRequiresSourceSpin(plan) ? 'source' : 'situation';
    state.weeklyWheel.memorySourceKey = '';
    state.weeklyWheel.currentSourceKey = '';
    state.weeklyWheel.mode = 'wheel';
    state.weeklyWheel.isSpinning = false;
    setWeeklyUsedIds(plan.key, [], state.weeklyWheel.level);
    setWeeklyResults(plan.key, [], state.weeklyWheel.level);
  }

  function resetWeeklyWheelGame(planKey = state.weeklyWheel.planKey, level = state.weeklyWheel.level || 1) {
    const plan = weeklyWheelPlan(planKey);
    const scopedLevel = normalizeWeeklyLevel(level);
    window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));
    window.clearTimeout(Number(state.weeklyWheel.resultTimer || 0));
    setWeeklyUsedIds(planKey, [], scopedLevel);
    setWeeklyResults(planKey, [], scopedLevel);
    state.weeklyWheel.currentId = '';
    state.weeklyWheel.memoryStep = weeklyRequiresSourceSpin(plan) ? 'source' : 'situation';
    state.weeklyWheel.memorySourceKey = '';
    state.weeklyWheel.currentSourceKey = '';
    state.weeklyWheel.mode = 'wheel';
    state.weeklyWheel.isSpinning = false;
  }

  function spinWeeklySourceWheel(plan) {
    const sources = weeklyMemorySourceEntries(plan);
    if (!sources.length || state.weeklyWheel.isSpinning) return null;
    const choice = sources[Math.floor(Math.random() * sources.length)] || sources[0];
    state.weeklyWheel.memorySourceKey = choice.key;
    state.weeklyWheel.currentSourceKey = choice.key;
    state.weeklyWheel.currentId = '';

    const degreesPerSlice = 360 / Math.max(sources.length, 1);
    const startRotation = Number(state.weeklyWheel.wheelRotation || 0);
    const startMod = ((startRotation % 360) + 360) % 360;
    const selectedMarkAngle = ((Number(choice.number) - 0.5) * degreesPerSlice) % 360;
    const finalMod = (360 - selectedMarkAngle) % 360;
    const deltaToSelected = (finalMod - startMod + 360) % 360;
    const fullTurns = 4 + Math.floor(Math.random() * 3);

    state.weeklyWheel.spinStartRotation = startRotation;
    state.weeklyWheel.spinDurationMs = 3000 + Math.floor(Math.random() * 800);
    state.weeklyWheel.wheelRotation = startRotation + (fullTurns * 360) + deltaToSelected;
    return choice;
  }

  function spinWeeklyWheel() {
    const plan = weeklyWheelPlan(state.weeklyWheel.planKey);
    const scopedLevel = normalizeWeeklyLevel(state.weeklyWheel.level || 1);
    const bank = weeklyActiveSituationBank(plan, scopedLevel);
    const fullBank = weeklySituationBank(plan, scopedLevel);
    const challengeSize = Math.min(Number(state.weeklyWheel.challengeSize || 5), fullBank.length || 0);
    if (!bank.length || !challengeSize || state.weeklyWheel.isSpinning) return null;
    const score = weeklyWheelScore(plan.key, challengeSize, scopedLevel);
    let used = readWeeklyUsedIds(plan.key, scopedLevel).filter((id) => fullBank.some((entry) => entry.id === id));
    if (score.total >= challengeSize || used.length >= challengeSize) {
      used = [];
      setWeeklyResults(plan.key, [], scopedLevel);
    }
    let available = bank.filter((entry) => !used.includes(entry.id));
    if (!available.length) available = bank;
    const choice = available[Math.floor(Math.random() * available.length)] || bank[0];
    used.push(choice.id);
    setWeeklyUsedIds(plan.key, used, scopedLevel);
    state.weeklyWheel.currentId = choice.id;

    const degreesPerSlice = 360 / Math.max(bank.length, 1);
    const localIndex = Math.max(bank.findIndex((entry) => entry.id === choice.id), 0);
    const startRotation = Number(state.weeklyWheel.wheelRotation || 0);
    const startMod = ((startRotation % 360) + 360) % 360;
    const selectedMarkAngle = (localIndex * degreesPerSlice) % 360;
    const finalMod = (360 - selectedMarkAngle) % 360;
    const deltaToSelected = (finalMod - startMod + 360) % 360;
    const fullTurns = 6 + Math.floor(Math.random() * 3);

    state.weeklyWheel.spinStartRotation = startRotation;
    state.weeklyWheel.spinDurationMs = 3800 + Math.floor(Math.random() * 900);
    state.weeklyWheel.wheelRotation = startRotation + (fullTurns * 360) + deltaToSelected;
    return choice;
  }

  function currentWeeklyWheelEntry(plan, activeBank = null) {
    const bank = Array.isArray(activeBank) && activeBank.length ? activeBank : weeklySituationBank(plan, state.weeklyWheel.level || 1);
    return bank.find((entry) => entry.id === state.weeklyWheel.currentId) || null;
  }

  function weeklyChallengeSizeLabel(size, bankLength) {
    const value = Math.min(Number(size) || 5, Number(bankLength) || Number(size) || 5);
    if (value === 5) return 'Quick • 5 rounds';
    if (value === 10) return 'Medium • 10 rounds';
    if (value === 15) return 'Strong • 15 rounds';
    if (value === 20) return 'Big • 20 rounds';
    return 'Full weekly • ' + value + ' rounds';
  }

  function weeklyChallengeSizeTooltip(size, bankLength) {
    const value = Math.min(Number(size) || 5, Number(bankLength) || Number(size) || 5);
    if (value === 5) return 'Quick review — answer 5 random situations. Week 2–4 will first choose a memory week, then choose the situation.';
    if (value === 10) return 'Medium review — 10 rounds. This tests short memory and long memory without making the wheel crowded.';
    if (value === 15) return 'Strong review — 15 rounds from the available memory weeks.';
    if (value === 20) return 'Big review — 20 rounds for deeper recall.';
    return 'Full weekly review — 35 rounds. The number means rounds to answer, not the result number on the wheel.';
  }


  function weeklyWheelNumberMarks(entriesOrTotal, currentNumber, currentKey = '') {
    if (Array.isArray(entriesOrTotal)) {
      const entries = entriesOrTotal;
      return entries.map((entry, index) => {
        const angle = (360 * index) / Math.max(entries.length, 1);
        const active = entry?.key && currentKey ? entry.key === currentKey : Number(currentNumber) === Number(entry?.number);
        if (entry?.isSource) {
          const sourceAngle = (360 * (index + 0.5)) / Math.max(entries.length, 1);
          return '<span class="weekly-wheel-number-mark weekly-wheel-source-mark ' + (active ? 'is-active' : '') + '" style="--mark-angle:' + sourceAngle.toFixed(4) + 'deg; --source-color:' + escapeHtml(entry.color || weeklySourceColor(entry.number)) + ';" aria-hidden="true"><b>' + escapeHtml('Week ' + entry.number) + '</b><small>Memory</small></span>';
        }
        const compact = entries.length > 35 && !active && Number(entry.number) % 5 !== 0 && Number(entry.number) !== 1 && Number(entry.number) !== entries.length;
        const visible = active || entries.length <= 35 || Number(entry.number) === 1 || Number(entry.number) === entries.length || Number(entry.number) % 5 === 0;
        if (!visible) return '';
        return '<span class="weekly-wheel-number-mark ' + (active ? 'is-active' : '') + ' ' + (compact ? 'is-compact' : '') + '" style="--mark-angle:' + angle.toFixed(4) + 'deg;" aria-hidden="true">' + escapeHtml(entry.number) + '</span>';
      }).join('');
    }
    const count = Math.max(Number(entriesOrTotal) || 0, 0);
    const step = count > 35 ? 5 : 1;
    return Array.from({ length: count }, (_, index) => {
      const number = index + 1;
      const active = Number(currentNumber) === number;
      const visible = active || number === 1 || number === count || number % step === 0;
      if (!visible) return '';
      const angle = (360 * index) / Math.max(count, 1);
      const compact = count > 35 && !active && number % 10 !== 0 && number !== count;
      return '<span class="weekly-wheel-number-mark ' + (active ? 'is-active' : '') + ' ' + (compact ? 'is-compact' : '') + '" style="--mark-angle:' + angle.toFixed(4) + 'deg;" aria-hidden="true">' + escapeHtml(number) + '</span>';
    }).join('');
  }

  function normalizeWeeklyWheelImageCandidate(value) {
    const raw = String(value || '').trim();
    if (!raw) return '';
    if (!/\.(png|jpe?g|webp|svg)(\?.*)?$/i.test(raw)) return '';
    return raw;
  }

  function weeklyWheelImageCandidates(phrase) {
    const rawValues = [
      phrase?.sceneVisual,
      phrase?.sceneImage,
      phrase?.visual,
      phrase?.visualImage,
      phrase?.image,
      phrase?.imageUrl,
      phrase?.poster,
      phrase?.scenePoster,
      phrase?.sceneVisualPath,
      phrase?.visualPath,
      phrase?.media?.visual,
      phrase?.media?.image
    ];
    const candidates = [];
    const addCandidate = (value) => {
      const clean = normalizeWeeklyWheelImageCandidate(value);
      if (!clean || candidates.includes(clean)) return;
      candidates.push(clean);
    };
    rawValues.forEach((value) => {
      const clean = normalizeWeeklyWheelImageCandidate(value);
      if (!clean) return;
      // Prefer the local bundled asset first. Supabase candidates are useful fallback paths, but
      // a remote public URL can fail when the file was not uploaded yet.
      addCandidate(clean);
      const remote = window.DarijaSupabaseMedia?.imageCandidates?.(clean)?.[0] || '';
      addCandidate(remote);
    });
    return candidates;
  }

  function weeklyWheelImageUrl(phrase) {
    return weeklyWheelImageCandidates(phrase)[0] || '';
  }

  function weeklyWheelImageTag(entry, className = '') {
    const candidates = weeklyWheelImageCandidates(entry?.phrase);
    const image = candidates[0] || '';
    if (!image) return '';
    const fallback = candidates.find((candidate) => candidate !== image) || '';
    const alt = entry?.phrase?.sceneVisualAlt || entry?.phrase?.english || entry?.phrase?.friendlyLatin || `Situation ${entry?.number || ''}`;
    const onError = fallback
      ? `this.onerror=null;this.src='${escapeHtml(fallback)}';`
      : `this.closest('.weekly-wheel-memory-bg-card,.weekly-wheel-memory-card')?.classList.add('is-image-missing');this.remove();`;
    return `<img class="${escapeHtml(className)}" src="${escapeHtml(image)}" alt="${escapeHtml(alt)}" loading="lazy" onerror="${onError}">`;
  }

  function weeklyWheelMemoryCards(bank, currentNumber) {
    const items = (Array.isArray(bank) ? bank : [])
      .filter((entry) => weeklyWheelImageCandidates(entry.phrase).length)
      .slice(0, 18);
    if (!items.length) return '';
    const total = items.length;
    return `
      <div class="weekly-wheel-memory-cards" aria-hidden="true">
        ${items.map((entry, index) => {
          const angle = (360 * index) / Math.max(total, 1);
          const active = Number(currentNumber) === Number(entry.number);
          return `
            <span class="weekly-wheel-memory-card ${active ? 'is-active' : ''}" style="--card-angle:${angle.toFixed(4)}deg;">
              ${weeklyWheelImageTag(entry, 'weekly-wheel-memory-card__img')}
              <b>#${escapeHtml(entry.number)}</b>
            </span>
          `;
        }).join('')}
      </div>
    `;
  }

  function weeklyWheelBackgroundPool(bank) {
    return (Array.isArray(bank) ? bank : []).filter((entry) => weeklyWheelImageCandidates(entry.phrase).length);
  }

  function weeklyWheelMemoryBackground(bank, currentNumber) {
    const source = weeklyWheelBackgroundPool(bank);
    if (!source.length) return '';
    const total = Math.max(42, Math.min(72, source.length * 2));
    return `
      <div class="weekly-wheel-memory-bg" aria-hidden="true">
        ${Array.from({ length: total }, (_, index) => {
          const entry = source[index % source.length];
          const active = Number(currentNumber) === Number(entry.number);
          const sizeClass = index % 7 === 0 ? 'is-large' : index % 5 === 0 ? 'is-medium' : 'is-small';
          return `
            <span class="weekly-wheel-memory-bg-card ${active ? 'is-active' : ''} ${sizeClass}" style="--card-index:${index};">
              ${weeklyWheelImageTag(entry, 'weekly-wheel-memory-bg-card__img')}
              <b>#${escapeHtml(entry.number)}</b>
            </span>
          `;
        }).join('')}
      </div>
    `;
  }

  function weeklyWheelThemePicker() {
    return '';
  }

  function renderWeeklyWheel(options = {}) {
    const root = options.root || document.getElementById('weeklyWheelRoot');
    if (!root) return;
    const embedded = Boolean(options.embedded);
    const fixedPlanKey = options.planKey || '';
    const routePath = window.location.hash.replace(/^#/, '');
    const routeKey = fixedPlanKey || getWeeklyWheelRoutePlanKey(routePath);
    const routeLevel = normalizeWeeklyLevel(options.level || getWeeklyWheelRouteLevel(routePath, state.weeklyWheel.level || 1));
    if (routeKey !== state.weeklyWheel.planKey || routeLevel !== state.weeklyWheel.level) setWeeklyWheelPlan(routeKey, routeLevel);
    const plan = weeklyWheelPlan(state.weeklyWheel.planKey);
    const weeklyLevel = normalizeWeeklyLevel(state.weeklyWheel.level || routeLevel || 1);
    state.weeklyWheel.returnRootId = root.id || '';
    state.weeklyWheel.returnEmbedded = embedded;
    state.weeklyWheel.returnPlanKey = plan.key;
    const bank = weeklySituationBank(plan, weeklyLevel);
    if (weeklyRequiresSourceSpin(plan) && !state.weeklyWheel.memoryStep) state.weeklyWheel.memoryStep = 'source';
    if (!weeklyRequiresSourceSpin(plan)) state.weeklyWheel.memoryStep = 'situation';
    const isSourcePhase = weeklyIsSourcePhase(plan);
    const selectedSource = weeklySourceEntryForKey(plan, state.weeklyWheel.memorySourceKey);
    const targetBank = weeklyActiveSituationBank(plan, weeklyLevel);
    const visualEntries = isSourcePhase ? weeklyMemorySourceEntries(plan) : targetBank;
    const numberRingEntries = isSourcePhase ? weeklySourcePhaseNumberBank(plan, weeklyLevel) : targetBank;
    const used = readWeeklyUsedIds(plan.key, weeklyLevel).filter((id) => bank.some((entry) => entry.id === id));
    if (used.length !== readWeeklyUsedIds(plan.key, weeklyLevel).length) setWeeklyUsedIds(plan.key, used, weeklyLevel);
    const challengeSize = Math.min(Number(state.weeklyWheel.challengeSize || 5), bank.length || 0);
    const score = weeklyWheelScore(plan.key, challengeSize, weeklyLevel);
    const activeTheme = normalizeWeeklyWheelTheme(state.weeklyWheel.theme);
    const current = currentWeeklyWheelEntry(plan, targetBank);
    const currentBankIndex = current ? targetBank.findIndex((entry) => entry.id === current.id) : -1;
    const currentRound = current ? Math.min(score.total + 1, challengeSize || 1) : Math.min(score.total + 1, challengeSize || 1);
    const roundLabel = `${Math.min(score.total, challengeSize)} / ${challengeSize}`;
    const completed = score.total >= challengeSize && challengeSize > 0;
    const showWheelSelection = state.weeklyWheel.mode === 'result' && current;
    const showFinalScore = state.weeklyWheel.mode === 'complete' || completed;
    const showSituation = state.weeklyWheel.mode === 'situation' && current;
    const revealWheelNumber = Boolean(current && (showWheelSelection || showSituation));
    const activeWheelNumber = revealWheelNumber ? current.number : null;
    const situationWheelColor = weeklySituationWheelColor(plan, selectedSource);
    const centerBrandColor = isSourcePhase ? '#111827' : (selectedSource ? weeklySourceColor(selectedSource.number) : situationWheelColor);
    const situationWheelClass = isSourcePhase ? '' : 'weekly-wheel-disc--situation-week-wheel';
    const appNav = document.getElementById('app-nav');

    const fullscreenWheel = Boolean(embedded && !showSituation);
    document.body.classList.toggle('is-remember-standalone', Boolean(showSituation));
    document.body.classList.toggle('is-weekly-wheel-embedded', Boolean(embedded && !showSituation));
    document.body.classList.toggle('is-weekly-wheel-fullscreen', fullscreenWheel);
    if (appNav) appNav.style.display = (showSituation || fullscreenWheel) ? 'none' : 'block';

    if (showSituation) {
      const wheelLesson = {
        id: `weekly-wheel-${plan.key}`,
        day: plan.label,
        title: plan.title,
        phrases: targetBank.map((entry) => entry.phrase)
      };
      root.innerHTML = `
        <div class="remember-standalone-page weekly-remember-page" aria-label="Weekly wheel situation screen">
          <div class="weekly-remember-return-note">Situation #${escapeHtml(current.number)} • Round ${escapeHtml(String(currentRound))} / ${escapeHtml(String(challengeSize))}</div>
          ${situationChallengeCardMarkup(wheelLesson, current.phrase, currentBankIndex >= 0 ? currentBankIndex : 0, {
            slide: true,
            weeklyWheel: true,
            displayIndex: currentRound - 1,
            displayTotal: challengeSize,
            weeklyEntryId: current.id,
            weeklyEntryNumber: current.number,
            weeklyLevel
          })}
        </div>
      `;
      bindSituationChallenges(root, wheelLesson, () => renderWeeklyWheel(options));
      root.querySelectorAll('[data-weekly-back-to-wheel]').forEach((button) => {
        button.addEventListener('click', () => {
          state.weeklyWheel.mode = 'wheel';
          state.weeklyWheel.isSpinning = false;
          renderWeeklyWheel(options);
        });
      });
      return;
    }

    if (fullscreenWheel) {
      root.innerHTML = `
        <div class="weekly-wheel-page weekly-wheel-page--spin weekly-wheel-page--embedded weekly-wheel-page--fullscreen-wheel" data-weekly-theme="${escapeHtml(activeTheme)}" aria-label="${escapeHtml(plan.title)}">
          <section class="weekly-wheel-game-card weekly-wheel-game-card--visual weekly-wheel-game-card--fullscreen ${state.weeklyWheel.isSpinning ? 'is-spinning' : ''}" aria-live="polite">
            ${weeklyWheelThemePicker()}
            ${weeklyWheelMemoryBackground(bank, activeWheelNumber)}

            <div class="weekly-wheel-fullscreen-size-rail" aria-label="Choose challenge size">
              ${(plan.challengeSizes || [5]).filter((size) => size <= Math.max(bank.length, 1)).map((size) => `
                <button type="button" data-weekly-size="${escapeHtml(size)}" data-weekly-size-tip="${escapeHtml(weeklyChallengeSizeTooltip(size, bank.length))}" class="weekly-wheel-size weekly-wheel-size--circle ${Number(size) === challengeSize ? 'is-active' : ''}" ${state.weeklyWheel.isSpinning ? 'disabled aria-disabled="true"' : ''} aria-label="${escapeHtml(weeklyChallengeSizeLabel(size, bank.length))}">${escapeHtml(size >= bank.length ? bank.length : size)}</button>
              `).join('')}
            </div>

            ${weeklyTwoStepStatusMarkup(plan, isSourcePhase, selectedSource)}

            <div class="weekly-wheel-fullscreen-round" aria-live="polite">
              <span>${escapeHtml(plan.label)}</span>
              <strong>${escapeHtml(roundLabel)}</strong>
            </div>

            <div class="weekly-wheel-big-stage weekly-wheel-big-stage--memory weekly-wheel-big-stage--fullscreen weekly-wheel-big-stage--clickable ${isSourcePhase ? 'weekly-wheel-big-stage--source-wheel' : ''}" data-two-step-phase="${isSourcePhase ? 'source' : 'situation'}" data-weekly-spin role="button" tabindex="${state.weeklyWheel.isSpinning || showWheelSelection ? '-1' : '0'}" aria-label="Spin the weekly situation wheel" aria-disabled="${state.weeklyWheel.isSpinning || showWheelSelection ? 'true' : 'false'}" style="--wheel-start-rotation:${escapeHtml(state.weeklyWheel.spinStartRotation || 0)}deg; --wheel-rotation:${escapeHtml(state.weeklyWheel.wheelRotation)}deg; --wheel-spin-duration:${escapeHtml(state.weeklyWheel.spinDurationMs || 4200)}ms; --wheel-slices:${escapeHtml(visualEntries.length || 1)}; --source-gradient:${isSourcePhase ? weeklySourceWheelGradient(visualEntries) : 'none'}; --situation-color:${escapeHtml(situationWheelColor)}; --center-brand-color:${escapeHtml(centerBrandColor)};">
              ${isSourcePhase ? '' : weeklyWheelMemoryCards(targetBank, activeWheelNumber)}
              <div class="weekly-wheel-pointer weekly-wheel-pointer--large weekly-wheel-pointer--fullscreen" aria-hidden="true"></div>
              <div class="weekly-wheel-number-ring" aria-hidden="true">
                ${weeklyWheelNumberMarks(numberRingEntries, activeWheelNumber, '')}
              </div>
              <div class="weekly-wheel-disc weekly-wheel-disc--large weekly-wheel-disc--fullscreen ${isSourcePhase ? 'weekly-wheel-disc--source-week-wheel' : situationWheelClass}">
                <div class="weekly-wheel-disc__inner weekly-wheel-disc__inner--large weekly-wheel-disc__inner--fullscreen" aria-hidden="true" data-wheel-state="brand"><span class="weekly-wheel-center-brand">darija30</span></div>
              </div>
            </div>

            <button type="button" data-weekly-reset class="weekly-wheel-reset-btn weekly-wheel-reset-btn--ghost" ${state.weeklyWheel.isSpinning || showWheelSelection ? 'disabled aria-disabled="true"' : ''}>Reset</button>

            ${showFinalScore ? `
              <div class="weekly-wheel-final-score ${score.passed ? 'is-passed' : 'is-practice'}" role="status" aria-live="polite">
                ${score.passed ? weeklyConfettiMarkup(48) : ''}
                <div class="weekly-wheel-final-score__card">
                  <span>Final Score</span>
                  <strong>${escapeHtml(score.correct)} / ${escapeHtml(challengeSize)}</strong>
                  <b>${escapeHtml(score.percent)}%</b>
                  <p>${score.passed ? 'Ready for real Morocco 🎉' : 'Good practice — try the wheel again 🔁'}</p>
                  <button type="button" data-weekly-final-replay>${score.passed ? 'Play Again' : 'Try Again'}</button>
                </div>
              </div>
            ` : ''}
          </section>
        </div>
      `;
    } else {
      root.innerHTML = `
        <div class="weekly-wheel-page weekly-wheel-page--spin ${embedded ? 'weekly-wheel-page--embedded' : ''}" data-weekly-theme="${escapeHtml(activeTheme)}">
          ${embedded ? '' : `
            <div class="weekly-wheel-tabs" aria-label="Choose weekly wheel">
              ${weeklyWheelPlans().map((item) => `
                <button type="button" data-weekly-plan="${escapeHtml(item.key)}" class="weekly-wheel-tab ${item.key === plan.key ? 'is-active' : ''}">
                  <strong>${escapeHtml(item.label)}</strong>
                  <span>${escapeHtml(item.days)}</span>
                </button>
              `).join('')}
            </div>
          `}

          <section class="weekly-wheel-game-card weekly-wheel-game-card--visual ${state.weeklyWheel.isSpinning ? 'is-spinning' : ''}" aria-live="polite">
            ${weeklyWheelThemePicker()}
            ${weeklyWheelMemoryBackground(bank, activeWheelNumber)}
            <div class="weekly-wheel-game-top">
              <div>
                <span class="weekly-wheel-eyebrow weekly-wheel-eyebrow--small">Weekly checkpoint • ${escapeHtml(plan.days)}</span>
                <h2>${escapeHtml(plan.title)}</h2>
                <p>Choose the challenge size, spin, then answer the selected situation in the same daily practice screen.</p>
              </div>
              <div class="weekly-wheel-stat-row weekly-wheel-stat-row--compact">
                <div><strong>${escapeHtml(String(bank.length))}</strong><span>situations</span></div>
                <div><strong>${escapeHtml(roundLabel)}</strong><span>answered</span></div>
              </div>
            </div>

            <div class="weekly-wheel-size-list weekly-wheel-size-list--center" aria-label="Choose challenge size">
              ${(plan.challengeSizes || [5]).filter((size) => size <= Math.max(bank.length, 1)).map((size) => `
                <button type="button" data-weekly-size="${escapeHtml(size)}" data-weekly-size-tip="${escapeHtml(weeklyChallengeSizeTooltip(size, bank.length))}" title="${escapeHtml(weeklyChallengeSizeTooltip(size, bank.length))}" class="weekly-wheel-size ${Number(size) === challengeSize ? 'is-active' : ''}" ${state.weeklyWheel.isSpinning ? 'disabled aria-disabled="true"' : ''}>${escapeHtml(weeklyChallengeSizeLabel(size, bank.length))}</button>
              `).join('')}
            </div>

            <div class="weekly-wheel-big-stage weekly-wheel-big-stage--memory weekly-wheel-big-stage--clickable ${isSourcePhase ? 'weekly-wheel-big-stage--source-wheel' : ''}" data-two-step-phase="${isSourcePhase ? 'source' : 'situation'}" data-weekly-spin role="button" tabindex="${state.weeklyWheel.isSpinning || showWheelSelection ? '-1' : '0'}" aria-label="Spin the weekly situation wheel" aria-disabled="${state.weeklyWheel.isSpinning || showWheelSelection ? 'true' : 'false'}" style="--wheel-start-rotation:${escapeHtml(state.weeklyWheel.spinStartRotation || 0)}deg; --wheel-rotation:${escapeHtml(state.weeklyWheel.wheelRotation)}deg; --wheel-spin-duration:${escapeHtml(state.weeklyWheel.spinDurationMs || 4200)}ms; --wheel-slices:${escapeHtml(visualEntries.length || 1)}; --source-gradient:${isSourcePhase ? weeklySourceWheelGradient(visualEntries) : 'none'}; --situation-color:${escapeHtml(situationWheelColor)}; --center-brand-color:${escapeHtml(centerBrandColor)};">
              ${isSourcePhase ? '' : weeklyWheelMemoryCards(targetBank, activeWheelNumber)}
              <div class="weekly-wheel-pointer weekly-wheel-pointer--large" aria-hidden="true"></div>
              <div class="weekly-wheel-number-ring" aria-hidden="true">
                ${weeklyWheelNumberMarks(numberRingEntries, activeWheelNumber, '')}
              </div>
              <div class="weekly-wheel-disc weekly-wheel-disc--large ${isSourcePhase ? 'weekly-wheel-disc--source-week-wheel' : situationWheelClass}">
                <div class="weekly-wheel-disc__inner weekly-wheel-disc__inner--large" aria-hidden="true" data-wheel-state="brand"><span class="weekly-wheel-center-brand">darija30</span></div>
              </div>
            </div>

            <div class="weekly-wheel-actions weekly-wheel-actions--bottom weekly-wheel-actions--reset-only">
              <button type="button" data-weekly-reset class="weekly-wheel-reset-btn" ${state.weeklyWheel.isSpinning || showWheelSelection ? 'disabled aria-disabled="true"' : ''}>Reset Game</button>
            </div>

            <p class="weekly-wheel-wheel-caption weekly-wheel-wheel-caption--bottom">
              ${showFinalScore ? 'Challenge complete. Check your score, play again, or choose a bigger challenge.' : state.weeklyWheel.isSpinning ? 'The wheel is spinning. Wait until the pointer lands on a number.' : revealWheelNumber ? `Selected: Situation #${escapeHtml(current.number)}. Opening the situation screen.` : 'Click the wheel itself. The pointer will choose one numbered situation from the bank.'}
            </p>

            ${showFinalScore ? `
              <div class="weekly-wheel-final-score ${score.passed ? 'is-passed' : 'is-practice'}" role="status" aria-live="polite">
                ${score.passed ? weeklyConfettiMarkup(48) : ''}
                <div class="weekly-wheel-final-score__card">
                  <span>Final Score</span>
                  <strong>${escapeHtml(score.correct)} / ${escapeHtml(challengeSize)}</strong>
                  <b>${escapeHtml(score.percent)}%</b>
                  <p>${score.passed ? 'Ready for real Morocco 🎉' : 'Good practice — try the wheel again 🔁'}</p>
                  <button type="button" data-weekly-final-replay>${score.passed ? 'Play Again' : 'Try Again'}</button>
                </div>
              </div>
            ` : ''}
          </section>
        </div>
      `;
    }
    root.querySelectorAll('[data-weekly-plan]').forEach((button) => {
      button.addEventListener('click', () => {
        if (state.weeklyWheel.isSpinning) return;
        setWeeklyWheelPlan(button.dataset.weeklyPlan);
        window.location.hash = `#/app/weekly-wheel?level=${encodeURIComponent(String(state.weeklyWheel.level || 1))}&week=${encodeURIComponent(state.weeklyWheel.planKey)}`;
        renderWeeklyWheel(options);
      });
    });

    root.querySelectorAll('[data-weekly-size]').forEach((button) => {
      button.addEventListener('click', () => {
        if (state.weeklyWheel.isSpinning) return;
        setWeeklyWheelChallengeSize(button.dataset.weeklySize);
        renderWeeklyWheel(options);
      });
    });

    const startWeeklySituationSpin = () => {
      const choice = spinWeeklyWheel();
      if (!choice) return false;
      state.weeklyWheel.mode = 'wheel';
      state.weeklyWheel.isSpinning = true;
      window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));
      window.clearTimeout(Number(state.weeklyWheel.resultTimer || 0));
      renderWeeklyWheel(options);
      state.weeklyWheel.openTimer = window.setTimeout(() => {
        state.weeklyWheel.isSpinning = false;
        state.weeklyWheel.mode = 'result';
        renderWeeklyWheel(options);
        state.weeklyWheel.resultTimer = window.setTimeout(() => {
          state.weeklyWheel.mode = 'situation';
          renderWeeklyWheel(options);
        }, 650);
      }, Number(state.weeklyWheel.spinDurationMs || 4200) + 120);
      return true;
    };

    const startWeeklyWheelSpin = () => {
      if (state.weeklyWheel.isSpinning || state.weeklyWheel.mode === 'result') return;
      if (completed || state.weeklyWheel.mode === 'complete') resetWeeklyWheelGame(plan.key);
      if (weeklyRequiresSourceSpin(plan) && state.weeklyWheel.memoryStep !== 'situation') {
        const sourceChoice = spinWeeklySourceWheel(plan);
        if (!sourceChoice) return;
        state.weeklyWheel.mode = 'wheel';
        state.weeklyWheel.isSpinning = true;
        window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));
        window.clearTimeout(Number(state.weeklyWheel.resultTimer || 0));
        renderWeeklyWheel(options);
        state.weeklyWheel.openTimer = window.setTimeout(() => {
          state.weeklyWheel.isSpinning = false;
          state.weeklyWheel.memoryStep = 'situation';
          state.weeklyWheel.mode = 'wheel';
          state.weeklyWheel.spinStartRotation = 0;
          state.weeklyWheel.wheelRotation = 0;
          renderWeeklyWheel(options);
          window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));
          state.weeklyWheel.openTimer = window.setTimeout(() => {
            if (state.weeklyWheel.isSpinning || state.weeklyWheel.mode === 'result') return;
            startWeeklySituationSpin();
          }, 220);
        }, Number(state.weeklyWheel.spinDurationMs || 3200) + 120);
        return;
      }
      startWeeklySituationSpin();
    };

    root.querySelectorAll('[data-weekly-spin]').forEach((spinTarget) => {
      spinTarget.addEventListener('click', startWeeklyWheelSpin);
      spinTarget.addEventListener('keydown', (event) => {
        if (event.key !== 'Enter' && event.key !== ' ') return;
        event.preventDefault();
        startWeeklyWheelSpin();
      });
    });

    root.querySelector('[data-weekly-final-replay]')?.addEventListener('click', () => {
      resetWeeklyWheelGame(plan.key);
      renderWeeklyWheel(options);
    });

    root.querySelector('[data-weekly-reset]')?.addEventListener('click', () => {
      if (state.weeklyWheel.isSpinning) return;
      resetWeeklyWheelGame(plan.key);
      renderWeeklyWheel(options);
    });
  }



  function renderLessonsList() {
    const root = document.getElementById('lessonsListRoot');
    if (!root) return;

    const routePath = window.location.hash.replace(/^#/, '');
    const allRuntimeLessons = lessons();
    const availableLevels = Array.from(new Set(allRuntimeLessons.map((lesson) => lessonLevel(lesson))))
      .sort((a, b) => a - b);
    const visibleLevels = Array.from(new Set(allRuntimeLessons
      .filter((lesson) => canSeeLesson(lesson, routePath))
      .map((lesson) => lessonLevel(lesson))))
      .sort((a, b) => a - b);
    const routeLevel = requestedLevel(routePath);
    const collabParam = window.DarijaLevelAccess?.isCollaboratorPreview?.(routePath) ? '&collab=1' : '';

    if (!allRuntimeLessons.length) {
      root.innerHTML = `
        <div class="bg-white rounded-3xl border border-red-100 shadow-sm p-8 text-center">
          <p class="text-xs font-black uppercase tracking-wide text-terracotta mb-2">Lesson data unavailable</p>
          <h2 class="text-2xl font-black text-medina mb-3">The 30-day plan could not load lesson data.</h2>
          <p class="text-gray-600">Please confirm that <code class="bg-gray-100 px-2 py-1 rounded">js/data/lessons-data.js</code> is deployed.</p>
        </div>
      `;
      return;
    }

    if (availableLevels.includes(routeLevel) && !visibleLevels.includes(routeLevel)) {
      const access = window.DarijaLevelAccess;
      const meta = access?.levelMeta?.(routeLevel) || { shortLabel: 'Locked', label: 'Locked' };
      const visibility = access?.getVisibility?.(routeLevel) || 'admin';
      const collaboratorLink = access?.collaboratorLink?.(routeLevel) || appLessonsHref(routeLevel, 'collab=1');
      root.innerHTML = `
        <div class="bg-white rounded-3xl border border-yellow-100 shadow-sm p-8 text-center max-w-4xl mx-auto">
          <span class="inline-flex items-center gap-2 bg-yellow-50 text-yellow-700 border border-yellow-100 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wide mb-4">🔒 Level ${escapeHtml(String(routeLevel).padStart(2, '0'))} • ${escapeHtml(meta.shortLabel || meta.label || 'Locked')}</span>
          <h2 class="text-3xl font-black text-medina mb-3">This level is not open in learner view yet.</h2>
          <p class="text-gray-600 max-w-2xl mx-auto mb-6">The level data exists, but its current visibility is <strong>${escapeHtml(meta.label || meta.shortLabel || visibility)}</strong>. The page now stops cleanly instead of staying on “Loading 30-day plan…”.</p>
          <div class="flex flex-wrap justify-center gap-3">
            <a href="${escapeHtml(appLessonsHref(1))}" class="bg-chefchaouen hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-black transition">Open Level 01</a>
            ${visibility === 'collaborators' ? `<a href="${escapeHtml(collaboratorLink)}" class="bg-white border border-blue-200 text-chefchaouen px-5 py-3 rounded-xl font-black hover:bg-blue-50 transition">Open collaborator preview</a>` : ''}
            <a href="#/admin/levels" class="bg-white border border-gray-200 text-medina px-5 py-3 rounded-xl font-black hover:bg-gray-50 transition">Manage levels</a>
          </div>
          ${visibleLevels.length ? `
            <div class="mt-8 pt-6 border-t border-gray-100">
              <p class="text-xs font-black uppercase tracking-wide text-gray-400 mb-3">Available learner levels</p>
              <div class="flex flex-wrap justify-center gap-2">
                ${visibleLevels.map((level) => `<a href="${escapeHtml(appLessonsHref(level, collabParam))}" class="rounded-xl border border-gray-200 px-4 py-2 text-sm font-extrabold text-gray-700 hover:border-chefchaouen">Level ${escapeHtml(String(level).padStart(2, '0'))}</a>`).join('')}
              </div>
            </div>
          ` : ''}
        </div>
      `;
      return;
    }

    const selectedLevel = visibleLevels.includes(routeLevel) ? routeLevel : (visibleLevels[0] || availableLevels[0] || 1);
    const allLessons = allRuntimeLessons.filter((lesson) => lessonLevel(lesson) === selectedLevel && canSeeLesson(lesson, routePath));

    if (!allLessons.length) {
      root.innerHTML = `
        <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center max-w-4xl mx-auto">
          <p class="text-xs font-black uppercase tracking-wide text-gray-400 mb-2">No visible lessons</p>
          <h2 class="text-2xl font-black text-medina mb-3">No lessons are available for this level in the current view.</h2>
          <a href="${escapeHtml(appLessonsHref(1))}" class="inline-flex bg-chefchaouen hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-black transition">Back to Level 01</a>
        </div>
      `;
      return;
    }
    const planStartKey = `darija30_plan_start_date_level${selectedLevel}`;
    const sectionStateKey = 'darija30_plan_section_state_v1';
    const defaultStartDate = '2026-06-27';
    const savedStartDate = localStorage.getItem(planStartKey) || defaultStartDate;

    const parseDate = (value) => {
      const safeValue = /^\d{4}-\d{2}-\d{2}$/.test(value || '') ? value : defaultStartDate;
      const [year, month, day] = safeValue.split('-').map(Number);
      return new Date(year, month - 1, day);
    };

    const formatDate = (date) => {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const lessonDate = (dayNumber) => {
      const date = parseDate(savedStartDate);
      date.setDate(date.getDate() + Number(dayNumber || 1) - 1);
      return date;
    };

    const finishDate = lessonDate(30);

    const planSections = [
      { start: 1, end: 7, title: 'Week 1 Survival Wheel Bank', description: 'Seven daily lessons. The weekly wheel has 35 numbered situations.', wheelKey: 'week1' },
      { start: 8, end: 14, title: 'Week 2 Cumulative Wheel Bank', description: 'The wheel grows to 70 situations and still reviews older moments.', wheelKey: 'week2' },
      { start: 15, end: 21, title: 'Week 3 Cumulative Wheel Bank', description: 'The wheel grows to 105 situations across the first three weeks.', wheelKey: 'week3' },
      { start: 22, end: 28, title: 'Week 4 Cumulative Wheel Bank', description: 'The four-week wheel reaches 140 situations before the final two days.', wheelKey: 'week4' },
      { start: 29, end: 29, title: 'Day 29 — Real Morocco Mixed Situations', description: 'A normal daily lesson that mixes real travel moments before the final day.' },
      { start: 30, end: 30, title: 'Day 30 — Final Survival Day', description: 'The last daily lesson plus the Final Survival Wheel from all 150 situations.', wheelKey: 'final' }
    ];

    const readSectionState = () => {
      try {
        return JSON.parse(localStorage.getItem(sectionStateKey) || '{}') || {};
      } catch (error) {
        return {};
      }
    };

    const sectionState = readSectionState();
    const firstIncompleteLesson = allLessons.find((lesson) => !Store()?.lessonProgress(lesson)?.complete) || allLessons[0];
    const activeSection = planSections.find((section) => Number(firstIncompleteLesson?.day || 1) >= section.start && Number(firstIncompleteLesson?.day || 1) <= section.end) || planSections[0];

    const isSectionOpen = (section) => {
      const key = `${section.start}-${section.end}`;
      if (Object.prototype.hasOwnProperty.call(sectionState, key)) return Boolean(sectionState[key]);
      return section.start === activeSection.start;
    };

    root.innerHTML = `
      ${visibleLevels.length > 1 ? `
        <div class="bg-white rounded-3xl border border-blue-100 shadow-sm p-5 mb-6">
          <p class="text-xs font-extrabold text-chefchaouen uppercase tracking-wide mb-3">Level access</p>
          <div class="flex flex-wrap gap-2">
            ${visibleLevels.map((level) => {
              const active = level === selectedLevel;
              const meta = window.DarijaLevelAccess?.levelMeta?.(level) || { label: 'Public' };
              const href = appLessonsHref(level, collabParam);
              return `<a href="${href}" class="rounded-xl border px-4 py-2 text-sm font-extrabold ${active ? 'bg-chefchaouen text-white border-chefchaouen' : 'bg-white text-gray-700 border-gray-200 hover:border-chefchaouen'}">Level ${String(level).padStart(2, '0')} <span class="opacity-70">${escapeHtml(meta.label || '')}</span></a>`;
            }).join('')}
          </div>
        </div>
      ` : ''}
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 mb-8">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div>
            <span class="inline-flex items-center gap-2 bg-blue-50 text-chefchaouen px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide mb-3">📅 LEVEL ${escapeHtml(String(selectedLevel).padStart(2, '0'))} • 30-DAY TIMELINE</span>
            <h2 class="text-2xl font-black text-medina mb-2">One day. One lesson. Real Morocco readiness.</h2>
            <p class="text-gray-600 max-w-2xl">This is not a slow “week course”. The learner gets a clear 30-day path from the subscription date. After purchase, all lessons should be accessible immediately; the dates are guidance, not a lock.</p>
          </div>
          <div class="bg-cream rounded-2xl border border-yellow-100 p-4 min-w-[260px]">
            <label for="planStartDate" class="block text-xs font-extrabold text-terracotta uppercase tracking-wide mb-2">Demo subscription start</label>
            <input id="planStartDate" type="date" value="${escapeHtml(savedStartDate)}" class="w-full rounded-xl border border-gray-200 px-3 py-2 font-bold text-medina bg-white">
            <p class="mt-2 text-sm text-gray-600">Start: <strong>${escapeHtml(formatDate(parseDate(savedStartDate)))}</strong> • Target finish: <strong>${escapeHtml(formatDate(finishDate))}</strong></p>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-3 mt-5 text-sm">
          <div class="rounded-xl bg-green-50 border border-green-100 p-3"><strong class="text-green-700">Free demo</strong><br><span class="text-gray-600">Day 1 proves the full method.</span></div>
          <div class="rounded-xl bg-red-50 border border-red-100 p-3"><strong class="text-terracotta">Locked preview</strong><br><span class="text-gray-600">Before payment, paid lessons show preview only.</span></div>
          <div class="rounded-xl bg-blue-50 border border-blue-100 p-3"><strong class="text-chefchaouen">After purchase</strong><br><span class="text-gray-600">All 30 lessons open; the plan remains as guidance.</span></div>
        </div>
      </div>

      <div class="space-y-4">
        ${planSections.map((section) => {
          const sectionLessons = allLessons.filter((lesson) => Number(lesson.day) >= section.start && Number(lesson.day) <= section.end);
          const sectionKey = `${section.start}-${section.end}`;
          const open = isSectionOpen(section);
          return `
            <section class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden" data-plan-section="${escapeHtml(sectionKey)}">
              <button type="button" data-plan-section-toggle="${escapeHtml(sectionKey)}" aria-expanded="${open ? 'true' : 'false'}" class="w-full text-left p-5 hover:bg-cream/60 transition flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div class="flex items-start gap-3">
                  <span data-plan-section-icon class="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full ${open ? 'bg-terracotta text-white' : 'bg-red-50 text-terracotta'} font-black text-sm">${open ? '▼' : '▶'}</span>
                  <div>
                    <h2 class="text-xl font-black text-medina">Days ${escapeHtml(section.start)}–${escapeHtml(section.end)} — ${escapeHtml(section.title)}</h2>
                    <p class="text-sm text-gray-500 mt-1">${escapeHtml(section.description)}</p>
                    ${section.wheelKey ? `
                      <span class="inline-flex flex-wrap items-center gap-2 mt-2 text-xs font-extrabold">
                        <a class="text-terracotta hover:text-red-700 underline decoration-red-200" href="${escapeHtml(weeklyPlanDirectWheelHref(weeklyWheelPlan(section.wheelKey), selectedLevel))}">Open ${escapeHtml(weeklyWheelPlan(section.wheelKey).label)} Wheel</a>
                        <span class="text-gray-300">•</span>
                        <a class="text-chefchaouen hover:text-blue-700 underline decoration-blue-200" href="${escapeHtml(weeklyPlanCheckpointHref(weeklyWheelPlan(section.wheelKey), 'prompt', selectedLevel))}">Optional prompt</a>
                      </span>
                    ` : ''}
                  </div>
                </div>
                <div class="sm:text-right">
                  <span class="block text-xs font-bold text-gray-400">${escapeHtml(formatDate(lessonDate(section.start)))} → ${escapeHtml(formatDate(lessonDate(section.end)))}</span>
                  <span class="block text-xs font-extrabold text-chefchaouen mt-1">${escapeHtml(sectionLessons.length)} lesson${sectionLessons.length === 1 ? '' : 's'} • ${escapeHtml(sectionLessons.reduce((total, item) => total + ((item.phrases || []).length || 0), 0))} situations</span>
                </div>
              </button>
              <div data-plan-section-body="${escapeHtml(sectionKey)}" class="border-t border-gray-100 p-4 ${open ? '' : 'hidden'}">
                <div class="space-y-3">
                  ${sectionLessons.map((lesson) => {
                    const phrase = firstPhrase(lesson);
                    const isFree = Boolean(lesson.isFree);
                    const progress = Store()?.lessonProgress(lesson);
                    const dayDate = formatDate(lessonDate(lesson.day));
                    return `
                      <a href="#/app/lesson/${encodeURIComponent(String(lesson.day || lesson.id))}?level=${lessonLevel(lesson)}${collabParam}${isAdminActive() && isLearnerLockedLesson(lesson) ? '&admin=1' : ''}" class="block bg-white p-4 rounded-xl shadow-sm border ${progress?.complete ? 'border-green-300' : isFree ? 'border-green-200 hover:border-green-400' : isLearnerLockedLesson(lesson) ? 'border-red-100 hover:border-terracotta' : 'border-gray-200'} transition flex items-center justify-between gap-4 group">
                        <div class="flex items-center gap-4 min-w-0">
                          <div class="w-12 h-12 rounded-2xl ${progress?.complete ? 'bg-green-600 text-white' : isFree ? 'bg-green-100 text-green-700' : isLearnerLockedLesson(lesson) ? 'bg-red-50 text-terracotta' : 'bg-gray-200 text-gray-500'} flex flex-col items-center justify-center font-black text-xs leading-none">
                            <span>DAY</span>
                            <span class="text-base">${escapeHtml(String(lesson.day).padStart(2, '0'))}</span>
                          </div>
                          <div class="min-w-0">
                            <div class="flex flex-wrap items-center gap-2 mb-1">
                              <h3 class="font-bold text-medina group-hover:text-chefchaouen transition">${escapeHtml(lesson.title)}</h3>
                              <span class="text-xs font-bold text-gray-400">${escapeHtml(dayDate)}</span>
                            </div>
                            <p class="text-sm text-gray-500">${escapeHtml(phrase?.goal || lesson.situation)}</p>
                            ${progress?.started ? `<div class="mt-2 h-2 w-36 bg-gray-100 rounded-full"><div class="h-2 bg-chefchaouen rounded-full" style="width:${progress.percent}%"></div></div>` : ''}
                          </div>
                        </div>
                        <div class="shrink-0 text-right">${statusBadge(lesson)}</div>
                      </a>
                    `;
                  }).join('')}
                </div>
              </div>
            </section>
          `;
        }).join('')}
      </div>
    `;

    const input = document.getElementById('planStartDate');
    if (input) {
      input.addEventListener('change', () => {
        if (/^\d{4}-\d{2}-\d{2}$/.test(input.value)) {
          localStorage.setItem(planStartKey, input.value);
          renderLessonsList();
        }
      });
    }

    root.querySelectorAll('[data-plan-section-toggle]').forEach((button) => {
      button.addEventListener('click', () => {
        const key = button.dataset.planSectionToggle;
        const body = root.querySelector(`[data-plan-section-body="${key}"]`);
        const icon = button.querySelector('[data-plan-section-icon]');
        if (!body) return;
        const nextOpen = body.classList.contains('hidden');
        body.classList.toggle('hidden', !nextOpen);
        button.setAttribute('aria-expanded', String(nextOpen));
        if (icon) {
          icon.textContent = nextOpen ? '▼' : '▶';
          icon.className = `mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full ${nextOpen ? 'bg-terracotta text-white' : 'bg-red-50 text-terracotta'} font-black text-sm`;
        }
        try {
          const nextState = readSectionState();
          nextState[key] = nextOpen;
          localStorage.setItem(sectionStateKey, JSON.stringify(nextState));
        } catch (error) {
          // Ignore storage failures in privacy modes.
        }
      });
    });
  }


  function renderDashboard() {
    const root = document.getElementById('dashboardRoot');
    if (!root) return;
    const all = lessons();
    const summary = Store()?.getSummary(all) || { completedCount: 0, courseProgress: 0, learnedCount: 0, favoriteCount: 0, nextLesson: all[0] };
    const next = summary.nextLesson || all[0];
    const recentLearned = Store()?.learnedEntries(all).slice(-3).reverse() || [];

    root.innerHTML = `
      <div class="flex justify-between items-end mb-8 border-b pb-4">
        <div>
          <h1 class="text-3xl font-bold text-medina mb-1">Welcome back, Traveler!</h1>
          <p class="text-gray-600">Your progress is saved locally on this browser. Keep learning through real Moroccan scenarios.</p>
        </div>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"><div class="text-3xl font-bold text-chefchaouen mb-1">${summary.completedCount}</div><div class="text-xs text-gray-500 uppercase tracking-wide">Lessons Done</div></div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"><div class="text-3xl font-bold text-terracotta mb-1">${summary.courseProgress}%</div><div class="text-xs text-gray-500 uppercase tracking-wide">30-Day Progress</div></div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"><div class="text-3xl font-bold text-sahara mb-1">${summary.learnedCount}</div><div class="text-xs text-gray-500 uppercase tracking-wide">Phrases Learned</div></div>
        <div class="bg-white p-4 rounded-xl shadow-sm border border-gray-100 text-center"><div class="text-3xl font-bold text-green-600 mb-1">${summary.favoriteCount}</div><div class="text-xs text-gray-500 uppercase tracking-wide">Saved Phrases</div></div>
      </div>
      <div class="bg-white rounded-2xl shadow-md border-2 border-chefchaouen p-8 mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span class="inline-block bg-blue-100 text-chefchaouen text-xs font-bold px-3 py-1 rounded-full mb-3">UP NEXT • DAY ${escapeHtml(next?.day || 1)}</span>
          <h2 class="text-2xl font-bold text-medina mb-2">${escapeHtml(next?.title || 'Next Lesson')}</h2>
          <p class="text-gray-600 mb-4 md:mb-0">${escapeHtml(next?.situation || '')}</p>
        </div>
        <a href="${escapeHtml(appLessonHref(next))}" class="shrink-0 bg-chefchaouen hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition shadow-sm">Start Lesson ${escapeHtml(next?.day || 1)}</a>
      </div>
      <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-8">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
          <div>
            <span class="inline-block bg-red-50 text-terracotta text-xs font-bold px-3 py-1 rounded-full mb-2">WEEKLY CHECKPOINTS</span>
            <h2 class="text-xl font-black text-medina">Level 1 has four cumulative situation wheels</h2>
            <p class="text-gray-600">Day 7, 14, 21, and 28 keep the normal daily check first. After that, the optional weekly wheel opens.</p>
          </div>
          <a href="#/app/weekly-wheel?level=1&week=week1" class="shrink-0 bg-terracotta hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-sm">Preview Week 1 Wheel</a>
        </div>
        <div class="grid md:grid-cols-4 gap-3">
          ${levelOneWeeklyCheckpointPlans().map((plan) => `
            <div class="rounded-2xl border border-gray-100 bg-cream/40 p-4">
              <span class="block text-xs font-black uppercase tracking-wide text-terracotta mb-1">${escapeHtml(plan.label)}</span>
              <strong class="block text-medina text-lg">${escapeHtml(String(plan.bankSize))} situations</strong>
              <p class="text-sm text-gray-600 mt-1 mb-3">${escapeHtml(weeklyPlanCheckpointSummary(plan))}</p>
              <div class="flex flex-wrap gap-2 text-xs font-bold">
                <a class="bg-medina text-white px-3 py-2 rounded-full hover:bg-slate-800" href="${escapeHtml(weeklyPlanCheckpointHref(plan, 'prompt', 1))}">Prompt</a>
                <a class="bg-white text-chefchaouen border border-blue-100 px-3 py-2 rounded-full hover:border-blue-300" href="${escapeHtml(weeklyPlanDirectWheelHref(plan, 1))}">Wheel</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <div>
        <h3 class="text-xl font-bold mb-4">Recent Learned Phrases</h3>
        <div class="space-y-3">
          ${recentLearned.length ? recentLearned.map(({ lesson, phrase }) => `
            <div class="bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">✓</div>
                <div><p class="font-bold font-mono">${escapeHtml(phrase.friendlyLatin)}</p><p class="text-xs text-gray-500">Day ${escapeHtml(lesson.day)} • ${escapeHtml(lesson.title)}</p></div>
              </div>
              <a href="#/app/lesson/${escapeHtml(lesson.day)}?level=${lessonLevel(lesson)}&phraseId=${encodeURIComponent(String(phrase.id || ''))}" class="text-sm text-chefchaouen font-medium hover:underline">Open Lesson</a>
            </div>
          `).join('') : `
            <div class="bg-white p-6 rounded-xl border border-gray-100 text-gray-500">No learned phrases yet. Open a lesson and click “Mark Phrase Learned.”</div>
          `}
        </div>
      </div>
    `;
  }

  function renderAppLesson(identifier) {
    const root = document.getElementById('lessonPlayerRoot');
    if (!root) return;
    const routePath = window.location.hash.replace(/^#/, '');
    const lesson = findLesson(identifier || getRouteLessonId(routePath));
    const backTarget = lessonBackTarget(routePath);
    if (isLockedLesson(lesson, routePath)) {
      resetInteractiveLessonBodyState({ lockedPreview: true });
      root.innerHTML = `<div class="locked-preview-scroll-shell max-w-4xl mx-auto px-4 py-8 md:py-10">${lockedLessonPreviewMarkup(lesson)}</div>`;
      window.DarijaAudio?.bindAudioButtons(root);
      window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'auto' }));
      return;
    }
    applyRoutePhraseTarget(lesson, routePath);
    Store()?.markLessonVisited(lesson?.id);
    const index = currentPhraseIndex(lesson);
    const phrase = lesson?.phrases?.[index] || firstPhrase(lesson);
    const progress = Store()?.lessonProgress(lesson);
    const practiceOpen = isLessonPracticeOpen(lesson);
    const routeParams = getRouteParams(routePath);
    const weeklyPlanKey = weeklyPlanKeyForCheckpointDay(lesson?.day);
    const weeklyValue = routeParams.get('weekly') || routeParams.get('mode') || '';
    const weeklyPromptRequested = Boolean(weeklyPlanKey && weeklyValue === 'prompt');
    const weeklyRequested = Boolean(weeklyPlanKey && (weeklyValue === '1' || weeklyValue === 'weekly'));

    if (weeklyPromptRequested) {
      setLessonPracticeOpen(lesson, false);
      document.body.classList.toggle('is-remember-standalone', false);
      document.body.classList.toggle('is-weekly-wheel-embedded', true);
      document.body.classList.toggle('is-weekly-wheel-fullscreen', true);
      const appNav = document.getElementById('app-nav');
      if (appNav) appNav.style.display = 'none';
      root.innerHTML = weeklyWheelPromptMarkup(lesson, weeklyPlanKey);
      root.querySelector('[data-start-weekly-wheel]')?.addEventListener('click', () => {
        window.location.hash = `#/app/lesson/${encodeURIComponent(String(lesson.day))}?level=${encodeURIComponent(String(lessonLevel(lesson)))}&weekly=1`;
      });
      root.querySelectorAll('[data-weekly-theme]').forEach((button) => {
        button.addEventListener('click', () => {
          setWeeklyWheelTheme(button.dataset.weeklyTheme);
          root.innerHTML = weeklyWheelPromptMarkup(lesson, weeklyPlanKey);
          renderAppLesson(lesson.day);
        });
      });
      return;
    }

    if (weeklyRequested) {
      setLessonPracticeOpen(lesson, false);
      renderWeeklyWheel({ root, planKey: weeklyPlanKey, level: lessonLevel(lesson), embedded: true });
      return;
    }

    document.body.classList.remove('has-locked-preview');
    document.body.classList.toggle('is-weekly-wheel-embedded', false);
    document.body.classList.toggle('is-weekly-wheel-fullscreen', false);
    document.body.classList.toggle('is-remember-standalone', Boolean(practiceOpen));
    const appNav = document.getElementById('app-nav');
    const useLearnerChrome = Boolean(window.DarijaLevelAccess?.hasStarterPackAccess?.(routePath));
    if (appNav) appNav.style.display = (practiceOpen || !useLearnerChrome) ? 'none' : 'block';

    if (practiceOpen) {
      root.innerHTML = `
        <div class="remember-standalone-page" aria-label="Do you remember practice screen">
          ${lessonPracticePageMarkup(lesson)}
        </div>
      `;
      bindLessonControls(root, lesson);
      return;
    }

    root.innerHTML = `
      <div class="lesson-sticky-header bg-white/95 backdrop-blur border-b border-gray-200 sticky top-[48px] md:top-[112px] z-30">
        <div class="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <a href="${backTarget.href}" class="text-gray-500 hover:text-medina flex items-center gap-1"><span>←</span> ${escapeHtml(backTarget.label)}</a>
          <div class="text-center">
            <span class="text-xs font-bold text-gray-400 tracking-wider">DAY ${escapeHtml(lesson?.day || 1)} • ${progress?.percent || 0}% COMPLETE</span>
            <h2 class="font-bold text-medina">${escapeHtml(lesson?.title || 'Lesson')}</h2>
          </div>
          <a href="#/app/favorites" class="text-gray-400 hover:text-terracotta" title="Saved Phrases"><span>♥</span></a>
        </div>
      </div>
      <div class="lesson-player-container max-w-5xl mx-auto px-4 py-8">
        ${phraseExperienceMarkup(lesson, phrase, index, { compact: false })}
      </div>
    `;
    bindLessonControls(root, lesson);
  }

  function favoriteLessonHref(lesson, phrase) {
    if (!lesson || !phrase) return '#/app/lessons';
    const phrases = Array.isArray(lesson.phrases) ? lesson.phrases : [];
    const index = phrases.findIndex((item) => String(item?.id || '') === String(phrase?.id || ''));
    const phraseNumber = index >= 0 ? index + 1 : '';
    const params = [
      phraseNumber ? `phrase=${encodeURIComponent(String(phraseNumber))}` : '',
      phrase?.id ? `phraseId=${encodeURIComponent(String(phrase.id))}` : '',
      'from=favorites'
    ].filter(Boolean).join('&');
    return appLessonHref(lesson, params);
  }

  function phraseListCard({ lesson, phrase }, extra = '') {
    const active = Store()?.isFavorite(phrase.id);
    return `
      <div class="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-4 w-full">
          <button data-audio-play data-speed="1" data-audio-url="${escapeHtml(phrase.audioNormal)}" class="w-10 h-10 shrink-0 bg-gray-100 hover:bg-chefchaouen hover:text-white text-chefchaouen rounded-full flex items-center justify-center transition">▶</button>
          <div class="flex-grow">
            <p class="text-xl font-bold text-medina font-mono">${escapeHtml(phrase.friendlyLatin)}</p>
            <p class="text-sm text-gray-700">${escapeHtml(phrase.meaning || phrase.english)}</p>
            <p class="text-xs text-gray-500 mt-1">Day ${escapeHtml(lesson.day)} • ${escapeHtml(lesson.title)}</p>
            ${extra}
          </div>
        </div>
        <div class="flex items-center gap-2 shrink-0">
          <a href="${escapeHtml(favoriteLessonHref(lesson, phrase))}" class="inline-flex items-center justify-center rounded-xl bg-chefchaouen hover:bg-blue-700 text-white px-4 py-2 text-sm font-bold transition">Open Lesson</a>
          <button type="button" data-favorite-phrase-id="${escapeHtml(phrase.id)}" data-lesson-id="${escapeHtml(lesson.id)}" class="${active ? 'text-red-500' : 'text-gray-300'} hover:text-red-500 p-2 text-2xl" title="Toggle favorite">♥</button>
        </div>
      </div>
    `;
  }

  function renderFavorites() {
    const root = document.getElementById('page-app-favorites');
    if (!root) return;
    const entries = Store()?.favoriteEntries(lessons()) || [];
    root.innerHTML = `
      <div class="max-w-4xl mx-auto px-4">
        <h1 class="text-3xl font-bold text-medina mb-2">Saved Phrases</h1>
        <p class="text-gray-600 mb-8">Your personal Darija survival dictionary. Saved locally on this browser.</p>
        <div class="grid gap-4">
          ${entries.length ? entries.map((entry) => phraseListCard(entry)).join('') : `
            <div class="bg-white rounded-2xl border border-gray-100 p-8 text-center text-gray-500">
              No saved phrases yet. Open any lesson and click “Save Phrase.”
            </div>
          `}
        </div>
      </div>
    `;
    bindSharedControls(root, null, renderFavorites);
  }
  function renderCertificate() {
    const root = document.getElementById('page-app-certificate');
    if (!root) return;
    const routePath = window.location.hash.replace(/^#/, '');
    const selectedLevel = requestedLevel(routePath);
    const levelLessons = lessonsForLevel(selectedLevel);
    const completion = levelCompletion(selectedLevel);
    const unlocked = completion.complete;
    const levelName = selectedLevel === 1 ? 'Survival Travel' : (levelLessons[0]?.levelName || `Level ${selectedLevel}`);
    const nextLevel = Math.min(selectedLevel + 1, window.DarijaLevelAccess?.LEVEL_COUNT || 12);
    const nextLessonHref = selectedLevel === 1
      ? '#/app/lesson/1?level=2&bridge=level1-certificate'
      : appLessonsHref(nextLevel);
    root.innerHTML = `
      <div class="max-w-3xl mx-auto px-4 text-center">
        <div class="${unlocked ? 'bg-green-100' : 'bg-gray-200'} w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
          <span class="text-5xl">${unlocked ? '🏆' : '🔒'}</span>
        </div>
        <span class="inline-flex items-center gap-2 bg-blue-50 text-chefchaouen px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide mb-4">LEVEL ${escapeHtml(String(selectedLevel).padStart(2, '0'))} CERTIFICATE</span>
        <h1 class="text-3xl font-bold text-medina mb-4">Certificate of Completion</h1>
        <p class="text-lg text-gray-600 mb-8">Complete all 30 days of ${escapeHtml(levelName)} to unlock your Darija30 Level ${escapeHtml(selectedLevel)} certificate.</p>
        <div class="w-full bg-gray-200 rounded-full h-4 mb-2"><div class="bg-terracotta h-4 rounded-full" style="width:${completion.percent}%"></div></div>
        <p class="text-sm font-bold text-gray-500">${completion.completed}/30 Lessons Completed</p>

        ${unlocked ? `
          <section class="mt-8 rounded-3xl bg-white border border-green-100 shadow-lg p-6 md:p-8 text-left">
            <div class="text-center mb-6">
              <p class="text-xs font-black uppercase tracking-widest text-green-700 mb-2">Next step</p>
              <h2 class="text-2xl font-black text-medina mb-2">مبروك! شهادة Level ${escapeHtml(selectedLevel)} جاهزة.</h2>
              <p class="text-gray-600 max-w-2xl mx-auto">اختر هل تريد اختبار محادثة مباشر مع أستاذ مغربي، أو تجربة أول درس من المستوى التالي مجانًا.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <a href="#/pricing?service=teacher-test&level=${escapeHtml(selectedLevel)}" class="block rounded-2xl border-2 border-chefchaouen bg-blue-50 p-5 hover:bg-blue-100 transition">
                <p class="text-3xl mb-3">🎙️</p>
                <h3 class="font-black text-chefchaouen text-lg mb-2">Live Speaking Test</h3>
                <p class="text-sm text-blue-900">اختبار صوت وصورة مع أستاذ مغربي عبر WhatsApp/Video لاحقًا لتقييم النطق والاستعداد الواقعي.</p>
              </a>
              ${selectedLevel === 1 ? `
                <a href="${nextLessonHref}" data-unlock-level2-bridge class="block rounded-2xl border-2 border-green-500 bg-green-50 p-5 hover:bg-green-100 transition">
                  <p class="text-3xl mb-3">🎁</p>
                  <h3 class="font-black text-green-700 text-lg mb-2">Try Level 2 — Lesson 1 Free</h3>
                  <p class="text-sm text-green-900">قبل حجز الأستاذ أو شراء Level 2، جرّب أول درس من مستوى الضيافة والرياض مجانًا.</p>
                </a>
              ` : `
                <a href="${nextLessonHref}" class="block rounded-2xl border-2 border-green-500 bg-green-50 p-5 hover:bg-green-100 transition">
                  <p class="text-3xl mb-3">➡️</p>
                  <h3 class="font-black text-green-700 text-lg mb-2">Continue to Level ${escapeHtml(nextLevel)}</h3>
                  <p class="text-sm text-green-900">انتقل إلى المستوى التالي عندما تكون جاهزًا.</p>
                </a>
              `}
            </div>
          </section>
        ` : `
          <div class="mt-8 rounded-2xl bg-white border border-gray-100 p-6 text-left shadow-sm">
            <p class="text-sm font-extrabold uppercase tracking-wide text-chefchaouen mb-2">After completion</p>
            <h2 class="text-xl font-extrabold text-medina mb-2">Optional Live Darija Check</h2>
            <p class="text-sm text-gray-600">After the certificate opens, the learner can choose a live teacher test or continue to the next level.</p>
          </div>
        `}

        <a href="${escapeHtml(appLessonsHref(selectedLevel))}" class="inline-block mt-8 bg-chefchaouen hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition">${unlocked ? 'Back to Level Plan' : 'Keep Learning'}</a>
      </div>
    `;
    root.querySelector('[data-unlock-level2-bridge]')?.addEventListener('click', () => {
      writeLevel2BridgeUnlock();
    });
  }

  function renderForPath(path) {
    const basePath = routeBase(path);
    if (!String(basePath).startsWith('/app/lesson/')) {
      document.body.classList.remove('is-remember-standalone');
      document.body.classList.remove('is-weekly-wheel-embedded');
      document.body.classList.remove('is-weekly-wheel-fullscreen');
      document.body.classList.remove('has-locked-preview');
      const appNav = document.getElementById('app-nav');
      if (appNav) appNav.style.display = 'block';
    }
    if (basePath === '/free-lesson') renderFreeLesson();
    if (basePath === '/app/dashboard') renderDashboard();
    if (basePath === '/app/lessons') renderLessonsList();
    if (String(basePath).startsWith('/app/lesson/')) renderAppLesson(getRouteLessonId(path));
    if (basePath === '/app/weekly-wheel') renderWeeklyWheel();
    if (basePath === '/app/favorites') renderFavorites();
    if (basePath === '/app/certificate') renderCertificate();
  }

  window.DarijaLessonPlayer = {
    renderForPath,
    renderFreeLesson,
    renderDashboard,
    renderLessonsList,
    renderAppLesson,
    renderWeeklyWheel,
    renderFavorites,
    renderCertificate
  };
})();
