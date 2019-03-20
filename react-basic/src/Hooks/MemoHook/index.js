import React, { useMemo, useState } from 'react'

const Child1 = props => {
  console.log('Child1')
  return <div>Child1</div>
}

const Child2 = props => {
  console.log('Child2')
  return <div>Child2</div>
}

const useFormInput = (initialValue = '') => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: e => setValue(e.target.value),
  }
}

function Parent() {
  const a = useFormInput()
  const b = useFormInput()
  // Only re-rendered if `a.value` changes:
  const child1 = useMemo(() => <Child1 a={a.value} />, [a.value])
  // Only re-rendered if `b.value` changes:
  const child2 = useMemo(() => <Child2 b={b.value} />, [b.value])
  return (
    <>
      <input type="text" {...a} />
      <input type="text" {...b} />
      {child1}
      {child2}
    </>
  )
}

export default Parent
