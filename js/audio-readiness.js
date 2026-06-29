(function () {
  function getLessons() {
    return Array.isArray(window.DARIJA30_LESSONS) ? window.DARIJA30_LESSONS : [];
  }

  function getExpectedAudioItems() {
    return getLessons()
      .filter((lesson) => lesson.isFree)
      .flatMap((lesson) => (lesson.phrases || []).flatMap((phrase) => [
        {
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          phraseId: phrase.id,
          phrase: phrase.friendlyLatin || phrase.english || phrase.id,
          speed: 'normal',
          path: phrase.audioNormal
        },
        {
          lessonId: lesson.id,
          lessonTitle: lesson.title,
          phraseId: phrase.id,
          phrase: phrase.friendlyLatin || phrase.english || phrase.id,
          speed: 'slow',
          path: phrase.audioSlow
        }
      ]))
      .filter((item) => item.path);
  }

  function byDay(path) {
    const match = String(path || '').match(/assets\/audio\/(day\d+)/);
    return match ? match[1] : 'unknown';
  }

  async function checkAudioPath(path) {
    try {
      const response = await fetch(path, { method: 'HEAD', cache: 'no-store' });
      if (response.ok) return { ok: true, status: response.status };
      return { ok: false, status: response.status };
    } catch (headError) {
      try {
        const fallback = await fetch(path, { method: 'GET', cache: 'no-store' });
        return { ok: fallback.ok, status: fallback.status || 0 };
      } catch (getError) {
        return { ok: false, status: 0, error: getError.message };
      }
    }
  }

  function renderSkeleton(root, items) {
    const grouped = items.reduce((acc, item) => {
      const key = byDay(item.path);
      if (!acc[key]) acc[key] = [];
      acc[key].push(item);
      return acc;
    }, {});

    root.innerHTML = `
      <div class="grid md:grid-cols-3 gap-4 mb-6">
        <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <p class="text-xs font-extrabold text-gray-400 uppercase">Expected MP3 files</p>
          <p class="text-3xl font-black text-medina">${items.length}</p>
          <p class="text-sm text-gray-500">Normal + Slow for every free phrase.</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <p class="text-xs font-extrabold text-gray-400 uppercase">Free phrases</p>
          <p class="text-3xl font-black text-medina">${items.length / 2}</p>
          <p class="text-sm text-gray-500">3 free lessons, 15 phrases.</p>
        </div>
        <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
          <p class="text-xs font-extrabold text-gray-400 uppercase">Status</p>
          <p id="audioAuditStatus" class="text-2xl font-black text-terracotta">Not checked</p>
          <p class="text-sm text-gray-500">Use this before public testing.</p>
        </div>
      </div>
      <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm mb-6">
        <div class="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-4">
          <div>
            <h2 class="text-xl font-black text-medina">Audio file checklist</h2>
            <p class="text-sm text-gray-500">Place files exactly at these paths. Then click Check audio files.</p>
          </div>
          <button type="button" data-check-audio-files class="bg-chefchaouen hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-bold transition">Check audio files</button>
        </div>
        <div id="audioAuditResults" class="space-y-5">
          ${Object.entries(grouped).map(([day, dayItems]) => `
            <div class="border border-gray-100 rounded-xl overflow-hidden">
              <div class="bg-gray-50 px-4 py-3 font-black text-medina uppercase">${day}</div>
              <div class="divide-y divide-gray-100">
                ${dayItems.map((item) => `
                  <div class="audio-audit-row px-4 py-3 flex flex-col lg:flex-row lg:items-center gap-2 justify-between" data-audio-path="${item.path}">
                    <div>
                      <p class="font-bold text-medina">${item.phrase} <span class="text-xs text-gray-400">${item.speed}</span></p>
                      <p class="text-xs text-gray-500">${item.lessonTitle} / ${item.phraseId}</p>
                      <code class="text-xs text-gray-600 break-all">${item.path}</code>
                    </div>
                    <span class="audio-audit-badge bg-gray-100 text-gray-500 px-3 py-1 rounded-full text-xs font-bold self-start lg:self-center">waiting</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  async function runAudit(root) {
    const items = getExpectedAudioItems();
    const status = root.querySelector('#audioAuditStatus');
    const rows = Array.from(root.querySelectorAll('.audio-audit-row'));
    if (status) status.textContent = 'Checking...';

    let ready = 0;
    for (const row of rows) {
      const path = row.dataset.audioPath;
      const badge = row.querySelector('.audio-audit-badge');
      if (badge) {
        badge.textContent = 'checking...';
        badge.className = 'audio-audit-badge bg-blue-50 text-chefchaouen px-3 py-1 rounded-full text-xs font-bold self-start lg:self-center';
      }
      const result = await checkAudioPath(path);
      if (result.ok) {
        ready += 1;
        if (badge) {
          badge.textContent = 'ready';
          badge.className = 'audio-audit-badge bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold self-start lg:self-center';
        }
      } else if (badge) {
        badge.textContent = `missing${result.status ? ' ' + result.status : ''}`;
        badge.className = 'audio-audit-badge bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold self-start lg:self-center';
      }
    }

    if (status) {
      status.textContent = `${ready}/${items.length} ready`;
      status.className = ready === items.length ? 'text-2xl font-black text-green-700' : 'text-2xl font-black text-terracotta';
    }
  }

  function renderForPath(path) {
    if (path !== '/audio-qa') return;
    const root = document.getElementById('audioQaRoot');
    if (!root) return;
    const items = getExpectedAudioItems();
    renderSkeleton(root, items);
    const button = root.querySelector('[data-check-audio-files]');
    if (button) button.addEventListener('click', () => runAudit(root));
  }

  window.DarijaAudioReadiness = {
    renderForPath,
    getExpectedAudioItems,
    checkAudioPath
  };
})();
