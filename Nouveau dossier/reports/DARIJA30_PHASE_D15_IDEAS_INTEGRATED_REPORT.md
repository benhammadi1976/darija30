# Darija30 Phase D15 — Ideas Integrated Report

## Source version

Started from:

`darija30_clean_v14_microvideos_taxi_cafe.zip`

## Main goal

Integrate the ideas discussed before continuing audio recording:

- 30 lessons × 5 phrase pages.
- Keep the same free lesson model: one phrase per page.
- Blog phrase speaker buttons.
- AI voice cloning as a future test, not a production dependency.
- Live Darija Check as a future premium add-on after completing 30 lessons.

## Files changed

- `js/data/lessons-data.js`
- `js/data/blog-data.js`
- `js/blog.js`
- `index.html`
- `README_AR.md`

## Files added

- `assets/audio/vocab/README.md`
- `content/DARIJA30_CURRICULUM_V2.md`
- `content/AI_VOICE_CLONING_TEST_PLAN.md`
- `content/LIVE_DARIJA_CHECK_ROADMAP.md`
- `content/BLOG_AUDIO_BUTTONS_GUIDE.md`
- `reports/DARIJA30_PHASE_D15_IDEAS_INTEGRATED_REPORT.md`

## Data changes

The lesson model is now explicit:

```text
30 lessons × 5 phrase pages = 150 practical pages.
```

Locked lessons now show 5 preview phrases instead of generic placeholders.

## Blog audio buttons

Blog phrase cards now show a 🔊 button. The button uses the existing audio player and missing-audio UX.

## Validation

`node --check` passed for:

- `js/data/lessons-data.js`
- `js/data/blog-data.js`
- `js/blog.js`
- `js/lesson-player.js`
- `js/audio-player.js`
- `js/router.js`
- `js/app.js`
- `js/progress-store.js`
- `js/launch-qa.js`
- `js/audio-readiness.js`

## Notes

No backend, Stripe, or real AI voice service was added.
This is still a static MVP-ready project structure.
