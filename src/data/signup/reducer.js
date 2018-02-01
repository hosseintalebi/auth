import createReducer from 'utils/createReducer'
import {
  FIRSTNAME_CHANGE,
  LASTNAME_CHANGE,
  USERNAME_CHANGE,
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  REPEATE_PASSWORD_CHANGE,
  SING_UP,
} from './constants'

export const initialState = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  repeatPassword: '',
}

function firstnameChange(state, payload) {
  return {
    ...state,
    firstname: payload.value,
  }
}

function lastnameChange(state, payload) {
  return {
    ...state,
    lastname: payload.value,
  }
}

function usernameChange(state, payload) {
  return {
    ...state,
    username: payload.value,
  }
}

function emailChange(state, payload) {
  return {
    ...state,
    email: payload.value,
  }
}

function passwordChange(state, payload) {
  return {
    ...state,
    password: payload.value,
  }
}

function repeatPasswordChange(state, payload) {
  return {
    ...state,
    repeatPassword: payload.value,
  }
}

function signUp(state, payload) {
  return state
}

export default createReducer(initialState, {
  [FIRSTNAME_CHANGE]: firstnameChange,
  [LASTNAME_CHANGE]: lastnameChange,
  [USERNAME_CHANGE]: usernameChange,
  [EMAIL_CHANGE]: emailChange,
  [PASSWORD_CHANGE]: passwordChange,
  [REPEATE_PASSWORD_CHANGE]: repeatPasswordChange,
  [SING_UP]: signUp,
})
