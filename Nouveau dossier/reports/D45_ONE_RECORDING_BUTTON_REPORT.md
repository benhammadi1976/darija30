# D45 — One Recording Button for Now You Speak

## Scope
Updated the lesson phrase page recorder UI only.

## Changed
- Replaced the four separate recorder buttons in `Now You Speak`:
  - Record
  - Stop
  - Play My Voice
  - Try Again
- With one smart button that changes state:
  - `● Record yourself`
  - `■ Stop recording`
  - `▶ Play my voice`
  - `↻ Record again`
- Kept the local-only recording behavior.
- Kept the hidden audio element for playback, without exposing the browser audio controls.
- Added light styling for the single smart button.

## Not Changed
- No lesson text changed.
- No Day 1 images changed.
- No Day 1 videos changed.
- No Do you remember? memory-test page logic changed.
- No audio lesson files changed.

## Validation
- `node --check js/lesson-player.js` passed.
- `node --check js/data/lessons-data.js` passed.
- `node --check js/app.js` passed.
