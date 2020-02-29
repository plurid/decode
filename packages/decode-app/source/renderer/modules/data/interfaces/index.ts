export interface Editor {
    id: string;
    lines: string[];
}


export interface EditorPluriverse {
    id: string;
    name?: string;
    editors: string[];
}
