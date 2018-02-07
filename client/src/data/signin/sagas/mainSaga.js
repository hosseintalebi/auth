import _ from 'lodash'
import { select, takeLatest, call, put } from 'redux-saga/effects'

// selectors
import { credentials$, errors$ } from '../selectors/'

// actions
import { fetching, authFailed } from '../actions'

import signinApi from '../api/signinUser'

import { SING_IN } from '../constants'

export function* signinUser(action) {
  const credentials = yield select(credentials$)
  const errors = yield select(errors$)
  const hastError = yield call(checkError, errors)
  if (!hastError) {
    try {
      yield put(fetching())
      const user = yield call(signinApi, credentials)
    } catch ({response}) {
      if (response.status === 401) {
        yield put(authFailed({error: 'Email or password are incorrect.'}))
      } else {
        yield put(authFailed({error: 'There is a problem reaching to the server.'}))
      }
    }
  }
}

export function checkError(errors) {
  return _.reduce(errors, (acc, error) => acc || !!error, false)
}

export function* main() {
  yield takeLatest(SING_IN, signinUser)
}

export default main
