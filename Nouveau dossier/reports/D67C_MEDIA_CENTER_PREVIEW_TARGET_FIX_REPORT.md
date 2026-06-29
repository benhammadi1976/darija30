# D67C — Media Center Preview Target Fix

## Scope
Focused fix after D67 Supabase Media Center validation.

## Changes
- Fixed the `عرض` link in `#/admin/audio` so each row opens the matching learner phrase instead of always opening phrase 1.
- Added deep-link support in the lesson player for:
  - `?phrase=2`
  - `?phraseIndex=1`
  - `?phraseId=...`
  - `?p=2`
- Updated phrase editor preview links so “شاهد كمتعلم” and “Learner Preview” open the currently selected phrase.
- Updated cache-busting query strings to `d67c` for changed frontend files.
- Kept Supabase media upload behavior unchanged: Normal/Slow require MP3, Video requires MP4, Visual accepts JPG/PNG/WEBP.

## Validation
- `node --check` passed for all `js/*.js` and `js/data/*.js`.

## Notes
- No Supabase secret key is added to frontend.
- Existing uploaded files in Supabase continue to work because learner media playback still tries Supabase public URLs first, then local assets as fallback.
