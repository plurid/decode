import { AppState } from '../store';



const getPluriverses = (state: AppState) => state.data.pluriverses;
const getActivePluriverse = (state: AppState) => state.data.activePluriverse;


export default {
    getPluriverses,
    getActivePluriverse,
};
