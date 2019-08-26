import React from 'react'

export interface Props {
  onSubmit: (value: string) => void
}

const AddTodoForm: React.FC<Props> = ({ onSubmit }) => {
  const [value, setValue] = React.useState('')
  const ref = React.useRef<HTMLInputElement>(null)

  // const handleSubmit = (event: React.FormEvent): void => {
  // const handleSubmit: React.FormEventHandler = event => {
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault()
    if (value) {
      onSubmit(value)
      setValue('')
      return
    }
    if (ref && ref.current) {
      onSubmit(ref.current.value)
      ref.current.value = ''
    }
  }

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
  //   setValue(event.target.value)
  // }
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <br />
      <hr />
      <input type="text" ref={ref} />
      <br />
      <hr />
      <button type="submit">Add todo</button>
    </form>
  )
}

export default AddTodoForm
