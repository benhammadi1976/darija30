(function () {
  if (window.__DARIJA30_D70_FIX5B_COLORED_SOURCE_WHEEL__) return;
  window.__DARIJA30_D70_FIX5B_COLORED_SOURCE_WHEEL__ = true;

  const REVIEW_DAY_TO_WEEK = {
    7: 1,
    14: 2,
    21: 3,
    28: 4,
  };

  const WEEKLY_PARKING_BANKS = {
    1: { start: 1, end: 35 },
    2: { start: 36, end: 70 },
    3: { start: 71, end: 105 },
    4: { start: 106, end: 140 },
  };

  const WEEK_COLORS = {
    1: { name: 'Week 1', arabic: 'الأسبوع 1', color: '#f97316', text: '#111827' },
    2: { name: 'Week 2', arabic: 'الأسبوع 2', color: '#22c55e', text: '#052e16' },
    3: { name: 'Week 3', arabic: 'الأسبوع 3', color: '#facc15', text: '#422006' },
    4: { name: 'Week 4', arabic: 'الأسبوع 4', color: '#111827', text: '#ffffff' },
  };

  const CHALLENGE_SIZES = [5, 10, 15, 20, 35];
  const SOURCE_STAGE = 'week-selection';
  const PARKING_STAGE = 'parking-selection';

  const state = {
    currentWeek: null,
    stage: SOURCE_STAGE,
    selectedReviewWeek: null,
    challengeSize: 5,
    pickedNumbers: [],
    lastSourceWeek: null,
    lastParkingNumber: null,
    rotation: 0,
    isSpinning: false,
  };

  function clampWeek(value) {
    const number = Number(value);
    if (!Number.isFinite(number)) return 1;
    return Math.min(Math.max(Math.trunc(number), 1), 4);
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function randomInt(min, max) {
    const start = Number(min) || 0;
    const end = Number(max) || start;
    return Math.floor(Math.random() * (end - start + 1)) + start;
  }

  function parseRouteParts() {
    const rawHash = window.location.hash || '';
    const cleanHash = rawHash.replace(/^#/, '');
    const [path = '', queryString = ''] = cleanHash.split('?');
    const params = new URLSearchParams(queryString);
    const fullText = [cleanHash, window.location.search || ''].join('&');
    return { path, params, fullText };
  }

  function resolveCurrentWeek() {
    const { path, params, fullText } = parseRouteParts();
    const directWeek = params.get('week') || params.get('currentWeek') || params.get('reviewWeek') || params.get('w');
    if (directWeek) return clampWeek(directWeek);

    const directDay = params.get('day') || params.get('reviewDay') || params.get('lessonDay') || params.get('d');
    if (directDay && REVIEW_DAY_TO_WEEK[Number(directDay)]) return REVIEW_DAY_TO_WEEK[Number(directDay)];

    const pathDayMatch = String(path).match(/(?:day|lesson|review)[-/]?(7|14|21|28)\b/i);
    if (pathDayMatch && REVIEW_DAY_TO_WEEK[Number(pathDayMatch[1])]) return REVIEW_DAY_TO_WEEK[Number(pathDayMatch[1])];

    const textDayMatch = String(fullText).match(/(?:day|lessonDay|reviewDay|d)=(7|14|21|28)\b/i);
    if (textDayMatch && REVIEW_DAY_TO_WEEK[Number(textDayMatch[1])]) return REVIEW_DAY_TO_WEEK[Number(textDayMatch[1])];

    return 1;
  }

  function availableWeeks(currentWeek) {
    return Array.from({ length: clampWeek(currentWeek) }, (_, index) => index + 1);
  }

  function parkingBankForWeek(week) {
    return WEEKLY_PARKING_BANKS[clampWeek(week)] || WEEKLY_PARKING_BANKS[1];
  }

  function numbersForWeek(week) {
    const bank = parkingBankForWeek(week);
    return Array.from({ length: bank.end - bank.start + 1 }, (_, index) => bank.start + index);
  }

  function resetForWeek(currentWeek) {
    state.currentWeek = clampWeek(currentWeek);
    state.stage = state.currentWeek === 1 ? PARKING_STAGE : SOURCE_STAGE;
    state.selectedReviewWeek = state.currentWeek === 1 ? 1 : null;
    state.pickedNumbers = [];
    state.lastSourceWeek = null;
    state.lastParkingNumber = null;
    state.isSpinning = false;
  }

  function ensureCurrentWeek() {
    const nextWeek = resolveCurrentWeek();
    if (state.currentWeek !== nextWeek) resetForWeek(nextWeek);
    if (state.currentWeek === 1) {
      state.stage = PARKING_STAGE;
      state.selectedReviewWeek = 1;
    }
  }

  function sourceGradient(currentWeek) {
    const weeks = availableWeeks(currentWeek);
    const slice = 100 / Math.max(weeks.length, 1);
    const parts = weeks.map((week, index) => {
      const start = (slice * index).toFixed(4);
      const end = (slice * (index + 1)).toFixed(4);
      return `${WEEK_COLORS[week].color} ${start}% ${end}%`;
    });
    return `conic-gradient(${parts.join(', ')})`;
  }

  function parkingGradient(week) {
    const color = WEEK_COLORS[clampWeek(week)]?.color || WEEK_COLORS[1].color;
    return `conic-gradient(${color} 0% 100%)`;
  }

  function wheelLabelsForSource(currentWeek) {
    const weeks = availableWeeks(currentWeek);
    return weeks.map((week, index) => {
      const angle = ((index + 0.5) * 360) / Math.max(weeks.length, 1);
      const color = WEEK_COLORS[week];
      return `<span class="d70fix5b-wheel-label d70fix5b-wheel-label--source" style="--mark-angle:${angle.toFixed(4)}deg; color:${escapeHtml(color.text)};">
        <span>${escapeHtml(color.name)}</span>
      </span>`;
    }).join('');
  }

  function wheelLabelsForParking(week) {
    const numbers = numbersForWeek(week);
    const total = Math.max(numbers.length, 1);
    return numbers.map((number, index) => {
      const angle = (360 * index) / total;
      const active = Number(state.lastParkingNumber) === number;
      const show = active || index === 0 || index === total - 1 || number % 5 === 0;
      if (!show) return '';
      const compact = !active && number % 10 !== 0 && index !== 0 && index !== total - 1;
      return `<span class="d70fix5b-wheel-label d70fix5b-wheel-label--number ${active ? 'is-active' : ''} ${compact ? 'is-compact' : ''}" style="--mark-angle:${angle.toFixed(4)}deg;">
        <span>${escapeHtml(number)}</span>
      </span>`;
    }).join('');
  }

  function renderChallengeButtons() {
    return `<div class="d70fix5b-size-rail" aria-label="عدد الجولات">
      <p class="d70fix5b-size-title">عدد الجولات</p>
      <div class="d70fix5b-size-buttons">
        ${CHALLENGE_SIZES.map((size) => `<button type="button" class="d70fix5b-size-button ${Number(state.challengeSize) === size ? 'is-active' : ''}" data-d70fix5b-size="${size}" aria-label="${size} rounds">${size}</button>`).join('')}
      </div>
      <p class="d70fix5b-size-note">هذه الأزرار تختار عدد الجولات فقط، ولا تختار الأسبوع.</p>
    </div>`;
  }

  function renderLegend() {
    const weeks = availableWeeks(state.currentWeek);
    return `<div class="d70fix5b-legend" aria-label="ألوان الأسابيع">
      ${weeks.map((week) => `<span class="d70fix5b-legend-item"><i style="background:${escapeHtml(WEEK_COLORS[week].color)}"></i>${escapeHtml(WEEK_COLORS[week].arabic)}</span>`).join('')}
    </div>`;
  }

  function renderPickedList() {
    if (!state.pickedNumbers.length) {
      return '<p class="d70fix5b-empty">لم يتم اختيار أي موقف بعد.</p>';
    }
    return `<ol class="d70fix5b-picked-list">
      ${state.pickedNumbers.map((item, index) => `<li><strong>${index + 1}</strong><span>${escapeHtml(WEEK_COLORS[item.week].name)}</span><b>${escapeHtml(item.number)}</b></li>`).join('')}
    </ol>`;
  }

  function renderWheel() {
    const isSourceStage = state.stage === SOURCE_STAGE && state.currentWeek > 1;
    const selectedWeek = state.selectedReviewWeek || 1;
    const background = isSourceStage ? sourceGradient(state.currentWeek) : parkingGradient(selectedWeek);
    const labels = isSourceStage ? wheelLabelsForSource(state.currentWeek) : wheelLabelsForParking(selectedWeek);
    const stageLabel = isSourceStage ? 'اختيار الأسبوع' : 'اختيار رقم الموقف';
    const innerLabel = isSourceStage ? 'WEEK' : 'PARKING';
    const innerValue = isSourceStage ? `1–${state.currentWeek}` : `${parkingBankForWeek(selectedWeek).start}–${parkingBankForWeek(selectedWeek).end}`;
    return `<div class="d70fix5b-wheel-wrap">
      <div class="d70fix5b-pointer" aria-hidden="true"></div>
      <div class="d70fix5b-wheel ${state.isSpinning ? 'is-spinning' : ''}" style="--d70fix5b-rotation:${state.rotation.toFixed(2)}deg; background:${background};" aria-label="${escapeHtml(stageLabel)}">
        ${labels}
        <div class="d70fix5b-wheel-center">
          <span>${escapeHtml(innerLabel)}</span>
          <strong>${escapeHtml(innerValue)}</strong>
        </div>
      </div>
    </div>`;
  }

  function renderStatus() {
    const currentColor = WEEK_COLORS[state.currentWeek];
    if (state.currentWeek === 1) {
      return `<div class="d70fix5b-status">
        <strong>Week 1 — لون واحد</strong>
        <p>دورة واحدة فقط: العجلة تختار رقم موقف مباشرة من الأسبوع 1.</p>
      </div>`;
    }

    if (state.stage === SOURCE_STAGE) {
      return `<div class="d70fix5b-status">
        <strong>${escapeHtml(currentColor.name)} — ${state.currentWeek} ألوان</strong>
        <p>الدورة الأولى تختار مصدر المراجعة من Week 1 إلى Week ${state.currentWeek}. أرقام المواقف ثابتة ولا تتحرك الآن.</p>
      </div>`;
    }

    const selected = WEEK_COLORS[state.selectedReviewWeek || 1];
    return `<div class="d70fix5b-status">
      <strong>تم اختيار ${escapeHtml(selected.name)}</strong>
      <p>الدورة الثانية تختار رقم موقف من بنك ${escapeHtml(selected.name)} فقط: ${parkingBankForWeek(state.selectedReviewWeek).start}–${parkingBankForWeek(state.selectedReviewWeek).end}.</p>
    </div>`;
  }

  function renderActions() {
    const done = state.pickedNumbers.length >= Number(state.challengeSize);
    if (state.stage === SOURCE_STAGE && state.currentWeek > 1) {
      return `<button type="button" class="d70fix5b-primary" data-d70fix5b-action="spin-source" ${state.isSpinning ? 'disabled' : ''}>الدورة 1: اختر الأسبوع</button>`;
    }

    return `<div class="d70fix5b-action-row">
      <button type="button" class="d70fix5b-primary" data-d70fix5b-action="spin-parking" ${(state.isSpinning || done) ? 'disabled' : ''}>${state.currentWeek === 1 ? 'دور لاختيار الموقف' : 'الدورة 2: اختر الموقف'}</button>
      ${state.currentWeek > 1 ? '<button type="button" class="d70fix5b-secondary" data-d70fix5b-action="reselect-source" ' + (state.isSpinning ? 'disabled' : '') + '>إعادة اختيار الأسبوع</button>' : ''}
      <button type="button" class="d70fix5b-secondary" data-d70fix5b-action="reset" ${state.isSpinning ? 'disabled' : ''}>إعادة البدء</button>
    </div>`;
  }

  function renderResults() {
    const latest = state.lastParkingNumber
      ? `<div class="d70fix5b-latest"><span>آخر موقف</span><strong>${escapeHtml(state.lastParkingNumber)}</strong></div>`
      : `<div class="d70fix5b-latest is-muted"><span>آخر موقف</span><strong>—</strong></div>`;
    const source = state.lastSourceWeek
      ? `<div class="d70fix5b-latest"><span>الأسبوع المختار</span><strong>${escapeHtml(WEEK_COLORS[state.lastSourceWeek].name)}</strong></div>`
      : `<div class="d70fix5b-latest is-muted"><span>الأسبوع المختار</span><strong>${state.currentWeek === 1 ? 'Week 1' : '—'}</strong></div>`;
    const rounds = `<div class="d70fix5b-latest"><span>الجولات</span><strong>${escapeHtml(state.pickedNumbers.length)} / ${escapeHtml(state.challengeSize)}</strong></div>`;
    return `<div class="d70fix5b-results">
      <div class="d70fix5b-result-cards">${source}${latest}${rounds}</div>
      ${renderPickedList()}
    </div>`;
  }

  function renderWeeklyWheel() {
    const root = document.getElementById('weeklyWheelRoot');
    if (!root) return;
    ensureCurrentWeek();
    root.innerHTML = `<div class="d70fix5b-shell" dir="rtl">
      <div class="d70fix5b-header">
        <span class="d70fix5b-badge">D70-FIX-5B</span>
        <h1>عجلة المراجعة الأسبوعية</h1>
        <p>نفس العجلة تعمل بدور واحد في Week 1، وبدورين من Week 2 إلى Week 4: اختيار الأسبوع أولًا، ثم اختيار رقم الموقف من ذلك الأسبوع فقط.</p>
      </div>
      ${renderLegend()}
      <div class="d70fix5b-layout">
        <aside>${renderChallengeButtons()}</aside>
        <main>
          ${renderStatus()}
          ${renderWheel()}
          ${renderActions()}
        </main>
        <aside>${renderResults()}</aside>
      </div>
    </div>`;
  }

  function commitSourceSpin(selectedWeek) {
    state.lastSourceWeek = selectedWeek;
    state.selectedReviewWeek = selectedWeek;
    state.stage = PARKING_STAGE;
    state.isSpinning = false;
    renderWeeklyWheel();
  }

  function commitParkingSpin(number) {
    state.lastParkingNumber = number;
    const week = state.selectedReviewWeek || 1;
    if (!state.pickedNumbers.some((item) => item.number === number && item.week === week)) {
      state.pickedNumbers.push({ week, number });
    }
    state.isSpinning = false;
    renderWeeklyWheel();
  }

  function spinToIndex(index, total) {
    const safeTotal = Math.max(Number(total) || 1, 1);
    const safeIndex = Math.max(Number(index) || 0, 0);
    const centerAngle = ((safeIndex + 0.5) * 360) / safeTotal;
    const extraTurns = 5 + randomInt(0, 2);
    const currentTurns = Math.ceil(Math.abs(state.rotation) / 360);
    state.rotation = ((currentTurns + extraTurns) * 360) - centerAngle;
  }

  function spinSource() {
    if (state.isSpinning) return;
    ensureCurrentWeek();
    if (state.currentWeek === 1) {
      state.selectedReviewWeek = 1;
      state.stage = PARKING_STAGE;
      spinParking();
      return;
    }
    const weeks = availableWeeks(state.currentWeek);
    const selectedIndex = randomInt(0, weeks.length - 1);
    const selectedWeek = weeks[selectedIndex];
    state.isSpinning = true;
    spinToIndex(selectedIndex, weeks.length);
    renderWeeklyWheel();
    window.setTimeout(() => commitSourceSpin(selectedWeek), 1300);
  }

  function spinParking() {
    if (state.isSpinning) return;
    ensureCurrentWeek();
    if (!state.selectedReviewWeek) {
      state.stage = SOURCE_STAGE;
      renderWeeklyWheel();
      return;
    }
    if (state.pickedNumbers.length >= Number(state.challengeSize)) return;

    const numbers = numbersForWeek(state.selectedReviewWeek).filter((number) => (
      !state.pickedNumbers.some((item) => item.week === state.selectedReviewWeek && item.number === number)
    ));
    const available = numbers.length ? numbers : numbersForWeek(state.selectedReviewWeek);
    const selectedIndexInAvailable = randomInt(0, available.length - 1);
    const selectedNumber = available[selectedIndexInAvailable];
    const bank = parkingBankForWeek(state.selectedReviewWeek);
    const indexInBank = Math.max(selectedNumber - bank.start, 0);

    state.isSpinning = true;
    spinToIndex(indexInBank, bank.end - bank.start + 1);
    renderWeeklyWheel();
    window.setTimeout(() => commitParkingSpin(selectedNumber), 1300);
  }

  function resetCurrentWheel() {
    resetForWeek(resolveCurrentWeek());
    renderWeeklyWheel();
  }

  function reselectSource() {
    if (state.currentWeek <= 1 || state.isSpinning) return;
    state.stage = SOURCE_STAGE;
    state.selectedReviewWeek = null;
    state.lastSourceWeek = null;
    state.lastParkingNumber = null;
    state.pickedNumbers = [];
    renderWeeklyWheel();
  }

  function onRootClick(event) {
    const sizeButton = event.target.closest('[data-d70fix5b-size]');
    if (sizeButton) {
      state.challengeSize = Number(sizeButton.getAttribute('data-d70fix5b-size')) || 5;
      state.pickedNumbers = [];
      state.lastParkingNumber = null;
      renderWeeklyWheel();
      return;
    }

    const action = event.target.closest('[data-d70fix5b-action]')?.getAttribute('data-d70fix5b-action');
    if (!action) return;
    if (action === 'spin-source') spinSource();
    if (action === 'spin-parking') spinParking();
    if (action === 'reset') resetCurrentWheel();
    if (action === 'reselect-source') reselectSource();
  }

  function injectCss() {
    if (document.getElementById('darija30-d70-fix5b-colored-source-wheel-css')) return;
    const style = document.createElement('style');
    style.id = 'darija30-d70-fix5b-colored-source-wheel-css';
    style.textContent = `
      #weeklyWheelRoot { max-width: 1180px; }
      .d70fix5b-shell { --wheel-size: min(72vw, 28rem); color: #111827; }
      .d70fix5b-header { text-align: center; max-width: 58rem; margin: 0 auto 1.25rem; }
      .d70fix5b-badge { display: inline-flex; align-items: center; justify-content: center; padding: .35rem .75rem; border-radius: 999px; background: #fff7ed; color: #c2410c; border: 1px solid #fed7aa; font-weight: 1000; font-size: .78rem; letter-spacing: .04em; margin-bottom: .7rem; }
      .d70fix5b-header h1 { font-size: clamp(2rem, 4vw, 3.25rem); line-height: 1.05; margin: 0 0 .65rem; font-weight: 1000; color: #0f172a; }
      .d70fix5b-header p { color: #64748b; font-weight: 800; line-height: 1.7; margin: 0; }
      .d70fix5b-legend { display: flex; flex-wrap: wrap; gap: .65rem; align-items: center; justify-content: center; margin: 0 auto 1.25rem; }
      .d70fix5b-legend-item { display: inline-flex; gap: .45rem; align-items: center; padding: .45rem .75rem; border-radius: 999px; background: #fff; border: 1px solid #e5e7eb; color: #334155; font-weight: 900; font-size: .9rem; box-shadow: 0 8px 18px rgba(15, 23, 42, .06); }
      .d70fix5b-legend-item i { display: inline-block; width: .9rem; height: .9rem; border-radius: 999px; border: 2px solid rgba(255,255,255,.85); box-shadow: 0 0 0 1px rgba(15, 23, 42, .12); }
      .d70fix5b-layout { display: grid; grid-template-columns: minmax(12rem, .65fr) minmax(20rem, 1.25fr) minmax(14rem, .75fr); gap: 1rem; align-items: start; }
      .d70fix5b-layout aside, .d70fix5b-layout main { min-width: 0; }
      .d70fix5b-size-rail, .d70fix5b-results, .d70fix5b-status { background: rgba(255,255,255,.92); border: 1px solid #e5e7eb; border-radius: 1.5rem; padding: 1rem; box-shadow: 0 18px 38px rgba(15, 23, 42, .08); }
      .d70fix5b-size-title { margin: 0 0 .75rem; font-size: .85rem; color: #475569; font-weight: 1000; text-align: center; }
      .d70fix5b-size-buttons { display: grid; gap: .55rem; }
      .d70fix5b-size-button { width: 100%; min-height: 3rem; border: 0; border-radius: 1rem; background: #111827; color: white; font-weight: 1000; font-size: 1.05rem; cursor: pointer; box-shadow: 0 10px 18px rgba(17, 24, 39, .14); }
      .d70fix5b-size-button.is-active { background: #facc15; color: #111827; box-shadow: 0 0 0 5px rgba(250, 204, 21, .22), 0 12px 22px rgba(250, 204, 21, .28); }
      .d70fix5b-size-button:hover { transform: translateY(-1px); }
      .d70fix5b-size-note { font-size: .78rem; line-height: 1.45; color: #64748b; margin: .75rem 0 0; font-weight: 800; text-align: center; }
      .d70fix5b-status { margin-bottom: 1rem; text-align: center; }
      .d70fix5b-status strong { display: block; font-size: 1.1rem; font-weight: 1000; color: #0f172a; margin-bottom: .35rem; }
      .d70fix5b-status p { margin: 0; color: #64748b; font-weight: 800; line-height: 1.55; }
      .d70fix5b-wheel-wrap { position: relative; display: grid; place-items: center; padding: 1.6rem; }
      .d70fix5b-pointer { position: absolute; top: .35rem; left: 50%; transform: translateX(-50%); z-index: 5; width: 0; height: 0; border-left: 1.05rem solid transparent; border-right: 1.05rem solid transparent; border-top: 2rem solid #dc2626; filter: drop-shadow(0 6px 6px rgba(0,0,0,.28)); }
      .d70fix5b-wheel { position: relative; width: var(--wheel-size); height: var(--wheel-size); max-width: 30rem; max-height: 30rem; min-width: 20rem; min-height: 20rem; border-radius: 999px; border: .75rem solid #fff; box-shadow: inset 0 0 0 2px rgba(15, 23, 42, .16), 0 30px 70px rgba(15, 23, 42, .22); transform: rotate(var(--d70fix5b-rotation)); transition: transform 1.25s cubic-bezier(.12,.72,.14,1); overflow: hidden; }
      .d70fix5b-wheel::before { content: ''; position: absolute; inset: 0; border-radius: inherit; background: radial-gradient(circle at 32% 24%, rgba(255,255,255,.38), transparent 26%), radial-gradient(circle, transparent 0 57%, rgba(0,0,0,.12) 58% 100%); pointer-events: none; }
      .d70fix5b-wheel-center { position: absolute; inset: 50% auto auto 50%; transform: translate(-50%, -50%); width: 8.6rem; height: 8.6rem; border-radius: 999px; background: rgba(255,255,255,.94); display: grid; place-items: center; align-content: center; gap: .18rem; box-shadow: 0 16px 35px rgba(15, 23, 42, .25), inset 0 0 0 2px rgba(15,23,42,.08); z-index: 4; text-align: center; }
      .d70fix5b-wheel-center span { color: #64748b; font-size: .72rem; letter-spacing: .08em; font-weight: 1000; }
      .d70fix5b-wheel-center strong { color: #0f172a; font-size: 1.25rem; font-weight: 1000; direction: ltr; }
      .d70fix5b-wheel-label { --label-radius: calc(var(--wheel-size) * .405); position: absolute; left: 50%; top: 50%; transform: rotate(var(--mark-angle)) translateY(calc(var(--label-radius) * -1)) rotate(calc(var(--mark-angle) * -1)); z-index: 3; display: inline-grid; place-items: center; text-align: center; font-weight: 1000; }
      .d70fix5b-wheel-label > span { display: inline-flex; align-items: center; justify-content: center; min-width: 2.15rem; min-height: 2.15rem; border-radius: 999px; background: rgba(255,255,255,.86); box-shadow: 0 6px 14px rgba(0,0,0,.16); padding: .28rem .44rem; }
      .d70fix5b-wheel-label--source > span { min-width: 4.6rem; border-radius: 1rem; background: rgba(255,255,255,.84); color: inherit; }
      .d70fix5b-wheel-label--number { font-size: .86rem; color: #111827; }
      .d70fix5b-wheel-label--number.is-compact { opacity: .58; transform: rotate(var(--mark-angle)) translateY(calc(var(--label-radius) * -1)) rotate(calc(var(--mark-angle) * -1)) scale(.78); }
      .d70fix5b-wheel-label--number.is-active > span { background: #dc2626; color: #fff; transform: scale(1.18); }
      .d70fix5b-action-row { display: flex; flex-wrap: wrap; justify-content: center; gap: .65rem; }
      .d70fix5b-primary, .d70fix5b-secondary { border: 0; border-radius: 1rem; padding: .9rem 1.15rem; font-weight: 1000; cursor: pointer; box-shadow: 0 12px 24px rgba(15, 23, 42, .12); }
      .d70fix5b-primary { background: #2563eb; color: #fff; }
      .d70fix5b-secondary { background: #fff; color: #0f172a; border: 1px solid #e5e7eb; }
      .d70fix5b-primary[disabled], .d70fix5b-secondary[disabled] { opacity: .55; cursor: not-allowed; transform: none; }
      .d70fix5b-result-cards { display: grid; gap: .65rem; margin-bottom: .9rem; }
      .d70fix5b-latest { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: .5rem; padding: .75rem; border-radius: 1rem; background: #f8fafc; border: 1px solid #e2e8f0; }
      .d70fix5b-latest span { color: #64748b; font-weight: 900; font-size: .8rem; }
      .d70fix5b-latest strong { color: #0f172a; font-weight: 1000; direction: ltr; }
      .d70fix5b-latest.is-muted strong { color: #94a3b8; }
      .d70fix5b-empty { margin: 0; color: #94a3b8; font-weight: 800; text-align: center; }
      .d70fix5b-picked-list { display: grid; gap: .45rem; margin: 0; padding: 0; list-style: none; max-height: 17rem; overflow: auto; }
      .d70fix5b-picked-list li { display: grid; grid-template-columns: 1.9rem 1fr auto; align-items: center; gap: .5rem; padding: .55rem .65rem; border-radius: .9rem; background: #fff7ed; border: 1px solid #fed7aa; color: #7c2d12; font-weight: 900; direction: ltr; }
      .d70fix5b-picked-list li strong { display: inline-grid; place-items: center; width: 1.45rem; height: 1.45rem; border-radius: 999px; background: #fed7aa; color: #7c2d12; font-size: .78rem; }
      .d70fix5b-picked-list li b { font-size: 1.1rem; color: #111827; }
      @media (max-width: 980px) {
        .d70fix5b-layout { grid-template-columns: 1fr; }
        .d70fix5b-size-buttons { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        .d70fix5b-shell { --wheel-size: min(86vw, 26rem); }
      }
      @media (max-width: 560px) {
        .d70fix5b-shell { --wheel-size: min(88vw, 21rem); }
        .d70fix5b-wheel { min-width: 18rem; min-height: 18rem; border-width: .55rem; }
        .d70fix5b-wheel-center { width: 6.8rem; height: 6.8rem; }
        .d70fix5b-size-buttons { grid-template-columns: repeat(5, minmax(2.7rem, 1fr)); gap: .35rem; }
        .d70fix5b-size-button { min-height: 2.55rem; border-radius: .8rem; font-size: .9rem; }
        .d70fix5b-wheel-label--source > span { min-width: 3.8rem; font-size: .78rem; }
      }
    `;
    document.head.appendChild(style);
  }

  function bindRootEvents() {
    const root = document.getElementById('weeklyWheelRoot');
    if (!root || root.__d70fix5bBound) return;
    root.__d70fix5bBound = true;
    root.addEventListener('click', onRootClick);
  }

  function patchLessonPlayerRender() {
    const player = window.DarijaLessonPlayer;
    if (!player || typeof player.renderForPath !== 'function' || player.__d70fix5bWrapped) return;
    const originalRenderForPath = player.renderForPath.bind(player);
    player.renderForPath = function renderForPathWithColoredSourceWheel(path) {
      const result = originalRenderForPath(path);
      window.setTimeout(renderWeeklyWheel, 0);
      return result;
    };
    player.__d70fix5bWrapped = true;
  }

  function boot() {
    injectCss();
    bindRootEvents();
    patchLessonPlayerRender();
    renderWeeklyWheel();
    window.setTimeout(renderWeeklyWheel, 50);
    window.setTimeout(renderWeeklyWheel, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
  } else {
    boot();
  }

  window.addEventListener('hashchange', () => window.setTimeout(boot, 0));
  window.addEventListener('popstate', () => window.setTimeout(boot, 0));
  window.addEventListener('darija30:d70-fix2-ready', () => window.setTimeout(boot, 0));
  window.addEventListener('darija30:route-ready', () => window.setTimeout(boot, 0));
  window.dispatchEvent(new CustomEvent('darija30:d70-fix5b-ready'));
})();
