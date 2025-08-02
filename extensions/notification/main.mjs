export default {
  shortcuts: [
    {
      id: 'ShortcutExampleNotification',
      displayName: 'Shortcut Example - Notification',
      handle: () => {
        sliprailMain.showNotification({
          title:'Test Notification Title',
          message:'Test Notification Message'
        });
      },
    },
  ],
  settings: [],
};
