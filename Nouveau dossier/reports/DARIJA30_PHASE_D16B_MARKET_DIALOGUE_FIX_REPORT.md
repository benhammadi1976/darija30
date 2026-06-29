# DARIJA30 Phase D16B — Market Dialogue Order Fix

## Scope
Fixed the Market Price video methodology so the traveler says the Core Phrase first.

## Files changed
- `assets/video/day03/market-001-scene.mp4`
- `assets/images/video-posters/market-001-scene.jpg`
- `content/VIDEO_DIALOGUE_METHOD.md`

## Correct dialogue order
Traveler/Core Phrase first:

```text
Traveler: bsh-hal hada?
How much is this?
```

Seller/secondary reply second:

```text
Seller: khamsin drham
50 dirhams.
```

## Notes
- No Arabic script was added to the video.
- No Arabizi numbers were added.
- Original wrong audio from the generated market video was not used.
- The corrected video uses the existing real `market-001-normal.mp3` for the Core Phrase timing, then silent visual context for the seller reply.
- Taxi and Café videos were not changed.

## Validation
- Corrected video generated successfully.
- Market poster regenerated from the corrected video.
- JavaScript syntax check passed.
