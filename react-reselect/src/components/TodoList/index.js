import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { readTodos, createTodo, updateStatus } from 'redux/reducers/todoReducer'
import Form from 'components/Form'
import Filter from 'components/Filter'
import List from 'components/List'

import { todosSelector, conditionsSelector } from './selectors'

// const selectorA = state => state.a
// const selectorB = state => state.b

// const structuredSelector = createStructuredSelector({
//   x: selectorA,
//   y: selectorB,
// })

// console.log(structuredSelector({ a: 1, b: 2 }))

const TodoList = ({
  todos = [],
  conditions = {},
  readTodos = () => {},
  createTodo = () => {},
  updateStatus = () => {},
}) => {
  console.log('render TodoList')

  useEffect(() => {
    readTodos()
  }, [readTodos])

  return (
    <>
      <Form onSubmit={createTodo} />
      <br />
      <Filter conditions={conditions} onFilter={readTodos} />
      <br />
      <List todos={todos} onUpdateStatus={updateStatus} />
    </>
  )
}

// const mapStateToProps = state => ({
//   todos: todosSelector(state),
//   conditions: conditionsSelector(state),
// })

const mapStateToProps = state => ({
  todos: state.todoReducer.todos,
  conditions: state.todoReducer.conditions,
})

const mapDispatchToProps = { readTodos, createTodo, updateStatus }

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList)

// export default TodoList
