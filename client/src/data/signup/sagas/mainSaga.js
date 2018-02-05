import { call, put, select, takeLatest } from 'redux-saga/effects'
import {
  firstname$,
  lastname$,
  email$,
  password$,
} from '../selectors'

import { SING_IN } from '../constants'

export function* signinUser (action) {
  const firstname = yield select(firstname$)
  const lastname = yield select(lastname$)
  const email = yield select(email$)
  const password = yield select(password$)
}

export function* main() {
  yield takeLatest(SING_IN, signinUser)
}

export default main
