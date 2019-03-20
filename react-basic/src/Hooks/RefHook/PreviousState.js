import React, { useEffect, useRef, useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h1>
        Now: {count}, before: {prevCount}
      </h1>
    </div>
  )
}

function usePrevious(value) {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export default Counter
