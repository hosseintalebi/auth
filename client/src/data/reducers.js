import { combineReducers } from 'redux'
import signin from './signin/reducer'
import signup from './signup/reducer'

export default combineReducers({
  signin,
  signup,
})
