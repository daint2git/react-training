import React from 'react'

const List = ({ todos, onUpdateStatus }) => {
  console.log('render List')
  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.finished ? 'line-through' : 'underline' }}
          onClick={() => onUpdateStatus(todo.id)}
        >
          {todo.task}
        </li>
      ))}
    </ul>
  )
}

export default List
