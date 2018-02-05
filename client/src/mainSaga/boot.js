import { fork } from 'redux-saga/effects'
import signin from 'data/signin/sagas/mainSaga'

export default function* () {
  yield fork(signin)
}
