import React, { useState, useCallback } from 'react'

function Counter({ initialCount = 0, step = 1 }) {
  const [count, setCount] = useState(initialCount)
  const increment = useCallback(() => setCount(count + step))
  const decrement = useCallback(() => setCount(count - step))

  return (
    <div className="counter">
      <p>Current count: {count}</p>
      <button name="increment" onClick={increment}>
        increment
      </button>
      <button name="decrement" onClick={decrement}>
        decrement
      </button>
    </div>
  )
}

export default Counter
