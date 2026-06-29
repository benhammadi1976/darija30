# Darija30 Phase D5 — Content + Audio Script Report

## Phase name

`PHASE_D5_CONTENT_AUDIO_SCRIPT`

## Goal

Strengthen the first three free lessons and prepare the real Moroccan audio recording workflow before adding backend, payment, or more lessons.

## Product philosophy applied

This phase reinforces the agreed Darija30 pillars:

- Simple.
- Audio-first.
- Scenario-first.
- Friendly Latin Darija first.
- Arabic script optional.
- Meaning + cultural intent, not literal translation only.

## Files changed

- `js/data/lessons-data.js`
- `assets/audio/README.md`
- `README_AR.md`

## Files added

- `content/AUDIO_RECORDING_SCRIPT.md`
- `content/LESSON_AUTHORING_GUIDE.md`
- `assets/audio/day01/.gitkeep`
- `assets/audio/day02/.gitkeep`
- `assets/audio/day03/.gitkeep`

## Lessons strengthened

### Lesson 1 — Taxi Survival

Now includes 5 phrases:

1. `bghit nmshi l-otel`
2. `weqef hna aafak`
3. `sir nishan aafak`
4. `dor l-limn aafak`
5. `bsh-hal?`

### Lesson 2 — Cafe Culture

Now includes 5 phrases:

1. `qahwa kahla aafak`
2. `atay b naanaa aafak`
3. `bla sokar aafak`
4. `l-ma aafak`
5. `l-hssab aafak`

### Lesson 3 — Market Price

Now includes 5 phrases:

1. `bsh-hal hada?`
2. `ghali shwiya`
3. `nqess shwiya aafak`
4. `shno akher taman?`
5. `bghit nshri hada`

## Audio preparation

The audio script defines every required normal and slow MP3 file for the three free lessons.

The expected structure is:

```text
assets/audio/day01/
assets/audio/day02/
assets/audio/day03/
```

## Validation performed

- JavaScript syntax checked with `node --check`.
- Lesson data is still loaded through `window.DARIJA30_LESSONS`.
- Existing dynamic lesson engine remains compatible.

## Not included yet

- Real recorded Moroccan audio.
- Backend.
- Stripe checkout.
- Admin CRUD logic.
- User authentication.

## Next recommended phase

`PHASE_D6_LOCAL_PROGRESS_AND_FAVORITES`

Suggested scope:

- Save completed phrases/lessons to `localStorage`.
- Make favorites persistent.
- Add simple progress bar per lesson.
- Keep it frontend-only before backend.
