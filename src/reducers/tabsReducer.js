import { types } from "../types/types";

const initialState = {
    tabs: [
        { name: "Inicio", routePage: '/' },
        { name: "Facturacion", routePage: '/billing' }
    ],
    currentTab: { name: "Inicio", routePage: '/' }
}

export const tabsReducer = (state = initialState, action ) => {

    switch ( action.type ) {

        case types.AddTab:

            const newTab = {
                name: action.payload.name,
                routePage: action.payload.routePage
            };

            return {
                tabs: [... state.tabs, newTab],
                currentTab: newTab
            }
        
        case types.SelectTab:
            console.log(action);
            return {
                ...state,
                currentTab : {
                    ...action.payload
                },
            }
    
        default:
            return state;
    }

}