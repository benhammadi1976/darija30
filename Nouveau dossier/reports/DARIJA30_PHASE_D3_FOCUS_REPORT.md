# DARIJA30_PHASE_D3_FOCUS_REPORT

## الهدف
تنفيذ فلسفة المنتج قبل التوسع: البساطة + الصوت + السيناريو + الفهم الثقافي.

## القرار البصري
- اعتماد خلفية بيضاء/كريمية كأساس للموقع.
- الإبقاء على الزليج المغربي كزخرفة خفيفة في منطقة Hero فقط.
- السبب: الزليج جميل للهوية، لكنه إذا غطى كل الموقع قد يضعف التركيز والقراءة.

## التعديلات
- تحديث Hero ليقول: Speak Useful Moroccan Darija Before You Land.
- إضافة 4 أعمدة تميز: Sound First, Scenario First, Friendly Latin, Culture Intent.
- إعادة بناء Free Lesson وفق القالب الجديد:
  Scenario → Say this → Audio → Optional Arabic → Meaning → Cultural Intent → Memory Hook.
- تحديث صفحة الدرس داخل التطبيق بنفس فلسفة التعلم.
- تحديث `lessons-data.js` بنموذج بيانات جديد لأول 3 دروس مجانية:
  - Taxi Survival
  - Cafe Culture
  - Market Price
- جعل الكتابة العربية اختيارية في بيانات الدروس `showArabicByDefault: false`.
- استبدال الكتابة الرقمية الأساسية بـ Friendly Latin Darija، مع حفظ Moroccan Chat spelling كحقل ثانوي.

## ملاحظات
- لا توجد ملفات صوت حقيقية بعد؛ المسارات جاهزة داخل `assets/audio/`.
- لا يوجد Backend أو Stripe في هذه المرحلة.
- هذه النسخة مناسبة للانتقال إلى Phase D4: ربط Lesson Player ديناميكياً ببيانات `lessons-data.js`.
