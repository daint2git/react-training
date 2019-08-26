import { connect } from 'react-redux'

import { State } from 'reducers'
import { toggleTodo } from 'actions/todos'
import TodosList, { Props as TodosListProps } from 'components/TodosList'

const mapStateToProps = (state: State): Pick<TodosListProps, 'todos'> => ({
  todos: state.todos.todos,
})

const mapDispatchToProps: Pick<TodosListProps, 'onTodoClick'> = {
  onTodoClick: toggleTodo,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosList)
