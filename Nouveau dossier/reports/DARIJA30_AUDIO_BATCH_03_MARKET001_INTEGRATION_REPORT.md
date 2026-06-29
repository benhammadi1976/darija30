# Darija30 Audio Integration Report — Batch 03 / Market 001

## Phrase

- Moroccan chat spelling: `bsh7al hada?`
- Friendly Latin in app: `bsh-hal hada?`
- Meaning: How much is this?
- Lesson: Market Price
- Slot: `market-001`

## Active audio files added

| Role | Source | Destination | Cleaned duration | Peak |
|---|---|---|---:|---:|
| Normal | `Voix 260624_215125.m4a` | `assets/audio/day03/market-001-normal.mp3` | 0.95s | -3.0 dBFS |
| Slow | `Voix 260624_215154.m4a` | `assets/audio/day03/market-001-slow.mp3` | 1.86s | -3.0 dBFS |

## Extra take kept

The third uploaded file was preserved for review, but it is **not used by the lesson player**:

- `Voix 260624_215141.m4a` → `content/audio-batches/batch03/market-001-extra-take-215141.mp3`

## Cleaning applied

- Converted M4A to MP3.
- Converted to mono / 44.1 kHz.
- Trimmed leading and trailing silence.
- Added short fade in/out to avoid clicks.
- Normalized peak level to about -3 dBFS.

## Notes

Because Batch 03 contained three source files for one phrase, the integration uses:

- the shortest/direct take as **Normal**;
- the take with clearer separated speech chunks as **Slow**;
- the remaining take as **Extra review take**.

Verify manually in `#/audio-qa` and inside the Market Price lesson.
