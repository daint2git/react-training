import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import './styles.css'

const duration = 1000

const Fade = () => {
  const [inProp, setInProp] = useState(false)

  const handleEnter = () => {
    console.log('onEnter')
  }
  const handleEntering = () => {
    console.log('onEntering')
  }
  const handleEntered = () => {
    console.log('onEntered')
  }
  const handleExit = () => {
    console.log('onExit')
  }
  const handleExiting = () => {
    console.log('onExiting')
  }
  const handleExited = () => {
    console.log('onExited')
  }

  return (
    <>
      <CSSTransition
        in={inProp}
        timeout={duration}
        classNames="my-class"
        onEnter={handleEnter}
        onEntering={handleEntering}
        onEntered={handleEntered}
        onExit={handleExit}
        onExiting={handleExiting}
        onExited={handleExited}
        mountOnEnter
        unmountOnExit
      >
        <div className="child">I'm a fade CSSTransition!</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </>
  )
}

export default Fade
