# D57 — Remove Bonus Phrases From Lesson Page

## Summary
Removed the in-lesson `Bonus Phrases` display from the learner phrase page.

## Why
The user decided the phrase page should stay focused on the beginner flow:
- listen
- record
- I’m in Morocco
- Learned
- Do you remember?

The bonus section felt too school-like and distracting after the fifth core phrase.

## Applied changes
- Updated `js/lesson-player.js` so `bonusPhrasesMarkup(...)` returns an empty string.
- Kept the bonus phrase data in `js/data/lessons-data.js` for possible future use.
- No changes to the 5 core phrases.
- No changes to videos, audio, recording, or the Do you remember? page.

## Backup
- `backup/D57_REMOVE_BONUS_PHRASES/lesson-player.js.before`
