# Darija30 Visual Scene System — Official Standard

## Final decision
The Moment Visual card is no longer generated as one full image. The final system is separated into three layers:

1. **Static UI card in the website**: title, memory badge, border, padding, caption, and shadow.
2. **Independent scene image asset**: uploaded/stored as a normal file under `assets/images/lesson-scenes/`.
3. **Dynamic memory bubble overlay**: rendered by HTML/CSS; the text comes from lesson data.

## Why
This keeps all 150 phrase pages visually consistent. Every phrase can change its text without regenerating a card image.

## Asset rule
Each image should be a clean Moroccan scene only:
- no card border
- no MOMENT VISUAL text
- no MEMORY IMAGE badge
- no bottom caption
- no UI controls

Current D24 integrates the available generated images as independent scene assets in `lesson-scenes`. Future generated images should be scene-only from the start.

## Prompt Master for future scenes
Warm Moroccan educational travel-learning scene, one clear real-life situation, traveler interacting with a Moroccan local, authentic Moroccan environment, clean composition, friendly premium illustration/photo-illustration style, space reserved near the upper center for a memory bubble overlay, no text, no captions, no UI labels, no speech bubble, no poster frame, no card border.

## QA checklist
- Does the scene explain the phrase in one second?
- Are the faces and action clear?
- Is the style warm and Moroccan?
- Is there clean space for the bubble?
- Does the image avoid embedded text/caption/UI?
- Does it work inside the shared Moment Visual component?
