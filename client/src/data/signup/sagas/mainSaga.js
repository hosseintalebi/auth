import { call, put, select, takeLatest } from 'redux-saga/effects'
import { credentials$, errors$ } from '../selectors'
import signupApi from '../api/signupUser'

import { SING_UP } from '../constants'

export function* signupUser(action) {
  const credentials = yield select(credentials$)
  const errors = yield select(errors$)
  const hastError = yield call(checkError, errors)
  if (!hastError) {
    try {
      const user = yield call(signupApi, credentials)
    } catch (e) {}
  }
}

export function checkError(errors) {
  return _.reduce(errors, (acc, error) => acc || !!error, false)
}

export function* main() {
  yield takeLatest(SING_UP, signupUser)
}

export default main
