// action types
export const EMAIL_CHANGE = '@@signin/EMAIL_CHANGE'
export const PASSWORD_CHANGE = '@@signin/PASSWORD_CHANGE'
export const SIGN_IN = '@@signin/SIGN_IN'
export const FETCHING = '@@signin/FETCHING'
export const CLEAR_SIGNIN_FLAGS = '@@signin/CLEAR_SIGNIN_FLAGS'

// Errors
export const Errors = {
  Email: '@@signin/EmailError',
  Password: '@@signin/PasswordError',
}

// api
export const END_POINT = '/users/login'
