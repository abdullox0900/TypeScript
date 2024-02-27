# TypeScript Introduction.

Veb-rivojlanishning tobora rivojlanib borayotgan landshaftida ishlab chiquvchilar doimiy ravishda ish oqimlarini soddalashtirish, xatolarni erta aniqlash va ko'proq saqlanadigan va kengaytiriladigan kod yozish usullarini izlaydilar.

So'nggi yillarda ushbu maqsadlarga erishish uchun juda mashhur bo'lgan vositalardan biri bu TypeScript.

Ammo TypeScript aniq nima va nima uchun u zamonaviy veb-ishlab chiqishning asosiy qismiga aylandi?

Keling, uning mohiyati, xususiyatlari va afzalliklarini ochish uchun TypeScript dunyosiga sho'ng'iymiz. 🙂

# TypeScript o'zi nima?

TypeScript birinchi marta 2012 yilda Microsoft tomonidan ishlab chiqilgan.
`TypeScript is a superset of the JavaScript.`
TypeScript bu aloxida til xisoblanadi faqat JavaScript ustiga qurilgan bir til.

# TypeScript-ning Asosiy xususiyatlari.

- `Static Typing: TypeScript:`, JavaScriptga oʻxshash, lekin uningga qoʻshimcha funksiyalarni qoʻshgan va eng asosiy farq, static typing (statik typelash)ni qoʻshgan. Statik typelash, kodni yozishda muhim xatolarni oldini olish va kodni aniqlashni osonlash uchun oʻzgaruvchilarni va funksiyalarni tiplar bilan ma'lum qilishni tashkil etadi.

Misol: JavaScript

```javascript
// JavaScript
function add(x, y) {
	return x + y
}

let result = add(5, '10') // JavaScriptda xatolik yuzaga keladi
```

Misol: TypeScript

```typescript
// TypeScript
function add(x: number, y: number): number {
	return x + y
}

let result: number = add(5, '10') // TypeScript xatolikni ilgari olish imkoniyatiga ega
```

- `Object-Oriented Programming:` Ob'ektga yo'naltirilgan dasturlash: TypeScript classes, interfeyslar, meros va boshqa ob'ektga yo'naltirilgan tushunchalarni qo'llab-quvvatlaydi, ishlab chiquvchilarga modulli va yaxshi tashkil etilgan dasturlarni yaratish imkoniyatini beradi.

- `Type Inference:` Type Inference, dasturlashda o'zgaruvchanlar va funksiyalar uchun avtomatik ravishda tur (type) aniqlash imkoniyatini ifodalovchi bir kontseptdir. TypeScript, JavaScriptga qo'shimcha statik tur tuzilgan tilda dasturlashni o'rganish uchun ishlatiladigan bir tildadir. Bu til, kodni yozish va qayta ishlashni osonroq qilish uchun statik tipni qo'llaydi, ya'ni dasturni ishga tushirilgandan avval turlarni (type) o'rniga qo'yishni talab qiladi.

- `Code Readability:` TypeScriptda Code Readability, kodni o'qib tushunish va uni yozishni osonroq qilish uchun mo'ljallangan.

- `Enhanced Tooling:` TypeScriptning "Enhanced Tooling" (yaxshilangan vosita) qo'llab-quvvati, dasturchilarga kodni yozish, qayta ishlash va to'g'riroq yozishda yordam bera olish uchun bir nechta muhim vositalar va imkoniyatlarni o'z ichiga oladi. Bu, dasturchilarga yozish va ishlagichlar orasidagi qanday muvofiqligini oshiradi va kodni tuzatishni osonlashtiradi. Quyidagi bir necha muhim "Enhanced Tooling" imkoniyatlari TypeScript uchun ajratiladi:

- `Compatibility with JavaScript Ecosystem:` JavaScript ekotizim bilan moslik: TypeScript mashhur JavaScript kutubxonalari, ramkalar va vositalar bilan muammosiz birlashadi va ishlab chiquvchilarga TypeScript xususiyatlarini bosqichma-bosqich qabul qilishda mavjud JavaScript kod bazalaridan foydalanishga imkon beradi.
