/**
 * @type {import('@sliprail/sdk').Extension}
 */
export default {
  shortcuts: [
    {
      id: 'Window',
      displayName: 'Shortcut Example - Window',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        const channel = sliprailMain.createWindowChannel();
        channel.on('getMessage', () => {
          channel.emit('message', 'Hello from Window Shortcut!');
        });

        context.createWindow({
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
    {
      id: 'SingletonWindow',
      displayName: 'Shortcut Example - Singleton Window',
      /**
       * @param context {import('@sliprail/sdk').ShortcutContext}
       */
      handle: (context) => {
        const singletonWindow = context.getWindows()[0];
        if (singletonWindow != null) {
          singletonWindow.show();
          return;
        }

        const channel = sliprailMain.createWindowChannel();
        channel.on('getMessage', () => {
          channel.emit('message', 'Hello from Singleton Window Shortcut!');
        });

        context.createWindow({
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
