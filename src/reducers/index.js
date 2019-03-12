import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// import setUser from './setUser';
import { AUTHENTICATE_USER, SET_USER, CLEAR_USER } from '../actions/types';

const authenticatedState = {
    isAuthenticated: false
};

const authReducer =  (state = authenticatedState, action) => {
    switch (action.type) {
        case AUTHENTICATE_USER:
            return{
                ...state,
                isAuthenticated: action.payload
            };
        default:
            return state
    }
};

const userState = {
    currentUser: {}
};

const setUser = (state = userState, action) => {
    switch (action.type) {
        case SET_USER:
            return{
                currentUser: action.payload.currentUser
            };
        case CLEAR_USER:
            return{
                currentUser: action.payload.currentUser
            };
        default:
            return state
    }
};

export default combineReducers({
    auth: authReducer,
    user: setUser
})