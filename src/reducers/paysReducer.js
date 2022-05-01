import { types } from '../types/types';

const initialState = {
    currentTabPays: 'DatosAbono'
};

export const PaysReducer = (state = initialState, action) => {

    switch ( action.type ) {
        
        // TODO: Added new property of state
        
        case types.SelectTabPays:
            return {
                currentTabPays : action.payload.nameTab,
            }
    
        default:
            return state;
    }

}