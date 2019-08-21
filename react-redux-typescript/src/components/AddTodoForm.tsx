import React from 'react'

interface Props {
  onSubmit: (value: string) => void
}

const AddTodoForm: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = React.useState('')
  return (
    <form
      onSubmit={(e: React.FormEvent): void => {
        e.preventDefault()
        onSubmit(value)
        setValue('')
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setValue(e.target.value)
        }}
      />
      <button type="submit">Add todo</button>
    </form>
  )
}

export default AddTodoForm
