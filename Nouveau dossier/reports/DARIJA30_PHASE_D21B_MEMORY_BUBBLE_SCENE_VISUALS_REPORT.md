# Darija30 Phase D21B — Memory Bubble Scene Visuals Report

## Goal
Implement the dynamic Memory Bubble concept inside the Moment Visual block.

## Changes made
- Updated `js/lesson-player.js`.
- Added dynamic phrase overlay inside `sceneVisualMarkup()`.
- The bubble uses `phrase.memoryBubble`, then `phrase.memoryImagePhrase`, then falls back to `phrase.friendlyLatin`.
- Added responsive CSS in `css/styles.css`.
- Added method note: `content/DARIJA30_MEMORY_BUBBLE_SCENE_VISUALS.md`.

## Behavior
For every phrase with a `sceneVisual`, the site now shows:

- Clean illustration.
- Thought/memory bubble over the illustration.
- Core phrase rendered dynamically from lesson data.

This means future phrases and future lessons do not need text burned into the image.

## Not changed
- No audio changes.
- No video changes.
- No blog changes.
- No pricing changes.
- No lesson data changes required.

## Validation
- JavaScript syntax checked with `node --check`.
- Packaging keeps a root folder inside the ZIP so the user can extract it and get the complete site folder.
