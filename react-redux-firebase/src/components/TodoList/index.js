import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { fetchTodos, updateTodo } from 'redux/reducers/todos'
import TodoItem from 'components/TodoItem'

const TodoList = ({ todos, fetchTodos, updateTodo }) => {
  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} {...todo} onUpdate={updateTodo} />
      ))}
    </ul>
  )
}

const mapStateToProps = state => ({
  todos: state.todos.list,
})

const mapDispatchToProps = { fetchTodos, updateTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)
