// action types
export const FIRSTNAME_CHANGE = '@@signup/FIRSTNAME_CHANGE'
export const LASTNAME_CHANGE = '@@signup/LASTNAME_CHANGE'
export const EMAIL_CHANGE = '@@signup/EMAIL_CHANGE'
export const PASSWORD_CHANGE = '@@signup/PASSWORD_CHANGE'
export const REPEATE_PASSWORD_CHANGE = '@@signup/REPEATE_PASSWORD_CHANGE'
export const SIGN_UP = '@@signup/SIGN_UP'

// Errors
export const Errors = {
  Firstname: '@@signup/FirstnameError',
  Lastname: '@@signup/LastnameError',
  Email: '@@signup/EmailError',
  Password: '@@signup/PasswordError',
  RepeatPassword: '@@signup/RepeatPasswordError',
}

// api
export const END_POINT = '/users'
