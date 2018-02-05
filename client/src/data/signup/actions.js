import {
  FIRSTNAME_CHANGE,
  LASTNAME_CHANGE,
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  REPEATE_PASSWORD_CHANGE,
  SING_UP,
} from './constants'

export function onChangeFirstName({ value }) {
  return {
    type: FIRSTNAME_CHANGE,
    payload: { value },
  }
}

export function onChangeLastName({ value }) {
  return {
    type: LASTNAME_CHANGE,
    payload: { value },
  }
}

export function onChangeEmail({ value }) {
  return {
    type: EMAIL_CHANGE,
    payload: { value },
  }
}

export function onChangePassowrd({ value }) {
  return {
    type: PASSWORD_CHANGE,
    payload: { value },
  }
}

export function onChangeRepeatPassword({ value }) {
  return {
    type: REPEATE_PASSWORD_CHANGE,
    payload: { value },
  }
}

export function onSignup() {
  return {
    type: SING_UP,
  }
}
