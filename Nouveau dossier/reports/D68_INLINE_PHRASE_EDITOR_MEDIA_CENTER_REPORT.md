# D68 — Inline Phrase Editor in Lesson Media Center

## Goal
Add phrase text editing directly inside **مركز ملفات الدروس** so the phrase text itself becomes the edit button. This avoids a separate phrase-management workflow and keeps media upload + phrase correction in one place.

## Implemented
- The phrase cell in `#/admin/audio` is now clickable.
- Clicking the phrase opens a small modal/card editor.
- Editable fields:
  - Friendly Latin Darija
  - English meaning / meaning
  - Scenario
  - Goal
  - Cultural Intent
  - Culture Note
  - Memory Hook
- Save uploads a JSON overrides file to Supabase Storage:
  - Bucket: `images`
  - Path: `admin/phrase-overrides.json`
- Learner side loads this public JSON and applies saved phrase edits first.
- Static lesson data remains the fallback if no Supabase override exists.
- Admin must be logged into Supabase to save phrase edits.
- No Secret key or service_role key is used in the browser.

## Files changed
- `index.html`
- `css/styles.css`
- `js/admin-content-manager.js`
- `js/supabase-media.js`
- `reports/D68_INLINE_PHRASE_EDITOR_MEDIA_CENTER_REPORT.md`

## Validation
- `node --check` passed for all root `js/*.js` files.
- `node --check` passed for all `js/data/*.js` files.

## Notes
- This phase uses the existing public `images` bucket to store the dynamic phrase override JSON. This avoids requiring a new SQL migration or a new Supabase table immediately.
- Later, a dedicated `content` bucket or database table can replace this JSON approach when Darija30 becomes a fuller backend product.
