import { SET_USER } from '../actions/types';

const initialState = {
    isAuthenticated: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return{
                ...state,
                user: action.payload.user
            };
        default:
            return state
    }
}