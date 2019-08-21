import { connect } from 'react-redux'

import { addTodo } from 'actions/todos'
import AddTodoForm from 'components/AddTodoForm'

const mapDispatchToProps: Object = {
  onSubmit: addTodo,
}

export default connect<any, any, any>(
  null,
  mapDispatchToProps,
)(AddTodoForm)
