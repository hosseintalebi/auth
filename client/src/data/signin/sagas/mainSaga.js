import _ from 'lodash'
import { select, takeLatest, call } from 'redux-saga/effects'

import { credentials$, errors$ } from '../selectors/'

import signinApi from '../api/signinUser'

import { SING_IN } from '../constants'

export function* signinUser(action) {
  const credentials = yield select(credentials$)
  const errors = yield select(errors$)
  const hastError = yield call(checkError, errors)
  if (!hastError) {
    try {
      const user = yield call(signinApi, credentials)
    } catch (e) {}
  }
}

export function checkError(errors) {
  return _.reduce(errors, (acc, error) => acc || !!error, false)
}

export function* main() {
  yield takeLatest(SING_IN, signinUser)
}

export default main
