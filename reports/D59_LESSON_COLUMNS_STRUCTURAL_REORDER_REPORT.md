# D59 — Lesson Columns Structural Reorder

## Goal
Fix the mobile learning order by changing the actual lesson column structure, not relying on mobile-only CSS ordering.

## User-reported issue
After D58, the phone layout still did not preserve the intended learning order. The user proposed changing the two desktop columns so the left column starts with teaching/talqin and the right column contains repetition/practice with the visual/video.

## Files changed
- `js/lesson-player.js`
- `css/styles.css`

## Structural change
The phrase page now uses this source/DOM order:

1. Scenario
2. Goal / Darija30 Method
3. Say This
4. Normal Speed / Slow Speed
5. Meaning / Cultural Intent
6. Watch & Repeat
7. Moment Visual
8. Now You Speak / Record yourself
9. I'm in Morocco / Play with my voice
10. Continue / navigation

## Desktop layout
- Left column: teaching/talqin first.
- Right column: visual + repetition + learner recording/final scene.

## Mobile layout
Because the DOM order is now teaching-first, the phone naturally stacks in the correct learning order without `display: contents` or CSS reordering hacks.

## Safety boundaries
- No lesson phrases changed.
- No audio files changed.
- No video files changed.
- No recording logic changed.
- D58 safer phone quiz confirmation remains present.

## Validation
- `node --check` passed for all JS files in `js/`.
