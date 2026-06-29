# Darija30 — Phase D2 Zellige Background

## الهدف
إضافة هوية بصرية مغربية واضحة للموقع عبر خلفية ناعمة مستوحاة من فسيفساء الزليج المغربي، بدون التأثير على قابلية القراءة أو تجربة المستخدم.

## الملفات المعدلة
- `css/styles.css`

## الملفات المضافة
- `assets/images/backgrounds/zellige-bg.webp`
- `assets/images/backgrounds/zellige-bg.png`
- `reports/DARIJA30_ZELLIGE_BACKGROUND_REPORT.md`

## ما تم
- إضافة خلفية زليج مغربي خفيفة للموقع وصفحات التسويق العامة.
- استعمال طبقة overlay كريمية فوق الخلفية حتى تبقى النصوص والبطاقات واضحة.
- جعل البطاقات شبه زجاجية/ناعمة مع `backdrop-filter` وظلال خفيفة.
- إضافة نسخة WebP أخف للمتصفح مع PNG كأصل احتياطي داخل المشروع.
- دعم الموبايل عبر إلغاء `background-attachment: fixed` على الشاشات الصغيرة.

## ملاحظات مهمة
- الخلفية مناسبة للصفحات العامة: Home, Free Lesson, 30-Day Plan, Pricing, About, Blog, Login.
- صفحات App/Admin بقيت عملية ونظيفة حتى لا تتأثر تجربة التعلم والإدارة.
- لا يوجد Backend أو Stripe في هذه المرحلة.

## المرحلة التالية المقترحة
Phase D3: جعل صفحة الدرس تقرأ فعلياً من `js/data/lessons-data.js`، ثم بناء الدروس الثلاثة المجانية.
