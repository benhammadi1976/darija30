# Darija30 Phase D8 — Mobile Funnel UX Report

## الهدف

تحسين تجربة الهاتف ومسار الزائر العام قبل إضافة Backend أو Stripe.

الفلسفة المعتمدة:

- البساطة
- الصوت أولاً
- السيناريو أولاً
- الفهم الثقافي
- لا تسجيل قبل أول درس

## الملفات المعدلة

- `index.html`
- `css/styles.css`
- `js/app.js`
- `js/router.js`
- `README_AR.md`

## ما تم

1. إضافة Skip Link للوصول السريع للمحتوى.
2. تحسين الـNavbar وجعله `backdrop-blur` وخفيفاً بصرياً.
3. إضافة microcopy تحت CTA:
   - No signup for the first lesson
   - 3 minutes
   - audio first
   - Arabic script optional
4. إضافة قسم جديد في الصفحة الرئيسية:
   - The 10-second Aha Moment
   - 3 free scenarios: Taxi, Cafe, Market
5. إضافة CTA ثابت للهاتف في الصفحات العامة:
   - Start free lesson
   - 30-day plan
6. تحديث `router.js` بإضافة body classes:
   - `is-public-route`
   - `is-app-route`
   - `is-admin-route`
   - `has-mobile-public-cta`
7. تحسين قائمة الهاتف:
   - إغلاق عند الضغط على رابط
   - إغلاق عند Escape
   - إغلاق عند الضغط خارج القائمة
8. تحسين CSS للهاتف:
   - تكبير العنوان بشكل مناسب
   - جعل أزرار CTA كاملة العرض
   - جعل أزرار الصوت كاملة العرض
   - حماية المحتوى من شريط CTA السفلي
9. دعم `prefers-reduced-motion` لتقليل الحركة عند الحاجة.

## نتيجة الفحص التقني

- `node --check js/app.js` OK
- `node --check js/router.js` OK
- `node --check js/audio-player.js` OK
- `node --check js/progress-store.js` OK
- `node --check js/lesson-player.js` OK
- `node --check js/data/lessons-data.js` OK

## ملاحظات

- لا Backend.
- لا Stripe.
- لا تغيير في بنية الدروس.
- الصوتيات الحقيقية ما زالت مطلوبة داخل `assets/audio/`.

## المرحلة التالية المقترحة

Phase D9 — Public Pricing Funnel + Locked Lesson Preview.

الهدف القادم: جعل الزائر يفهم بوضوح لماذا يشتري Starter Pack بعد 3 دروس مجانية، بدون دفع حقيقي بعد.
