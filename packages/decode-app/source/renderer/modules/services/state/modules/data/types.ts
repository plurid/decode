import {
    Indexed,
} from '@plurid/plurid-data';

import {
    EditorPluriverse,
} from '../../../../data/interfaces';



export const DATA_ADD_PLURIVERSE = 'DATA_ADD_PLURIVERSE';
export interface DataAddPluriverseAction {
    type: typeof DATA_ADD_PLURIVERSE;
    payload: EditorPluriverse;
}


export const DATA_ADD_TERMINAL_TO_PLURIVERSE = 'DATA_ADD_TERMINAL_TO_PLURIVERSE';
export interface DataAddTerminalToPluriversePayload {
    pluriverseID: string;
    terminalID: string;
}
export interface DataAddTerminalToPluriverseAction {
    type: typeof DATA_ADD_TERMINAL_TO_PLURIVERSE;
    payload: DataAddTerminalToPluriversePayload;
}


export const DATA_SET_ACTIVE_PLURIVERSE = 'DATA_SET_ACTIVE_PLURIVERSE';
export interface DataSetActivePluriverseAction {
    type: typeof DATA_SET_ACTIVE_PLURIVERSE;
    payload: string;
}



export interface State {
    pluriverses: Indexed<EditorPluriverse>;
    activePluriverse: string;
}


export type Actions = DataAddPluriverseAction
    | DataAddTerminalToPluriverseAction
    | DataSetActivePluriverseAction;
