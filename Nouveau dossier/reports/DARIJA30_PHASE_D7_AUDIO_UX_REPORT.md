# Darija30 Phase D7 — Audio UX + QA

## Objective

Improve the learner experience around audio before real Moroccan recordings are added.

Darija30 is audio-first, so missing audio should not feel like a bug. It should clearly tell the creator which MP3 file is needed.

## Files changed

- `js/audio-player.js`
- `js/lesson-player.js`
- `css/styles.css`
- `assets/audio/README.md`
- `content/AUDIO_MANIFEST.csv`
- `content/AUDIO_MANIFEST.md`
- `content/AUDIO_QA_CHECKLIST.md`
- `README_AR.md`

## Main changes

### 1. Better missing-audio behavior

Audio buttons now show a clear state when a file is missing:

```text
🎙️ Recording needed
```

A non-blocking notice appears with the exact missing file path.

### 2. Better audio button states

Audio buttons now show:

- Loading
- Playing
- Slow playing
- Recording needed

### 3. Central audio notice system

The audio player now creates a small status region at the bottom of the screen.
It is better than alerts because it does not break the lesson flow.

### 4. QA checklist added

Added:

```text
content/AUDIO_QA_CHECKLIST.md
```

This defines recording and testing rules for the first MVP.

### 5. Audio manifest added

Added:

```text
content/AUDIO_MANIFEST.csv
content/AUDIO_MANIFEST.md
```

These list all 30 MP3 files needed for the 15 phrases in the first 3 free lessons.

## Validation

`node --check` passed for:

- `js/audio-player.js`
- `js/lesson-player.js`
- `js/progress-store.js`
- `js/router.js`
- `js/app.js`
- `js/data/lessons-data.js`

## Next recommended phase

Phase D8 — Mobile polish and final public-test landing flow:

- reduce friction from home to free lesson
- improve mobile spacing
- add public-test checklist
- prepare first external tester flow
