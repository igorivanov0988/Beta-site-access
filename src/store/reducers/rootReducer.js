import { combineReducers } from 'redux';
import { reducer as reduxForms } from 'redux-form';

import user from './user'

export default combineReducers({
  logIn: user,
  form: reduxForms
});
