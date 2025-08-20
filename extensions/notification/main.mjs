export default {
  shortcuts: [
    {
      id: 'Notification',
      displayName: 'Shortcut Example - Notification',
      handle: () => {
        sliprailMain.showNotification({
          title: 'Test Notification Title',
          message: 'Test Notification Message',
        });
      },
    },
  ],
  settings: [],
};
