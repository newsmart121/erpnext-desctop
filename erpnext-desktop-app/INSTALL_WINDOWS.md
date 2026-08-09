# دليل التثبيت السريع - ERPNext Desktop لنظام Windows

## الخطوة 1: تثبيت Node.js

1. افتح المتصفح وانتقل إلى: https://nodejs.org/
2. حمّل نسخة LTS (Long Term Support)
3. شغّل ملف التثبيت واتبع التعليمات
4. أعد تشغيل الكمبيوتر بعد التثبيت

## الخطوة 2: تحميل التطبيق

انسخ مجلد `erpnext-desktop-app` إلى جهازك الذي يعمل بنظام Windows.

## الخطوة 3: تثبيت المكتبات المطلوبة

1. افتح **Command Prompt** أو **PowerShell** كمسؤول (Administrator)
2. انتقل إلى مجلد التطبيق:
   ```cmd
   cd C:\path\to\erpnext-desktop-app
   ```
3. نفّذ الأمر التالي:
   ```cmd
   npm install
   ```

## الخطوة 4: تجربة التطبيق

```cmd
npm start
```

سيفتح التطبيق ويمكنك الوصول إلى ERPNext.

## الخطوة 5: بناء التطبيق (إنشاء ملف .exe)

لإنشاء ملف تثبيت يمكن تثبيته على أي جهاز Windows:

```cmd
npm run build
```

ستجد ملفات التثبيت في مجلد `dist`:
- `ERPNext Desktop Setup x.x.x.exe` - ملف التثبيت الكامل
- `ERPNext Desktop x.x.x.exe` - النسخة المحمولة (إذا بنيتها)

## الخطوة 6: تثبيت التطبيق على أجهزة أخرى

1. انسخ ملف `ERPNext Desktop Setup x.x.x.exe` من مجلد `dist`
2. شغّله على أي جهاز Windows
3. اتبع تعليمات التثبيت
4. سيظهر اختصار للتطبيق على سطح المكتب

## تخصيص رابط ERPNext

إذا كان لديك خادم ERPNext خاص بك:

1. افتح الملف `src/main.js` باستخدام محرر نصوص
2. ابحث عن السطر:
   ```javascript
   const erpNextURL = 'https://erp.frappe.cloud';
   ```
3. غيّره إلى رابط خادمك، مثلاً:
   ```javascript
   const erpNextURL = 'http://localhost:8000';
   ```
   أو
   ```javascript
   const erpNextURL = 'https://your-company.erpnext.com';
   ```
4. احفظ الملف
5. أعِد بناء التطبيق: `npm run build`

## ملاحظات مهمة

⚠️ **هذا التطبيق ليس خادم ERPNext**، بل هو واجهة سطح مكتب للوصول إلى خادم ERPNext الموجود بالفعل.

### خيارات الحصول على خادم ERPNext:

1. **Frappe Cloud** (الأسهل):
   - سجّل في: https://frappecloud.com/
   - احصل على خادم ERPNext جاهز
   
2. **تثبيت محلي**:
   - اتبع دليل التثبيت الرسمي: https://docs.erpnext.com/docs/v13/user/manual/en/introduction/installation
   - يتطلب معرفة تقنية متقدمة

3. **خادم بعيد**:
   - استأجر خادم VPS وثبّت عليه ERPNext

## الاختصارات المفيدة

| الاختصار | الوظيفة |
|----------|---------|
| F5 | تحديث الصفحة |
| Ctrl+Shift+R | إعادة التحميل الكامل |
| Ctrl+ | تكبير |
| Ctrl- | تصغير |
| Ctrl+0 | الحجم الأصلي |
| F12 | أدوات المطور |
| Alt+F4 | خروج |

## الدعم والمساعدة

- وثائق ERPNext: https://docs.erpnext.com
- المنتدى الرسمي: https://discuss.frappe.io
- Frappe Cloud: https://frappecloud.com
