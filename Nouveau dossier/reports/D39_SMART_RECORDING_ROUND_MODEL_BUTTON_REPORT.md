# D39 — Smart Recording + Round Model Button

## Scope
Applied on top of D38: `darija30_clean_v38_clean_remember_control_layer`.

## Files changed
- `js/lesson-player.js`
- `js/audio-player.js`
- `css/styles.css`

## What changed

### 1. Smart auto-stop recording
- The learner now presses `Record your answer` once.
- The button changes to `Listening...`.
- Recording stops automatically when the learner pauses after speaking.
- A maximum safety timeout stops recording after about 6.5 seconds if silence is not detected.
- The old `Stop recording` button is kept in the markup as a safety hook but hidden from the UI.

### 2. Silence detection
- Added a lightweight Web Audio API silence monitor for the Do you remember? practice recorder.
- Uses RMS audio level checks after a short arming delay.
- Stops after about 1.35 seconds of detected silence.

### 3. Round model audio button
- Changed `Listen to model` from a long text button into a small round transparent button with only `▶`.
- Kept accessible `aria-label` and `title`: `Listen to model`.
- Updated the shared audio player so icon-only audio buttons do not expand into loading/playing text.

### 4. Visual behavior
- Added a listening pulse style to the recording button.
- Kept all controls transparent and over the image.
- No return to the old information card.

## Not changed
- No lesson text changed.
- No images changed.
- No choices logic changed.
- No two-attempt learning logic changed.
- No routing changes.

## Validation
- `node --check js/lesson-player.js` passed.
- `node --check js/audio-player.js` passed.
