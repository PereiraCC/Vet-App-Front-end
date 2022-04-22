import { types } from '../types/types';


export const SelectTabCustomers = ( nameTab ) => ({
    type: types.SelectTabCustomers,
    payload: {
        nameTab
    }
});