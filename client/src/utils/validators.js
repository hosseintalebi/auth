import _ from 'lodash'

import {
  MIN_CHAR_FIRSTNAME,
  MIN_CHAR_LASTNAME,
  MIN_CHAR_PASSWORD,
} from './constants'

export function validateFirstname(firstname) {
  if (_.size(firstname) === 0) {
    return 'This field is required.'
  } else if (_.size(firstname) < MIN_CHAR_FIRSTNAME) {
    return `First name should at least have ${MIN_CHAR_FIRSTNAME} characters.`
  }
  return ''
}

export function validateLastname(lastname) {
  if (_.size(lastname) === 0) {
    return 'This field is required.'
  } else if (_.size(lastname) < MIN_CHAR_LASTNAME) {
    return `Last name should at least have ${MIN_CHAR_LASTNAME} characters.`
  }
  return ''
}

export function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (_.size(email) === 0) {
    return 'This field is required.'
  } else if (!re.test(String(email).toLowerCase())) {
    return 'Invalid email address.'
  }
  return ''
}

export function validatePassword(password) {
  if (_.size(password) === 0) {
    return 'This field is required.'
  } else if (_.size(password) < MIN_CHAR_PASSWORD) {
    return `Password should at least have ${MIN_CHAR_PASSWORD} characters.`
  }
  return ''
}

export function validateRepeatePassport(password, repeatPassword) {
  if (_.size(repeatPassword) === 0) {
    return 'This field is required.'
  } else if (password !== repeatPassword) {
    return 'Password and repeat password does not match.'
  }
  return ''
}
