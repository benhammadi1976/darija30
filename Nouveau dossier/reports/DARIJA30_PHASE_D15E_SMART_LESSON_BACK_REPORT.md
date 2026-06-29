# Darija30 Phase D15E — Smart Lesson Back Link

## الهدف
إصلاح سلوك زر الرجوع داخل صفحة الدرس عندما يدخل المستخدم من صفحة الدرس المجاني.

## المشكلة
زر `Continue This Lesson` في صفحة `#/free-lesson` كان يفتح الدرس الكامل `#/app/lesson/1`، لكن زر `← Back` داخل صفحة الدرس كان يرجع دائماً إلى `#/app/lessons` بدل الرجوع إلى صفحة الدرس المجاني.

## ما تم
- جعل زر `Continue This Lesson` يضيف مصدر الدخول:
  - `#/app/lesson/1?from=free-lesson`
- جعل صفحة الدرس تقرأ مصدر الدخول من الرابط.
- إذا دخل المستخدم من الدرس المجاني، يظهر الزر:
  - `← Back to free lesson`
  - ويرجع إلى `#/free-lesson`
- إذا دخل المستخدم من صفحة الدروس، يظهر الزر:
  - `← Back to lessons`
  - ويرجع إلى `#/app/lessons`
- تحسين قراءة رقم الدرس حتى يعمل مع الروابط التي تحتوي على query params مثل `?from=free-lesson`.

## الملفات المعدلة
- `js/lesson-player.js`

## لم يتم تغييره
- لم يتم تعديل الدروس.
- لم يتم تعديل الصوت.
- لم يتم تعديل الفيديو.
- لم يتم تعديل Stripe أو Backend.

## الاختبار المقترح
1. افتح `#/free-lesson`.
2. اضغط الزر الأحمر `Continue This Lesson`.
3. يجب أن تذهب إلى `#/app/lesson/1?from=free-lesson`.
4. اضغط `← Back to free lesson`.
5. يجب أن تعود إلى `#/free-lesson`.
6. افتح `#/app/lessons` ثم افتح Lesson 1.
7. يجب أن يظهر `← Back to lessons` ويرجع إلى `#/app/lessons`.
