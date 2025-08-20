/**
 * @type {import('@sliprail/sdk').Extension}
 */
export default {
  shortcuts: [
    {
      id: 'Alert',
      displayName: 'Shortcut Example - Alert',
      handle: () => {
        sliprailMain.showAlert('Alert');
      },
    },
  ],
  settings: [],
};
