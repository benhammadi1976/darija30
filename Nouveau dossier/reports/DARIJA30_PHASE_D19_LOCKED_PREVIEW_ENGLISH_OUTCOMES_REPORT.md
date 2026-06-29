# DARIJA30 Phase D19 — Locked Preview English Outcomes

## Goal
Change locked lesson preview pages so they do not give away the Darija phrase text or speaker audio before purchase.

## User decision implemented
Locked lessons should show the learner what they will learn to say in English, then explain that the full lesson teaches those meanings in Moroccan Darija with:

- Normal audio
- Slow audio
- Video situation/dialogue
- Cultural intent
- Quick practice

The user has already seen the complete Darija30 method in the first 3 free lessons, so the locked preview should sell the method, not reproduce the full lesson.

## Files modified
- `js/lesson-player.js`

## Main changes
- Added `lockedPreviewOutcomeText()`.
- Updated `lockedLessonPreviewMarkup()`.
- Locked preview phrase cards now display English outcomes only.
- Removed speaker buttons from locked preview cards.
- Removed Friendly Latin Darija display from locked preview cards.
- Added clear preview messaging:
  - “Preview only”
  - “These are the English meanings you will learn to say in Moroccan Darija.”
  - Full lesson includes audio, slow audio, video dialogue, situation, culture, and practice.

## Not changed
- Free lessons remain unchanged.
- Full lesson pages remain unchanged.
- Existing audio files remain unchanged.
- Existing videos remain unchanged.
- Pricing and app navigation remain unchanged.

## Validation
- `node --check` passed for all JavaScript files in `js/` and `js/data/`.
