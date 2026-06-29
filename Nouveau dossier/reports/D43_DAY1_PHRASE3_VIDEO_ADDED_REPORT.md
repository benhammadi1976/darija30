# D43 — Day 1 Phrase 3 Video Added

## الهدف
إضافة فيديو الجملة الثالثة من درس اليوم الأول فقط:

- Phrase ID: `taxi-003`
- Core phrase: `sir nishan aafak`
- Meaning: `Go straight, please.`

## الملفات المضافة

- `assets/video/day01/taxi-003-scene.mp4`
- `assets/images/video-posters/taxi-003-scene.jpg`

## معالجة الصوت

تمت إزالة الصوت الأصلي من الفيديو بالكامل لأن النسخة المولدة كانت تحتوي كلامًا إنجليزيًا من السائح. الفيديو الآن بصري فقط، والصوت التعليمي يبقى من ملفات Darija30 الرسمية للجملة.

- Audio streams: none

## مواصفات الفيديو

- Resolution: `1920x1080`
- Duration: `8.033333s`
- Size: `3.1M`

## الملفات المعدلة

- `js/data/lessons-data.js`
  - ربط `taxi-003` بالفيديو الجديد عبر `sceneVideo`.
  - إضافة `scenePoster`.
  - إضافة `dialogueLines` للجملة الأساسية فقط بدون جملة للسائق.
  - تحديث `sceneCaption` للجملة الثالثة.

- `js/admin-content-manager.js`
  - إضافة فيديو `taxi-003` إلى `READY_VIDEOS`.

- `content/VIDEO_SCENE_MANIFEST.md`
  - إضافة صف توثيقي للفيديو الجديد.

- `content/DARIJA30_VIDEO_IMPORT_MANIFEST_FULL.csv`
  - تحديث مسار فيديو `taxi-003` والبوستر.

## ما لم يتم تغييره

- فيديو الجملة الأولى `taxi-001` بقي كما هو.
- فيديو الجملة الثانية `taxi-002` بقي كما هو.
- صور Day 1 لم تتغير.
- صفحة اختبار الذاكرة لم تتغير.
- منطق التسجيل، المحاولتين، والاحتفال لم يتغير.
- الجمل والصوت التعليمي الرسمي لم يتغيرا.

## التحقق

- `node --check js/data/lessons-data.js` نجح.
- `node --check js/admin-content-manager.js` نجح.
- `ffprobe` أكد عدم وجود أي مسار صوتي في `taxi-003-scene.mp4`.
