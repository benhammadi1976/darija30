# D40 — Visual Memory Test

## Scope
Applied on top of `darija30_clean_v39_smart_recording_round_model_button`.

## What changed
- Removed the `Listen to model` button from the standalone `Do you remember?` memory-test page.
- Kept the learner path as a memory test: record first, then choices after two failed voice attempts.
- Added success celebration on a correct voice match or correct choice:
  - larger confetti / sparkle / trophy / applause emoji burst,
  - short glass-style success message: `Great! You remembered it.`,
  - lightweight Web Audio chime/applause effect when supported by the browser.
- Replaced large text navigation buttons with visual icon controls:
  - `‹` for previous situation,
  - `›` for next situation,
  - `⟲` for review phrase,
  - `⏭` for next day,
  - `⌂` for the 30-day plan when no next lesson exists.
- Kept dots for direct situation navigation.
- Wrong choice now immediately shows the review path instead of giving a second choice attempt.

## What did not change
- Day 1 images were not changed.
- Phrase data was not changed.
- The 16:9 standalone slide layout was preserved.
- Smart auto-stop recording from D39 was preserved.
- Lesson pages outside the standalone memory-test page were not intentionally changed.

## Validation
- `node --check js/lesson-player.js` passed.
