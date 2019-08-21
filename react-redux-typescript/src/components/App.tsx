import React from 'react'

import AddTodo from 'containers/AddTodo'
import Todos from 'containers/Todos'

const App: React.FC = () => (
  <div>
    <h1>Todos</h1>
    <AddTodo />
    <br />
    <Todos />
  </div>
)

export default App
