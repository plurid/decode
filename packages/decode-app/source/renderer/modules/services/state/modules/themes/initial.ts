import themes from '@plurid/plurid-themes';

import * as Types from './types';



const initialState: Types.State = {
    general: themes.decode,
    interaction: themes.decode,
};


export default initialState;
