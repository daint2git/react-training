import React, { useState, useCallback, useEffect } from 'react'

function Counter({ step = 1 }) {
  const [count, setCount] = useState(() => Number(window.localStorage.getItem('count') || 0))
  const increment = useCallback(() => setCount(count + step))
  const decrement = useCallback(() => setCount(count - step))

  useEffect(() => {
    window.localStorage.setItem('count', count)
  }, [count])

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
