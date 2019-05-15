import React from 'react'

const TodoItem = ({ id, task, finished, onUpdate }) => (
  <li
    style={{ textDecoration: finished ? 'line-through' : 'underline' }}
    onClick={() => onUpdate(id)}
  >
    {task}
  </li>
)

export default TodoItem
