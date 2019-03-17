import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer'
import TodoApp from './TodoApp'

const store = createStore(reducer)

const Root = () => (
  <Provider store={store}>
    <TodoApp />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
