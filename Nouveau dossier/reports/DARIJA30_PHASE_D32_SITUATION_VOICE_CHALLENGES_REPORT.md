# DARIJA30 Phase D32 — ردّ في الموقف + اختبارات الذاكرة الصوتية

## Goal
Add the final agreed memory/speaking test model without changing the course content.

## Implemented
A new end-of-lesson exercise called **ردّ في الموقف** was added.

## Placement
The exercise appears only on the last phrase page of each lesson.

Reason:
- The learner first studies the 5 phrase pages.
- Then the learner gets one practical review activity for the whole day.
- This avoids making every phrase page too heavy.

## Exercise flow
For each phrase in the lesson:

1. Show the situation image if available.
2. If the phrase has no direct image, use a Moroccan visual placeholder.
3. Show an empty speech bubble.
4. Show what the Moroccan speaker may say if dialogue data exists.
5. The learner records their response first, without seeing choices.
6. The browser attempts speech-to-text if supported.
7. The system compares the recognized text gently against:
   - Friendly Latin Darija
   - Moroccan chat spelling
   - Arabic spelling if available
8. If close enough:
   - The official Darija30 phrase is written in the bubble.
   - A light golden celebration appears.
9. If not close enough after two attempts:
   - Multiple-choice help appears.
10. If the learner chooses the correct phrase:
   - The bubble is filled.
   - The learner is asked to read it and record again.
   - After recording, the exercise passes.
11. If the learner chooses the wrong answer twice:
   - The learner is advised to return to the lesson phrase.

## Technical notes
- Uses `MediaRecorder` for local voice recording.
- Uses browser `SpeechRecognition` / `webkitSpeechRecognition` if available.
- No audio upload.
- No backend.
- No strict pronunciation score.
- The recognition result is treated as a helper, not as a final judge.

## Files changed
- `js/lesson-player.js`
- `css/styles.css`
- `README_AR.md`
- This report
- D32 model document

## Not changed
- No lesson data changed.
- No audio files changed.
- No video files changed.
- No image files changed.
- No admin backend changed.
- No locked lesson logic changed.

## Validation
- `node --check js/data/lessons-data.js` passed.
- `node --check js/lesson-player.js` passed.
- `node --check js/admin-content-manager.js` passed.
- `node --check js/router.js` passed.
- `node --check js/app.js` passed.
- `node --check js/progress-store.js` passed.
- `node --check js/audio-player.js` passed.
- Lesson count remains 30.
- Phrase count remains 150.
- Scene visual count remains 10.
