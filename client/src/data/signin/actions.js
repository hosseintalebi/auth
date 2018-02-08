import {
  PASSWORD_CHANGE,
  EMAIL_CHANGE,
  SIGN_IN,
  FETCHING,
  CLEAR_SIGNIN_FLAGS,
} from './constants'

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
    type: SIGN_IN,
  }
}

export function fetching() {
  return {
    type: FETCHING,
  }
}

export function clearSigninFlags() {
  return {
    type: CLEAR_SIGNIN_FLAGS,
  }
}
