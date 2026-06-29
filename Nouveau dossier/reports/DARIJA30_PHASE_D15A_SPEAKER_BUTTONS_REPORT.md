# Darija30 Phase D15A — Speaker Buttons

## Scope
Added phrase-level speaker buttons to locked lesson preview cards, matching the audio-first product philosophy.

## Files changed
- `js/lesson-player.js`
- `js/audio-player.js`
- `README_AR.md`

## Behavior
- Locked preview phrase cards now show a 🔊 button beside each Friendly Latin phrase.
- If an audio path exists, the phrase plays normally.
- If the MP3 is not recorded yet, the Audio UX shows `Recording needed` and displays the exact missing path.
- Empty `data-audio-url` values no longer fall back to the taxi demo audio by mistake.

## Validation
- JavaScript syntax checked with `node --check`.
