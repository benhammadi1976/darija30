# D58 Mobile Learning Flow Fix

## Scope
Applied a focused mobile-only fix on top of `darija30_clean_v57_remove_bonus_phrases`.

## Changes
- Reordered lesson content on mobile so the learning flow is preserved:
  1. Scenario/context
  2. Say This + Normal/Slow audio
  3. Meaning / visual support
  4. Now You Speak
  5. I’m in Morocco / play with my voice
- Preserved the desktop two-column lesson layout behavior.
- Improved the Do you remember phone recording path:
  - The phone recording no longer immediately feels like a wrong answer when speech recognition is unreliable.
  - On mobile, after recording is saved and no reliable transcript match is found, the learner is asked to tap the phrase they said to confirm.
  - The existing successful manual phrase-confirmation path remains intact.

## Files changed
- `js/lesson-player.js`
- `css/styles.css`
- `reports/D58_MOBILE_LEARNING_FLOW_FIX_REPORT.md`

## Not changed
- No lesson data changed.
- No audio files changed.
- No video files changed.
- No images/posters changed.
- No backend/Supabase/Render settings changed.
