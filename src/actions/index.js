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
        payload: {
            currentUser: {}
        }
    }
};

/* Channel Actions */
export const setCurrentChannel = channel => {
    return {
        type: actionTypes.SET_CURRENT_CHANNEL,
        payload: {
            currentChannel: channel
        }
    };
};

export const setPrivateChannel = isPrivateChannel => {
    return {
        type: actionTypes.SET_PRIVATE_CHANNEL,
        payload: {
            isPrivateChannel
        }
    };
};

export const setUserPosts = userPosts => {
    return {
        type: actionTypes.SET_USER_POSTS,
        payload: {
            userPosts
        }
    };
};