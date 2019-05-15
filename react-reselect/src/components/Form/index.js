import React, { useState } from 'react'

const Form = ({ onSubmit }) => {
  console.log('render Form')
  const [value, updateValue] = useState('')
  return (
    <div>
      <h3>Todo Form</h3>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmit({
            task: value,
          })
          updateValue('')
        }}
      >
        <input type="text" value={value} onChange={e => updateValue(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default React.memo(Form)
