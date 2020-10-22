import React from 'react'
import { observer } from 'mobx-react'

const TodoItem = ({ todo }) => {
  console.error('render TodoItem')
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.finished}
        onChange={() => (todo.finished = !todo.finished)}
      />
      {todo.title}
    </li>
  )
}

export default observer(TodoItem)
