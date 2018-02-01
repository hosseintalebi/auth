import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import logger from 'redux-logger'
import reducers from './data/reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

let store = createStore(reducers, applyMiddleware(logger))

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
