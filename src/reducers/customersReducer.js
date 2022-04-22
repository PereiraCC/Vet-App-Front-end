import { types } from '../types/types';

const initialState = {
    currentTabCustomers: 'DatosGenerales'
};

export const CustomersReducer = (state = initialState, action) => {

    switch ( action.type ) {

        case types.SelectTabCustomers:
            // TODO: Added new property of state
            return {
                currentTabCustomers : action.payload.nameTab,
            }
    
        default:
            return state;
    }

}