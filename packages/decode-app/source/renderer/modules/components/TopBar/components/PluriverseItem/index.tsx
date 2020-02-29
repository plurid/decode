import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconDocuments,
} from '@plurid/plurid-icons-react';

import {
    StyledPluriverseItem,
} from './styled';

import {
    EditorPluriverse,
} from '../../../../data/interfaces';

import { AppState } from '../../../../services/state/store';
import selectors from '../../../../services/state/selectors';
import actions from '../../../../services/state/actions';



interface PluriverseItemOwnProperties {
    pluriverse: EditorPluriverse;
    active: boolean;
}

interface PluriverseItemStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

interface PluriverseItemDispatchProperties {
    dispatchDataSetActivePluriverse: typeof actions.data.setActivePluriverse;
}

type PluriverseItemProperties = PluriverseItemOwnProperties
    & PluriverseItemStateProperties
    & PluriverseItemDispatchProperties;

const PluriverseItem: React.FC<PluriverseItemProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        pluriverse,
        active,

        // /** state */
        stateGeneralTheme,
        // stateInteractionTheme,

        /** dispatch */
        dispatchDataSetActivePluriverse,
    } = properties;


    /** handlers */
    const handleClick = () => {
        dispatchDataSetActivePluriverse(pluriverse.id);
    }


    /** render */
    return (
        <StyledPluriverseItem
            theme={stateGeneralTheme}
            active={active}
            onClick={handleClick}
        >
            <PluridIconDocuments
                size="small"
            />

            {pluriverse.name || ''}
        </StyledPluriverseItem>
    );
}


const mapStateToProperties = (
    state: AppState,
): PluriverseItemStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): PluriverseItemDispatchProperties => ({
    dispatchDataSetActivePluriverse: (
        pluriverseID,
    ) => dispatch(
        actions.data.setActivePluriverse(pluriverseID),
    ),
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(PluriverseItem);
