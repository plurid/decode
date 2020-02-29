import * as Types from './types';

import initialState from './initial';

import * as resolvers from './resolvers';



const reducer = (
    state: Types.State = initialState,
    action: Types.Actions,
): Types.State => {
    switch(action.type) {
        case Types.DATA_ADD_PLURIVERSE:
            return resolvers.addPluriverse(state, action);
        case Types.DATA_ADD_TERMINAL_TO_PLURIVERSE:
            return resolvers.addTerminalToPluriverse(state, action);
        case Types.DATA_SET_ACTIVE_PLURIVERSE:
            return resolvers.setActivePluriverse(state, action);
        default:
            return {
                ...state,
            };
    }
}


export default reducer;
