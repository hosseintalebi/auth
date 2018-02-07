import { PASSWORD_CHANGE, EMAIL_CHANGE, SING_IN, FETCHING, AUTH_FAILURE } from './constants'

export function onChangePassowrd({ value }) {
  return {
    type: PASSWORD_CHANGE,
    payload: { value },
  }
}

export function onChangeEmail({ value }) {
  return {
    type: EMAIL_CHANGE,
    payload: { value },
  }
}

export function onSignin() {
  return {
    type: SING_IN,
  }
}

export function fetching() {
  return {
    type: FETCHING,
  }
}

export function authFailed(payload) {
  return {
    type: AUTH_FAILURE,
    payload,
  }
}
