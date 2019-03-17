import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getTodos, addTodo, updateTodo } from './reducer'

class TodoInput extends React.Component {
  state = { value: '' }

  handleChange = e => this.setState({ value: e.target.value })

  handleBlur = e => {
    if (e.target.value) {
      this.props.addTodo(e.target.value)
    }
    this.setState({ value: '' })
  }

  render() {
    return (
      <input
        className="item add-item"
        placeholder="What need to be done ?"
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    )
  }
}

const Todo = ({ id, value, active, updateTodo }) => (
  <div className={`item show-item ${active ? 'isCompleted' : ''}`}>
    <input type="checkbox" id={id} checked={active} onChange={() => updateTodo(id)} />
    {value}
  </div>
)

const Todos = ({ list, updateTodo }) =>
  list.map(todo => <Todo key={todo.id} {...todo} updateTodo={updateTodo} />)

const ButtonControl = ({ label, getTodos }) => (
  <button onClick={() => getTodos(label)}>{label}</button>
)

const Control = ({ countItems, getTodos }) => (
  <div className="control">
    <span>{`${countItems} items left`}</span>
    <ButtonControl label="All" getTodos={getTodos} />
    <ButtonControl label="Active" getTodos={getTodos} />
    <ButtonControl label="Completed" getTodos={getTodos} />
  </div>
)

class TodoApp extends React.Component {
  componentDidMount() {
    this.props.getTodos('all')
  }

  render() {
    const { list, getTodos, addTodo, updateTodo } = this.props
    return (
      <div className="container">
        <TodoInput addTodo={addTodo} />
        <Todos list={list} updateTodo={updateTodo} />
        <Control countItems={list.length} getTodos={getTodos} />
      </div>
    )
  }
}

export default connect(
  state => ({ list: state.list }),
  dispatch => bindActionCreators({ getTodos, addTodo, updateTodo }, dispatch),
)(TodoApp)
