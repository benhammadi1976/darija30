(function () {
  const defaultAudio = {
    normal: 'assets/audio/day01/taxi-001-normal.mp3',
    slow: 'assets/audio/day01/taxi-001-slow.mp3'
  };

  let currentAudio = null;
  let currentButton = null;
  let noticeTimer = null;

  function getAudioUrl(speed, button) {
    if (button && button.hasAttribute('data-audio-url')) return button.dataset.audioUrl || '';
    return Number(speed) === 0.5 ? defaultAudio.slow : defaultAudio.normal;
  }

  function uniqueValues(values) {
    const seen = new Set();
    return values.filter((value) => {
      const clean = String(value || '').trim();
      if (!clean || seen.has(clean)) return false;
      seen.add(clean);
      return true;
    });
  }

  function getAudioCandidates(speed, button) {
    const primary = getAudioUrl(speed, button);
    const supabaseCandidates = window.DarijaSupabaseMedia?.audioCandidates?.(primary) || [];
    return uniqueValues([...supabaseCandidates, primary]);
  }

  function ensureNoticeRegion() {
    let region = document.getElementById('audioNotice');
    if (region) return region;

    region = document.createElement('div');
    region.id = 'audioNotice';
    region.className = 'audio-notice';
    region.setAttribute('role', 'status');
    region.setAttribute('aria-live', 'polite');
    document.body.appendChild(region);
    return region;
  }

  function showNotice(message, tone = 'info', ms = 3500) {
    const region = ensureNoticeRegion();
    region.className = `audio-notice audio-notice--${tone} audio-notice--visible`;
    region.textContent = message;

    window.clearTimeout(noticeTimer);
    noticeTimer = window.setTimeout(() => {
      region.classList.remove('audio-notice--visible');
    }, ms);
  }

  function cacheOriginalButton(button) {
    if (!button || button.dataset.originalHtml) return;
    button.dataset.originalHtml = button.innerHTML;
  }

  function isIconOnlyAudioButton(button) {
    return button?.dataset?.audioIconOnly === 'true';
  }

  function setButtonState(button, label, stateClass) {
    if (!button) return;
    cacheOriginalButton(button);
    button.classList.remove('audio-is-playing', 'audio-is-missing');
    if (stateClass) button.classList.add(stateClass);
    if (isIconOnlyAudioButton(button)) {
      button.setAttribute('aria-label', label.replace(/^[^A-Za-z0-9]+\s*/, '') || 'Listen to model');
      button.setAttribute('title', label.replace(/^[^A-Za-z0-9]+\s*/, '') || 'Listen to model');
      return;
    }
    button.innerHTML = label;
  }

  function resetButton(button) {
    if (!button) return;
    const original = button.dataset.originalHtml;
    if (original) button.innerHTML = original;
    if (isIconOnlyAudioButton(button)) {
      button.setAttribute('aria-label', 'Listen to model');
      button.setAttribute('title', 'Listen to model');
    }
    button.classList.remove('audio-is-playing', 'audio-is-missing');
  }

  function stopCurrentAudio() {
    if (!currentAudio) return;
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }

  function markAudioMissing(button, audioUrl) {
    setButtonState(button, '🎙️ Recording needed', 'audio-is-missing');
    showNotice(`Audio is not available yet. Admin should record or upload it first. (${audioUrl})`, 'warning', 5200);
    window.setTimeout(() => resetButton(button), 1800);
  }

  function play(speed = 1, button = null) {
    const playbackRate = Number(speed) || 1;
    const candidates = getAudioCandidates(playbackRate, button);

    if (!candidates.length) {
      markAudioMissing(button, 'missing audio path');
      return Promise.resolve(false);
    }

    if (currentButton && currentButton !== button) resetButton(currentButton);
    stopCurrentAudio();

    currentButton = button;
    setButtonState(button, playbackRate === 0.5 ? '🐌 Loading slow...' : '🔊 Loading...', 'audio-is-playing');

    const tryCandidate = (index) => {
      const audioUrl = candidates[index];
      if (!audioUrl) {
        markAudioMissing(button, candidates[candidates.length - 1] || 'missing audio path');
        return Promise.resolve(false);
      }

      const audio = new Audio(audioUrl);
      currentAudio = audio;
      audio.preload = 'auto';
      audio.playbackRate = playbackRate;

      const onPlaying = () => {
        setButtonState(button, playbackRate === 0.5 ? '🐌 Slow playing...' : '🔊 Playing...', 'audio-is-playing');
      };

      const onEnded = () => {
        resetButton(button);
        if (currentAudio === audio) currentAudio = null;
        if (currentButton === button) currentButton = null;
      };

      const onError = () => {
        if (currentAudio === audio) currentAudio = null;
        console.info('Darija30 audio candidate unavailable:', audioUrl);
        tryCandidate(index + 1);
      };

      audio.addEventListener('playing', onPlaying, { once: true });
      audio.addEventListener('ended', onEnded, { once: true });
      audio.addEventListener('error', onError, { once: true });

      return audio.play().catch((error) => {
        console.info('Darija30 audio could not start:', audioUrl, error);
        return tryCandidate(index + 1);
      });
    };

    return tryCandidate(0);
  }

  function bindAudioButtons(root = document) {
    root.querySelectorAll('[data-audio-play]').forEach((button) => {
      if (button.dataset.audioBound === 'true') return;
      button.dataset.audioBound = 'true';
      button.addEventListener('click', () => play(button.dataset.speed, button));
    });
  }

  window.DarijaAudio = {
    play,
    bindAudioButtons,
    showNotice
  };
})();
