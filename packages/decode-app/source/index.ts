import {
    app,
    BrowserWindow,
} from 'electron';

import {
    installExtensions,
} from './window/utilities/devtools';



app.allowRendererProcessReuse = true;


// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: any;

const createWindow = () => {
    /**
     * HACK:
     * Uncomment to install extensions.
     */
    // installExtensions();


    // Create the browser window.
    win = new BrowserWindow({
        width: 1000,
        height: 800,
        icon: './assets/meta/decode.png',
        minHeight: 500,
        minWidth: 300,
        title: 'decode',

        /**
         * BUG
         * The cursor is not correctly displayed in the place where the normal topbar would be.
         * https://github.com/electron/electron/issues/5723
         */
        frame: false,
        titleBarStyle: 'hidden', // or 'customButtonsOnHover',

        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.setWindowButtonVisibility(false)
    // systemPreferences.isDarkMode();

    // and load the index.html of the app.
    win.loadFile('index.html');

    // Open the DevTools.
    // win.webContents.openDevTools();

    // const view = new BrowserView({
    //     webPreferences: {
    //         nodeIntegration: false,
    //     },
    // });
    // win.setBrowserView(view);
    // view.setBounds({ x: 0, y: 38, width: 1440, height: 860 });
    // view.webContents.loadURL('https://electronjs.org');


    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
