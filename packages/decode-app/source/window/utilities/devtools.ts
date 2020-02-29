import {
    BrowserWindow,
} from 'electron';

import environment from './environment';



export const installExtensions = () => {
    if (!environment.production) {
        const reduxDevTools = process.env.REDUX_DEV_TOOLS;

        if (reduxDevTools) {
            BrowserWindow.addDevToolsExtension(
                reduxDevTools,
            );
        }
    }
}
