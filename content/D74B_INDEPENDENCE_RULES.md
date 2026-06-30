# D74-B — Darija30 Independence Rules

**الهدف:** تثبيت قاعدة الاستقلالية المزدوجة داخل Darija30 قبل إنتاج الصوت والصور والفيديو.

## القاعدة المختصرة

```text
Darija30 = لغة مستقلة + مستوى مستقل + Core مشترك مضبوط
```

## 1) استقلالية اللغات

كل لغة تظهر للزائر كأنها موقع مستقل كامل، مثل:

```text
/en
/fr
/ar
/es
/tr
/vi
/zh
/ko
/ja
```

كل لغة لها استقلال في:

- الصفحة الرئيسية والرسائل التسويقية.
- شرح طريقة التعلم.
- أزرار الواجهة والنصوص.
- معنى الجمل بلغة المتعلم.
- الملاحظات الثقافية بلغة المتعلم.
- صفحات الثقة والدعم والتسعير والقانون.
- SEO metadata والكلمات المفتاحية.
- أسلوب الخطاب حسب جمهور اللغة.

لكن اللغة لا تغيّر قلب الدرس. لا ننسخ Level 1 أو Level 2 بالكامل لكل لغة. نربط كل لغة بنفس IDs التعليمية.

## 2) استقلالية المستويات

كل مستوى مستقل في الهدف والمواقف والجمل والميديا والتقدم والمراجعة.

كل مستوى يجب أن يملك:

- Level ID مستقل مثل L1, L2, L3.
- وعدًا تعليميًا واضحًا.
- أيامه ودروسه ومواقفه.
- جمل Darija Latin خاصة به.
- صوت Normal/Slow خاص بجمله.
- صور ذهنية وفيديوهات خاصة بمواقفه.
- تقدمًا ومراجعة خاصة به.
- شهادة أو إنجاز خاص لاحقًا.
- إمكانية وصول/تسعير مستقل لاحقًا إذا احتجنا.

## 3) القلب المشترك بين اللغات

هذا لا يتغير بتغيير اللغة:

- lessonId / phraseId.
- Darija Latin canonical sentence.
- Moroccan audio normal/slow.
- pronunciation parts.
- situation identity.
- mental image reference.
- video reference.
- progress logic.
- review wheel logic.

## 4) طبقة اللغة فوق القلب

كل لغة تضيف طبقتها الخاصة:

```js
localized: {
  en: { meaning, cultureNote, usageTip, uiLabels },
  fr: { meaning, cultureNote, usageTip, uiLabels },
  ar: { meaning, cultureNote, usageTip, uiLabels }
}
```

## 5) قاعدة الإنتاج

لا ننتج صوتًا أو صورة أو فيديو قبل تثبيت الجملة/الموقف داخل المستوى.

```text
Level map
→ Level sentence/situation content
→ sentence cleanup
→ Moroccan audio normal/slow
→ mental images
→ videos from approved images
→ QA media check
```

## 6) قرار D74-B

D74-B لا يغير الجمل ولا الميديا. هو يثبت القاعدة المعمارية التالية:

```text
كل لغة = موقع مستقل ظاهريًا.
كل مستوى = منتج تعليمي مستقل داخليًا.
القلب الدارجي = مشترك ومنضبط بـ IDs ثابتة.
```
