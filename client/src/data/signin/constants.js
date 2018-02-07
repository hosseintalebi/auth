// action types
export const EMAIL_CHANGE = '@@signin/EMAIL_CHANGE'
export const PASSWORD_CHANGE = '@@signin/PASSWORD_CHANGE'
export const SING_IN = '@@signin/SING_IN'
export const FETCHING = '@@signin/FETCHING'
export const AUTH_FAILURE = '@@signin/AUTH_FAILURE'

// Errors
export const Errors = {
  Email: '@@signin/EmailError',
  Password: '@@signin/PasswordError',
}

// api
export const END_POINT = '/users/login'
