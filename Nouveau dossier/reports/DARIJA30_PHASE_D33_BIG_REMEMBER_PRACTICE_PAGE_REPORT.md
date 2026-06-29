# DARIJA30 Phase D33 — صفحة "هل تتذكر؟" الكبيرة داخل الدرس

## Goal
Turn the D32 stacked situation challenge into a dedicated sixth page inside the lesson.

## Implemented
- Removed the stacked situation challenge from below phrase 5.
- Added a dedicated practice mode inside the lesson.
- Added a sixth top-stepper item named **هل تتذكر؟**.
- The **هل تتذكر؟** item appears only after the lesson is complete.
- Lesson completion is based on all 5 phrases being marked learned.
- Added a lesson-end choice card after phrase 5:
  - **هل تتذكر؟**
  - Skip to the next day
- Added a PowerPoint-like practice page:
  - Big title: **في المغرب، ماذا تقول؟**
  - One situation at a time
  - Large 16:9 visual area
  - Empty speech bubble
  - Recording controls
  - Situation counter
  - Previous / Next navigation
  - Dot navigation
  - Skip to next day

## Learning flow
1. Learner studies phrases 1–5.
2. Learner marks phrase 5 learned.
3. The lesson becomes complete.
4. The **هل تتذكر؟** page appears in the top stepper.
5. Learner can either:
   - open the practice page, or
   - skip to the next day.
6. Practice page shows one situation at a time, not a long list.

## Existing challenge logic preserved
- Two voice attempts first.
- Choices appear after two failed attempts.
- Correct choice + recording gives a success state.
- Two wrong choices advise returning to the lesson.
- Voice recording remains local.
- Speech recognition remains a helper only.

## Files changed
- `js/lesson-player.js`
- `css/styles.css`
- `README_AR.md`
- This report
- D33 model document

## Not changed
- No lesson data changed.
- No audio paths changed.
- No video paths changed.
- No image assets changed.
- No backend added.
- No admin upload logic changed.

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
