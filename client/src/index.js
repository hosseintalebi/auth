import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import configureStore from './configureStore'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './index.css'

const store = configureStore()
render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
registerServiceWorker()
