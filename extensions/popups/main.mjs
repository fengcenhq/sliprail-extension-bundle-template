/**
 * @type {import('@sliprail/sdk').Extension}
 */
export default {
  shortcuts: [
    {
      id: 'Alert',
      displayName: 'Shortcut Example (Popups) - Alert',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        context.showAlert('Alert');
      },
    },
    {
      id: 'Notification',
      displayName: 'Shortcut Example (Popups) - Notification',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        context.showNotification({
          title: 'Test Notification Title',
          message: 'Test Notification Message',
        });
      },
    },
  ],
  settings: [],
};
