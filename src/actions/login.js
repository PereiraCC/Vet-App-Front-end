import { types } from '../types/types';

export const setErrorCentro = ( err ) => ({
    type: types.loginSetErrorCentro,
    payload: err
});

export const removeErrorCentro = () => ({
    type: types.loginRemoveErrorCentro
});

export const setErrorUserName = ( err ) => ({
    type: types.loginSetErrorUserName,
    payload: err
});

export const removeErrorUserName = () => ({
    type: types.loginSetErrorUserName
});

export const setErrorPassword = ( err ) => ({
    type: types.loginSetErrorPassword,
    payload: err
});

export const removeErrorPassword = () => ({
    type: types.loginRemoveErrorPassword
});

export const startLoading = () => ({
    type: types.loginStartLoading
})

export const finishLoading = () => ({
    type: types.loginFinishLoading
})