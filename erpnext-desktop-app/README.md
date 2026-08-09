# ERPNext Desktop Application for Windows

تطبيق سطح مكتب لنظام ERPNext يعمل على نظام التشغيل Windows باستخدام تقنية Electron.

## المتطلبات الأساسية

- Node.js (الإصدار 18 أو أحدث)
- npm أو yarn
- اتصال بالإنترنت للوصول إلى خادم ERPNext

## التثبيت

### 1. تثبيت Node.js

قم بتحميل وتثبيت Node.js من الموقع الرسمي:
https://nodejs.org/

### 2. تثبيت dependencies

افتح موجه الأوامر (Command Prompt) أو PowerShell وانتقل إلى مجلد التطبيق:

```bash
cd erpnext-desktop-app
npm install
```

### 3. تشغيل التطبيق للتجربة

```bash
npm start
```

## بناء التطبيق لنظام Windows

### بناء ملف تثبيت (.exe)

```bash
npm run build
```

سيتم إنشاء ملف التثبيت في مجلد `dist`.

### بناء نسخة محمولة (Portable)

```bash
npm run build:portable
```

## تخصيص التطبيق

### تغيير رابط خادم ERPNext

افتح الملف `src/main.js` وعدّل السطر التالي:

```javascript
const erpNextURL = 'https://erp.frappe.cloud'; // غيّره إلى رابط خادمك
```

يمكنك استخدام:
- خادم سحابي: `https://your-company.erpnext.com`
- خادم محلي: `http://localhost:8000`
- خادم على الشبكة: `http://192.168.1.100:8000`

### تغيير أيقونة التطبيق

1. احصل على ملف أيقونة بصيغة `.ico`
2. ضعه في مجلد `src/` باسم `icon.ico`

## الميزات

- واجهة مستخدم كاملة لـ ERPNext
- قائمة تطبيق مخصصة بالعربية
- اختصارات لوحة المفاتيح:
  - `F5`: تحديث الصفحة
  - `Ctrl+Shift+R`: إعادة التحميل الكامل
  - `Ctrl+`: تكبير
  - `Ctrl-`: تصغير
  - `Ctrl+0`: الحجم الأصلي
  - `F12`: أدوات المطور
  - `Alt+F4`: خروج
- دعم التكبير والتصغير
- فتح الروابط الخارجية في المتصفح الافتراضي
- إنشاء اختصارات على سطح المكتب وقائمة ابدأ

## البنية التحتية المطلوبة

**ملاحظة مهمة**: هذا التطبيق هو واجهة سطح مكتب فقط، ولا يشمل خادم ERPNext. تحتاج إلى:

1. **خادم ERPNext** يمكن أن يكون:
   - خدمة سحابية من Frappe Cloud
   - خادم محلي مثبت عليه ERPNext
   - خادم بعيد على شبكتك

2. **تثبيت ERPNext محلياً** (اختياري):
   
   راجع الوثائق الرسمية لتثبيت ERPNext:
   https://docs.erpnext.com/docs/v13/user/manual/en/introduction/installation

## حل المشاكل

### التطبيق لا يفتح
- تأكد من تثبيت Node.js بشكل صحيح
- قم بتشغيل `npm install` مرة أخرى
- تحقق من وجود ملف `package.json`

### خطأ في الاتصال بـ ERPNext
- تحقق من رابط الخادم في `src/main.js`
- تأكد من أن خادم ERPNext يعمل
- تحقق من جدار الحماية (Firewall)

### مشاكل في البناء (Build)
- تأكد من وجود مساحة كافية على القرص
- قم بتشغيل الأمر كمسؤول (Administrator)

## الترخيص

MIT License

## الدعم

للحصول على دعم ERPNext، راجع:
- الوثائق الرسمية: https://docs.erpnext.com
- المنتدى: https://discuss.frappe.io
