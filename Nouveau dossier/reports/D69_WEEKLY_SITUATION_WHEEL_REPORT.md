# D69 — Weekly Situation Wheel

## Scope
Frontend-only phase.

## Implemented
- Added learner route `#/app/weekly-wheel`.
- Added `Weekly Wheel` link in the app nav.
- Added cumulative weekly wheel banks:
  - Week 1: Days 1–7 = 35 situations.
  - Week 2: Days 1–14 = 70 situations.
  - Week 3: Days 1–21 = 105 situations.
  - Week 4: Days 1–28 = 140 situations.
  - Final: Days 1–30 = 150 situations.
- Added challenge-size choices, allowing the learner to choose how many situations to answer.
- Added random spin behavior: the wheel stops on a situation number and opens the linked situation card.
- Reused the existing daily situation challenge card behavior instead of rebuilding the daily check.
- Updated the 30-day plan grouping to 4 weekly banks + Day 29 + Day 30.
- Day 29 is positioned as Real Morocco Mixed Situations.
- Day 30 is positioned as Final Survival Day with the final wheel.
- Updated router query handling for `#/app/weekly-wheel?week=...`.

## Not changed
- Daily Review / Do you remember logic.
- Supabase.
- Admin media upload.
- Lesson phrase data.
- Audio/video assets.

## Validation
- `node --check js/lesson-player.js` passed.
- `node --check js/router.js` passed.
