import { types } from '../types/types';

const initialState = {
    modalSearchProvidersOpen: false,
};

export const AssingCabysCodeReducer = (state = initialState, action) => {

    switch ( action.type ) {

        case types.assingCabysCodeOpenModelSearchProviders:
            return {
               ...state,
                modalSearchProvidersOpen: true,
            }

        case types.assingCabysCodeCloseModelSearchProviders:
            return {
                ...state,
                modalSearchProvidersOpen: false,
            }

        default:
            return state;
    }

}