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
  // The ref object is a generic container whose current property is mutable ...
  // ... and can hold any value, similar to an instance property on a class
  const ref = useRef()

  // Store current value in ref
  useEffect(() => {
    ref.current = value
  }, [value]) // Only re-run if value changes

  // Return previous value (happens before update in useEffect above)
  return ref.current
}

export default Counter
