import { combineReducers } from 'redux';
// import authReducer from './authReducer';
// import setUser from './setUser';
import * as actionTypes from '../actions/types';

const authenticatedState = {
    isAuthenticated: false
};

const authReducer =  (state = authenticatedState, action) => {
    switch (action.type) {
        case actionTypes.AUTHENTICATE_USER:
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
        case actionTypes.SET_USER:
            return{
                currentUser: action.payload.currentUser
            };
        case actionTypes.CLEAR_USER:
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
        id: 1,
        percentage: 75,
        value: 1300,
        info: 'views'
    },
    {
        id: 2,
        percentage: 35,
        value: 800,
        info: 'visitors'
    },
    {
        id: 3,
        percentage: 62,
        value: 3800,
        info: 'impressions'
    }
];

const yearData = (state = circularYear) => {
    return state
};

const circularWeek = [
    {
        id: 1,
        percentage: 56,
        value: 950,
        info: 'views'
    },
    {
        id: 2,
        percentage: 87,
        value: 1250,
        info: 'visitors'
    },
    {
        id: 3,
        percentage: 16,
        value: 450,
        info: 'impressions'
    }
];

const weekData = (state = circularWeek) => {
    return state
};

const circularMonth = [
    {
        id: 1,
        percentage: 37,
        value: 555,
        info: 'views'
    },
    {
        id: 2,
        percentage: 69,
        value: 3450,
        info: 'visitors'
    },
    {
        id: 3,
        percentage: 70,
        value: 2000,
        info: 'impressions'
    }
];

const monthData = (state = circularMonth) => {
    return state
};

const tableData = [
    {
        id: 1,
        Campaing: 'Lorem ipsum dolor sit amet tetur ',
        Time: '6 days',
        Views: 358000,
        Visitors: 5820,
        CTR: '25%',
        CPC: '$3.02',
        CPV: '$2.51',
        CPM: '$28.35',
        Status: 'Active',
    },
    {
        id: 2,
        Campaing: 'Sed do eiusmod tempor',
        Time: '7 days',
        Views: 1200,
        Visitors: 800,
        CTR: '10%',
        CPC: '$8.45',
        CPV: '$6.13',
        CPM: '$45.22',
        Status: 'Disable',
    },
    {
        id: 3,
        Campaing: 'Consectetur adipisicing elit sed do ',
        Time: '3 days',
        Views: 69000,
        Visitors: 7300,
        CTR: '19%',
        CPC: '$6.22',
        CPV: '$3.90',
        CPM: '$37.80',
        Status: 'Active',
    }
];

const table = (state = tableData) => {
    return state
};

const initialChannelState = {
    currentChannel: null,
    isPrivateChannel: false,
    userPosts: null
};

const channel_reducer = (state = initialChannelState, action) => {
    switch (action.type) {
        case actionTypes.SET_CURRENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload.currentChannel
            };
        case actionTypes.SET_PRIVATE_CHANNEL:
            return {
                ...state,
                isPrivateChannel: action.payload.isPrivateChannel
            };
        case actionTypes.SET_USER_POSTS:
            return {
                ...state,
                userPosts: action.payload.userPosts
            };
        default:
            return state;
    }
};

export default combineReducers({
    auth: authReducer,
    user: setUser,
    card: getCards,
    year: yearData,
    week: weekData,
    month: monthData,
    table: table,
    channel: channel_reducer
})