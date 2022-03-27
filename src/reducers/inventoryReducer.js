import { types } from '../types/types';

const initialState = {
    currentTabInventory: 'UltimoCosto'
};

export const InventoryReducer = (state = initialState, action) => {

    switch ( action.type ) {

        case types.SelectTabInventory:
            // TODO: Added new property of state
            return {
                currentTabInventory : action.payload.nameTab,
            }
    
        default:
            return state;
    }

}