import React, {
    useRef,
    useState,
    useEffect,
} from 'react';

import { AnyAction } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

import {
    Theme,
} from '@plurid/plurid-themes';

import MonacoEditor from 'react-monaco-editor';
import {
    editor
} from 'monaco-editor';

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

    const monacoOptions: editor.IEditorOptions = {
        selectOnLineNumbers: true,
        minimap: {
            enabled: false,
        },
        contextmenu: false,
        // automaticLayout: true,
    };


    const monacoEditor = useRef<editor.ICodeEditor>();

    /** state */
    const [_, setEditor] = useState<IEditor>();
    const [code, setCode] = useState('');


    /** handlers */
    const onChange = (
        newValue: any,
        e: any,
    ) => {
        console.log('onChange', newValue, e);
    }

    const editorDidMount = (
        editor: any,
        monaco: any,
    ) => {
        monacoEditor.current = editor;

        // console.log('editorDidMount editor', editor);
        // console.log('editorDidMount monaco', monaco);
        editor.focus();
    }


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

    useEffect(() => {
        if (monacoEditor.current) {
            console.log(monacoEditor.current.hasTextFocus())
            // monacoEditor.current.onMouseMove(({ event }: editor.IEditorMouseEvent) => {
            //     console.log(event);
            // });
        }
    }, [
        monacoEditor.current,
    ])


    /** render */
    return (
        <StyledEditor
            style={{
                userSelect: monacoEditor.current && monacoEditor.current.hasTextFocus() ? 'initial' :  'none',
                pointerEvents: monacoEditor.current && monacoEditor.current.hasTextFocus() ? 'initial' : 'none',
            }}
        >
            <MonacoEditor
                width="1440"
                height="600"
                language="typescript"
                theme="vs-dark"
                value={code}
                options={monacoOptions}
                onChange={onChange}
                editorDidMount={editorDidMount}
            />
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
