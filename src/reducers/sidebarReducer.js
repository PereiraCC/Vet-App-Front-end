import { types } from "../types/types";

// const initialState = {
//     tabs: [
//         { name: "Inicio", routePage: '/' }
//     ],
//     currentTab: { name: "Inicio", routePage: '/' }
// }

const initialState = {
    sidebar: false,
    sidebarUser: false,
    subNavInicio: false,
    subNavCompras: false,
    subNavVentas: false,
    subNavParametros: false,
};

export const SidebarReducer = (state = initialState, action ) => {

    switch ( action.type ) {

        case types.ShowSidebar:
            return {
                ...state,
                sidebar: action.payload.sidebar,
            }

        case types.HideSidebar:
            return {
                ...state,
                sidebar: action.payload.sidebar,
            }

        case types.ShowSidebarUser:
            return {
                ...state,
                sidebarUser: action.payload.sidebarUser,
            }

        case types.HideSidebarUser:
            return {
                ...state,
                sidebarUser: action.payload.sidebarUser,
            }

        default:
            return state;
    }

}