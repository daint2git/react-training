import React, { useState, useEffect } from 'react'

// Usage
export default function Example() {
  // Call our hook for each key that we'd like to monitor
  const happyPress = useKeyPress('h')
  const sadPress = useKeyPress('s')
  const robotPress = useKeyPress('r')
  const foxPress = useKeyPress('f')

  return (
    <div>
      <div>h, s, r, f</div>
      <div>
        {happyPress && '😊'}
        {sadPress && '😢'}
        {robotPress && '🤖'}
        {foxPress && '🦊'}
      </div>
    </div>
  )
}

// Hook
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // Add event listeners
  useEffect(() => {
    // If pressed key is our target key then set to true
    function downHandler({ key }) {
      if (key === targetKey) {
        setKeyPressed(true)
      }
    }

    // If released key is our target key then set to false
    const upHandler = ({ key }) => {
      if (key === targetKey) {
        setKeyPressed(false)
      }
    }

    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, [targetKey]) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}
