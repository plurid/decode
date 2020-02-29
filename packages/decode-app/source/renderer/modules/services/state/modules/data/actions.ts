import {
    EditorPluriverse,
} from '../../../../data/interfaces';

import * as Types from './types';



export const addPluriverse = (
    payload: EditorPluriverse,
): Types.DataAddPluriverseAction => {
    return {
        type: Types.DATA_ADD_PLURIVERSE,
        payload,
    };
}


export const addTerminalToPluriverse = (
    payload: Types.DataAddTerminalToPluriversePayload,
): Types.DataAddTerminalToPluriverseAction => {
    return {
        type: Types.DATA_ADD_TERMINAL_TO_PLURIVERSE,
        payload,
    };
}


export const setActivePluriverse = (
    payload: string,
): Types.DataSetActivePluriverseAction => {
    return {
        type: Types.DATA_SET_ACTIVE_PLURIVERSE,
        payload,
    };
}
