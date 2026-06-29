# D63 — Admin Record to MP3 Helper

## Goal
Add an admin-side helper for recording official teacher audio for each phrase from the phrase form.

## Scope
Built on D62.

Changed files:
- `js/admin-content-manager.js`
- `css/styles.css`
- `index.html`
- `reports/D63_ADMIN_RECORD_TO_MP3_HELPER_REPORT.md`

## What changed
On `#/admin/phrases`, each phrase now shows a **Record teacher audio** section with two cards:

- Normal audio
- Slow audio

Each card includes:
- Record button
- Stop button
- Play button
- Download button
- Copy final path button
- Final MP3 target path

## Static-site limitation handled safely
Darija30 is currently a static site. Browsers do not consistently support real MP3 encoding through `MediaRecorder`.

The implementation therefore:
- Records teacher voice in the best browser-supported audio format.
- Downloads true MP3 only if the browser actually supports `audio/mpeg` / `audio/mp3` recording.
- Otherwise downloads the real source format such as WebM/M4A/OGG and clearly instructs the admin to convert it to MP3 before placing it in the final path.
- Does not fake a WebM file by naming it `.mp3`.

## Cache update
`index.html` now references:

- `css/styles.css?v=d63`
- `js/lesson-player.js?v=d63`
- `js/admin-content-manager.js?v=d63`

## Validation
`node --check` passed for all JavaScript files in:
- `js/*.js`
- `js/data/*.js`

## Not changed
- Public lesson data was not changed.
- Public lesson layout was not changed.
- Learner recording flow was not changed.
- Quiz logic was not changed.
- Existing audio/video assets were not changed.
