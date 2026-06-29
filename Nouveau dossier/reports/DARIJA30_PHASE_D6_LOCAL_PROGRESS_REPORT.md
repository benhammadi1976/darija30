# Darija30 — Phase D6 Local Progress Report

## Phase name
`PHASE_D6_LOCAL_PROGRESS_FAVORITES_REVIEW`

## هدف المرحلة
تحويل تجربة التعلم من عرض دروس فقط إلى تجربة تفاعلية تحفظ تقدم المستخدم محلياً بدون Backend.

## الملفات التي أضيفت
- `js/progress-store.js`

## الملفات التي عُدّلت
- `index.html`
- `js/lesson-player.js`
- `README_AR.md`

## ما تم تنفيذه

### 1. LocalStorage progress engine
أضيف محرك حفظ محلي باسم `DarijaProgress` يعتمد على المفتاح:

```text
darija30_progress_v1
```

ويحفظ:
- العبارات المتعلمة
- الدروس المكتملة
- الدروس التي بدأها المستخدم
- العبارات المفضلة
- أجوبة الاختبارات السريعة
- تقييمات المراجعة اليومية
- آخر درس تم فتحه

### 2. Mark Phrase Learned
داخل صفحة الدرس أصبح هناك زر:

```text
Mark Phrase Learned
```

وعند الضغط عليه:
- تُحفظ العبارة كمتعلمة.
- يُحسب تقدم الدرس.
- إذا تعلم المستخدم كل عبارات الدرس، يُعتبر الدرس مكتملاً.

### 3. Saved Phrases
أضيف زر:

```text
Save Phrase
```

ويحفظ العبارة في Favorites محلياً.

### 4. Dashboard ديناميكي
أصبح Dashboard يعرض من LocalStorage:
- عدد الدروس المكتملة
- نسبة التقدم في خطة 30 يوم
- عدد العبارات المتعلمة
- عدد العبارات المحفوظة
- الدرس التالي تلقائياً
- آخر العبارات المتعلمة

### 5. Lessons List ديناميكية
صفحة الدروس أصبحت تعرض:
- حالة الدرس: Free / Started / Done
- نسبة التقدم داخل الدرس
- علامة ✓ عند اكتمال الدرس

### 6. Favorites ديناميكية
صفحة Saved Phrases أصبحت تُبنى من العبارات التي حفظها المستخدم فعلياً.

### 7. Daily Review ديناميكي
صفحة Review أصبحت تعرض العبارات التي تعلمها أو حفظها المستخدم، مع تقييم:
- Forgot
- Hard
- Easy

### 8. Certificate progress
صفحة Certificate أصبحت تقرأ عدد الدروس المكتملة من LocalStorage وتعرض نسبة التقدم.

## فحص تقني
تم تشغيل:

```bash
node --check js/progress-store.js
node --check js/lesson-player.js
node --check js/router.js
node --check js/app.js
```

النتيجة: لا توجد أخطاء Syntax.

## ملاحظات مهمة
- هذه المرحلة لا تضيف Backend.
- هذه المرحلة لا تضيف تسجيل دخول حقيقي.
- البيانات محفوظة فقط في متصفح المستخدم الحالي.
- الصوتيات الحقيقية ما زالت مطلوبة داخل `assets/audio/`.

## المرحلة التالية المقترحة
`PHASE_D7_AUDIO_ASSET_PLACEHOLDERS_AND_RECORDING_QA`

الهدف: تجهيز ملفات صوت placeholder صامتة أو قصيرة لتجنب أخطاء التشغيل، ثم إنشاء قائمة تحقق لتسجيل الصوت الحقيقي لكل عبارة.
