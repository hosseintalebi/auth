import { PASSWORD_CHANGE, EMAIL_CHANGE, SING_IN } from './constants'

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
