# Darija30 Video Dialogue Method

This build replaces the old Taxi and Café scene videos with the new dialogue-based method.

## Method

Each lesson page keeps one Core Phrase as the main learning target:
- Friendly Latin Darija
- English meaning
- Normal audio
- Slow audio
- Cultural intent
- Quick check

The video provides the real situation around that Core Phrase:
- Moroccan speaker says a short natural prompt.
- Traveler answers with the Core Phrase.
- Subtitles use Friendly Latin Darija + English meaning only.
- No Arabic script appears inside the video.
- No Arabizi numbers such as 3, 7, or 9.

## Updated videos

1. `assets/video/day01/taxi-001-scene.mp4`
   - Moroccan prompt: `fin bghiti tmshi?`
   - English: `Where do you want to go?`
   - Traveler/Core Phrase: `bghit nmshi l-otel`
   - English: `I want to go to the hotel.`

2. `assets/video/day02/cafe-001-scene.mp4`
   - Moroccan prompt: `shnu bghiti?`
   - English: `What would you like?`
   - Traveler/Core Phrase: `qahwa kahla aafak`
   - English: `Black coffee please.`

## Not changed

- Lesson data was not changed.
- Audio files were not changed.
- Market video was not changed because no new replacement video was provided.
- Website navigation, pricing, blog, progress, and trust pages were not changed.

## D16B Market Dialogue Rule Fix

For some lessons, the Core Phrase is spoken first by the traveler. The video dialogue order must follow the actual communication goal, not always Moroccan-speaker-first.

Example: Market Price / `bsh-hal hada?`

- Traveler/Core Phrase first: `bsh-hal hada?` / How much is this?
- Seller secondary reply second: `khamsin drham` / 50 dirhams.

The page still teaches only the Core Phrase. The secondary phrase remains contextual inside the video.

## Phase D16C seller voice correction

For Market Price / `bsh-hal hada?`, the traveler must speak first because the core phrase belongs to the traveler. The seller reply is secondary listening context.

Correct order:

- Traveler/Core Phrase: `bsh-hal hada?` — How much is this?
- Seller/Secondary Reply: `khamsin drham` — 50 dirhams.

The seller reply is now included as real audio in `assets/audio/day03/market-001-seller-khamsin-drham.mp3` and mixed into `assets/video/day03/market-001-scene.mp4`.
