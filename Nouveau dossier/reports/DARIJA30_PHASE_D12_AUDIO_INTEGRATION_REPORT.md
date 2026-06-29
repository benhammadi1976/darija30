# Darija30 Phase D12 Report — Real Audio Integration Prep

## Goal
Prepare the project for importing real Moroccan MP3 audio without changing the core learning philosophy: simplicity, audio-first, scenario-first, and cultural understanding.

## Files added
- `js/audio-readiness.js`
- `content/REAL_AUDIO_IMPORT_MANIFEST.csv`
- `content/REAL_AUDIO_IMPORT_MANIFEST.md`
- `content/REAL_AUDIO_INTEGRATION_GUIDE.md`
- `content/VOICE_TALENT_BRIEF.md`
- `content/REAL_AUDIO_QA_CHECKLIST.md`
- `assets/audio/day01/PLACE_REAL_AUDIO_HERE.md`
- `assets/audio/day02/PLACE_REAL_AUDIO_HERE.md`
- `assets/audio/day03/PLACE_REAL_AUDIO_HERE.md`

## Files modified
- `index.html`
- `js/router.js`
- `README_AR.md`

## What changed
- Added hidden route `#/audio-qa`.
- Added an audio readiness checker that reads expected audio paths from `lessons-data.js`.
- The checker tests MP3 paths and reports Ready/Missing.
- Generated a real audio import manifest for all 30 required MP3 files.
- Added voice talent instructions and QA rules.

## Audio status
- 15 free phrases require 30 MP3 files: normal + slow.
- Real MP3 files are not included yet.
- This phase prepares integration; it does not fake or generate production audio.

## Validation
- JavaScript syntax checked with `node --check`.
- Route added without exposing it in public navigation.

## Next recommended phase
Phase D13 — Trust/Legal/Public polish: privacy, refund/support notes, terms placeholder, and a clean pre-launch footer.
