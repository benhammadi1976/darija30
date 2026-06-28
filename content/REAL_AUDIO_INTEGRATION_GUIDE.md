# Darija30 Real Audio Integration Guide — Phase D12

## Purpose
Darija30 is audio-first. Before paid traffic or a public demo, every free lesson phrase must have real Moroccan audio in both normal and slow versions.

## Integration steps
1. Record the 30 MP3 files listed in `REAL_AUDIO_IMPORT_MANIFEST.csv`.
2. Put each file in the exact folder path shown in the manifest.
3. Open the local site.
4. Visit the hidden route: `#/audio-qa`.
5. Click **Check audio files**.
6. Confirm all files show `ready`.
7. Open `#/free-lesson` and manually test every Normal/Slow button.
8. Re-run `#/launch-qa` after audio is ready.

## Folder structure
```text
assets/audio/day01/
assets/audio/day02/
assets/audio/day03/
```

## File naming rule
Use stable IDs from `lessons-data.js`:

```text
<phrase-id>-normal.mp3
<phrase-id>-slow.mp3
```

Example:

```text
assets/audio/day01/taxi-001-normal.mp3
assets/audio/day01/taxi-001-slow.mp3
```

## Launch blocker
If the audio QA page shows missing files, the project is not ready for ads or paid users.
