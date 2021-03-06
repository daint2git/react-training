import React from 'react'

import Todo from 'models/Todo'

export interface Props {
  todos: Todo[]
  onTodoClick: (value: number) => void
}

const TodosList: React.FC<Props> = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <li
        key={todo.id}
        style={{ textDecoration: todo.isDone ? 'line-through' : '', cursor: 'pointer' }}
        onClick={(): void => {
          onTodoClick(todo.id)
        }}
      >
        {todo.name}
      </li>
    ))}
  </ul>
)

export default TodosList
