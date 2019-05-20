import React, { useState } from 'react'
import { useTrail, animated } from 'react-spring'
import styled from 'styled-components'

const items = ['Lorem', 'ipsum', 'dolor', 'sit']
const config = { mass: 5, tension: 2000, friction: 200 }

const StyledTrailsMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledTrailsText = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  line-height: 80px;
  color: palevioletred;
  font-size: 5em;
  font-weight: 800;
  text-transform: uppercase;
  will-change: transform, opacity;
  overflow: hidden;
`

const StyledItem = styled.div`
  overflow: hidden;
`

const AnimatedTrailsText = animated(StyledTrailsText)

const AnimatedItem = animated(StyledItem)

const TrailDemo = () => {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <StyledTrailsMain onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <AnimatedTrailsText
            key={items[index]}
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}
          >
            <AnimatedItem style={{ height }}>{items[index]}</AnimatedItem>
          </AnimatedTrailsText>
        ))}
      </div>
    </StyledTrailsMain>
  )
}

export default TrailDemo
