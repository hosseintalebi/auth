import _ from 'lodash'
import { select, takeLatest, call, put } from 'redux-saga/effects'

// selectors
import { credentials$, errors$ } from '../selectors/'

// actions
import { fetching, clearSigninFlags } from '../actions'
import { authFailure, authSuccess, clearAuthError  } from 'data/auth/actions'

import signinApi from '../api/signinUser'

import { SIGN_IN } from '../constants'

export function* signinUser(action) {
  const credentials = yield select(credentials$)
  const errors = yield select(errors$)
  const hastError = yield call(checkError, errors)
  if (!hastError) {
    try {
      yield put(fetching())
      yield put(clearAuthError())
      const {data: user, response} = yield call(signinApi, credentials)
      sessionStorage.setItem('jwtToken', response.headers['x-auth'])
      yield put(clearSigninFlags())
      yield put(authSuccess({user}))
    } catch ({response}) {
      yield put(clearSigninFlags())
      if (response && response.status === 401) {
        yield put(authFailure({error: 'Email or password are incorrect.'}))
      } else {
        yield put(authFailure({error: 'There is a problem with reaching to the server.'}))
      }
    }
  }
}

export function checkError(errors) {
  return _.reduce(errors, (acc, error) => acc || !!error, false)
}

export function* main() {
  yield takeLatest(SIGN_IN, signinUser)
}

export default main
