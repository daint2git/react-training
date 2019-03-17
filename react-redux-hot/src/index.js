import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './components/app'

const store = configureStore()

const Root = props => (
  <Provider store={store} key="provider">
    <App {...props} />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
