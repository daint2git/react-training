import React, { useState, useCallback } from 'react'

function useClientRect() {
  const [rect, setRect] = useState(null)
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect())
    }
  }, [])
  return [rect, ref]
}

function MeasureExample() {
  const [rect, ref] = useClientRect()
  console.log('render', rect)
  return (
    <>
      <h1 ref={ref}>Hello, world</h1>
      {rect !== null && <h2>The above header is {Math.round(rect.height)}px tall</h2>}
    </>
  )
}

export default MeasureExample
