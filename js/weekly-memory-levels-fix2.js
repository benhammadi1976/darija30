(function () {
  if (window.__DARIJA30_D70_FIX2_PROGRESSIVE_MEMORY__) return;
  window.__DARIJA30_D70_FIX2_PROGRESSIVE_MEMORY__ = true;

  function injectProgressiveMemoryCss() {
    if (document.getElementById('darija30-d70-fix2-memory-levels-css')) return;
    const style = document.createElement('style');
    style.id = 'darija30-d70-fix2-memory-levels-css';
    style.textContent = `
      .weekly-wheel-memory-level-rail {
        position: absolute;
        right: 1.25rem;
        top: 50%;
        transform: translateY(-50%);
        z-index: 9;
        display: grid;
        grid-template-columns: repeat(var(--memory-level-count, 1), minmax(4.35rem, 4.9rem));
        gap: .55rem;
        align-items: stretch;
        padding: .85rem;
        border-radius: 2rem;
        background: rgba(255, 246, 229, .72);
        border: 1px solid rgba(255,255,255,.58);
        box-shadow: 0 22px 45px rgba(0,0,0,.22);
        backdrop-filter: blur(14px);
      }
      .weekly-wheel-memory-level-rail--inline {
        position: relative;
        right: auto;
        top: auto;
        transform: none;
        width: min(100%, 44rem);
        margin: .5rem auto 1.25rem;
        justify-content: center;
      }
      .weekly-wheel-memory-level-column {
        display: grid;
        gap: .42rem;
        justify-items: center;
        align-content: start;
      }
      .weekly-wheel-memory-level-title {
        font-size: .62rem;
        line-height: 1.05;
        font-weight: 1000;
        text-transform: uppercase;
        letter-spacing: .05em;
        color: rgba(15, 23, 42, .86);
        text-align: center;
        margin-bottom: .18rem;
      }
      .weekly-memory-level-size {
        position: relative;
        width: 3.42rem;
        height: 3.42rem;
        border-radius: 999px;
        border: 4px solid rgba(255,255,255,.78);
        background: #242932;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 1000;
        font-size: 1.05rem;
        box-shadow: inset 0 0 0 2px rgba(0,0,0,.12), 0 10px 18px rgba(0,0,0,.18);
        transition: transform .16s ease, background .16s ease, box-shadow .16s ease;
      }
      .weekly-memory-level-size:hover,
      .weekly-memory-level-size:focus-visible {
        transform: translateY(-2px) scale(1.03);
        box-shadow: inset 0 0 0 2px rgba(0,0,0,.1), 0 14px 24px rgba(0,0,0,.25);
        outline: none;
      }
      .weekly-memory-level-size.is-active {
        background: #f5c536;
        color: #111827;
        border-color: rgba(255,255,255,.95);
        box-shadow: 0 0 0 6px rgba(245, 197, 54, .16), 0 14px 30px rgba(245, 197, 54, .28);
      }
      .weekly-memory-level-tooltip {
        position: absolute;
        right: calc(100% + .72rem);
        top: 50%;
        transform: translateY(-50%) translateX(8px);
        width: 17rem;
        padding: .9rem 1rem;
        border-radius: 1.15rem;
        background: rgba(10, 14, 24, .94);
        color: #fff;
        box-shadow: 0 18px 42px rgba(0,0,0,.28);
        font-size: .8rem;
        line-height: 1.35;
        font-weight: 800;
        text-align: left;
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
        z-index: 12;
      }
      .weekly-memory-level-tooltip strong {
        display: block;
        color: #f8d65b;
        font-size: .88rem;
        margin-bottom: .25rem;
      }
      .weekly-memory-level-size:hover .weekly-memory-level-tooltip,
      .weekly-memory-level-size:focus-visible .weekly-memory-level-tooltip {
        opacity: 1;
        visibility: visible;
        transform: translateY(-50%) translateX(0);
      }
      .weekly-wheel-number-mark.is-compact {
        opacity: .18;
        transform: rotate(var(--mark-angle)) translateY(calc(var(--wheel-radius, 16rem) * -1)) rotate(calc(var(--mark-angle) * -1)) scale(.58);
      }
      @media (max-width: 1100px) {
        .weekly-wheel-memory-level-rail {
          right: .75rem;
          grid-template-columns: repeat(var(--memory-level-count, 1), minmax(3.65rem, 4.15rem));
          gap: .35rem;
          padding: .6rem;
        }
        .weekly-memory-level-size {
          width: 3rem;
          height: 3rem;
          font-size: .92rem;
        }
        .weekly-memory-level-tooltip {
          width: 13.5rem;
          font-size: .74rem;
        }
      }
      @media (max-width: 820px) {
        .weekly-wheel-memory-level-rail {
          left: 50%;
          right: auto;
          top: auto;
          bottom: .7rem;
          transform: translateX(-50%);
          grid-auto-flow: column;
          overflow-x: auto;
          max-width: calc(100vw - 1rem);
        }
        .weekly-memory-level-tooltip {
          display: none;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function patchLessonPlayerSource(source) {
    let patched = String(source || '');

    patched = patched
      .replace('challengeSizes: [5, 10, 15, 20, 35],', 'challengeSizes: [5, 10, 15, 20, 25, 30, 35],')
      .replace('challengeSizes: [5, 10, 15, 20, 25, 70],', 'challengeSizes: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],')
      .replace('challengeSizes: [5, 10, 15, 20, 30, 105],', 'challengeSizes: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105],')
      .replace('challengeSizes: [5, 10, 15, 20, 35, 140],', 'challengeSizes: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140],');

    patched = patched.replace(
      /  function weeklyChallengeSizeLabel\(size, bankLength\) \{[\s\S]*?  function weeklyChallengeSizeTooltip\(size, bankLength\) \{[\s\S]*?\n  \}\n\n/,
`  function weeklyChallengeSizeLevel(size) {
    const value = Number(size) || 5;
    if (value <= 35) return { key: 1, title: 'Memory Level 1', range: '5–35', focus: 'Short memory: this week and quick recall.' };
    if (value <= 70) return { key: 2, title: 'Memory Level 2', range: '40–70', focus: 'Longer memory: mix older and newer situations.' };
    if (value <= 105) return { key: 3, title: 'Memory Level 3', range: '75–105', focus: 'Deep memory: answer a larger cumulative bank.' };
    return { key: 4, title: 'Memory Level 4', range: '110–140', focus: 'Full long-memory challenge across the level.' };
  }

  function weeklyChallengeSizeLabel(size, bankLength) {
    const value = Math.min(Number(size) || 5, Number(bankLength) || Number(size) || 5);
    const level = weeklyChallengeSizeLevel(value);
    if (value >= Number(bankLength || 0)) return level.title + ' • Full ' + value;
    return level.title + ' • ' + value;
  }

  function weeklyChallengeSizeTooltip(size, bankLength) {
    const value = Math.min(Number(size) || 5, Number(bankLength) || Number(size) || 5);
    const level = weeklyChallengeSizeLevel(value);
    const full = value >= Number(bankLength || 0);
    const headline = full ? 'Full challenge — answer ' + value + ' situations.' : 'Answer ' + value + ' random situations.';
    return level.title + ' — ' + headline + ' ' + level.focus + ' These numbers choose how many situations you answer, not the wheel result.';
  }

  function weeklyMemoryLevelGroups(plan, bankLength) {
    const sizes = (plan.challengeSizes || [5]).filter((size) => Number(size) <= Math.max(Number(bankLength) || 1, 1));
    const groups = [];
    sizes.forEach((size) => {
      const level = weeklyChallengeSizeLevel(size);
      let group = groups.find((item) => item.key === level.key);
      if (!group) {
        group = { key: level.key, title: level.title, range: level.range, sizes: [] };
        groups.push(group);
      }
      group.sizes.push(size);
    });
    return groups;
  }

  function weeklyMemoryLevelSelector(plan, challengeSize, bankLength, mode = 'rail') {
    const groups = weeklyMemoryLevelGroups(plan, bankLength);
    if (!groups.length) return '';
    const levelCount = Math.max(groups.length, 1);
    return '<div class="weekly-wheel-memory-level-rail weekly-wheel-memory-level-rail--' + escapeHtml(mode) + '" style="--memory-level-count:' + escapeHtml(levelCount) + ';" aria-label="Choose memory challenge level">' +
      groups.map((group) => (
        '<div class="weekly-wheel-memory-level-column" aria-label="' + escapeHtml(group.title) + '">' +
          '<span class="weekly-wheel-memory-level-title">' + escapeHtml(group.title) + '<br><small>' + escapeHtml(group.range) + '</small></span>' +
          group.sizes.map((size) => {
            const value = Math.min(Number(size) || 5, Number(bankLength) || Number(size) || 5);
            const active = Number(size) === Number(challengeSize);
            const tooltip = weeklyChallengeSizeTooltip(size, bankLength);
            return '<button type="button" data-weekly-size="' + escapeHtml(size) + '" data-weekly-size-tip="' + escapeHtml(tooltip) + '" class="weekly-memory-level-size ' + (active ? 'is-active' : '') + '" title="' + escapeHtml(tooltip) + '" aria-label="' + escapeHtml(weeklyChallengeSizeLabel(size, bankLength)) + '">' +
              '<span>' + escapeHtml(value) + '</span>' +
              '<span class="weekly-memory-level-tooltip"><strong>' + escapeHtml(weeklyChallengeSizeLabel(size, bankLength)) + '</strong>' + escapeHtml(tooltip) + '</span>' +
            '</button>';
          }).join('') +
        '</div>'
      )).join('') +
    '</div>';
  }

`);

    patched = patched.replace(
      /  function weeklyWheelNumberMarks\(total, currentNumber\) \{[\s\S]*?\n  \}\n\n  function normalizeWeeklyWheelImageCandidate/,
`  function weeklyWheelNumberMarks(total, currentNumber) {
    const count = Math.max(Number(total) || 0, 0);
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

    patched = patched.replace(
      /            <div class="weekly-wheel-fullscreen-size-rail" aria-label="Choose challenge size">[\s\S]*?            <\/div>\n\n            <div class="weekly-wheel-fullscreen-round"/,
`            \${weeklyMemoryLevelSelector(plan, challengeSize, bank.length, 'rail')}

            <div class="weekly-wheel-fullscreen-round"`);

    patched = patched.replace(
      /           <div class="weekly-wheel-fullscreen-size-rail weekly-wheel-fullscreen-size-rail--behind" aria-label="Challenge sizes preview">[\s\S]*?           <\/div>\n\n           <div class="weekly-wheel-fullscreen-round"/,
`           \${weeklyMemoryLevelSelector(plan, challengeSize, bank.length, 'rail')}

           <div class="weekly-wheel-fullscreen-round"`);

    patched = patched.replace(
      /            <div class="weekly-wheel-size-list weekly-wheel-size-list--center" aria-label="Choose challenge size">[\s\S]*?            <\/div>\n\n            <div class="weekly-wheel-big-stage/,
`            \${weeklyMemoryLevelSelector(plan, challengeSize, bank.length, 'inline')}

            <div class="weekly-wheel-big-stage`);

    patched += '\n//# sourceURL=darija30-lesson-player-d70-fix2-runtime.js\n';
    return patched;
  }

  function rerenderAfterPatch() {
    const path = window.location.hash.replace(/^#/, '') || '/';
    window.DarijaLessonPlayer?.renderForPath?.(path);
  }

  injectProgressiveMemoryCss();

  fetch('./js/lesson-player.js?v=d70', { cache: 'no-store' })
    .then((response) => response.ok ? response.text() : Promise.reject(new Error('Could not load lesson player source')))
    .then((source) => {
      const patched = patchLessonPlayerSource(source);
      // Re-run a transformed copy of the lesson player in its own closure; it replaces window.DarijaLessonPlayer.
      (0, eval)(patched);
      rerenderAfterPatch();
      window.dispatchEvent(new CustomEvent('darija30:d70-fix2-ready'));
    })
    .catch((error) => {
      console.warn('D70-FIX-2 progressive memory levels could not initialize:', error);
    });
})();
