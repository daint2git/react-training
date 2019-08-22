import React, { useRef, useState, useEffect } from 'react'

const style = {
  width: 200,
  backgroundColor: 'aqua',
}

// Usage
export default function Example() {
  const ref = useRef(null)
  const [isHovered] = useHover(ref)

  return (
    <div ref={ref} style={style}>
      {isHovered ? '😁' : '☹️'}
    </div>
  )
}

// Hook
function useHover(ref) {
  const [value, setValue] = useState(false)

  useEffect(
    () => {
      const node = ref.current
      if (!node) return false

      const handleMouseOver = () => setValue(true)
      const handleMouseOut = () => setValue(false)

      node.addEventListener('mouseover', handleMouseOver)
      node.addEventListener('mouseout', handleMouseOut)

      return () => {
        node.removeEventListener('mouseover', handleMouseOver)
        node.removeEventListener('mouseout', handleMouseOut)
      }
    },
    [ref], // Recall only if ref changes
  )

  return [value]
}
