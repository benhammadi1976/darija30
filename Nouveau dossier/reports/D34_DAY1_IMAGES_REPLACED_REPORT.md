# د34 — استبدال صور اليوم الأول داخل الموقع

## الحالة
تم التنفيذ على النسخة المرفوعة:

`darija30_clean_v33_big_remember_practice_page(1).zip`

## الهدف
استبدال صور جمل **اليوم 1 — Taxi Survival** بالصور الخمس الجديدة المعتمدة، مع الحفاظ على منطق الدرس وصفحة **هل تتذكر؟** من D33.

## الملفات المعدلة
- `js/data/lessons-data.js`
- `content/AUDIO_RECORDING_SCRIPT.md`
- `content/AUDIO_MANIFEST.csv`
- `content/AUDIO_MANIFEST.md`
- `content/REAL_AUDIO_IMPORT_MANIFEST.csv`
- `content/REAL_AUDIO_IMPORT_MANIFEST.md`
- `content/DARIJA30_CONTENT_LOCK_V1.md`
- `content/DARIJA30_FULL_PHRASE_LIBRARY.csv`
- `content/DARIJA30_AUDIO_IMPORT_MANIFEST_FULL.csv`
- `content/DARIJA30_VIDEO_IMPORT_MANIFEST_FULL.csv`
- `content/DARIJA30_UNIFIED_SCENE_IMAGE_MANIFEST.csv`

## الملفات المضافة
- `assets/images/lesson-scenes/day01-taxi-001-bghit-nmshi-l-otel-scene.webp`
- `assets/images/lesson-scenes/day01-taxi-002-weqef-hna-aafak-scene.webp`
- `assets/images/lesson-scenes/day01-taxi-003-sir-nishan-aafak-scene.webp`
- `assets/images/lesson-scenes/day01-taxi-004-dor-l-limn-aafak-scene.webp`
- `assets/images/lesson-scenes/day01-taxi-005-hna-mezian-scene.webp`
- `assets/audio/day01/README_D34_TAXI_005_HNA_MEZIAN_AUDIO_TODO.md`
- `reports/D34_DAY1_IMAGE_MANIFEST.csv`
- `reports/D34_DAY1_IMAGES_REPLACED_REPORT.md`

## الملفات التي أزيلت من المسار النشط
- `assets/images/lesson-scenes/day01-bghit-nmshi-l-otel-scene.png`

تم حفظ نسخة احتياطية منها داخل:
- `backup/D34_DAY1_IMAGES_REPLACED/`

## ربط الصور الجديد

| رقم | المعرف | الجملة | الصورة |
|---:|---|---|---|
| 1 | `taxi-001` | `bghit nmshi l-otel` | `day01-taxi-001-bghit-nmshi-l-otel-scene.webp` |
| 2 | `taxi-002` | `weqef hna aafak` | `day01-taxi-002-weqef-hna-aafak-scene.webp` |
| 3 | `taxi-003` | `sir nishan aafak` | `day01-taxi-003-sir-nishan-aafak-scene.webp` |
| 4 | `taxi-004` | `dor l-limn aafak` | `day01-taxi-004-dor-l-limn-aafak-scene.webp` |
| 5 | `taxi-005` | `hna mezian` | `day01-taxi-005-hna-mezian-scene.webp` |

## ملاحظة مهمة عن الجملة الخامسة
كانت نسخة D33 المرفوعة ما زالت تحتوي الجملة الخامسة القديمة:

`bsh-hal?`

وبما أن القرار المعتمد في النقاش الحالي هو:

`hna mezian`

تم تصحيح بيانات الجملة الخامسة في Day 1 حتى لا تكون الصورة الخامسة غير متطابقة مع النص.

## ملاحظة مهمة عن الصوت
لم يتم إنشاء صوت جديد في هذه المرحلة.

لذلك أصبحت الجملة الخامسة تشير إلى مسارات صوت مستقبلية:

- `assets/audio/day01/taxi-005-hna-mezian-normal.mp3`
- `assets/audio/day01/taxi-005-hna-mezian-slow.mp3`

وهذه الملفات تحتاج تسجيلًا لاحقًا بصوت مغربي حقيقي. الملفات القديمة الخاصة بـ `bsh-hal?` بقيت في الحزمة لكنها لم تعد مربوطة بالجملة الخامسة.

## التحقق
- كل الصور الجديدة WebP أفقية 16:9 بدقة `1600x900`.
- تم ربط كل جملة في Day 1 بصورة مستقلة.
- لم يتم تغيير منطق صفحة **هل تتذكر؟**.
- لم يتم تغيير D33 lesson-player behavior.
- `node --check` نجح للملفات:
  - `js/data/lessons-data.js`
  - `js/lesson-player.js`
  - `js/app.js`
  - `js/audio-player.js`
  - `js/router.js`

## اسم الحزمة الناتجة
`darija30_clean_v34_day1_images_replaced.zip`
