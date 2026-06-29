# Darija30 — Micro Video Taxi 001 Integration Report

## Phase
Micro Video Scene Integration — Taxi 001

## Source video
Uploaded file: `Taxi_lesson__مشهد_قصير_شخص_ير.mp4`

## Integrated phrase
- Lesson: Day 01 — Taxi Survival
- Phrase ID: `taxi-001`
- Phrase: `bghit nmshi l-otel`
- Meaning: I want to go to the hotel.

## Files added
- `assets/video/day01/taxi-001-scene.mp4`
- `assets/images/video-posters/taxi-001-scene.jpg`

## Data fields added to `js/data/lessons-data.js`
- `sceneVideo`
- `scenePoster`
- `sceneCaption`

## UI update
`js/lesson-player.js` now renders a controlled video player inside the Scenario card when a phrase has a `sceneVideo` value.

## Technical notes
- Video duration: about 10 seconds.
- Resolution: 1280x720.
- Format: MP4/H.264.
- Playback is manual; no autoplay.
- The video is intended as a micro scene to support context, not as the main lesson content.

## Validation
- JavaScript syntax check passed with `node --check`.
- Video copied with fast-start metadata for static hosting.
