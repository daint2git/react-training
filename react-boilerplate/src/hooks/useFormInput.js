import { useState } from 'react'

function useFormInput(initialState) {
  const [value, setValue] = useState(initialState)
  return {
    value,
    onChange: e => setValue(e.target.value),
  }
}

export default useFormInput
