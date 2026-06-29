# D60 — Balanced Two-Column Lesson Layout

## Base
Started from `darija30_clean_v57_remove_bonus_phrases(2).zip`, not from the rejected D59 layout.

## Changed files
- `js/lesson-player.js`
- `css/styles.css`
- `index.html`
- `reports/D60_BALANCED_TWO_COLUMN_LESSON_LAYOUT_REPORT.md`

## What changed
- Rebuilt the phrase page into two equal desktop columns.
- Left/first desktop column: Say This, Normal/Slow audio, Meaning, Cultural Intent, Watch & Repeat / Moment Visual.
- Right/second desktop column: Scenario, Now You Speak, I’m in Morocco, Culture Note, Memory Hook.
- Added mobile-only ordering so the learning flow becomes: Scenario, Say This/audio, Watch & Repeat visual, speaking practice.
- Added phone-safe Do you remember confirmation fallback from D58 so mobile recording does not falsely fail when speech recognition is limited.
- Updated `index.html` asset query strings to `?v=d60` for CSS and lesson player JS cache refresh.

## Not changed
- No lesson data/content changes.
- No audio/video asset changes.
- No pricing/blog/admin/data changes.

## Validation
- `node --check` passed for all root `js/*.js` files.
