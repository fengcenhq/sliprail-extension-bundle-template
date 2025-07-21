export default {
  shortcuts: [
    {
      id: 'ShortcutExampleAlert',
      displayName: 'Shortcut Example - Alert',
      handle: (parameters) => {
        sliprail.showAlert('Alert');
      },
    },
  ],
  settings: [],
};
