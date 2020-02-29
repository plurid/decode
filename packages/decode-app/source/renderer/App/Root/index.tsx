import React from 'react';

import { Store, AnyAction } from 'redux';
import { Provider as ReduxProvider } from 'react-redux';

import View from '../View';

import {
    AppState,
} from '../../modules/services/state/store';



interface RootProperties {
    store: Store<AppState, AnyAction>;
}

const Root: React.FC<RootProperties> = (
    properties,
) => {
    /** properties */
    const {
        store,
    } = properties;


    /** render */
    return (
        <ReduxProvider
            store={store}
        >
            <View />
        </ReduxProvider>
    );
}


export default Root;
