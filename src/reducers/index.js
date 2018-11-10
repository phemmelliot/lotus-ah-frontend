// redux library
import { combineReducers } from 'redux';

// reducers
import login from './login';
import signup from './signup/signup';
import activateAccount from './signup/verifyEmail';
import updateAccount from './signup/updateUser';
import auth from './auth';

/**
 * @desc combines all the reducers
*/
export default combineReducers({
  login,
  signup,
  activateAccount,
  updateAccount,
  auth
});