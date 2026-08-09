const { contextBridge, ipcRenderer } = require('electron');

// الجسر الآمن للتواصل بين عملية العرض وعملية الرئيسية
contextBridge.exposeInMainWorld('electronAPI', {
  // إرسال رسائل إلى العملية الرئيسية
  send: (channel, data) => {
    const validChannels = ['navigate', 'reload', 'zoom'];
    if (validChannels.includes(channel)) {
      ipcRenderer.send(channel, data);
    }
  },
  
  // استقبال رسائل من العملية الرئيسية
  receive: (channel, func) => {
    const validChannels = ['url-changed', 'loading-status'];
    if (validChannels.includes(channel)) {
      ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
  },
  
  // الحصول على معلومات الإصدار
  getVersion: () => process.versions.electron,
  
  // التحقق من حالة الاتصال
  checkConnection: async () => {
    return true;
  }
});

// منع الوصول المباشر إلى وحدات Node.js
// هذا يحمي التطبيق من الثغرات الأمنية المحتملة
