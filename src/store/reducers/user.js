import { USER } from '../../constants';

const defaultState = {
  token: false,
  isAuth: false,
  isShowAlertText: false,
};

export default function user(state = defaultState, action) {
  switch (action.type) {
    case USER.LOGIN_REQUEST_SUCCESS:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload, // In real project we will store here token from server
        isAuth: !!action.payload,
        isShowAlertText: false,
      };
    case USER.LOGIN_REQUEST_ERROR:
      return {
        ...state,
        isShowAlertText: action.payload,
      };
    case USER.LOGOUT_REQUEST_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: false,
        isAuth: false,
      };
    default:
      return state
  }
};