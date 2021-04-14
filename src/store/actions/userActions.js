import { USER } from '../../constants/';

export const userLogin = (payload) => {
    return {
        type: USER.LOGIN_REQUEST,
        payload: payload
    }
};

export const userLogOut = () => {
    return {
        type: USER.LOGOUT_REQUEST,
    }
};