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

import {
    editorDefineTheme,
} from '@plurid/decode-editor';

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
        stateGeneralTheme,
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
        fontSize: 17,
        lineHeight: 34,
        fontFamily: 'Menlo, Monaco, \'Courier New\', monospace',
        cursorBlinking: 'solid',
    };


    const monacoEditor = useRef<editor.ICodeEditor>();

    /** state */
    const [_, setEditor] = useState<IEditor>();
    const [code, setCode] = useState('');
    const [transforming, setTransforming] = useState(false);


    /** handlers */
    const onChange = (
        newValue: any,
        e: any,
    ) => {
        setCode(newValue);
        // console.log('onChange', newValue, e);
    }

    const editorDidMount = (
        editor: any,
        monaco: any,
    ) => {
        monacoEditor.current = editor;
        // editor.focus();

        editorDefineTheme(stateGeneralTheme);
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
            // console.log(monacoEditor.current.hasTextFocus())
        }
    }, [
        monacoEditor.current,
    ]);


    useEffect(() => {
        const handleWheel = (
            event: any,
        ) => {
            if (event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
                setTransforming(true);
            }
        }

        const handleKeyUp = (
            event: any,
        ) => {
            const {
                key,
            } = event;

            if (key === 'Shift' || key === 'Alt' || key === 'Ctrl' || key === 'Meta') {
                setTransforming(false);
            }
        }

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('keyup', handleKeyUp);
        }
    });


    /** render */
    return (
        <StyledEditor
            style={{
                userSelect: transforming ? 'none' : undefined,
                pointerEvents: transforming ? 'none' : undefined,
            }}
        >
            <MonacoEditor
                width="1440"
                height="600"
                language="typescript"
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
