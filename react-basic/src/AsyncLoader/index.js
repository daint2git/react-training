import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import stepsMiddleware from 'redux-effects-steps'

import reducer from './reducer'
import TestComponent from './TestComponent'

const store = createStore(
  reducer,
  {},
  applyMiddleware(stepsMiddleware, require('kuker-emitters/lib/ReduxEmitter')()),
)

const Root = ({ store }) => (
  <Provider store={store}>
    <TestComponent />
  </Provider>
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
