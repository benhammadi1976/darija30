# D77 — Admin Entry + Collaborator Level Visibility Controls

## Scope

Built on D76. This phase adds level access controls without changing Level 1 sentences, Level 2 draft sentence wording, media files, weekly wheel logic, or payment logic.

## Changes

- Added an **Admin** entry link in the public desktop and mobile header.
- Added `js/level-access.js` as the shared visibility/access helper.
- Added Level visibility states:
  - `admin` — Admin only.
  - `collaborators` — visible/open only from a collaborator preview link.
  - `public` — visible to general learners.
- Default visibility:
  - Level 1: `public`.
  - Level 2: `collaborators`.
  - Levels 3–12: `admin`.
- Added visibility buttons inside the Lesson Media Center so the owner/admin can decide when a level is admin-only, collaborator-preview, or public.
- Added a collaborator preview link and copy button for the selected level.
- Integrated D76 Level 2 draft sentences into `js/data/lessons-data.js` as 30 lessons × 5 phrases = 150 draft phrases.
- Updated learner routing so duplicate day numbers across independent levels resolve by `?level=2`.
- Updated the learner lessons page to show available levels based on access.

## Important Policy

Level 2 can now be shared with collaborators by owner/admin decision, but it remains marked as draft and needs native Darija QA before audio/image/video production.

## Media QA after D77

D77 increases the runtime content to 60 lessons and 300 phrases because Level 2 is now integrated. The existing media QA now reports 3 / 300 phrases with full normal+slow audio. This is expected because Level 2 has sentence placeholders but no audio/image/video production yet.

## Not changed

- No audio uploaded.
- No visual/image/video produced.
- No Level 1 media changed.
- No weekly wheel changes.
- No payment/subscription logic activated.

## Suggested QA

1. Open `#/admin/login` from the new Admin header link.
2. Login as admin and open `#/admin/lesson-media`.
3. Select Level 2 and verify its 30 days appear.
4. Change visibility between Admin only / Collaborators / Public.
5. Open the collaborator preview link and verify Level 2 appears.
6. Open normal `#/app/lessons` without collaborator preview and verify non-public levels remain hidden.

## GitHub Desktop Summary

`D77 add admin entry and collaborator level visibility controls`
