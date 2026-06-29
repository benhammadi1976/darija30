# D66 — Clean Admin MP3 Upload UI

## Scope
- Built from D65 Supabase Media Integration.
- Cleaned the phrase admin audio area.
- Removed the visible teacher recording/download/WebM workflow from the phrase form.
- Replaced it with simple MP3 upload cards next to the Normal and Slow audio targets.

## User-facing admin behavior
- Each phrase now shows:
  - Normal audio target path + `رفع ملف MP3` button.
  - Slow audio target path + `رفع ملف MP3` button.
- The file picker accepts MP3 only.
- Selecting a valid MP3 immediately uploads it to the Supabase `audio` bucket using the existing secured admin session.
- Non-MP3 files are rejected with a clear message.

## Preserved
- Supabase URL / publishable key config panel.
- Supabase admin login/logout.
- Learner playback from Supabase first, then local assets fallback.
- No Secret key or service-role key is used in the frontend.

## Files changed
- `index.html` cache-bumped to `?v=d66`.
- `js/admin-content-manager.js` simplified admin audio UI and MP3-only upload flow.
- `css/styles.css` added D66 upload-card polish.

## Validation
- `node --check` passed for all root `js/*.js` and `js/data/*.js`.
