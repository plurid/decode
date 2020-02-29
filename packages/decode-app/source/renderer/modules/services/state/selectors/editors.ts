import { AppState } from '../store';



const getEditors = (state: AppState) => state.editors;


export default {
    getEditors,
};
