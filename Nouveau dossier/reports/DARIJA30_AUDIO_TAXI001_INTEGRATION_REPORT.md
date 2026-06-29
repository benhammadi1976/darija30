# Darija30 Audio Integration Report — Batch 01 Taxi 001

## Phrase

- Phrase: `bghit nmshi l-otel`
- Moroccan chat spelling: `bghit nmshi l'otel`
- Lesson: Day 01 — Taxi Survival
- Phrase ID: `taxi-001`

## Source

- Source upload: `Voix 260624_213807.m4a`
- Cleaned source package: `darija30_audio_test_cleaned.zip`

## Integrated files

- `assets/audio/day01/taxi-001-normal.mp3`
- `assets/audio/day01/taxi-001-slow.mp3`

## Notes

- The original single recording was previously cleaned, trimmed, normalized, and split into normal and slow test files.
- This patch integrates those two cleaned MP3 files into the current Darija30 project.
- `lessons-data.js` already points to these exact paths, so no data-path change was required.

## QA

Open the app locally and test:

- `#/free-lesson`
- `#/app/lesson/day01-taxi-survival`
- `#/audio-qa`

Expected result:

- `taxi-001-normal.mp3` plays from the Taxi Survival phrase.
- `taxi-001-slow.mp3` plays from the Taxi Survival phrase.
