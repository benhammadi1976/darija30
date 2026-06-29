# D36 — Standalone Do you remember? Page

## Goal
Convert the Day lesson “Do you remember?” practice screen from a lesson-embedded layout into a dedicated PowerPoint-style practice page.

## Changes
- When the practice screen is open, the app navigation bar is hidden.
- The lesson sticky header is removed from practice mode.
- The practice screen now occupies the full desktop viewport.
- The 16:9 scene image becomes the main slide surface.
- All practice controls remain inside the image/slide area.
- The page background becomes a dark stage behind the slide.
- No changes were made to Day 1 images, phrase order, recording logic, two-attempt logic, or choices logic.

## Files changed
- `js/lesson-player.js`
- `css/styles.css`
- `reports/D36_STANDALONE_REMEMBER_PAGE_REPORT.md`

## Validation
- JavaScript syntax checked with `node --check`.
