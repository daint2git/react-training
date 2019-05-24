import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import configureStore from 'redux/configureStore'
import history from 'utils/history'
import App from 'pages/App'

import 'sass/app.scss'
import './i18n'

const store = configureStore({}, history)

ReactDOM.render(
  <Provider store={store} key="provider">
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app'),
)
