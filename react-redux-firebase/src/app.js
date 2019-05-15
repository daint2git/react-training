import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Root from 'components/Root'
import configureStore from 'redux/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store} key="reduxProvider">
    <Root />
  </Provider>,
  document.getElementById('root'),
)
