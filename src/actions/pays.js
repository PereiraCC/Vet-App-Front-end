import { types } from '../types/types';

export const SelectTabPays = ( nameTab ) => ({
    type: types.SelectTabPays,
    payload: {
        nameTab
    }
});