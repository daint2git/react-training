import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import styled from 'styled-components'

const Div = styled.div`
  cursor: pointer;
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 800;
  font-size: 25em;
  will-change: transform, opacity;
  text-shadow: 0px 2px 40px #00000020, 0px 2px 5px #00000030;
`

const AnimatedDiv = animated(Div)

const pages = [
  ({ style }) => <AnimatedDiv style={{ ...style, background: 'lightpink' }}>A</AnimatedDiv>,
  ({ style }) => <AnimatedDiv style={{ ...style, background: 'lightblue' }}>B</AnimatedDiv>,
  ({ style }) => <AnimatedDiv style={{ ...style, background: 'lightgreen' }}>C</AnimatedDiv>,
]

export default function TransitionDemo() {
  const [index, set] = useState(0)
  const onClick = useCallback(() => set(state => (state + 1) % 3), [])
  const transitions = useTransition(index, p => p, {
    from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
  })
  return (
    <div onClick={onClick}>
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} />
      })}
    </div>
  )
}
