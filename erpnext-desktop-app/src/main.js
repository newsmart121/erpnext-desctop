const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // إنشاء نافذة المتصفح الرئيسية
  mainWindow = new BrowserWindow({
    width: 1400,
    height: 900,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    },
    icon: path.join(__dirname, 'icon.ico'),
    show: false, // إخفاء النافذة حتى يتم تحميل المحتوى
    backgroundColor: '#ffffff'
  });

  // تحميل ERPNext (يمكنك تغيير الرابط إلى خادمك المحلي)
  // الخيار 1: استخدام نسخة سحابية من ERPNext
  // الخيار 2: استخدام خادم محلي (مثلاً: http://localhost:8000)
  
  const erpNextURL = 'https://erp.frappe.cloud'; // رابط تجريبي، غيّره إلى خادمك
  
  mainWindow.loadURL(erpNextURL);

  // إظهار النافذة بعد تحميل الصفحة
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // التعامل مع الروابط الخارجية (فتحها في المتصفح الافتراضي)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    const externalDomains = ['frappe.cloud', 'erpnext.com'];
    const isExternal = externalDomains.some(domain => url.includes(domain));
    
    if (isExternal && url !== erpNextURL) {
      require('electron').shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });

  // إنشاء قائمة التطبيق
  createMenu();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

function createMenu() {
  const template = [
    {
      label: 'ملف',
      submenu: [
        {
          label: 'تحديث الصفحة',
          accelerator: 'F5',
          click: () => {
            if (mainWindow) mainWindow.reload();
          }
        },
        {
          label: 'إعادة التحميل الكامل',
          accelerator: 'Ctrl+Shift+R',
          click: () => {
            if (mainWindow) mainWindow.webContents.reloadIgnoringCache();
          }
        },
        { type: 'separator' },
        {
          label: 'خروج',
          accelerator: 'Alt+F4',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'عرض',
      submenu: [
        {
          label: 'تكبير',
          accelerator: 'Ctrl+',
          click: () => {
            if (mainWindow) {
              const zoom = mainWindow.webContents.getZoomLevel();
              mainWindow.webContents.setZoomLevel(zoom + 0.5);
            }
          }
        },
        {
          label: 'تصغير',
          accelerator: 'Ctrl-',
          click: () => {
            if (mainWindow) {
              const zoom = mainWindow.webContents.getZoomLevel();
              mainWindow.webContents.setZoomLevel(zoom - 0.5);
            }
          }
        },
        {
          label: 'الحجم الأصلي',
          accelerator: 'Ctrl+0',
          click: () => {
            if (mainWindow) mainWindow.webContents.setZoomLevel(0);
          }
        },
        { type: 'separator' },
        {
          label: 'أدوات المطور',
          accelerator: 'F12',
          click: () => {
            if (mainWindow) mainWindow.webContents.toggleDevTools();
          }
        }
      ]
    },
    {
      label: 'مساعدة',
      submenu: [
        {
          label: 'حول ERPNext Desktop',
          click: () => {
            const { dialog } = require('electron');
            dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'حول ERPNext Desktop',
              message: 'ERPNext Desktop Application',
              detail: 'إصدار 1.0.0\nتطبيق سطح مكتب لنظام ERPNext\nيعمل على نظام Windows',
              buttons: ['موافق']
            });
          }
        },
        {
          label: 'وثائق ERPNext',
          click: () => {
            require('electron').shell.openExternal('https://docs.erpnext.com');
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// انتظار جاهزية التطبيق
app.whenReady().then(createWindow);

// منع إنشاء نوافذ متعددة عند النقر على الأيقونة في نظام التشغيل
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
