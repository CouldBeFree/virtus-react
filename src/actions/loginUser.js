import { AUTHENTICATE_USER } from './types';

const loginUser = val => {
    return {
        type: AUTHENTICATE_USER,
        payload: val
    }
};

export default loginUser;