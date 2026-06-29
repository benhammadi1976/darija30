# Darija30 Phase D9 — Pricing Funnel + Locked Lesson Preview

## الهدف
تقوية مسار الشراء بدون ربط Stripe بعد. المستخدم يرى بوضوح ما يفتحه Starter Pack بعد الدروس المجانية الثلاثة.

## ما تم
- إعادة بناء صفحة Pricing لتشرح الوعد التجاري: 30 سيناريو، صوت، معنى، قصد ثقافي.
- إضافة CTA واضح: Preview Locked Lessons و Demo Login.
- إضافة ملاحظة صريحة أن Stripe غير مفعّل في هذه المرحلة.
- إضافة 27 درساً مقفلاً كـ preview داخل `lessons-data.js` لإكمال خريطة 30 يوماً.
- تحسين صفحة Lessons لعرض الدروس المقفلة كـ Preview وليس كمحتوى مكسور.
- إضافة صفحة Locked Lesson Preview عند فتح درس مدفوع، تعرض ما سيحصل عليه المستخدم بدون إتاحة المحتوى المدفوع كاملاً.

## لم يتم
- لا Stripe.
- لا Backend.
- لا حسابات حقيقية.
- لا فتح مدفوع حقيقي.

## النتيجة
أصبح المسار قابلاً للاختبار: Landing → Free Lesson → Pricing → Locked Lesson Preview → Demo Login.
