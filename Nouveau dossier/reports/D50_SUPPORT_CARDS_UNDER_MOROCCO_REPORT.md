# D50 — نقل Culture Note و Memory Hook تحت I’m in Morocco

## الهدف
جعل الحاوية اليسرى أكثر توازنًا بصريًا، وإبقاء ملاحظات الدعم قريبة من تجربة المشهد الواقعي بدل ظهورها ككروت كبيرة في أسفل الصفحة.

## ما تم
- إنشاء دالة `supportCardsMarkup(phrase)` في `js/lesson-player.js`.
- نقل عرض `Culture Note` و `Memory Hook` إلى داخل العمود الأيسر تحت `I’m in Morocco`.
- حذف عرضهما القديم من أسفل الصفحة بعرض كامل.
- إضافة تنسيقات CSS جديدة:
  - `lesson-support-stack`
  - `lesson-support-card`
  - `lesson-support-card--culture`
  - `lesson-support-card--memory`

## ما لم يتغير
- لم يتم تغيير ملفات الفيديو.
- لم يتم تغيير الصور.
- لم يتم تغيير منطق التسجيل.
- لم يتم تغيير تشغيل صوت المتعلم مع الفيديو.
- لم يتم تغيير صفحة `Do you remember?`.

## الترتيب الجديد في العمود الأيسر
1. Scenario
2. Now You Speak
3. I’m in Morocco
4. Culture Note
5. Memory Hook

## تحقق تقني
- تم تشغيل `node --check js/lesson-player.js` بنجاح.
