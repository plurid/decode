import { combineReducers } from 'redux';

import * as data from '../modules/data';
import * as shortcuts from '../modules/shortcuts';
import * as editors from '../modules/editors';
import * as themes from '../modules/themes';
import * as ui from '../modules/ui';



const rootReducer = combineReducers({
    data: data.reducer,
    shortcuts: shortcuts.reducer,
    editors: editors.reducer,
    themes: themes.reducer,
    ui: ui.reducer,
});


export default rootReducer;
