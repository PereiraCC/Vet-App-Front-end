import { types } from "../types/types";

const initialState = {
    tabs: [
        { name: "Inicio", routePage: '/' }
    ],
    currentTab: { name: "Inicio", routePage: '/' }
}

export const tabsReducer = (state = initialState, action ) => {

    switch ( action.type ) {

        case types.AddTab:

            const listTab = state.tabs.find(tab => tab.name == action.payload.name);

            if(listTab === undefined) {
                const newTab = {
                    name: action.payload.name,
                    routePage: action.payload.routePage
                };
    
                return {
                    tabs: [... state.tabs, newTab],
                    currentTab: newTab
                }
            } else {
                return {
                    ...state,
                    currentTab : {
                        ...action.payload
                    },
                }
            }
            
        
        case types.SelectTab:
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