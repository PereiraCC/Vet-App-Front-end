import { types } from '../types/types';

const initialState = {
    currentTabSettings: 'Empresas'
};

export const SettingsReducer = (state = initialState, action) => {

    switch ( action.type ) {

        case types.SelectTabSettings:
            // TODO: Added new property of state
            return {
                currentTabSettings : action.payload.nameTab,
            }
    
        default:
            return state;
    }

}