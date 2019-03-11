import { combineReducers } from 'redux';
import authReducer from './authReducer';
import setUser from './setUser';

export default combineReducers({
    auth: authReducer,
    user: setUser
})