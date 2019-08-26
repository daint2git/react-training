import { connect } from 'react-redux'

import { addTodo } from 'actions/todos'
import AddTodoForm, { Props as AddTodoFormProps } from 'components/AddTodoForm'

const mapDispatchToProps: Pick<AddTodoFormProps, 'onSubmit'> = {
  onSubmit: addTodo,
}

export default connect(
  null,
  mapDispatchToProps,
)(AddTodoForm)
