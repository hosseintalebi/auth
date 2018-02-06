import { fork } from 'redux-saga/effects'
import signin from 'data/signin/sagas/mainSaga'
import signup from 'data/signup/sagas/mainSaga'

export default function* () {
  yield fork(signin),
  yield fork(signup)
}
