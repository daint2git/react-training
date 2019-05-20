import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createTodo } from 'redux/reducers/todos'
import File from 'components/File'
import Animation from 'components/Animation'

const Form = ({ createTodo }) => {
  const [value, updateValue] = useState('')
  return (
    <div>
      <h3>Todo Form</h3>
      <form
        onSubmit={e => {
          e.preventDefault()
          createTodo({ task: value })
          updateValue('')
        }}
      >
        <input type="text" value={value} onChange={e => updateValue(e.target.value)} />
        <File />
        <Animation />
        <input type="submit" />
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  createTodo,
}

export default connect(
  null,
  mapDispatchToProps,
)(Form)
