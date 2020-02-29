import * as data from '../modules/data';
import * as shortcuts from '../modules/shortcuts';
import * as editors from '../modules/editors';
import * as themes from '../modules/themes';
import * as ui from '../modules/ui';



export default {
    data: data.actions,
    shortcuts: shortcuts.actions,
    editors: editors.actions,
    themes: themes.actions,
    ui: ui.actions,
};
