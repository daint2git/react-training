import React, { useState, useRef, useEffect, useCallback } from 'react'

const style = {
  width: 500,
  height: 500,
  backgroundColor: 'green',
  color: 'white',
  textAlign: 'center',
  cursor: 'pointer',
}

function useCoord(initalState = { x: 0, y: 0 }) {
  // State for storing mouse coordinates
  const [coords, setCoords] = useState(initalState)

  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY })
    },
    [setCoords],
  )

  return { coords, setCoords: handler }
}

// Usage
export default function Example() {
  const { coords: coords1, setCoords: setCoords1 } = useCoord()
  const { coords: coords2, setCoords: setCoords2 } = useCoord()
  const divRef = useRef()

  // Add event listener using our hook
  useEventListener('mousemove', setCoords1)
  useEventListener('mousemove', setCoords2, divRef.current)

  return (
    <>
      <h1>
        The mouse position is ({coords1.x}, {coords1.y})
      </h1>
      <br />
      <div style={style} ref={divRef}>
        Abc ({coords2.x}, {coords2.y})
      </div>
    </>
  )
}

// Hook
function useEventListener(eventName, handler, element = window) {
  // Create a ref that stores handler
  const savedHandler = useRef()

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.
  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(
    () => {
      // Make sure element supports addEventListener
      // On
      const isSupported = element && element.addEventListener
      if (!isSupported) return false

      // Create event listener that calls handler function stored in ref
      const eventListener = event => savedHandler.current(event)

      // Add event listener
      element.addEventListener(eventName, eventListener)

      // Remove event listener on cleanup
      return () => {
        element.removeEventListener(eventName, eventListener)
      }
    },
    [eventName, element], // Re-run if eventName or element changes
  )
}
