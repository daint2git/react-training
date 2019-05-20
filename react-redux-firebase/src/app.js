import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Root from 'components/Root'
import configureStore from 'redux/configureStore'

const store = configureStore()

const MOUNT_NODE = document.getElementById('root')

const render = () => {
  ReactDOM.render(
    <Provider store={store} key="reduxProvider">
      <Root />
    </Provider>,
    MOUNT_NODE,
  )
}

render()

if (module.hot) {
  module.hot.accept(['components/Root'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE)
    render()
  })
}
