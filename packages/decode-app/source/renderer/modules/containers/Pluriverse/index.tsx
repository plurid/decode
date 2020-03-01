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

import PluridApp, {
    PluridPage,
    PluridConfiguration,
    RecursivePartial,
    SPACE_LAYOUT,
} from '@plurid/plurid-react';

import {
    Indexed,
} from '@plurid/plurid-data';

import {
    StyledPluriverse,
} from './styled';

import {
    EditorPluriverse,
} from '../../data/interfaces';

import Editor from '../../components/Editor';

import { AppState } from '../../services/state/store';
import selectors from '../../services/state/selectors';
// import actions from '../../services/state/actions';



interface PluriverseOwnProperties {
}

interface PluriverseStateProperties {
    stateGeneralTheme: Theme;
    stateInteractionTheme: Theme;
    statePluriverses: Indexed<EditorPluriverse>;
    stateActivePluriverse: string;
}

interface PluriverseDispatchProperties {
}

type PluriverseProperties = PluriverseOwnProperties
    & PluriverseStateProperties
    & PluriverseDispatchProperties;

const Pluriverse: React.FC<PluriverseProperties> = (
    properties,
) => {
    /** properties */
    const {
        /** state */
        // stateGeneralTheme,
        // stateInteractionTheme,
        statePluriverses,
        stateActivePluriverse,
    } = properties;

    const pluridAppConfiguration: RecursivePartial<PluridConfiguration> = {
        theme: 'plurid',
        space: {
            layout: {
                type: SPACE_LAYOUT.COLUMNS,
            },
        },
        elements: {
            plane: {
                controls: {
                    show: false,
                },
            },
        },
    };


    /** state */
    const [pluridPages, setPluridPages] = useState<PluridPage[]>([]);
    const [pluridView, setPluridView] = useState<string[]>([]);
    const [pluriverse, setPluriverse] = useState<EditorPluriverse>();


    /** effects */
    /** Get Pluriverse */
    useEffect(() => {
        if (stateActivePluriverse) {
            const pluriverse = statePluriverses[stateActivePluriverse];
            setPluriverse(pluriverse);
        }
    }, [
        stateActivePluriverse,
    ]);

    /** Handle Plurid Pages and View */
    useEffect(() => {
        if (!pluriverse) {
            return;
        }

        const pluridPages: PluridPage[] = [
            {
                path: '/one',
                component: {
                    element: () => (
                        <Editor
                            id={''}
                            pluriverseID={pluriverse.id}
                        />
                    ),
                },
            },
            {
                path: '/two',
                component: {
                    element: () => (
                        <Editor
                            id={''}
                            pluriverseID={pluriverse.id}
                        />
                    ),
                },
            },
        ];

        setPluridPages(pluridPages);


        const pluridView = [
            '/one',
            // '/two',
        ];

        setPluridView(pluridView);
    }, [
        statePluriverses,
        pluriverse,
    ]);


    /** render */
    return (
        <StyledPluriverse>
            {pluridPages.length > 0 && (
                <PluridApp
                    pages={pluridPages}
                    configuration={pluridAppConfiguration}
                    view={pluridView}
                />
            )}
        </StyledPluriverse>
    );
}


const mapStateToProperties = (
    state: AppState,
): PluriverseStateProperties => ({
    stateGeneralTheme: selectors.themes.getGeneralTheme(state),
    stateInteractionTheme: selectors.themes.getInteractionTheme(state),
    statePluriverses: selectors.data.getPluriverses(state),
    stateActivePluriverse: selectors.data.getActivePluriverse(state),
});


const mapDispatchToProperties = (
    dispatch: ThunkDispatch<{}, {}, AnyAction>,
): PluriverseDispatchProperties => ({
});


export default connect(
    mapStateToProperties,
    mapDispatchToProperties,
)(Pluriverse);
