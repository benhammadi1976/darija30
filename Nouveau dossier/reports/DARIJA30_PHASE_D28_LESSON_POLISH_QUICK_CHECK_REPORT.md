# DARIJA30 Phase D28 — Lesson Polish + Collapsible Quick Check

## Goal
Polish the lesson player after Phase D27 and make the Quick Check section collapsible.

## Changes
- Expanded the lesson player desktop container to improve the page on large screens.
- Added a 5-phrase stepper inside each lesson.
- Added phrase jump buttons for Phrase 1–5.
- Converted Quick Check into a collapsible card.
- Stored Quick Check open/closed state in `localStorage` per lesson phrase.
- Updated Quick Check summary to show question count and answer progress.
- Slightly reduced the Moment Visual bubble size so the independent image remains visible.

## Not changed
- No lesson content changed.
- No audio paths changed.
- No video paths changed.
- No image files changed.
- No lock/admin/backend logic changed.

## Validation
- `node --check js/data/lessons-data.js` passed.
- `node --check js/lesson-player.js` passed.
- `node --check js/router.js` passed.
- `node --check js/app.js` passed.
- `node --check js/progress-store.js` passed.
- Lesson count remains 30.
- Phrase count remains 150.
- Scene visual count remains 10.
