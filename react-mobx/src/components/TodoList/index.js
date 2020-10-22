import React from 'react'
import { inject, observer } from 'mobx-react'
import TodoItem from '@components/TodoItem'
import TodoLeft from '@components/TodoLeft'

@inject('TodoStore')
@observer
class TodoList extends React.Component {
  render() {
    console.error('render TodoList')
    const { TodoStore } = this.props
    return (
      <div>
        <h2>todo list</h2>
        <ul>
          {TodoStore.todos.map(todo => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
        <TodoLeft />
      </div>
    )
  }
}

export default TodoList
