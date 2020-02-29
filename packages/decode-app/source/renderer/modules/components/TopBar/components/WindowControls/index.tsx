import React from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    remote,
} from 'electron';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    PluridIconDelete,
    PluridIconExpandMinus,
    PluridIconWorldSpace,
} from '@plurid/plurid-icons-react';

import {
    StyledWindowControls,
} from './styled';

import { AppState } from '../../../../services/state/store';
import selectors from '../../../../services/state/selectors';
// import actions from '../../../../services/state/actions';



interface WindowControlsOwnProperties {
}

interface WindowControlsStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
}

interface WindowControlsDispatchProperties {
}

type WindowControlsProperties = WindowControlsOwnProperties
    & WindowControlsStateProperties
    & WindowControlsDispatchProperties;

const WindowControls: React.FC<WindowControlsProperties> = (
    properties,
) => {
    /** properties */
    // const {
        // /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
    // } = properties;


    /** handlers */
    const closeWindow = () => {
        const window = remote.getCurrentWindow();
        window.close();
    }

    const minimizeWindow = () => {
        const window = remote.getCurrentWindow();
        window.minimize();
    }

    const maximizeWindow = () => {
        const window = remote.getCurrentWindow();
        if (!window.isMaximized()) {
            window.maximize();
        } else {
            window.unmaximize();
        }
    }


    /** render */
    return (
        <StyledWindowControls>
            <PluridIconDelete
                size="small"
                atClick={closeWindow}
            />

            <PluridIconExpandMinus
                size="small"
                atClick={minimizeWindow}
            />

            <PluridIconWorldSpace
                size="small"
                atClick={maximizeWindow}
            />
        </StyledWindowControls>
    );
}


const mapStateToProperties = (
    state: AppState,
): WindowControlsStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): WindowControlsDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(WindowControls);
