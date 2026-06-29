# D56 — Remove In-Lesson Quick Check

## Summary
Removed the in-lesson **Quick Check** block from phrase pages to keep Darija30 less school-like for beginners.

## Changed
- Updated `js/lesson-player.js`
- Removed the phrase-page render call for the Quick Check section.

## Preserved
- `Do you remember?` remains unchanged.
- Lesson navigation remains unchanged.
- `Learned ✓` remains unchanged.
- Audio, video, images, recorder, and `I’m in Morocco` remain unchanged.
- Existing quiz data/functions were left in place for possible future use, but the section is no longer shown inside phrase pages.

## Validation
- `node --check js/lesson-player.js` passed.
