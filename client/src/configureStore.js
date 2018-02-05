import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import logger from 'redux-logger'
import reducers from './data/reducers'
import bootSaga from 'mainSaga/boot'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger))
  sagaMiddleware.run(bootSaga)
  return store
}
