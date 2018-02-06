import createReducer from 'utils/createReducer'
import {
  validateFirstname,
  validateLastname,
  validateEmail,
  validatePassword,
  validateRepeatePassport,
} from 'utils/validators'

import {
  FIRSTNAME_CHANGE,
  LASTNAME_CHANGE,
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  REPEATE_PASSWORD_CHANGE,
  SING_UP,
  Errors,
} from './constants'

export const initialState = {
  credentials: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: '',
  },
  errors: {
    [Errors.Firstname]: validateFirstname(''),
    [Errors.Lastname]: validateLastname(''),
    [Errors.Email]: validateEmail(''),
    [Errors.Password]: validatePassword(''),
    [Errors.RepeatPassword]: validateRepeatePassport('', ''),
  },
}

function firstnameChange(state, payload) {
  return {
    ...state,
    credentials: {
      ...state.credentials,
      firstname: payload.value,
    },
    errors: {
      ...state.errors,
      [Errors.Firstname]: validateFirstname(payload.value),
    },
  }
}

function lastnameChange(state, payload) {
  return {
    ...state,
    credentials: {
      ...state.credentials,
      lastname: payload.value,
    },
    errors: {
      ...state.errors,
      [Errors.Lastname]: validateLastname(payload.value),
    },
  }
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

function repeatPasswordChange(state, payload) {
  return {
    ...state,
    credentials: {
      ...state.credentials,
      repeatPassword: payload.value,
    },
    errors: {
      ...state.errors,
      [Errors.RepeatPassword]: validateRepeatePassport(
        state.credentials.password,
        payload.value,
      ),
    },
  }
}

function signUp(state, payload) {
  return {
    ...state,
    submitted: true,
  }
}

export default createReducer(initialState, {
  [FIRSTNAME_CHANGE]: firstnameChange,
  [LASTNAME_CHANGE]: lastnameChange,
  [EMAIL_CHANGE]: emailChange,
  [PASSWORD_CHANGE]: passwordChange,
  [REPEATE_PASSWORD_CHANGE]: repeatPasswordChange,
  [SING_UP]: signUp,
})
