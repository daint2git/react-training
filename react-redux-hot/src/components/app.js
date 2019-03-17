import React from 'react'
import { hot } from 'react-hot-loader'
import Counter from './counter'
import Todos from './todos'

const App = () => (
  <div>
    <h2>React Redux Hot</h2>
    <Counter />
    <Todos />
  </div>
)

export default hot(module)(App)
