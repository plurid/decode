import React, {
    useEffect,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    uuidv4 as uuid,
} from '@plurid/plurid-functions';

import {
    StyledView,
} from './styled';

import Pluriverse from '../../modules/containers/Pluriverse';
import TopBar from '../../modules/components/TopBar';

import { AppState } from '../../modules/services/state/store';
import selectors from '../../modules/services/state/selectors';
import actions from '../../modules/services/state/actions';



interface ViewOwnProperties {
}

interface ViewStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    statePluriverses: any;
}

interface ViewDispatchProperties {
    dispatchDataAddPluriverse: typeof actions.data.addPluriverse;
    dispatchDataSetActivePluriverse: typeof actions.data.setActivePluriverse;
}

type ViewProperties = ViewOwnProperties
    & ViewStateProperties
    & ViewDispatchProperties;

const View: React.FC<ViewProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
        statePluriverses,

        /** dispatch */
        dispatchDataAddPluriverse,
        dispatchDataSetActivePluriverse,
    } = properties;


    /** effects */
    useEffect(() => {
        if (Object.values(statePluriverses).length === 0) {
            const id = uuid();
            const pluriverse: any = {
                id,
                editors: [],
            };
            dispatchDataAddPluriverse(pluriverse);
            dispatchDataSetActivePluriverse(id);
        }
    }, [
        statePluriverses,
    ]);


    /** render */
    return (
        <StyledView>
            <TopBar />

            <Pluriverse />
        </StyledView>
    );
}


const mapStateToProperties = (
    state: AppState,
): ViewStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    statePluriverses: selectors.data.getPluriverses(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): ViewDispatchProperties => ({
    dispatchDataAddPluriverse: (
        pluriverse,
    ) => dispatch(
        actions.data.addPluriverse(pluriverse),
    ),
    dispatchDataSetActivePluriverse: (
        pluriverseID,
    ) => dispatch(
        actions.data.setActivePluriverse(pluriverseID),
    ),
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(View);
