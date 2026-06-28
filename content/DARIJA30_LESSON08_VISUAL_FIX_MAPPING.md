# Darija30 Phase D23D — Lesson 8 Visual Fix Mapping

## Problem
Lesson 8 phrase 1 (`iyeh`) was still showing the old SVG placeholder visual instead of the generated memory-card style.

## Fix
All five Lesson 8 phrases now use complete-card PNG visuals:

| Lesson | Phrase | Visual file |
|---|---|---|
| Day 08 | `iyeh` | `assets/images/lesson-visuals/day08-iyeh-memory-card.png` |
| Day 08 | `la` | `assets/images/lesson-visuals/day08-la-memory-card.png` |
| Day 08 | `momkin` | `assets/images/lesson-visuals/day08-momkin-memory-card.png` |
| Day 08 | `bghit...` | `assets/images/lesson-visuals/day08-bghit-memory-card.png` |
| Day 08 | `ma bghitsh` | `assets/images/lesson-visuals/day08-ma-bghitsh-memory-card.png` |

## Display rule
These are already complete cards, so they use:

```js
sceneVisualMode: "complete-card"
```

This prevents the site from adding a second bubble over the image.
