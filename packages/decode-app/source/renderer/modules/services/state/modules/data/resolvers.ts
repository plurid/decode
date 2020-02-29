import * as Types from './types';



export const addPluriverse = (
    state: Types.State,
    action: Types.DataAddPluriverseAction,
): Types.State => {
    const updatedState = {
        ...state,
    };

    const pluriverse = action.payload;

    const updatedPluriverse = {
        ...state.pluriverses,
    }

    updatedPluriverse[pluriverse.id] = {
        ...pluriverse,
    };

    return {
        ...updatedState,
        pluriverses: {
            ...updatedPluriverse,
        },
    };
}


export const addTerminalToPluriverse = (
    state: Types.State,
    action: Types.DataAddTerminalToPluriverseAction,
): Types.State => {
    const {
        pluriverseID,
        terminalID,
    } = action.payload;

    const updatedState = {
        ...state,
    };

    const updatedPluriverse = {
        ...state.pluriverses,
    };

    const pluriverse = updatedPluriverse[pluriverseID];

    const updatedTerminals = [
        ...pluriverse.editors,
        terminalID
    ];

    pluriverse.editors = [
        ...updatedTerminals,
    ];

    updatedPluriverse[pluriverseID] = {
        ...pluriverse,
    };

    return {
        ...updatedState,
        pluriverses: {
            ...updatedPluriverse,
        },
    };
}


export const setActivePluriverse = (
    state: Types.State,
    action: Types.DataSetActivePluriverseAction,
): Types.State => {
    return {
        ...state,
        activePluriverse: action.payload,
    };
}
