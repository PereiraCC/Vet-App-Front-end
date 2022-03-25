import { types } from "../types/types";

// const initialState = {
//     tabs: [
//         { name: "Inicio", routePage: '/' }
//     ],
//     currentTab: { name: "Inicio", routePage: '/' }
// }

const initialState = JSON.parse(localStorage.getItem('tabs')) || {
    tabs: [
        { name: "Inicio", routePage: '/' }
    ],
    currentTab: { name: "Inicio", routePage: '/' }
};

export const tabsReducer = (state = initialState, action ) => {

    switch ( action.type ) {

        case types.AddTab:

            const listTab = state.tabs.find(tab => tab.name == action.payload.name ||tab.name.includes(action.payload.name));
            
            if(listTab === undefined ) {

                const newTab = {
                    name: (action.payload.name === 'Facturación') ? action.payload.name + ' # 1' : action.payload.name,
                    routePage: (action.payload.name === 'Facturación') ? action.payload.routePage + '/1' : action.payload.routePage,
                };

                localStorage.setItem('tabs', JSON.stringify({
                    tabs: [... state.tabs, newTab],
                    currentTab: newTab
                }));
    
                return {
                    tabs: [... state.tabs, newTab],
                    currentTab: newTab
                }
                
            } else if(listTab.name.includes("Facturación")){

                const size = state.tabs.filter(tab => tab.name.includes("Facturación")).length;

                const newTab = {
                    name: action.payload.name + ` # ${ size + 1 }`,
                    routePage: action.payload.routePage + `/${ size + 1 }`
                };

                localStorage.setItem('tabs', JSON.stringify({
                    tabs: [... state.tabs, newTab],
                    currentTab: newTab
                }));

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

        case types.DeleteTab:

            if(state.tabs.length === 1) {

                localStorage.setItem('tabs', JSON.stringify({
                    tabs: [],
                    currentTab : {}
                }));
                
                return {
                    tabs: [],
                    currentTab : {}
                }

            } else {

                const indexTab = state.tabs.findIndex( tab => tab.name.includes(action.payload.name));
                
                const newState = {
                    tabs: state.tabs.filter(tab => !tab.name.includes(action.payload.name)),
                    currentTab : (state.currentTab.name === action.payload.name)
                                ? {
                                    name: state.tabs[(indexTab === 0) ? 1 : indexTab - 1].name,
                                    routePage: state.tabs[(indexTab === 0) ? 1 : indexTab - 1].routePage, 
                                }
                                : state.currentTab
                }

                localStorage.setItem('tabs', JSON.stringify(newState));

                return newState;

            }

        default:
            return state;
    }

}