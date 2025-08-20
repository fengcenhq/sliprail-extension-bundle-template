export default {
  shortcuts: [
    {
      id: 'ShortcutExampleWindow',
      displayName: 'Shortcut Example - Window',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        const channel = sliprailMain.createWindowChannel();
        channel.on('getMessage', () => {
          channel.emit('message', 'Hello from Extension!');
        });

        context.showWindow({
          channel,
          htmlFile: 'index.html',
          title: 'Window Example',
          width: 600,
          height: 500,
          maximize: false,
          parameters: {
            initialParameter: 'test',
          },
          resizable: true,
          onClose: () => {},
        });
      },
    },
  ],
  settings: [],
};
