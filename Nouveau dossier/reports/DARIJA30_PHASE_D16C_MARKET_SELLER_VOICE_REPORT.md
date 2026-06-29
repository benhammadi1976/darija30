# DARIJA30 Phase D16C — Market Seller Voice Fix

## Goal
Fix the Market Price video so the seller actually says the secondary reply `khamsin drham` / `50 dirhams`, using the uploaded seller voice recording.

## Input
- Uploaded audio: `Voix 260625_195123.m4a`
- Base project: `darija30_clean_v16b_market_dialogue_fix`

## Changes
- Cleaned and normalized the uploaded seller reply audio.
- Added seller voice asset:
  - `assets/audio/day03/market-001-seller-khamsin-drham.mp3`
- Rebuilt Market video:
  - `assets/video/day03/market-001-scene.mp4`
- The video now keeps the correct dialogue order:
  1. Traveler/Core Phrase: `bsh-hal hada?` — How much is this?
  2. Seller/Secondary Reply: `khamsin drham` — 50 dirhams.
- Refreshed poster:
  - `assets/images/video-posters/market-001-scene.jpg`
- Updated method note:
  - `content/VIDEO_DIALOGUE_METHOD.md`

## Not changed
- Taxi video unchanged.
- Café video unchanged.
- Lesson text unchanged.
- Existing normal/slow phrase audio unchanged.
- No Arabic script was added to the video.

## Validation
- `node --check` was run on all JavaScript files.
- Market video contains one video stream and one AAC audio stream.
