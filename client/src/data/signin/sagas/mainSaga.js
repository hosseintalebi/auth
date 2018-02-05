import { select, takeLatest } from 'redux-saga/effects'

import { email$, password$ } from '../selectors/'

import { SING_IN } from '../constants'

export function* signinUser(action) {
  console.log(action)
  const email = yield select(email$)
  const password = yield select(password$)
  console.log(email, password)
}

export function* main() {
  yield takeLatest(SING_IN, signinUser)
}

export default main
