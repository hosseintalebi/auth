import _ from 'lodash'
import createReducer from 'utils/createReducer'
import { validateUsername, validatePassword } from 'utils/validators'
import { USERNAME_CHANGE, PASSWORD_CHANGE, SING_IN, Errors } from './constants'

export const initialState = {
  username: '',
  password: '',
  errors: {
    [Errors.Username]: validateUsername(''),
    [Errors.Password]: validatePassword(''),
  },
}

function usernameChange(state, payload) {
  return {
    ...state,
    username: payload.value,
    errors: {
      ...state.errors,
      [Errors.Username]: validateUsername(payload.value),
    },
  }
}

function passwordChange(state, payload) {
  return {
    ...state,
    password: payload.value,
    errors: {
      ...state.errors,
      [Errors.Password]: validatePassword(payload.value),
    },
  }
}

function signIn(state, payload) {
  return {
    ...state,
    submitted: true,
  }
}

export default createReducer(initialState, {
  [USERNAME_CHANGE]: usernameChange,
  [PASSWORD_CHANGE]: passwordChange,
  [SING_IN]: signIn,
})
