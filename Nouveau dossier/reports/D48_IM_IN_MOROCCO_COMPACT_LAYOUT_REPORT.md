# D48 — I’m in Morocco Compact Layout

## Summary
Polished the lesson phrase page layout so the practical training flow matches the requested layout:

- Left column: Scenario → Now You Speak → I’m in Morocco.
- Right column: Main Phrase → Listen buttons → listening tip → meaning/culture → Moment Visual.

## Changed files
- `js/lesson-player.js`
- `css/styles.css`

## What changed
- Moved `Now You Speak` into the left Scenario column.
- Moved `I’m in Morocco` directly under `Now You Speak`.
- Removed the full-width `I’m in Morocco` block from below the culture/memory cards.
- Kept the listening tip under the listening buttons.
- Made the `I’m in Morocco` card more compact for the left column.
- Kept the same local-only learner recording behavior.
- Kept `Play with my voice` disabled until the learner records their voice.

## Not changed
- No image files changed.
- No video files changed.
- No lesson data changed.
- No Do you remember? page changes.
- No server upload or backend behavior added.

## Validation
- `node --check js/lesson-player.js` passed.
- `node --check js/data/lessons-data.js` passed.
