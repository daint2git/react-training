import React, { useState, useCallback, useRef, useEffect, useLayoutEffect } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100%;
  height: 2000px;
`

// Usage
export default function Example() {
  // State for our modal
  const [modalOpen, setModalOpen] = useState(false)

  const handleClose = useCallback(() => {
    setModalOpen(false)
  }, [])

  return (
    <Container>
      <button type="button" onClick={() => setModalOpen(true)}>
        Show Modal
      </button>

      {modalOpen && (
        <Modal
          title="Try scrolling"
          content="I bet you you can't! Muahahaha 😈"
          onClose={handleClose}
        />
      )}
    </Container>
  )
}

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

const ModalContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  z-index: 5;
`

function Modal({ title, content, onClose }) {
  // Call hook to lock body scroll
  useLockBodyScroll()

  const overlayRef = useRef()

  useEffect(() => {
    const node = overlayRef.current

    // Make sure node supports addEventListener
    // On
    const isSupported = node && node.addEventListener
    if (!isSupported) return false

    const eventHandler = event => {
      if (node.contains(event.target)) return

      onClose()
    }

    document.addEventListener('mousedown', eventHandler)
    document.addEventListener('touchstart', eventHandler)

    return () => {
      document.removeEventListener('mousedown', eventHandler)
      document.removeEventListener('touchstart', eventHandler)
    }
  }, [onClose])

  return (
    <Overlay>
      <ModalContainer ref={overlayRef}>
        <h2>{title}</h2>
        <p>{content}</p>
      </ModalContainer>
    </Overlay>
  )
}

// Hook
function useLockBodyScroll() {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow
    // Prevent scrolling on mount
    document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, []) // Empty array ensures effect is only run on mount and unmount
}
