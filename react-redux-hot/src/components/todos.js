import React, { useState } from 'react'
import { connect } from 'react-redux'
import { add, clear } from '../reducers/totos'

const NameList = ({ list, ...rest }) => (
  <ul>
    {list.map(i => (
      <li key={i.id.toString()} {...rest}>
        {i.value}
      </li>
    ))}
  </ul>
)

const Todos = ({ add, clear, list }) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <h2>Todos</h2>
      <div>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => {
            if (e.keyCode === 13) {
              add(e.target.value)
              setValue('')
            }
          }}
        />
        <button
          onClick={() => {
            clear()
            setValue('')
          }}
        >
          Clear list
        </button>
      </div>
      <NameList list={list} />
    </div>
  )
}

export default connect(
  state => ({
    list: state.todos.list,
  }),
  { add, clear },
)(Todos)
