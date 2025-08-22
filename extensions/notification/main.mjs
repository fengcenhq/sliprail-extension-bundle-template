/**
 * @type {import('@sliprail/sdk').Extension}
 */
export default {
  shortcuts: [
    {
      id: 'Notification',
      displayName: 'Shortcut Example - Notification',
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
