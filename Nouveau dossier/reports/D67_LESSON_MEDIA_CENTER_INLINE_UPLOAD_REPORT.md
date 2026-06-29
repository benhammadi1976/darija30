# D67 — Lesson Media Center Inline Upload

Base: D66 clean admin MP3 upload UI.

## Goal
Make the admin media workflow faster and simpler by turning each media status into the upload/replace button directly inside one page: **مركز ملفات الدروس**.

## What changed

### Admin route `/admin/audio`
- Renamed the page concept from audio-only management to **مركز ملفات الدروس**.
- The table now manages four media targets in one place:
  - Normal MP3
  - Slow MP3
  - Video MP4
  - Visual image
- Each status is clickable:
  - `ينتظر التسجيل` opens the computer file picker for MP3.
  - `ينتظر الفيديو` opens the computer file picker for MP4.
  - `ينتظر الصورة` opens the computer file picker for JPG/PNG/WEBP.
  - `موجود` is also clickable and replaces the existing file.
- After a successful Supabase upload, the cell changes locally to `موجود`.

### Supabase integration
- Uses the existing publishable-key + Supabase Auth admin session.
- Uploads files to the proper public bucket:
  - `audio`
  - `videos`
  - `images`
- Keeps public read + admin-authenticated write security model.
- Does not use any secret/service key in the frontend.

### Learner media playback
- Audio continues to try Supabase first, then local assets fallback.
- Video markup now tries the Supabase public video URL first, then the local video asset fallback.
- Visual image markup now tries the Supabase public image URL first, then local image fallback.

### Cache busting
- Updated `index.html` asset versions to `v=d67` for:
  - `styles.css`
  - `supabase-media.js`
  - `audio-player.js`
  - `admin-content-manager.js`

## Files changed
- `index.html`
- `css/styles.css`
- `js/admin-content-manager.js`
- `js/supabase-media.js`
- `js/lesson-player.js`
- `reports/D67_LESSON_MEDIA_CENTER_INLINE_UPLOAD_REPORT.md`

## Validation
- `node --check` passed for all `js/*.js` and `js/data/*.js`.

## Notes
This phase does not yet make phrase text dynamic in the database. It focuses on lesson media files only. Phrase text editing and audio-to-text should be separate later phases.
