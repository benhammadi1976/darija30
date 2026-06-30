(function () {
  if (window.__DARIJA30_D70_FIX3_TWO_STEP_MEMORY__) return;
  window.__DARIJA30_D70_FIX3_TWO_STEP_MEMORY__ = true;

  function injectTwoStepMemoryCss() {
    if (document.getElementById('darija30-d70-fix3-two-step-css')) return;
    const style = document.createElement('style');
    style.id = 'darija30-d70-fix3-two-step-css';
    style.textContent = `
      .weekly-wheel-two-step-status {
        position: absolute;
        left: 50%;
        top: 1rem;
        transform: translateX(-50%);
        z-index: 10;
        min-width: min(28rem, calc(100vw - 2rem));
        padding: .82rem 1.1rem;
        border-radius: 1.3rem;
        background: rgba(15, 23, 42, .82);
        color: #fff;
        border: 1px solid rgba(255,255,255,.22);
        box-shadow: 0 18px 40px rgba(0,0,0,.22);
        backdrop-filter: blur(14px);
        text-align: center;
        pointer-events: none;
      }
      .weekly-wheel-two-step-status span {
        display: block;
        font-size: .68rem;
        font-weight: 1000;
        letter-spacing: .12em;
        text-transform: uppercase;
        color: #f8d65b;
        margin-bottom: .16rem;
      }
      .weekly-wheel-two-step-status strong {
        display: block;
        font-size: 1.03rem;
        line-height: 1.15;
      }
      .weekly-wheel-two-step-status small {
        display: block;
        margin-top: .18rem;
        color: rgba(255,255,255,.76);
        font-weight: 800;
      }
      .weekly-wheel-source-mark {
        min-width: 3.75rem;
        height: 3.75rem;
        padding: 0 .35rem;
        border-radius: 999px;
        background: rgba(255,255,255,.94);
        color: #101827;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: .08rem;
        font-size: .68rem;
        font-weight: 1000;
        line-height: 1.02;
        text-align: center;
        box-shadow: 0 12px 22px rgba(0,0,0,.18);
      }
      .weekly-wheel-source-mark b {
        font-size: 1rem;
        color: #c0392b;
      }
      .weekly-wheel-source-mark.is-active {
        background: #f5c536;
        color: #111827;
        box-shadow: 0 0 0 6px rgba(245, 197, 54, .18), 0 15px 30px rgba(245, 197, 54, .25);
      }
      .weekly-wheel-source-mark.is-active b { color: #111827; }
      .weekly-wheel-fullscreen-size-rail {
        z-index: 11;
      }
      .weekly-wheel-number-mark.is-compact {
        opacity: .18;
        transform: rotate(var(--mark-angle)) translateY(calc(var(--wheel-radius, 16rem) * -1)) rotate(calc(var(--mark-angle) * -1)) scale(.58);
      }
      @media (max-width: 900px) {
        .weekly-wheel-two-step-status {
          top: .7rem;
          min-width: min(22rem, calc(100vw - 1rem));
          padding: .65rem .85rem;
        }
        .weekly-wheel-two-step-status strong { font-size: .88rem; }
        .weekly-wheel-source-mark {
          min-width: 3.05rem;
          height: 3.05rem;
          font-size: .58rem;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function patchLessonPlayerSource(source) {
    let patched = String(source || '');

    // Keep challenge size simple: how many rounds the learner wants, not cumulative bank size.
    patched = patched
      .replace('challengeSizes: [5, 10, 15, 20, 35],', 'challengeSizes: [5, 10, 15, 20, 35],')
      .replace('challengeSizes: [5, 10, 15, 20, 25, 70],', 'challengeSizes: [5, 10, 15, 20, 35],')
      .replace('challengeSizes: [5, 10, 15, 20, 30, 105],', 'challengeSizes: [5, 10, 15, 20, 35],')
      .replace('challengeSizes: [5, 10, 15, 20, 35, 140],', 'challengeSizes: [5, 10, 15, 20, 35],')
      .replace('challengeSizes: [5, 10, 15, 20, 30, 150],', 'challengeSizes: [5, 10, 15, 20, 35],');

    patched = patched.replace(
      /  function weeklySituationBank\(plan\) \{[\s\S]*?\n  \}\n\n  function readWeeklyUsedIds/,
`  function weeklySituationBank(plan) {
    let number = 0;
    return lessons()
      .filter((lesson) => Number(lesson.day) >= 1 && Number(lesson.day) <= Number(plan.endDay))
      .flatMap((lesson) => (lesson.phrases || []).map((phrase, phraseIndex) => {
        number += 1;
        return {
          id: \`\${lesson.id || lesson.day}:\${phrase.id || phraseIndex}\`,
          number,
          lesson,
          phrase,
          phraseIndex
        };
      }));
  }

  function weeklyMemorySourceEntries(plan) {
    const endDay = Number(plan?.endDay || 7);
    const maxWeek = Math.min(Math.max(Math.ceil(endDay / 7), 1), 4);
    return Array.from({ length: maxWeek }, (_, index) => {
      const weekNumber = index + 1;
      const startDay = (weekNumber - 1) * 7 + 1;
      const end = Math.min(weekNumber * 7, endDay);
      return {
        key: \`source-week\${weekNumber}\`,
        number: weekNumber,
        label: \`Week \${weekNumber} Memory\`,
        shortLabel: \`W\${weekNumber}\`,
        startDay,
        endDay: end,
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

  function weeklySourceSituationBank(plan, sourceKey) {
    const source = weeklySourceEntryForKey(plan, sourceKey);
    if (!source) return weeklySituationBank(plan);
    return weeklySituationBank(plan).filter((entry) => {
      const day = Number(entry?.lesson?.day || 0);
      return day >= Number(source.startDay) && day <= Number(source.endDay);
    });
  }

  function weeklyActiveSituationBank(plan) {
    if (!weeklyRequiresSourceSpin(plan)) return weeklySituationBank(plan);
    if (!state.weeklyWheel.memorySourceKey) return weeklySituationBank(plan);
    return weeklySourceSituationBank(plan, state.weeklyWheel.memorySourceKey);
  }

  function weeklyIsSourcePhase(plan) {
    return weeklyRequiresSourceSpin(plan) && state.weeklyWheel.memoryStep !== 'situation';
  }

  function weeklyTwoStepStatusMarkup(plan, isSourcePhase, selectedSource) {
    if (!weeklyRequiresSourceSpin(plan)) {
      return '<div class="weekly-wheel-two-step-status"><span>One-step wheel</span><strong>Spin to choose a situation</strong><small>Week 1 has one memory bank.</small></div>';
    }
    if (isSourcePhase) {
      return '<div class="weekly-wheel-two-step-status"><span>Step 1 of 2</span><strong>Spin to choose the memory week</strong><small>The system mixes short memory and long memory.</small></div>';
    }
    return '<div class="weekly-wheel-two-step-status"><span>Step 2 of 2</span><strong>Now spin the situation wheel</strong><small>Source: ' + escapeHtml(selectedSource?.label || 'Selected memory week') + '</small></div>';
  }

  function readWeeklyUsedIds`);

    patched = patched.replace(
      /  function setWeeklyWheelPlan\(planKey\) \{[\s\S]*?\n  \}\n\n  function setWeeklyWheelChallengeSize/,
`  function setWeeklyWheelPlan(planKey) {
    const plan = weeklyWheelPlan(planKey);
    window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));
    window.clearTimeout(Number(state.weeklyWheel.resultTimer || 0));
    state.weeklyWheel.planKey = plan.key;
    const sizes = plan.challengeSizes || [5];
    if (!sizes.includes(state.weeklyWheel.challengeSize)) state.weeklyWheel.challengeSize = sizes[0];
    state.weeklyWheel.currentId = '';
    state.weeklyWheel.memoryStep = weeklyRequiresSourceSpin(plan) ? 'source' : 'situation';
    state.weeklyWheel.memorySourceKey = '';
    state.weeklyWheel.currentSourceKey = '';
    state.weeklyWheel.mode = 'wheel';
    state.weeklyWheel.isSpinning = false;
  }

  function setWeeklyWheelChallengeSize`);

    patched = patched.replace(
      /  function setWeeklyWheelChallengeSize\(size\) \{[\s\S]*?\n  \}\n\n  function resetWeeklyWheelGame/,
`  function setWeeklyWheelChallengeSize(size) {
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
    setWeeklyUsedIds(plan.key, []);
    setWeeklyResults(plan.key, []);
  }

  function resetWeeklyWheelGame`);

    patched = patched.replace(
      /  function resetWeeklyWheelGame\(planKey = state\.weeklyWheel\.planKey\) \{[\s\S]*?\n  \}\n\n  function spinWeeklyWheel/,
`  function resetWeeklyWheelGame(planKey = state.weeklyWheel.planKey) {
    const plan = weeklyWheelPlan(planKey);
    window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));
    window.clearTimeout(Number(state.weeklyWheel.resultTimer || 0));
    setWeeklyUsedIds(planKey, []);
    setWeeklyResults(planKey, []);
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
    const selectedMarkAngle = ((Number(choice.number) - 1) * degreesPerSlice) % 360;
    const finalMod = (360 - selectedMarkAngle) % 360;
    const deltaToSelected = (finalMod - startMod + 360) % 360;
    const fullTurns = 4 + Math.floor(Math.random() * 3);

    state.weeklyWheel.spinStartRotation = startRotation;
    state.weeklyWheel.spinDurationMs = 3000 + Math.floor(Math.random() * 800);
    state.weeklyWheel.wheelRotation = startRotation + (fullTurns * 360) + deltaToSelected;
    return choice;
  }

  function spinWeeklyWheel`);

    patched = patched.replace(
      /  function spinWeeklyWheel\(\) \{[\s\S]*?\n  \}\n\n  function currentWeeklyWheelEntry/,
`  function spinWeeklyWheel() {
    const plan = weeklyWheelPlan(state.weeklyWheel.planKey);
    const bank = weeklyActiveSituationBank(plan);
    const fullBank = weeklySituationBank(plan);
    const challengeSize = Math.min(Number(state.weeklyWheel.challengeSize || 5), fullBank.length || 0);
    if (!bank.length || !challengeSize || state.weeklyWheel.isSpinning) return null;
    const score = weeklyWheelScore(plan.key, challengeSize);
    let used = readWeeklyUsedIds(plan.key).filter((id) => fullBank.some((entry) => entry.id === id));
    if (score.total >= challengeSize || used.length >= challengeSize) {
      used = [];
      setWeeklyResults(plan.key, []);
    }
    let available = bank.filter((entry) => !used.includes(entry.id));
    if (!available.length) available = bank;
    const choice = available[Math.floor(Math.random() * available.length)] || bank[0];
    used.push(choice.id);
    setWeeklyUsedIds(plan.key, used);
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

  function currentWeeklyWheelEntry`);

    patched = patched.replace(
      /  function currentWeeklyWheelEntry\(plan\) \{[\s\S]*?\n  \}\n\n  function weeklyChallengeSizeLabel/,
`  function currentWeeklyWheelEntry(plan) {
    const bank = weeklySituationBank(plan);
    return bank.find((entry) => entry.id === state.weeklyWheel.currentId) || null;
  }

  function weeklyChallengeSizeLabel`);

    patched = patched.replace(
      /  function weeklyChallengeSizeLabel\(size, bankLength\) \{[\s\S]*?  function weeklyChallengeSizeTooltip\(size, bankLength\) \{[\s\S]*?\n  \}\n\n\n  function weeklyWheelNumberMarks/,
`  function weeklyChallengeSizeLabel(size, bankLength) {
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


  function weeklyWheelNumberMarks`);

    patched = patched.replace(
      /  function weeklyWheelNumberMarks\(total, currentNumber\) \{[\s\S]*?\n  \}\n\n  function normalizeWeeklyWheelImageCandidate/,
`  function weeklyWheelNumberMarks(entriesOrTotal, currentNumber, currentKey = '') {
    if (Array.isArray(entriesOrTotal)) {
      const entries = entriesOrTotal;
      return entries.map((entry, index) => {
        const angle = (360 * index) / Math.max(entries.length, 1);
        const active = entry?.key && currentKey ? entry.key === currentKey : Number(currentNumber) === Number(entry?.number);
        if (entry?.isSource) {
          return '<span class="weekly-wheel-number-mark weekly-wheel-source-mark ' + (active ? 'is-active' : '') + '" style="--mark-angle:' + angle.toFixed(4) + 'deg;" aria-hidden="true"><b>' + escapeHtml(entry.shortLabel || ('W' + entry.number)) + '</b><small>Memory</small></span>';
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

  function normalizeWeeklyWheelImageCandidate`);

    // Record answer then reset Week 2–4 back to source wheel for the next round.
    patched = patched.replace(
      '    setWeeklyResults(planKey, results);\n    return { entryId, correct, results };',
      `    setWeeklyResults(planKey, results);\n    if (weeklyRequiresSourceSpin(weeklyWheelPlan(planKey))) {\n      state.weeklyWheel.memoryStep = 'source';\n      state.weeklyWheel.memorySourceKey = '';\n      state.weeklyWheel.currentSourceKey = '';\n    }\n    return { entryId, correct, results };`
    );

    patched = patched.replace(
      '    const bank = weeklySituationBank(plan);\n    const used = readWeeklyUsedIds(plan.key).filter((id) => bank.some((entry) => entry.id === id));',
      `    const bank = weeklySituationBank(plan);\n    if (weeklyRequiresSourceSpin(plan) && !state.weeklyWheel.memoryStep) state.weeklyWheel.memoryStep = 'source';\n    if (!weeklyRequiresSourceSpin(plan)) state.weeklyWheel.memoryStep = 'situation';\n    const isSourcePhase = weeklyIsSourcePhase(plan);\n    const selectedSource = weeklySourceEntryForKey(plan, state.weeklyWheel.memorySourceKey);\n    const targetBank = weeklyActiveSituationBank(plan);\n    const visualEntries = isSourcePhase ? weeklyMemorySourceEntries(plan) : targetBank;\n    const used = readWeeklyUsedIds(plan.key).filter((id) => bank.some((entry) => entry.id === id));`
    );

    patched = patched.replace('    const currentBankIndex = current ? bank.findIndex((entry) => entry.id === current.id) : -1;', '    const currentBankIndex = current ? targetBank.findIndex((entry) => entry.id === current.id) : -1;');
    patched = patched.replace('        phrases: bank.map((entry) => entry.phrase)', '        phrases: targetBank.map((entry) => entry.phrase)');

    patched = patched.replace(
      "    const centerWheelLabel = state.weeklyWheel.isSpinning ? 'Spinning' : revealWheelNumber ? 'Situation' : 'Ready';\n    const centerWheelNumber = state.weeklyWheel.isSpinning ? '•••' : revealWheelNumber ? `#${current.number}` : 'Spin';",
      "    const centerWheelLabel = state.weeklyWheel.isSpinning ? 'Spinning' : isSourcePhase ? 'Memory Source' : revealWheelNumber ? 'Situation' : 'Ready';\n    const centerWheelNumber = state.weeklyWheel.isSpinning ? '•••' : isSourcePhase ? 'Spin Week' : revealWheelNumber ? `#${current.number}` : 'Spin';"
    );

    patched = patched.replace(
      '            <div class="weekly-wheel-fullscreen-round" aria-live="polite">',
      '            ${weeklyTwoStepStatusMarkup(plan, isSourcePhase, selectedSource)}\n\n            <div class="weekly-wheel-fullscreen-round" aria-live="polite">'
    );

    patched = patched.replace(/--wheel-slices:\$\{escapeHtml\(bank\.length \|\| 1\)\};/g, '--wheel-slices:${escapeHtml(visualEntries.length || 1)};');
    patched = patched.replace(/\$\{weeklyWheelMemoryCards\(bank, activeWheelNumber\)\}/g, '${isSourcePhase ? \'\' : weeklyWheelMemoryCards(targetBank, activeWheelNumber)}');
    patched = patched.replace(/\$\{weeklyWheelNumberMarks\(bank\.length, activeWheelNumber\)\}/g, '${weeklyWheelNumberMarks(visualEntries, activeWheelNumber, state.weeklyWheel.currentSourceKey || state.weeklyWheel.memorySourceKey || \'\')}');

    patched = patched.replace(
      "      if (completed || state.weeklyWheel.mode === 'complete') resetWeeklyWheelGame(plan.key);\n      const choice = spinWeeklyWheel();",
      `      if (completed || state.weeklyWheel.mode === 'complete') resetWeeklyWheelGame(plan.key);\n      if (weeklyRequiresSourceSpin(plan) && state.weeklyWheel.memoryStep !== 'situation') {\n        const sourceChoice = spinWeeklySourceWheel(plan);\n        if (!sourceChoice) return;\n        state.weeklyWheel.mode = 'wheel';\n        state.weeklyWheel.isSpinning = true;\n        window.clearTimeout(Number(state.weeklyWheel.openTimer || 0));\n        window.clearTimeout(Number(state.weeklyWheel.resultTimer || 0));\n        renderWeeklyWheel(options);\n        state.weeklyWheel.openTimer = window.setTimeout(() => {\n          state.weeklyWheel.isSpinning = false;\n          state.weeklyWheel.memoryStep = 'situation';\n          state.weeklyWheel.mode = 'wheel';\n          renderWeeklyWheel(options);\n        }, Number(state.weeklyWheel.spinDurationMs || 3200) + 120);\n        return;\n      }\n      const choice = spinWeeklyWheel();`
    );

    patched += '\n//# sourceURL=darija30-lesson-player-d70-fix3-runtime.js\n';
    return patched;
  }

  function rerenderAfterPatch() {
    const path = window.location.hash.replace(/^#/, '') || '/';
    window.DarijaLessonPlayer?.renderForPath?.(path);
  }

  injectTwoStepMemoryCss();

  fetch('./js/lesson-player.js?v=d70', { cache: 'no-store' })
    .then((response) => response.ok ? response.text() : Promise.reject(new Error('Could not load lesson player source')))
    .then((source) => {
      const patched = patchLessonPlayerSource(source);
      (0, eval)(patched);
      rerenderAfterPatch();
      window.dispatchEvent(new CustomEvent('darija30:d70-fix3-ready'));
    })
    .catch((error) => {
      console.warn('D70-FIX-3 two-step memory wheel could not initialize:', error);
    });
})();
