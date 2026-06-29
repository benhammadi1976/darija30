# DARIJA30 Phase D31 — Admin Audio Collapsible Day Groups

## Goal
Make the Admin Audio / Media Matrix page easier to manage by grouping the 150 phrase rows into 30 collapsible day groups.

## Implemented
- Replaced the long all-phrases table on `#/admin/audio` with day-group cards.
- Each day group is collapsible.
- Each day header shows summary badges:
  - Normal audio count
  - Slow audio count
  - Video count
  - Visual count
  - Ready / Needs recording status
- Each opened day displays only its 5 phrase rows.
- Added `Open all` and `Close all` controls.
- Saved open/closed day state in `localStorage` using `darija30_admin_audio_open_days`.
- Kept the existing file-path map for Normal, Slow, and Video delivery naming.

## Not changed
- No lesson content changed.
- No audio paths changed.
- No video paths changed.
- No image assets changed.
- No lesson player logic changed.
- No homepage copy changed.
- No backend/admin upload logic added.

## Files changed
- `js/admin-content-manager.js`
- `css/styles.css`
- `README_AR.md`
- This report
- D31 model document

## Validation
- `node --check js/data/lessons-data.js` passed.
- `node --check js/admin-content-manager.js` passed.
- `node --check js/lesson-player.js` passed.
- `node --check js/router.js` passed.
- `node --check js/app.js` passed.
- `node --check js/progress-store.js` passed.
- `node --check js/audio-player.js` passed.
- Lesson count remains 30.
- Phrase count remains 150.
- Scene visual count remains 10.
