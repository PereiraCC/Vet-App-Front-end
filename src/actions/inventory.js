import { types } from '../types/types';


export const SelectTabInventory = ( nameTab ) => ({
    type: types.SelectTabInventory,
    payload: {
        nameTab
    }
});