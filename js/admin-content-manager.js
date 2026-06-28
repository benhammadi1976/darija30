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
    selectedDay: 1,
    selectedPhraseId: null,
    filter: 'all'
  };

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


  function isAdminActive() {
    return Boolean(window.DarijaAdminSession?.isActive?.());
  }

  function adminGate(path) {
    const pageId = path === '/admin/lessons' ? 'page-admin-lessons'
      : path === '/admin/phrases' ? 'page-admin-phrases'
      : path === '/admin/audio' ? 'page-admin-audio'
      : path === '/admin/users' ? 'page-admin-users'
      : path === '/admin/payments' ? 'page-admin-payments'
      : 'page-admin-dashboard';
    const root = document.getElementById(pageId);
    if (!root) return;
    root.innerHTML = `
      <div class="max-w-3xl mx-auto px-4 py-16" dir="rtl">
        <div class="rounded-3xl bg-white border border-gray-200 shadow-xl p-8 text-center">
          <div class="w-16 h-16 mx-auto rounded-2xl bg-red-50 text-terracotta flex items-center justify-center text-4xl mb-5">🔐</div>
          <span class="inline-flex rounded-full bg-gray-100 text-gray-600 border border-gray-200 px-4 py-1 text-xs font-extrabold uppercase tracking-wide mb-4">Static Admin Preview</span>
          <h1 class="text-3xl font-black text-gray-900 mb-3">دخول الأدمين التجريبي</h1>
          <p class="text-gray-600 mb-6 max-w-xl mx-auto">قبل Backend وقاعدة البيانات، هذا زر تجريبي فقط لتفعيل رؤية الأدمين. عندما تخرج، يرجع الموقع إلى جهة المتعلم/الزائر وتعود الدروس المقفلة إلى Preview محدود.</p>
          <div class="grid sm:grid-cols-2 gap-3 mb-6 text-sm text-right">
            <div class="rounded-2xl bg-green-50 border border-green-100 p-4"><p class="font-extrabold text-green-800">داخل الأدمين</p><p class="text-green-900">ترى المحتوى الكامل + القفل واضح أنه مفعل للمتعلمين.</p></div>
            <div class="rounded-2xl bg-blue-50 border border-blue-100 p-4"><p class="font-extrabold text-blue-800">بعد الخروج</p><p class="text-blue-900">ترجع كزائر/متعلم، والدروس المدفوعة تظهر Preview فقط.</p></div>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <button type="button" data-admin-login-demo class="bg-terracotta hover:bg-red-700 text-white px-6 py-3 rounded-xl font-extrabold transition">دخول كأدمين تجريبي</button>
            <a href="#/app/lessons" class="bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-xl font-extrabold transition">الدخول كمتعلم</a>
          </div>
        </div>
      </div>
    `;
  }

  function allPhrases() {
    return lessons().flatMap((lesson) => (lesson.phrases || []).map((phrase, index) => ({ lesson, phrase, index })));
  }

  function firstPhrase(lesson) {
    return lesson?.phrases?.[0] || null;
  }

  function findLesson(dayOrId) {
    const clean = String(dayOrId ?? state.selectedDay ?? '1');
    return lessons().find((lesson) => String(lesson.day) === clean || lesson.id === clean) || lessons()[0] || null;
  }

  function findPhrase(id) {
    const found = allPhrases().find((entry) => entry.phrase.id === id);
    if (found) return found;
    const lesson = findLesson(state.selectedDay);
    return { lesson, phrase: firstPhrase(lesson), index: 0 };
  }

  function audioStatus(path) {
    if (!path) return { label: 'غير محدد', tone: 'gray' };
    return RECORDED_AUDIO.has(path)
      ? { label: 'موجود', tone: 'green' }
      : { label: 'ينتظر التسجيل', tone: 'yellow' };
  }

  function videoStatus(path) {
    if (!path) return { label: 'غير محدد بعد', tone: 'gray' };
    return READY_VIDEOS.has(path)
      ? { label: 'موجود', tone: 'green' }
      : { label: 'ينتظر الفيديو', tone: 'yellow' };
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
    return `assets/audio/day${day}/${phraseId}-${kind === 'slow' ? 'slow' : 'normal'}.mp3`;
  }

  function adminAudioRecorderCard(lesson, phrase, kind) {
    const label = kind === 'slow' ? 'Slow audio' : 'Normal audio';
    const targetPath = buildAdminAudioTargetPath(lesson, phrase, kind);
    const status = audioStatus(targetPath);
    return `
      <article class="admin-record-mp3-card rounded-2xl border border-gray-200 bg-white p-4" data-admin-mp3-recorder data-admin-mp3-kind="${escapeHtml(kind)}" data-admin-mp3-path="${escapeHtml(targetPath)}">
        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
          <div>
            <p class="text-[11px] font-black uppercase tracking-wide text-terracotta">Admin teacher voice</p>
            <h3 class="text-lg font-black text-gray-900">${escapeHtml(label)}</h3>
            <p class="text-xs text-gray-500">سجل صوت المعلم، ثم حمّل الملف واستعمل المسار الرسمي.</p>
          </div>
          ${badge(status.label, status.tone)}
        </div>
        <div class="admin-record-mp3-card__path rounded-xl bg-gray-50 border border-gray-200 p-3 mb-3" dir="ltr">
          <p class="text-[11px] font-extrabold uppercase tracking-wide text-gray-400 mb-1">Final MP3 target path</p>
          <code data-admin-record-path class="block text-xs text-gray-800 break-all">${escapeHtml(targetPath)}</code>
        </div>
        <div class="grid sm:grid-cols-2 gap-2 mb-3" dir="ltr">
          <button type="button" data-admin-record-start class="admin-record-mp3-btn admin-record-mp3-btn--start">● Record ${escapeHtml(kind)}</button>
          <button type="button" data-admin-record-stop class="admin-record-mp3-btn admin-record-mp3-btn--stop" disabled>■ Stop</button>
          <button type="button" data-admin-record-play class="admin-record-mp3-btn admin-record-mp3-btn--play" disabled>▶ Play</button>
          <button type="button" data-admin-record-download class="admin-record-mp3-btn admin-record-mp3-btn--download" disabled>⬇ Download</button>
          <button type="button" data-admin-record-copy-path class="admin-record-mp3-btn admin-record-mp3-btn--copy sm:col-span-2">Copy final path</button>
        </div>
        <audio data-admin-record-audio class="hidden"></audio>
        <p data-admin-record-status class="admin-record-mp3-status">Ready. Record the teacher voice for this phrase.</p>
        <p class="admin-record-mp3-note">مهم: إذا كان المتصفح لا يدعم إخراج MP3 الحقيقي، سيتم تحميل ملف المصدر بصيغته الأصلية، ثم تحوّله إلى MP3 وتضعه في المسار أعلاه. لن نسمي ملفاً غير MP3 باسم MP3 كذباً.</p>
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

  function bindAdminAudioRecorders(root) {
    root.querySelectorAll('[data-admin-mp3-recorder]').forEach((card) => {
      card.querySelector('[data-admin-record-start]')?.addEventListener('click', () => startAdminAudioRecording(card));
      card.querySelector('[data-admin-record-stop]')?.addEventListener('click', () => stopAdminAudioRecording(card));
      card.querySelector('[data-admin-record-play]')?.addEventListener('click', () => playAdminAudioRecording(card));
      card.querySelector('[data-admin-record-download]')?.addEventListener('click', () => downloadAdminAudioRecording(card));
      card.querySelector('[data-admin-record-copy-path]')?.addEventListener('click', async () => {
        const path = card.dataset.adminMp3Path || '';
        try {
          await navigator.clipboard?.writeText(path);
          setAdminRecorderStatus(card, `Copied final path: ${path}`, 'is-success');
        } catch (error) {
          setAdminRecorderStatus(card, `Copy manually: ${path}`, 'is-warning');
        }
      });
    });
  }

  function mediaSummary() {
    const entries = allPhrases();
    const total = entries.length;
    const normalReady = entries.filter(({ phrase }) => RECORDED_AUDIO.has(phrase.audioNormal)).length;
    const slowReady = entries.filter(({ phrase }) => RECORDED_AUDIO.has(phrase.audioSlow)).length;
    const videoReady = entries.filter(({ phrase }) => READY_VIDEOS.has(phrase.sceneVideo)).length;
    const visualReady = entries.filter(({ phrase }) => Boolean(phrase.sceneVisual)).length;
    return { total, normalReady, slowReady, videoReady, visualReady };
  }

  const ADMIN_AUDIO_OPEN_STORAGE_KEY = 'darija30_admin_audio_open_days';

  function readAdminAudioOpenDays() {
    try {
      const saved = JSON.parse(localStorage.getItem(ADMIN_AUDIO_OPEN_STORAGE_KEY) || '[]');
      if (Array.isArray(saved)) return new Set(saved.map(String));
    } catch (error) {
      // Ignore corrupted localStorage and fall back to a clean default.
    }
    return new Set(['1']);
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
    const normal = phrases.filter((phrase) => RECORDED_AUDIO.has(phrase.audioNormal)).length;
    const slow = phrases.filter((phrase) => RECORDED_AUDIO.has(phrase.audioSlow)).length;
    const videos = phrases.filter((phrase) => READY_VIDEOS.has(phrase.sceneVideo)).length;
    const visuals = phrases.filter((phrase) => Boolean(phrase.sceneVisual)).length;
    const complete = total > 0 && normal === total && slow === total && videos === total;
    return { total, normal, slow, videos, visuals, complete };
  }

  function renderAudioPhraseRow(lesson, phrase, index) {
    const n = audioStatus(phrase.audioNormal);
    const s = audioStatus(phrase.audioSlow);
    const v = videoStatus(phrase.sceneVideo);
    return `
      <tr class="hover:bg-gray-50 align-top">
        <td class="p-3 font-black text-terracotta">${index + 1}</td>
        <td class="p-3">
          <p class="font-mono font-extrabold" dir="ltr">${escapeHtml(phrase.friendlyLatin)}</p>
          <p class="text-xs text-gray-500">${escapeHtml(phrase.english)}</p>
        </td>
        <td class="p-3">${badge(n.label, n.tone)}<code class="block text-[11px] text-gray-500 mt-1 break-all" dir="ltr">${escapeHtml(phrase.audioNormal)}</code></td>
        <td class="p-3">${badge(s.label, s.tone)}<code class="block text-[11px] text-gray-500 mt-1 break-all" dir="ltr">${escapeHtml(phrase.audioSlow)}</code></td>
        <td class="p-3">${badge(v.label, v.tone)}<code class="block text-[11px] text-gray-500 mt-1 break-all" dir="ltr">${escapeHtml(phrase.sceneVideo || 'Not assigned yet')}</code></td>
        <td class="p-3"><a href="#/app/lesson/${escapeHtml(lesson.day)}?admin=1" class="text-blue-700 font-bold hover:underline">عرض</a></td>
      </tr>
    `;
  }

  function renderAudioDayGroup(lesson, openDays) {
    const stats = lessonMediaStats(lesson);
    const dayKey = String(lesson.day);
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
                <p class="text-xs font-black text-terracotta uppercase tracking-wide">Day ${escapeHtml(lesson.day)} • ${stats.total} phrases</p>
                <h2 class="text-xl font-black text-gray-900">${escapeHtml(lesson.title)}</h2>
                <p class="text-sm text-gray-500 mt-1">${escapeHtml(lesson.situation || lesson.module || '')}</p>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              ${badge(`${stats.normal}/${stats.total} Normal`, stats.normal === stats.total ? 'green' : 'yellow')}
              ${badge(`${stats.slow}/${stats.total} Slow`, stats.slow === stats.total ? 'green' : 'yellow')}
              ${badge(`${stats.videos}/${stats.total} Video`, stats.videos ? 'green' : 'gray')}
              ${badge(`${stats.visuals}/${stats.total} Visual`, stats.visuals ? 'blue' : 'gray')}
              ${badge(statusText, statusTone)}
            </div>
          </div>
        </button>
        <div class="admin-audio-day__panel ${isOpen ? '' : 'hidden'}" data-admin-audio-panel>
          <div class="overflow-x-auto border-t border-gray-100">
            <table class="w-full text-sm text-right">
              <thead class="bg-gray-50 text-gray-500">
                <tr><th class="p-3">#</th><th class="p-3">الجملة</th><th class="p-3">Normal</th><th class="p-3">Slow</th><th class="p-3">Video</th><th class="p-3">Learner</th></tr>
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
              <p>✅ يرى خريطة الدروس والجمل قبل بناء Admin حقيقي.</p>
            </div>
            <a href="#/admin/lessons" class="inline-flex bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold transition">افتح إدارة الدروس</a>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          ${statCard('الدروس', lessons().length, '30 lesson map', 'blue')}
          ${statCard('الجمل', summary.total, '5 phrases each', 'purple')}
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

  function renderLessons() {
    const root = document.getElementById('page-admin-lessons');
    if (!root) return;
    const selected = findLesson(state.selectedDay);
    root.innerHTML = `
      <div class="max-w-7xl mx-auto px-4" dir="rtl">
        ${adminHeader('إدارة الدروس — رؤية الأدمين', 'هنا ترى خريطة 30 درس كما ستدار لاحقاً من لوحة حقيقية. كل درس له رابط معاينة كمتعلم، ومسارات الصوت والفيديو والصورة.')}
        <div class="grid lg:grid-cols-[1.15fr_0.85fr] gap-6">
          <div class="rounded-3xl bg-white border border-gray-200 shadow-sm overflow-hidden">
            <div class="p-5 border-b border-gray-100 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div><h2 class="text-xl font-extrabold text-gray-900">كل الدروس</h2><p class="text-sm text-gray-500">اضغط على درس لرؤية تفاصيله من جهة الأدمين.</p></div>
              <div class="flex gap-2" dir="ltr">
                <button type="button" data-admin-filter="all" class="admin-filter-btn ${state.filter === 'all' ? 'bg-terracotta text-white' : 'bg-white text-terracotta border border-terracotta'} px-3 py-2 rounded-xl text-sm font-bold">All</button>
                <button type="button" data-admin-filter="missing" class="admin-filter-btn ${state.filter === 'missing' ? 'bg-terracotta text-white' : 'bg-white text-terracotta border border-terracotta'} px-3 py-2 rounded-xl text-sm font-bold">Need Media</button>
              </div>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full text-sm text-right">
                <thead class="bg-gray-50 text-gray-500">
                  <tr><th class="p-3">اليوم</th><th class="p-3">الدرس</th><th class="p-3">الجمل</th><th class="p-3">الصوت</th><th class="p-3">الفيديو</th><th class="p-3">عرض</th></tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  ${lessonRows().join('')}
                </tbody>
              </table>
            </div>
          </div>
          ${lessonDetail(selected)}
        </div>
      </div>
    `;
    bindAdminControls(root);
  }

  function lessonRows() {
    return lessons().filter((lesson) => {
      if (state.filter !== 'missing') return true;
      return lesson.phrases.some((p) => !RECORDED_AUDIO.has(p.audioNormal) || !RECORDED_AUDIO.has(p.audioSlow) || !READY_VIDEOS.has(p.sceneVideo));
    }).map((lesson) => {
      const phraseCount = lesson.phrases?.length || 0;
      const normal = lesson.phrases.filter((p) => RECORDED_AUDIO.has(p.audioNormal)).length;
      const slow = lesson.phrases.filter((p) => RECORDED_AUDIO.has(p.audioSlow)).length;
      const videos = lesson.phrases.filter((p) => READY_VIDEOS.has(p.sceneVideo)).length;
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
          <a href="#/admin/phrases" data-admin-go-phrases="${escapeHtml(first?.id || '')}" class="text-center bg-white border border-terracotta text-terracotta hover:bg-terracotta hover:text-white px-4 py-3 rounded-xl font-bold transition">إدارة الجمل</a>
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

  function renderPhrases() {
    const root = document.getElementById('page-admin-phrases');
    if (!root) return;
    const selected = findPhrase(state.selectedPhraseId);
    const currentLesson = selected.lesson || findLesson(state.selectedDay);
    const currentPhrase = selected.phrase || firstPhrase(currentLesson);
    root.innerHTML = `
      <div class="max-w-7xl mx-auto px-4" dir="rtl">
        ${adminHeader('إدارة الجمل — نموذج الإدخال قبل Backend', 'هنا ترى الحقول التي سيحتاجها الأدمين لاحقاً لإضافة الجمل. حالياً هذه قراءة/معاينة من ملف lessons-data.js وليست حفظاً في قاعدة بيانات.')}
        <div class="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
          <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6">
            <h2 class="text-xl font-extrabold text-gray-900 mb-4">اختر درساً وجملة</h2>
            <label class="block text-sm font-bold text-gray-600 mb-2">الدرس</label>
            <select data-admin-lesson-select class="w-full border border-gray-200 rounded-xl px-4 py-3 mb-4 bg-white">
              ${lessons().map((lesson) => `<option value="${escapeHtml(lesson.day)}" ${String(lesson.day) === String(currentLesson?.day) ? 'selected' : ''}>Day ${escapeHtml(lesson.day)} — ${escapeHtml(lesson.title)}</option>`).join('')}
            </select>
            <div class="space-y-2">
              ${(currentLesson?.phrases || []).map((phrase, index) => `
                <button type="button" data-admin-select-phrase="${escapeHtml(phrase.id)}" class="w-full text-right rounded-xl border ${phrase.id === currentPhrase?.id ? 'border-terracotta bg-red-50' : 'border-gray-200 bg-white'} p-4 hover:border-terracotta transition">
                  <span class="text-xs text-gray-400 font-bold">Phrase ${index + 1}</span>
                  <span class="block font-mono font-extrabold text-gray-900" dir="ltr">${escapeHtml(phrase.friendlyLatin)}</span>
                  <span class="block text-sm text-gray-600">${escapeHtml(phrase.english)}</span>
                </button>
              `).join('')}
            </div>
          </div>
          ${phraseEditorMock(currentLesson, currentPhrase)}
        </div>
      </div>
    `;
    bindAdminControls(root);
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
          <a href="#/app/lesson/${escapeHtml(lesson.day)}?admin=1" class="bg-terracotta hover:bg-red-700 text-white px-4 py-2 rounded-xl font-bold text-sm transition">شاهد كمتعلم</a>
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
          <div>${badge('Normal audio: ' + n.label, n.tone)}${pathBox('normal audio target', phrase.audioNormal)}</div>
          <div>${badge('Slow audio: ' + s.label, s.tone)}${pathBox('slow audio target', phrase.audioSlow)}</div>
          <div>${badge('video: ' + v.label, v.tone)}${pathBox('video target', phrase.sceneVideo)}</div>
          <div>${badge(phrase.sceneVisual ? 'visual mapped' : 'visual missing', phrase.sceneVisual ? 'green' : 'gray')}${pathBox('scene visual', phrase.sceneVisual)}</div>
        </div>
        <div class="admin-record-mp3-panel rounded-3xl bg-orange-50/60 border border-orange-100 p-5 mb-6">
          <div class="flex items-start gap-3 mb-4">
            <span class="w-11 h-11 rounded-2xl bg-white border border-orange-100 flex items-center justify-center text-2xl">🎙️</span>
            <div>
              <h3 class="text-xl font-black text-gray-900">Record teacher audio</h3>
              <p class="text-sm text-gray-700">استعملها لتسجيل صوت Normal و Slow من داخل الأدمين. الصوت الرسمي للمتعلمين يبقى ملف MP3 في المسار الظاهر.</p>
            </div>
          </div>
          <div class="grid lg:grid-cols-2 gap-4">
            ${adminAudioRecorderCard(lesson, phrase, 'normal')}
            ${adminAudioRecorderCard(lesson, phrase, 'slow')}
          </div>
        </div>
        <div class="rounded-2xl bg-blue-50 border border-blue-100 p-5">
          <h3 class="font-extrabold text-blue-900 mb-2">كيف تستعملها الآن؟</h3>
          <p class="text-sm text-blue-900 mb-3">عندما تسلمني الصوت أو الفيديو، أضعه في المسار الظاهر أعلاه. لاحقاً، في Admin الحقيقي، هذه الحقول ستصبح قابلة للحفظ في قاعدة البيانات.</p>
          <div class="flex flex-wrap gap-2" dir="ltr">
            <a href="#/admin/audio" class="bg-white border border-blue-200 text-blue-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-blue-100">Open Media Matrix</a>
            <a href="#/app/lesson/${escapeHtml(lesson.day)}?admin=1" class="bg-blue-700 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-blue-800">Learner Preview</a>
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

  function renderAudio() {
    const root = document.getElementById('page-admin-audio');
    if (!root) return;
    const summary = mediaSummary();
    const openDays = readAdminAudioOpenDays();
    root.innerHTML = `
      <div class="max-w-7xl mx-auto px-4" dir="rtl">
        ${adminHeader('إدارة الصوت والفيديو — Media Matrix', 'هذه الصفحة ترشدك أين توضع ملفات الصوت والفيديو لكل يوم وجملة. تم تقسيمها الآن حسب الأيام حتى لا تتحول 150 جملة إلى جدول طويل ومتعب.')}
        <div class="grid md:grid-cols-4 gap-4 mb-8">
          ${statCard('Normal Ready', `${summary.normalReady}/${summary.total}`, 'MP3 normal', 'green')}
          ${statCard('Slow Ready', `${summary.slowReady}/${summary.total}`, 'MP3 slow', 'yellow')}
          ${statCard('Videos Ready', `${summary.videoReady}/${summary.total}`, 'MP4 scenes', 'red')}
          ${statCard('Visuals Ready', `${summary.visualReady}/${summary.total}`, 'images/SVG', 'blue')}
        </div>
        <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-6 mb-8">
          <h2 class="text-xl font-extrabold text-gray-900 mb-3">قاعدة تسمية الملفات</h2>
          <div class="grid md:grid-cols-3 gap-4" dir="ltr">
            ${pathBox('normal audio', 'assets/audio/dayXX/phrase-id-normal.mp3')}
            ${pathBox('slow audio', 'assets/audio/dayXX/phrase-id-slow.mp3')}
            ${pathBox('micro video', 'assets/video/dayXX/phrase-id-scene.mp4')}
          </div>
        </div>
        <div class="rounded-3xl bg-white border border-gray-200 shadow-sm p-5 mb-5">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h2 class="text-xl font-extrabold text-gray-900">الصوت والفيديو حسب الأيام</h2>
              <p class="text-sm text-gray-500">افتح اليوم الذي تعمل عليه فقط. كل يوم يعرض 5 جمل ومساراتها.</p>
            </div>
            <div class="flex flex-wrap gap-2" dir="ltr">
              <button type="button" data-admin-audio-open-all class="bg-white border border-chefchaouen text-chefchaouen hover:bg-blue-50 px-4 py-2 rounded-xl font-bold text-sm transition">Open all</button>
              <button type="button" data-admin-audio-close-all class="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-xl font-bold text-sm transition">Close all</button>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          ${lessons().map((lesson) => renderAudioDayGroup(lesson, openDays)).join('')}
        </div>
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

  function bindAdminControls(root) {
    root.querySelectorAll('[data-admin-select-lesson]').forEach((button) => {
      button.addEventListener('click', () => {
        state.selectedDay = button.dataset.adminSelectLesson;
        renderLessons();
      });
    });
    root.querySelectorAll('[data-admin-filter]').forEach((button) => {
      button.addEventListener('click', () => {
        state.filter = button.dataset.adminFilter;
        renderLessons();
      });
    });
    root.querySelectorAll('[data-admin-lesson-select]').forEach((select) => {
      select.addEventListener('change', () => {
        state.selectedDay = select.value;
        const lesson = findLesson(state.selectedDay);
        state.selectedPhraseId = firstPhrase(lesson)?.id || null;
        renderPhrases();
      });
    });
    root.querySelectorAll('[data-admin-select-phrase]').forEach((button) => {
      button.addEventListener('click', () => {
        state.selectedPhraseId = button.dataset.adminSelectPhrase;
        const found = findPhrase(state.selectedPhraseId);
        if (found.lesson) state.selectedDay = found.lesson.day;
        if (window.location.hash.includes('/admin/phrases')) renderPhrases();
        else renderLessons();
      });
    });
    root.querySelectorAll('[data-admin-go-phrases]').forEach((link) => {
      link.addEventListener('click', () => {
        state.selectedPhraseId = link.dataset.adminGoPhrases;
      });
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
      const openDays = new Set(lessons().map((lesson) => String(lesson.day)));
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

    bindAdminAudioRecorders(root);
  }

  function renderForPath(path) {
    if (!String(path || '').startsWith('/admin')) return;
    if (!isAdminActive()) {
      adminGate(path);
      return;
    }
    if (path === '/admin') renderDashboard();
    else if (path === '/admin/lessons') renderLessons();
    else if (path === '/admin/phrases') renderPhrases();
    else if (path === '/admin/audio') renderAudio();
    else if (path === '/admin/users') renderUsers();
    else if (path === '/admin/payments') renderPayments();
  }

  window.DarijaAdminPreview = { renderForPath };
})();
