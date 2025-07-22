export default {
  shortcuts: [
    {
      id: 'ShortcutExampleNotification',
      displayName: 'Shortcut Example - Notification',
      handle: () => {
        sliprail.showNotification({
          title:'Test Notification Title',
          message:'Test Notification Message'
        });
      },
    },
  ],
  settings: [],
};
