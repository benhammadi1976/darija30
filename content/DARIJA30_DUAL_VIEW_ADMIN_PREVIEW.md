# Darija30 Dual View Admin Preview

## Purpose

This phase adds a static admin-side view before building the real Backend, Database, and Admin CMS.

The goal is to let the owner see the project from two sides:

1. **Learner side** — how the visitor/student sees lessons, free content, locked previews, audio, video, and practice.
2. **Admin side** — how content will be managed later: lesson list, phrase fields, audio paths, video paths, scene visuals, and media readiness.

## Important limitation

This is **not a real Admin CMS yet**.

It does not save changes.
It does not upload files.
It does not connect to a database.
It reads from the current static lesson data in:

```text
js/data/lessons-data.js
```

## New admin routes

```text
#/admin
```
Control room: shows learner vs admin vision and content/media stats.

```text
#/admin/lessons
```
Dynamic lesson map: all 30 lessons, their phrases, audio readiness, video readiness, and learner preview links.

```text
#/admin/phrases
```
Phrase form preview: shows the fields a real admin will later edit and save.

```text
#/admin/audio
```
Media matrix: shows the exact target paths for normal audio, slow audio, and video files.

```text
#/admin/users
#/admin/payments
```
Future views explaining what will appear after backend, login, Stripe, and progress sync.

## Media workflow

For every phrase, the admin preview shows:

- English outcome
- Friendly Latin Darija
- Normal audio target path
- Slow audio target path
- Micro video target path, when assigned
- Scene visual path
- Learner preview link

When real files are ready, they can be placed into:

```text
assets/audio/dayXX/
assets/video/dayXX/
assets/images/lesson-visuals/
```

## Why this matters

Before building the real admin dashboard, this makes the product vision clear and reduces confusion:

- The learner sees the polished course.
- The owner/admin sees the content pipeline and missing media.
- Future developers can see the structure required for Backend/Admin CMS.
