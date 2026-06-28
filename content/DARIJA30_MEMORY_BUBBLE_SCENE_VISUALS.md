# Darija30 — Memory Bubble Scene Visuals

## Purpose
The scene visual is a quick memory cue. The video remains the full dialogue/context, while the image gives the learner a visual anchor for the core phrase.

## Final rule
Do not write the phrase inside the image file. Keep the illustration clean and render the phrase as an HTML/CSS overlay.

This allows future phrases and future lessons to reuse the system safely:

- `sceneVisual` = the situation image.
- `friendlyLatin` = the default phrase shown inside the memory bubble.
- `memoryBubble` or `memoryImagePhrase` = optional override if a phrase needs a shorter display.

## Current implementation
For any phrase with `sceneVisual`, the lesson player displays:

- Moment Visual header.
- Memory Image badge.
- Illustration image.
- Dynamic thought bubble containing the current phrase.
- Caption: “A quick visual memory cue for this phrase. The video shows the full dialogue.”

## Why this helps
It connects the phrase to a visual moment:

- Taxi + hotel + traveler → `bghit nmshi l-otel`
- Café + coffee + waiter → `qahwa kahla aafak`
- Market + seller + product → `bsh-hal hada?`

The learner does not only read or listen. They build a mental image that makes recall easier.
