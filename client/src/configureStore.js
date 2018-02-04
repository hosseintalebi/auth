import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from './data/reducers'

export default function configureStore() {
  const store = createStore(reducers, applyMiddleware(logger))
  return store
}
