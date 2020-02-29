import {
    Editor,
} from '../../../../data/interfaces';



export const EDITORS_ADD_EDITOR = 'EDITORS_ADD_EDITOR';
export interface EditorsAddEditorAction {
    type: typeof EDITORS_ADD_EDITOR;
    payload: Editor;
}



export interface State {
    [key: string]: Editor;
}


export type Actions = EditorsAddEditorAction;
