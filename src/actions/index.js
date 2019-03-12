import * as actionTypes from './types'

export const loginUser = val => {
    return {
        type: actionTypes.AUTHENTICATE_USER,
        payload: val
    }
};

/* User actions */
export const setUser = user => {
    return {
        type: actionTypes.SET_USER,
        payload: {
            currentUser: user
        }
    }
};

/* Clear user */
export const clearUser = () => {
    return {
        type: actionTypes.CLEAR_USER,
    }
};