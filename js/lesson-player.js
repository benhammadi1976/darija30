(function () {
  const state = {
    phraseIndexByLesson: Object.create(null),
    practiceModeByLesson: Object.create(null),
    situationIndexByLesson: Object.create(null),
    appliedRoutePhraseByLesson: Object.create(null),
    freeLessonId: 'lesson-001',
    reviewIndex: 0
  };

  const userRecordingsByPhraseId = Object.create(null);

  const Store = () => window.DarijaProgress;

  function lessons() {
    return Array.isArray(window.DARIJA30_LESSONS) ? window.DARIJA30_LESSONS : [];
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function findLesson(identifier) {
    const all = lessons();
    if (!identifier) return all[0] || null;
    const clean = String(identifier).trim();
    const asNumber = Number(clean);
    return all.find((lesson) => (
      lesson.id === clean ||
      String(lesson.day) === clean ||
      (!Number.isNaN(asNumber) && Number(lesson.day) === asNumber)
    )) || all[0] || null;
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
    return all.find((item) => Number(item.day) === currentDay + 1) || null;
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
            <a href="#/app/lesson/${escapeHtml(lesson.day)}?view=learner" class="bg-blue-700 text-white px-3 py-2 rounded-xl text-xs font-black hover:bg-blue-800">View as learner</a>
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
    return isLearnerLockedLesson(lesson) && !adminCanOpenLockedLesson(path);
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
            <p class="text-gray-600 max-w-2xl mx-auto">You already saw the full Darija30 method in the 3 free lessons. Inside this locked lesson, each line becomes a full phrase page with Darija pronunciation, normal and slow audio, video dialogue, cultural intent, and quick practice.</p>
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
            <h2 class="text-2xl font-bold text-medina mb-2">Starter Pack will unlock all 30 lessons for $29 one time.</h2>
            <p class="text-gray-600 mb-5">Unlock the full lesson to turn these English needs into Moroccan Darija you can say in real situations.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-3">
              <a href="#/pricing" class="bg-terracotta hover:bg-red-700 text-white px-6 py-3 rounded-xl font-bold shadow-md transition">View Pricing</a>
              <a href="#/free-lesson" class="bg-white border border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-6 py-3 rounded-xl font-bold transition">Try Free Lessons First</a>
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
    const next = nextLesson(lesson);
    const bodyMarkup = `
      <div class="situation-card__body${renderOptions.slide ? ' situation-card__body--slide' : ''}">
        <div class="situation-card__meta">
          <span>Situation ${index + 1} / ${total}</span>
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

        ${renderOptions.slide ? `
          <div class="practice-slide__side-nav" aria-label="Practice navigation">
            <button type="button" class="practice-slide__nav-btn practice-slide__nav-btn--prev" data-situation-practice-prev ${index <= 0 ? 'disabled aria-disabled="true"' : ''} aria-label="Previous situation" title="Previous situation">&lt;</button>
            <button type="button" class="practice-slide__nav-btn practice-slide__nav-btn--next" data-situation-practice-next ${index >= total - 1 ? 'disabled aria-disabled="true"' : ''} aria-label="Next situation" title="Next situation">&gt;</button>
          </div>
          <div class="practice-slide__exit-row">
            <button type="button" class="practice-slide__exit-btn" data-return-to-last-phrase aria-label="Review phrase" title="Review phrase">⟲</button>
            ${next ? `<a class="practice-slide__exit-btn practice-slide__exit-btn--warm" href="#/app/lesson/${escapeHtml(next.day)}" data-start-next-day-lesson="${escapeHtml(next.id || next.day)}" aria-label="Start Day ${escapeHtml(next.day)} lesson" title="Start Day ${escapeHtml(next.day)} lesson">⏭</a>` : `<a class="practice-slide__exit-btn practice-slide__exit-btn--warm" href="#/app/lessons" aria-label="30-day plan" title="30-day plan">⌂</a>`}
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
          data-choice-attempts="0">
          <div class="situation-card__visual practice-slide__visual">
            ${visual ? `<img src="${escapeHtml(visual)}" alt="${escapeHtml(visualAlt)}" loading="lazy">` : `<div class="situation-card__placeholder"><span>🇲🇦</span><strong>${escapeHtml(lesson.title || 'Situation')}</strong><small>${escapeHtml(phrase.scenario || phrase.goal || '')}</small></div>`}
            <div class="practice-slide__topbar">
              <div>
                <span class="practice-slide__eyebrow">Do you remember?</span>
                <p class="practice-slide__instruction">You are in Morocco. What do you say?</p>
              </div>
              <div class="practice-slide__counter" aria-label="Situation ${index + 1} of ${total}">
                <strong>${index + 1}</strong><span>/ ${total}</span>
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
        data-choice-attempts="0">
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

  function passSituationChallenge(card, assisted = false) {
    fillSituationBubble(card, card.dataset.target || '');
    card.dataset.passed = '1';
    card.querySelector('[data-situation-choices]')?.classList.add('hidden');
    card.querySelectorAll('[data-situation-option]').forEach((button) => { button.disabled = true; });
    setSituationStatus(card, assisted ? 'Great! You remembered it.' : 'Great! You remembered it.', 'is-success');
    showMemoryCelebration(card);
    launchGoldenBurst(card);
    playMemorySuccessSound();
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
          <p class="lesson-completion-choice__copy">Test yourself in a big slide-style practice screen, or continue to the next day.</p>
        </div>
        <div class="lesson-completion-choice__actions">
          <button type="button" class="lesson-completion-choice__primary" data-open-situation-practice>Do you remember?</button>
          ${next ? `<a class="lesson-completion-choice__secondary" href="#/app/lesson/${escapeHtml(next.day)}">Continue to Day ${escapeHtml(next.day)}</a>` : `<a class="lesson-completion-choice__secondary" href="#/app/lessons">Back to the 30-day plan</a>`}
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
    if (isLearnerLockedLesson(lesson) && isAdminActive()) return '<span class="text-sm text-blue-700 font-bold">🔓 Admin • 🔒 learner</span>';
    if (isLearnerLockedLesson(lesson)) return '<span class="text-sm text-terracotta font-bold">🔒 Preview</span>';
    if (progress?.complete) return '<span class="text-green-600 font-bold">Done ✓</span>';
    if (progress?.started) return `<span class="text-chefchaouen font-bold">${progress.percent}%</span>`;
    return `<span class="text-sm ${lesson.isFree ? 'text-green-600 font-bold' : 'text-gray-400'}">${lesson.isFree ? 'Free' : '🔒'}</span>`;
  }

  function renderLessonsList() {
    const root = document.getElementById('lessonsListRoot');
    if (!root) return;

    const allLessons = lessons();
    const planStartKey = 'darija30_plan_start_date';
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
      { start: 1, end: 5, title: 'Fast Survival Start', description: 'Taxi, café, market, greetings, and polite first contact.' },
      { start: 6, end: 10, title: 'Core Confidence + Taxi', description: 'Introduce yourself, understand people, say yes/no, and manage taxi price/directions.' },
      { start: 11, end: 15, title: 'Transport, Café & Restaurant', description: 'Station, medina, custom orders, restaurant basics, bill and payment.' },
      { start: 16, end: 20, title: 'Food Needs & Shopping', description: 'Dietary needs, price questions, bargaining, choosing items, sizes and colors.' },
      { start: 21, end: 25, title: 'Hotel & Practical Help', description: 'Numbers, check-in, hotel problems, where things are, and basic help.' },
      { start: 26, end: 30, title: 'Culture & Final Survival', description: 'SIM/internet, warm phrases, polite refusal, small talk, and the final test.' }
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
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 mb-8">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
          <div>
            <span class="inline-flex items-center gap-2 bg-blue-50 text-chefchaouen px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide mb-3">📅 30-DAY TIMELINE</span>
            <h2 class="text-2xl font-black text-medina mb-2">One day. One lesson. Fast Morocco readiness.</h2>
            <p class="text-gray-600 max-w-2xl">This is not a slow “week course”. The learner gets a clear 30-day path from the subscription date. After purchase, all lessons should be accessible immediately; the dates are guidance, not a lock.</p>
          </div>
          <div class="bg-cream rounded-2xl border border-yellow-100 p-4 min-w-[260px]">
            <label for="planStartDate" class="block text-xs font-extrabold text-terracotta uppercase tracking-wide mb-2">Demo subscription start</label>
            <input id="planStartDate" type="date" value="${escapeHtml(savedStartDate)}" class="w-full rounded-xl border border-gray-200 px-3 py-2 font-bold text-medina bg-white">
            <p class="mt-2 text-sm text-gray-600">Start: <strong>${escapeHtml(formatDate(parseDate(savedStartDate)))}</strong> • Target finish: <strong>${escapeHtml(formatDate(finishDate))}</strong></p>
          </div>
        </div>
        <div class="grid sm:grid-cols-3 gap-3 mt-5 text-sm">
          <div class="rounded-xl bg-green-50 border border-green-100 p-3"><strong class="text-green-700">Free demo</strong><br><span class="text-gray-600">Days 1–3 prove the method.</span></div>
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
                  </div>
                </div>
                <div class="sm:text-right">
                  <span class="block text-xs font-bold text-gray-400">${escapeHtml(formatDate(lessonDate(section.start)))} → ${escapeHtml(formatDate(lessonDate(section.end)))}</span>
                  <span class="block text-xs font-extrabold text-chefchaouen mt-1">5 lessons • 25 phrase pages</span>
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
                      <a href="#/app/lesson/${encodeURIComponent(String(lesson.day || lesson.id))}${isAdminActive() && isLearnerLockedLesson(lesson) ? '?admin=1' : ''}" class="block bg-white p-4 rounded-xl shadow-sm border ${progress?.complete ? 'border-green-300' : isFree ? 'border-green-200 hover:border-green-400' : isLearnerLockedLesson(lesson) ? 'border-red-100 hover:border-terracotta' : 'border-gray-200'} transition flex items-center justify-between gap-4 group">
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
        <a href="#/app/lesson/${encodeURIComponent(String(next?.day || 1))}" class="shrink-0 bg-chefchaouen hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition shadow-sm">Start Lesson ${escapeHtml(next?.day || 1)}</a>
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
              <a href="#/app/lesson/${escapeHtml(lesson.day)}?phraseId=${encodeURIComponent(String(phrase.id || ''))}" class="text-sm text-chefchaouen font-medium hover:underline">Review</a>
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
      root.innerHTML = `<div class="max-w-4xl mx-auto px-4 py-8">${lockedLessonPreviewMarkup(lesson)}</div>`;
      window.DarijaAudio?.bindAudioButtons(root);
      return;
    }
    applyRoutePhraseTarget(lesson, routePath);
    Store()?.markLessonVisited(lesson?.id);
    const index = currentPhraseIndex(lesson);
    const phrase = lesson?.phrases?.[index] || firstPhrase(lesson);
    const progress = Store()?.lessonProgress(lesson);
    const practiceOpen = isLessonPracticeOpen(lesson);

    document.body.classList.toggle('is-remember-standalone', Boolean(practiceOpen));
    const appNav = document.getElementById('app-nav');
    if (appNav) appNav.style.display = practiceOpen ? 'none' : 'block';

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
        <button type="button" data-favorite-phrase-id="${escapeHtml(phrase.id)}" data-lesson-id="${escapeHtml(lesson.id)}" class="${active ? 'text-red-500' : 'text-gray-300'} hover:text-red-500 p-2 text-2xl" title="Toggle favorite">♥</button>
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

  function renderReview() {
    const root = document.getElementById('page-app-review');
    if (!root) return;
    const entries = Store()?.reviewEntries(lessons()) || [];
    const max = Math.max(entries.length - 1, 0);
    state.reviewIndex = Math.min(Math.max(state.reviewIndex, 0), max);
    const entry = entries[state.reviewIndex];
    if (!entry) {
      root.innerHTML = `<div class="max-w-3xl mx-auto px-4 text-center"><div class="bg-white rounded-2xl border border-gray-100 p-8 text-gray-500">No phrases to review yet.</div></div>`;
      return;
    }
    const { lesson, phrase } = entry;
    const rating = Store()?.getState()?.reviewRatings?.[phrase.id]?.rating;
    root.innerHTML = `
      <div class="max-w-3xl mx-auto px-4 text-center">
        <h1 class="text-3xl font-bold text-medina mb-4">Daily Review</h1>
        <p class="text-gray-600 mb-8">Review phrases you learned or saved. No pressure, just repetition.</p>
        <div class="bg-white p-8 md:p-10 rounded-3xl shadow-md border border-gray-100">
          <p class="text-sm text-gray-500 mb-2">Scenario</p>
          <p class="text-lg text-gray-700 mb-8">${escapeHtml(phrase.scenario)}</p>
          <p class="text-sm text-gray-500 mb-3">Say this in Friendly Latin Darija:</p>
          <h2 class="text-3xl font-bold text-medina mb-8">“${escapeHtml(phrase.meaning || phrase.english)}”</h2>
          <button data-reveal-review class="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-4 px-8 rounded-xl transition w-full max-w-md mx-auto ${rating ? 'hidden' : ''}">Reveal Answer</button>
          <div data-review-answer class="${rating ? '' : 'hidden'} mt-8">
            <div class="border-t border-gray-200 pt-8 mb-8">
              <p class="text-4xl font-bold text-chefchaouen mb-2 font-mono">${escapeHtml(phrase.friendlyLatin)}</p>
              <p class="text-gray-500">${escapeHtml(phrase.intent || '')}</p>
              <button data-audio-play data-speed="1" data-audio-url="${escapeHtml(phrase.audioNormal)}" class="mt-5 inline-flex items-center gap-2 bg-chefchaouen hover:bg-blue-700 text-white px-5 py-2 rounded-full font-bold transition">▶ Listen</button>
            </div>
            <p class="text-sm font-bold text-gray-500 mb-4">How well did you remember?</p>
            <div class="flex flex-col sm:flex-row justify-center gap-3">
              ${['Forgot', 'Hard', 'Easy'].map((label) => `<button data-review-rating="${label.toLowerCase()}" data-phrase-id="${escapeHtml(phrase.id)}" class="${rating === label.toLowerCase() ? 'ring-2 ring-chefchaouen' : ''} ${label === 'Forgot' ? 'bg-red-100 hover:bg-red-200 text-red-700' : label === 'Hard' ? 'bg-yellow-100 hover:bg-yellow-200 text-yellow-700' : 'bg-green-100 hover:bg-green-200 text-green-700'} px-6 py-3 rounded-xl font-bold">${label}</button>`).join('')}
            </div>
          </div>
        </div>
        <div class="mt-8 flex justify-between items-center">
          <button data-review-prev class="px-5 py-2 text-gray-500 font-bold hover:bg-gray-100 rounded-lg" ${state.reviewIndex <= 0 ? 'disabled' : ''}>Previous</button>
          <span class="text-sm text-gray-400">${state.reviewIndex + 1} / ${entries.length}</span>
          <button data-review-next class="px-5 py-2 text-gray-500 font-bold hover:bg-gray-100 rounded-lg" ${state.reviewIndex >= max ? 'disabled' : ''}>Next</button>
        </div>
      </div>
    `;
    window.DarijaAudio?.bindAudioButtons(root);
    root.querySelector('[data-reveal-review]')?.addEventListener('click', () => {
      root.querySelector('[data-review-answer]')?.classList.remove('hidden');
      root.querySelector('[data-reveal-review]')?.classList.add('hidden');
    });
    root.querySelectorAll('[data-review-rating]').forEach((button) => {
      button.addEventListener('click', () => {
        Store()?.saveReviewRating(button.dataset.phraseId, button.dataset.reviewRating);
        renderReview();
      });
    });
    root.querySelector('[data-review-prev]')?.addEventListener('click', () => {
      state.reviewIndex -= 1;
      renderReview();
    });
    root.querySelector('[data-review-next]')?.addEventListener('click', () => {
      state.reviewIndex += 1;
      renderReview();
    });
  }

  function renderCertificate() {
    const root = document.getElementById('page-app-certificate');
    if (!root) return;
    const summary = Store()?.getSummary(lessons()) || { completedCount: 0, courseProgress: 0 };
    const unlocked = summary.completedCount >= 30;
    root.innerHTML = `
      <div class="max-w-2xl mx-auto px-4 text-center">
        <div class="${unlocked ? 'bg-green-100' : 'bg-gray-200'} w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
          <span class="text-5xl">${unlocked ? '🏆' : '🔒'}</span>
        </div>
        <h1 class="text-3xl font-bold text-medina mb-4">Certificate of Completion</h1>
        <p class="text-lg text-gray-600 mb-8">Complete all 30 days of the course to unlock your official Darija30 survival certificate.</p>
        <div class="w-full bg-gray-200 rounded-full h-4 mb-2"><div class="bg-terracotta h-4 rounded-full" style="width:${summary.courseProgress}%"></div></div>
        <p class="text-sm font-bold text-gray-500">${summary.completedCount}/30 Lessons Completed</p>
        <a href="#/app/lessons" class="inline-block mt-8 bg-chefchaouen hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition">Keep Learning</a>
      </div>
    `;
  }

  function renderForPath(path) {
    if (!String(path).startsWith('/app/lesson/')) {
      document.body.classList.remove('is-remember-standalone');
    }
    if (path === '/free-lesson') renderFreeLesson();
    if (path === '/app/dashboard') renderDashboard();
    if (path === '/app/lessons') renderLessonsList();
    if (String(path).startsWith('/app/lesson/')) renderAppLesson(getRouteLessonId(path));
    if (path === '/app/review') renderReview();
    if (path === '/app/favorites') renderFavorites();
    if (path === '/app/certificate') renderCertificate();
  }

  window.DarijaLessonPlayer = {
    renderForPath,
    renderFreeLesson,
    renderDashboard,
    renderLessonsList,
    renderAppLesson,
    renderFavorites,
    renderReview,
    renderCertificate
  };
})();
