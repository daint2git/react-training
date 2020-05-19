import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Root from 'components/Root'
import configureStore from 'redux/configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store} key="reduxProvider">
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
