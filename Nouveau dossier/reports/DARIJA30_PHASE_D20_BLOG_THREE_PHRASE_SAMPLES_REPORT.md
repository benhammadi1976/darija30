# DARIJA30 PHASE D20 — Blog Three Phrase Samples

## Goal

Convert blog articles from mini-lessons with many audio buttons into a controlled teaser model.

## Changes

Modified:
- `js/data/blog-data.js`
- `js/blog.js`

Created:
- `content/DARIJA30_BLOG_SAMPLE_POLICY.md`

## New blog article model

Each article now shows only 3 phrase/sample cards:

1. Written Darija sample without audio.
2. English-only outcome teaser.
3. One Darija audio sample.

The order changes across articles.

## Why

This protects the value of the course. The blog gives a useful taste, but the real learning stays inside the free/paid lesson flow with audio, slow audio, video dialogue, situation, cultural intent, and practice.

## Validation

- `node --check js/blog.js` passed.
- `node --check js/data/blog-data.js` passed.
- No lesson/audio/video assets were changed.
