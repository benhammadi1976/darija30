# DARIJA30 Phase D30 — Homepage Positioning & Marketing Copy

## Goal
Sharpen the homepage so the product value is clear before users enter the lessons.

## Main positioning
Darija30 is positioned as:

> 30-Day Morocco Survival Speaking Trainer

Not:
- a traditional language course,
- a grammar-first course,
- a dictionary,
- a passive phrasebook.

## Implemented
- Updated homepage hero.
- Updated metadata, title, description, and Open Graph copy.
- Added clearer 30-day / 150-phrase promise.
- Added product positioning section.
- Added "How the lesson trains you" section:
  1. Listen
  2. Watch
  3. Speak
  4. Check
- Added comparison section:
  - Traditional language courses
  - Phrasebooks/dictionaries
  - Darija30
- Added Level 1 journey section:
  - Days 1–5
  - Days 6–10
  - Days 11–15
  - Days 16–20
  - Days 21–25
  - Days 26–30
- Rebuilt the free-start funnel around the first 3 free lessons.

## Not changed
- No lesson content changed.
- No audio paths changed.
- No video paths changed.
- No image assets changed.
- No app/lesson logic changed.
- No admin/lock logic changed.

## Validation
- `node --check js/data/lessons-data.js` passed.
- `node --check js/lesson-player.js` passed.
- `node --check js/router.js` passed.
- `node --check js/app.js` passed.
- `node --check js/progress-store.js` passed.
- `node --check js/audio-player.js` passed.
- Page section IDs checked: no duplicate page IDs.
- Lesson count remains 30.
- Phrase count remains 150.
- Scene visual count remains 10.
