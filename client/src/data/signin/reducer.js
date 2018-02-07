import createReducer from 'utils/createReducer'
import { validateEmail, validatePassword } from 'utils/validators'
import { EMAIL_CHANGE, PASSWORD_CHANGE, SING_IN, FETCHING, AUTH_FAILURE, Errors } from './constants'

export const initialState = {
  credentials: {
    email: '',
    password: '',
  },
  isFetching: false,
  networkError: null,
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
    networkError: null,
  }
}

function failure(state, payload) {
  return {
    ...state,
    networkError: payload.error,
    isFetching: false,
    submitted: false,
  }
}

export default createReducer(initialState, {
  [EMAIL_CHANGE]: emailChange,
  [PASSWORD_CHANGE]: passwordChange,
  [SING_IN]: signIn,
  [FETCHING]: fetching,
  [AUTH_FAILURE]: failure,
})
