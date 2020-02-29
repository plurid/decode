import * as Types from './types';



export const addEditor = (
    state: Types.State,
    action: Types.EditorsAddEditorAction
): Types.State => {
    const updatedState = {
        ...state,
    };

    const editor = action.payload;

    updatedState[editor.id] = {
        ...editor,
    };

    return updatedState;
}
