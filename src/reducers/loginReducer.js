import { types } from '../types/types';

const initialState = {
    auth: JSON.parse(localStorage.getItem('auth')) || {
        centro: null,
        username: null,
        password: null,
    },
    loading: false,
    msgErrors: {
        centro: null,
        userName: null,
        password: null
    }
}

export const loginReducer = ( state = initialState, action ) => {

    switch (action.type) {

        case types.login:

            localStorage.setItem('auth', JSON.stringify({
                centro: action.payload.centro,
                username: action.payload.username,
                password: action.payload.password
            }));

            return {
                ...state,
                auth :{
                    centro: action.payload.centro,
                    username: action.payload.username,
                    password: action.payload.password
                }
            }

        case types.logout:

            localStorage.setItem('auth', null);

            return {
                ...state,
                auth : {
                    centro: null,
                    username: null,
                    password: null,
                }
            }

        case types.loginSetErrorCentro:
            return {
                ...state,
                msgErrors :{
                    ...state.msgErrors,
                    centro: action.payload
                }
            }

        case types.loginRemoveErrorCentro:
            return {
                ...state,
                msgErrors :{
                    ...state.msgErrors,
                    centro: null
                }
            }

        case types.loginSetErrorUserName:
            return {
                ...state,
                msgErrors :{
                    ...state.msgErrors,
                    userName: action.payload
                }
            }

        case types.loginRemoveErrorUserName:
            return {
                ...state,
                msgErrors :{
                    ...state.msgErrors,
                    userName: null
                }
            }

        case types.loginSetErrorPassword:
            return {
                ...state,
                msgErrors :{
                    ...state.msgErrors,
                    password: action.payload
                }
            }

        case types.loginRemoveErrorPassword:
            return {
                ...state,
                msgErrors :{
                    ...state.msgErrors,
                    password: null
                }
            }

        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
        
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }
    
        default:
            return state;
    }

}