(function () {
  const STORAGE_KEY = 'darija30_progress_v1';

  function defaultState() {
    return {
      version: 1,
      completedLessons: {},
      learnedPhrases: {},
      lessonVisits: {},
      favorites: {},
      quizAnswers: {},
      reviewRatings: {},
      lastOpenedLessonId: null,
      updatedAt: null
    };
  }

  function safeParse(json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      return null;
    }
  }

  function getState() {
    const stored = safeParse(window.localStorage?.getItem(STORAGE_KEY) || '');
    return Object.assign(defaultState(), stored || {});
  }

  function saveState(nextState) {
    const state = Object.assign(defaultState(), nextState || {});
    state.updatedAt = new Date().toISOString();
    window.localStorage?.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('darija30:progress-change', { detail: state }));
    return state;
  }

  function update(mutator) {
    const state = getState();
    mutator(state);
    return saveState(state);
  }

  function lessons() {
    return Array.isArray(window.DARIJA30_LESSONS) ? window.DARIJA30_LESSONS : [];
  }

  function allPhrases(allLessons = lessons()) {
    return allLessons.flatMap((lesson) => (
      (lesson.phrases || []).map((phrase) => ({ lesson, phrase }))
    ));
  }

  function findPhrase(phraseId, allLessons = lessons()) {
    return allPhrases(allLessons).find((entry) => entry.phrase.id === phraseId) || null;
  }

  function lessonPhraseIds(lesson) {
    return (lesson?.phrases || []).map((phrase) => phrase.id);
  }

  function isLessonComplete(lesson, state = getState()) {
    if (!lesson) return false;
    if (state.completedLessons?.[lesson.id]) return true;
    const ids = lessonPhraseIds(lesson);
    return ids.length > 0 && ids.every((id) => Boolean(state.learnedPhrases?.[id]));
  }

  function lessonProgress(lesson, state = getState()) {
    const ids = lessonPhraseIds(lesson);
    const learned = ids.filter((id) => Boolean(state.learnedPhrases?.[id])).length;
    const total = ids.length;
    const complete = total > 0 && learned >= total;
    const visited = Boolean(state.lessonVisits?.[lesson?.id]);
    return {
      learned,
      total,
      percent: total ? Math.round((learned / total) * 100) : 0,
      complete,
      started: visited || learned > 0 || complete
    };
  }

  function markLessonVisited(lessonId) {
    if (!lessonId) return getState();
    return update((state) => {
      state.lessonVisits[lessonId] = new Date().toISOString();
      state.lastOpenedLessonId = lessonId;
    });
  }

  function markPhraseLearned(phraseId, lessonId) {
    if (!phraseId) return getState();
    return update((state) => {
      state.learnedPhrases[phraseId] = new Date().toISOString();
      if (lessonId) {
        state.lessonVisits[lessonId] = state.lessonVisits[lessonId] || new Date().toISOString();
        const lesson = lessons().find((item) => item.id === lessonId);
        if (lesson) {
          const ids = lessonPhraseIds(lesson);
          if (ids.length && ids.every((id) => Boolean(state.learnedPhrases[id]))) {
            state.completedLessons[lessonId] = new Date().toISOString();
          }
        }
      }
    });
  }

  function toggleFavorite(phraseId, lessonId) {
    if (!phraseId) return getState();
    return update((state) => {
      if (state.favorites[phraseId]) {
        delete state.favorites[phraseId];
      } else {
        state.favorites[phraseId] = {
          phraseId,
          lessonId: lessonId || findPhrase(phraseId)?.lesson.id || null,
          savedAt: new Date().toISOString()
        };
      }
    });
  }

  function isFavorite(phraseId, state = getState()) {
    return Boolean(state.favorites?.[phraseId]);
  }

  function favoriteEntries(allLessons = lessons(), state = getState()) {
    return Object.keys(state.favorites || {})
      .map((phraseId) => findPhrase(phraseId, allLessons))
      .filter(Boolean);
  }

  function learnedEntries(allLessons = lessons(), state = getState()) {
    return Object.keys(state.learnedPhrases || {})
      .map((phraseId) => findPhrase(phraseId, allLessons))
      .filter(Boolean);
  }

  function reviewEntries(allLessons = lessons(), state = getState()) {
    const combined = new Map();
    learnedEntries(allLessons, state).forEach((entry) => combined.set(entry.phrase.id, entry));
    favoriteEntries(allLessons, state).forEach((entry) => combined.set(entry.phrase.id, entry));
    if (!combined.size) {
      allPhrases(allLessons).slice(0, 5).forEach((entry) => combined.set(entry.phrase.id, entry));
    }
    return Array.from(combined.values());
  }

  function saveQuizAnswer(questionId, selected, isCorrect) {
    if (!questionId) return getState();
    return update((state) => {
      state.quizAnswers[questionId] = {
        selected,
        isCorrect: Boolean(isCorrect),
        answeredAt: new Date().toISOString()
      };
    });
  }

  function saveReviewRating(phraseId, rating) {
    if (!phraseId) return getState();
    return update((state) => {
      state.reviewRatings[phraseId] = {
        rating,
        ratedAt: new Date().toISOString()
      };
    });
  }

  function getSummary(allLessons = lessons(), state = getState()) {
    const phraseTotal = allPhrases(allLessons).length;
    const learnedCount = Object.keys(state.learnedPhrases || {}).length;
    const completedCount = allLessons.filter((lesson) => isLessonComplete(lesson, state)).length;
    const favoriteCount = Object.keys(state.favorites || {}).length;
    const nextLesson = allLessons.find((lesson) => !isLessonComplete(lesson, state)) || allLessons[0] || null;
    return {
      phraseTotal,
      learnedCount,
      completedCount,
      favoriteCount,
      lessonTotal: allLessons.length,
      courseProgress: allLessons.length ? Math.round((completedCount / 30) * 100) : 0,
      freeProgress: allLessons.length ? Math.round((completedCount / allLessons.length) * 100) : 0,
      nextLesson
    };
  }

  function reset() {
    return saveState(defaultState());
  }

  window.DarijaProgress = {
    getState,
    saveState,
    update,
    allPhrases,
    findPhrase,
    lessonProgress,
    isLessonComplete,
    markLessonVisited,
    markPhraseLearned,
    toggleFavorite,
    isFavorite,
    favoriteEntries,
    learnedEntries,
    reviewEntries,
    saveQuizAnswer,
    saveReviewRating,
    getSummary,
    reset
  };
})();
