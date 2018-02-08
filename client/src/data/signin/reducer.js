import createReducer from 'utils/createReducer'
import { validateEmail, validatePassword } from 'utils/validators'
import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  SIGN_IN,
  FETCHING,
  CLEAR_SIGNIN_FLAGS,
  Errors,
} from './constants'

export const initialState = {
  credentials: {
    email: '',
    password: '',
  },
  isFetching: false,
  errors: {
    [Errors.Email]: validateEmail(''),
    [Errors.Password]: validatePassword(''),
  },
}

function emailChange(state, payload) {
  return {
    ...state,
    credentials: {
      ...state.credentials,
      email: payload.value,
    },
    errors: {
      ...state.errors,
      [Errors.Email]: validateEmail(payload.value),
    },
  }
}

function passwordChange(state, payload) {
  return {
    ...state,
    credentials: {
      ...state.credentials,
      password: payload.value,
    },
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

function fetching(state) {
  return {
    ...state,
    isFetching: true,
  }
}

function clearSigninFlags(state, payload) {
  return {
    ...state,
    isFetching: false,
    submitted: false,
  }
}

export default createReducer(initialState, {
  [EMAIL_CHANGE]: emailChange,
  [PASSWORD_CHANGE]: passwordChange,
  [SIGN_IN]: signIn,
  [FETCHING]: fetching,
  [CLEAR_SIGNIN_FLAGS]: clearSigninFlags,
})
