/**
 * @type {import('@sliprail/sdk').Extension}
 */
export default {
  shortcuts: [
    {
      id: 'GetParameter',
      displayName: 'Shortcut Example (Parameter) - Get Parameter',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        context.showAlert(context.parameter);
      },
    },
  ],
  settings: [],
};
