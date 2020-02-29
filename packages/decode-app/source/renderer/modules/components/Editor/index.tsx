import React, {
    useState,
    useEffect,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import {
    StyledEditor,
} from './styled';

import {
    Editor as IEditor,
} from '../../data/interfaces';

import { AppState } from '../../services/state/store';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface EditorOwnProperties {
    pluriverseID: string;
    id: string;
}

interface EditorStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    stateEditors: any;
}

interface EditorDispatchProperties {
}

type EditorProperties = EditorOwnProperties
    & EditorStateProperties
    & EditorDispatchProperties;

const Editor: React.FC<EditorProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** own */
        id,

        /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
        stateEditors,
    } = properties;


    /** state */
    const [editor, setEditor] = useState<IEditor>();


    /** effects */
    useEffect(() => {
        if (id) {
            const editor = stateEditors[id];
            if (editor) {
                setEditor(editor);
            }
        }
    }, [
        id,
    ]);


    /** render */
    return (
        <StyledEditor>

        </StyledEditor>
    );
}


const mapStateToProperties = (
    state: AppState,
): EditorStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    stateEditors: selectors.editors.getEditors(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): EditorDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Editor);
