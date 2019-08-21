import { connect } from 'react-redux'

import { State } from 'reducers'
import { toggleTodo } from 'actions/todos'
import TodosList from 'components/TodosList'

const mapStateToProps = (state: State): Object => ({
  todos: state.todos.todos,
})

const mapDispatchToProps: Object = {
  onTodoClick: toggleTodo,
}

export default connect<any, any, any>(
  mapStateToProps,
  mapDispatchToProps,
)(TodosList)
