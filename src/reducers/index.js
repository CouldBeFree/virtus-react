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

const cards = [
    {
        id: 1,
        project: 'New Website',
        company: 'Microsoft',
        value: 2300,
        deadline: '15 May 2019',
        progress: 70,
        status: 'Development',
        name: 'Dominic Lynton',
        position: 'Front End Dev',
        timeSpent: 40
    },
    {
        id: 2,
        project: 'Landing page',
        company: 'Google',
        value: 1250,
        deadline: '21 May 2019',
        timeSpent: 7,
        progress: 15,
        status: 'Planning',
        name: 'Lyan Roach',
        position: 'UX/UI Designer'
    },
    {
        id: 3,
        project: 'New dashboard',
        company: 'Google',
        value: 5100,
        deadline: '21 May 2019',
        timeSpent: 56,
        progress: 90,
        status: 'Testing',
        name: 'Michelle Stewart',
        position: 'Account'
    },
    {
        id: 4,
        project: 'New logo',
        company: 'JCD.pl',
        value: 900,
        deadline: '15 june 2019',
        timeSpent: 10,
        progress: 40,
        status: 'Design',
        name: 'Lyan Roach',
        position: 'UX/UI Designer'
    },
    {
        id: 5,
        project: 'Landing page',
        company: 'Symu.co',
        value: 1500,
        deadline: '8 August 2019',
        timeSpent: 0,
        progress: 0,
        status: 'Quened',
        name: 'Michelle Stewart',
        position: 'Account'
    },
    {
        id: 6,
        project: 'Mobile app',
        company: 'Facebook',
        value: 4300,
        deadline: '5th May 2019',
        timeSpent: 59,
        progress: 100,
        status: 'Completed',
        name: 'Michelle Stewart',
        position: 'Account'
    },
    {
        id: 7,
        project: 'Wordpress theme',
        company: 'Themeforest',
        value: 1300,
        deadline: '2th May 2016',
        timeSpent: 30,
        progress: 100,
        status: 'Completed',
        name: 'Michelle Stewart',
        position: 'Account'
    }
];

const getCards = (state = cards) => {
    return state
};

const circularYear = [
    {
        percentage: 13,
        value: 1300,
        info: 'views'
    },
    {
        percentage: 8,
        value: 800,
        info: 'visitors'
    },
    {
        percentage: 38,
        value: 3800,
        info: 'impressions'
    }
];

const yearData = (state = circularYear) => {
    return state
};

export default combineReducers({
    auth: authReducer,
    user: setUser,
    card: getCards,
    year: yearData
})