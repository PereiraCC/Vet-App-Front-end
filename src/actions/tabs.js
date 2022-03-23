import { types } from '../types/types';


export const addTab = ( name, routePage ) => ({
    type: types.AddTab,
    payload: {
        name,
        routePage
    }
});

export const SelectTab = ( name, routePage ) => ({
    type: types.SelectTab,
    payload: {
        name,
        routePage
    }
})
