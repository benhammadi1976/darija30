# D78 — Public Level Checkbox Toggle

Built on D77. This phase adds a quick square checkbox next to the level list in the Lesson Media Center so the owner/admin can decide when a level becomes visible to the public.

## Scope

- Added a new **تفعيل سريع للعموم** panel under the level selector in `#/admin/lesson-media`.
- Each available level now has a square checkbox.
- Checked checkbox = that level is set to `public` and can appear to normal learners.
- Unchecked checkbox = that level returns to its non-public fallback:
  - Level 2 returns to `collaborators`.
  - Other levels return to `admin`.
- Existing D77 visibility buttons remain available: Admin only / Collaborators / Public.
- Future levels with no lessons are shown but disabled until their lessons are added.

## Important policy

The owner/admin remains the final decision maker. Level 2 can be shared with collaborators or opened to the public by checking the square, but it is still draft content and should receive native Darija QA before audio/image/video production.

## Files changed

- `js/admin-content-manager.js`
- `content/D78_PUBLIC_LEVEL_CHECKBOX_TOGGLE.md`
- `reports/D78_PUBLIC_LEVEL_CHECKBOX_TOGGLE_REPORT.md`
- `reports/D78_CHANGED_FILES.csv`
- `reports/QA_MEDIA_CHECK_REPORT_D78.csv`

## Validation

- `node --check js/*.js` passed.
- `qa_media_check.js` completed successfully.
- No lesson sentences, audio files, images, videos, weekly wheel, or public lesson logic were changed.

## GitHub Desktop Summary

`D78 add public level checkbox toggle`
