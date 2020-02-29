import {
    Editor,
} from '../../../../data/interfaces';

import * as Types from './types';



export const addEditor = (
    payload: Editor,
): Types.EditorsAddEditorAction => {
    return {
        type: Types.EDITORS_ADD_EDITOR,
        payload,
    };
}
