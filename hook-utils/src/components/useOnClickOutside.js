import React, { useState, useEffect, useRef } from 'react'
import styled from '@emotion/styled'

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  z-index: 5;
`

// Usage
export default function Example() {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef()
  // State for our modal
  const [isModalOpen, setModalOpen] = useState(false)
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setModalOpen(false))

  return (
    <>
      {isModalOpen ? (
        <Overlay>
          <Container ref={ref}>
            <span role="img" aria-label="hand">
              👋
            </span>
            Hey, I'm a modal. Click anywhere outside of me to close.
          </Container>
        </Overlay>
      ) : (
        <button type="button" onClick={() => setModalOpen(true)}>
          Open Modal
        </button>
      )}
    </>
  )
}

// Hook
function useOnClickOutside(ref, handler) {
  useEffect(
    () => {
      const listener = event => {
        // Do nothing if clicking ref's element or descendent elements
        const node = ref.current
        if (!node || node.contains(event.target)) return

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler],
  )
}
