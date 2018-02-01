import { PASSWORD_CHANGE, USERNAME_CHANGE, SING_IN } from './constants'

export function onChangePassowrd({ value }) {
  return {
    type: PASSWORD_CHANGE,
    payload: { value },
  }
}

export function onChangeUsername({ value }) {
  return {
    type: USERNAME_CHANGE,
    payload: { value },
  }
}

export function onSignin() {
  return {
    type: SING_IN,
  }
}
