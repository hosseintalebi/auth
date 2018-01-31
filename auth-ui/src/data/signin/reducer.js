import createReducer from '../../utils/createReducer'
import { USERNAME_CHANGE, PASSWORD_CHANGE, SING_IN } from './constants'

export const initialState = {
  username: '',
  password: '',
}

function usernameChange (state, payload) {
  return {
    ...state,
    username: payload.value,
  }
}

function passwordChange (state, payload) {
  return {
    ...state,
    password: payload.value,
  }
}

function signIn (state, payload) {
  return state
}

export default createReducer(initialState, {
  [USERNAME_CHANGE]: usernameChange,
  [PASSWORD_CHANGE]: passwordChange,
  [SING_IN]: signIn,
})
