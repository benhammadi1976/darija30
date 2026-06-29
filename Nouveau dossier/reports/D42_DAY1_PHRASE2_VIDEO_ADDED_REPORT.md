# D42 — Day 1 Phrase 2 Video Added

## الهدف
إضافة الفيديو الموافق عليه للجملة الثانية من درس اليوم الأول فقط:

- Phrase ID: `taxi-002`
- Core phrase: `weqef hna aafak`
- Meaning: `Stop here, please.`

## الملفات المضافة

- `assets/video/day01/taxi-002-scene.mp4`
- `assets/images/video-posters/taxi-002-scene.jpg`

## الملفات المعدلة

- `js/data/lessons-data.js`
  - ربط `taxi-002` بالفيديو الجديد عبر `sceneVideo`.
  - إضافة `scenePoster` للفيديو الجديد.
  - إضافة `dialogueLines` للجملة الأساسية فقط بدون جملة للسائق.
  - تحديث `sceneCaption` للجملة الثانية ليصف الفيديو.

- `js/admin-content-manager.js`
  - إضافة الفيديو الجديد إلى `READY_VIDEOS` حتى يظهر كفيديو جاهز في لوحة الإدارة.

- `content/VIDEO_SCENE_MANIFEST.md`
  - إضافة صف توثيقي للفيديو الجديد.

- `content/DARIJA30_VIDEO_IMPORT_MANIFEST_FULL.csv`
  - تحديث مسار فيديو `taxi-002` والبوستر.

## ما لم يتم تغييره

- فيديو الجملة الأولى `taxi-001` بقي في مكانه كما هو.
- صور Day 1 لم تتغير.
- صفحة اختبار الذاكرة لم تتغير.
- منطق التسجيل، المحاولتين، والاحتفال لم يتغير.
- الجمل والنصوص التعليمية الأساسية لم تتغير.

## التحقق

- تم تشغيل `node --check js/data/lessons-data.js` بنجاح.
- تم تشغيل `node --check js/admin-content-manager.js` بنجاح.
