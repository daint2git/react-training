import React, { useEffect, useState, useCallback } from 'react'

function Example(props) {
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  const execCb = useCallback(() => {
    console.log('useCallback')
  }, [text])

  useEffect(() => {
    console.log(count)
    console.log(text)
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <p>{count}</p>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <p>{text}</p>
      <Sub execCb={execCb}>sub</Sub>
    </div>
  )
}

const Sub = ({ execCb, children }) => {
  useEffect(() => {
    execCb()
  }, [execCb])
  return <div>{children}</div>
}

export default Example
