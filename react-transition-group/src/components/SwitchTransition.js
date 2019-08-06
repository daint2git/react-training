import React, { useState } from 'react'
import { Transition, SwitchTransition } from 'react-transition-group'

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
      <SwitchTransition>
        <Transition in={inProp} timeout={duration}>
          {state => {
            console.log(state)
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
      </SwitchTransition>
      <button
        type="button"
        onClick={() => {
          setInProp(!inProp)
        }}
      >
        {inProp ? 'Goodbye, world!' : 'Hello, world!'}
      </button>
    </>
  )
}

export default Fade
