import createReducer from 'utils/createReducer'

import { AUTH_FAILURE, AUTH_SUCCESS, AUTH_CLEAR_ERROR } from './constants'

export const initialState = {
  error: null,
  user: null,
}

function authSuccess(state, payload) {
  return {
    ...state,
    user: payload.user,
    error: null,
  }
}

function authFailure(state, payload) {
  return {
    ...state,
    user: null,
    error: payload.error,
  }
}

function clearAuthError(state, payload) {
  return {
    ...state,
    error: null,
  }
}

export default createReducer(initialState, {
  [AUTH_FAILURE]: authFailure,
  [AUTH_SUCCESS]: authSuccess,
  [AUTH_CLEAR_ERROR]: clearAuthError,
})
