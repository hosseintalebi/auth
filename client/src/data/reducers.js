import { combineReducers } from 'redux'
import signin from './signin/reducer'
import signup from './signup/reducer'
import auth from './auth/reducer'

export default combineReducers({
  signin,
  signup,
  auth,
})
