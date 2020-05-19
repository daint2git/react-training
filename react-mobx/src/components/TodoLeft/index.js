import React from 'react'
import { inject, observer } from 'mobx-react'

const TodoLeft = ({ unfinishedTodoCount }) => {
  console.error('render TodoLeft')
  return <p>Tasks left: {unfinishedTodoCount}</p>
}

export default inject(stores => ({
  unfinishedTodoCount: stores.TodoStore.unfinishedTodoCount,
}))(observer(TodoLeft))
