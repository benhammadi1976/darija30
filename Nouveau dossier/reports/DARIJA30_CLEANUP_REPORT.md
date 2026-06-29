# Darija30 Cleanup Report

## Source
- Input file: `darija30_web_app (2)(1).html`

## What changed
1. Split the single HTML prototype into organized files.
2. Extracted custom CSS into `css/styles.css`.
3. Extracted Tailwind theme configuration into `js/tailwind-config.js`.
4. Replaced inline JavaScript routing with `js/router.js`.
5. Replaced dummy inline audio handling with `js/audio-player.js`.
6. Added `js/app.js` for UI initialization.
7. Added `js/data/lessons-data.js` as the starting data source for the first 3 free lessons.
8. Removed inline `onclick` and `onsubmit` handlers from the HTML.
9. Added a mobile navigation menu.
10. Removed the public footer link to the Admin Panel.
11. Replaced remote blog image backgrounds with local-safe visual placeholders.
12. Preserved the original file under `backup/darija30_original_master.html`.

## Still demo-only
- Login is still a frontend demo.
- Payments are not connected to Stripe.
- Admin pages are still static demo screens.
- Audio files are not included yet; real Moroccan Darija audio must be recorded and placed in `assets/audio/`.

## Recommended next phase
Phase D2: make the lesson player read from `js/data/lessons-data.js` and complete the 3 free lessons: Greetings, Taxi, Market Price.
