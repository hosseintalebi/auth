import {
  AUTH_FAILURE,
  AUTH_SUCCESS,
  AUTH_CLEAR_ERROR,
  SIGN_OUT,
} from './constants'

export function authSuccess(payload) {
  return {
    type: AUTH_SUCCESS,
    payload,
  }
}

export function authFailure(payload) {
  return {
    type: AUTH_FAILURE,
    payload,
  }
}

export function clearAuthError() {
  return {
    type: AUTH_CLEAR_ERROR,
  }
}

export function onSignout() {
  return {
    type: SIGN_OUT,
  }
}
