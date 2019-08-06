import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

const duration = 1000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0 },
}

const Fade = () => {
  const [inProp, setInProp] = useState(false)
  return (
    <>
      <Transition in={inProp} timeout={duration}>
        {state => {
          // console.log(state)
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a fade Transition!
            </div>
          )
        }}
      </Transition>
      <Transition in={inProp} timeout={duration} mountOnEnter>
        {state => {
          // console.log(state)
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a fade mountOnEnter
            </div>
          )
        }}
      </Transition>
      <Transition in={inProp} timeout={duration} unmountOnExit>
        {state => {
          // console.log(state)
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a fade unmountOnExit
            </div>
          )
        }}
      </Transition>
      <Transition in={inProp} timeout={duration} appear={false}>
        {state => {
          console.log(state)
          return (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a fade appear
            </div>
          )
        }}
      </Transition>
      <button type="button" onClick={() => setInProp(!inProp)}>
        Click to Enter
      </button>
    </>
  )
}

export default Fade
