import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import useMeasure from './useMeasure'
import TrailDemo from './TrailDemo'
import TransitionDemo from './TransitionDemo'
import styles from './styles'

const Animation3 = () => {
  const [state, setState] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })
  return (
    <div style={{ padding: '20px', textAlign: 'center' }} onClick={() => setState(!state)}>
      <animated.div
        style={{
          opacity: x.interpolate({ output: [0.3, 1] }),
          transform: x
            .interpolate({
              range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
              output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
            })
            .interpolate(x => `scale(${x})`),
        }}
      >
        click
      </animated.div>
    </div>
  )
}

const Animation4 = () => {
  const [open, toggle] = useState(false)
  const [bind, { width }] = useMeasure()
  const props = useSpring({ width: open ? width : 0 })

  return (
    <div {...bind} className={styles.main} onClick={() => toggle(!open)}>
      <animated.div className={styles.fill} style={props} />
      <animated.div className={styles.content}>
        {props.width.interpolate(x => x.toFixed(0))}
      </animated.div>
    </div>
  )
}

const Animation = () => {
  const animateProps = useSpring({
    from: { opacity: 0, color: 'red' },
    to: { opacity: 1, color: 'green' },
  })
  const animate2Props = useSpring({ number: 1, from: { number: 0 } })

  return (
    <>
      <animated.h2 style={animateProps}>I will fade in</animated.h2>
      <br />
      <animated.div style={animate2Props}>{animate2Props.number}</animated.div>
      <br />
      <Animation3 />
      <br />
      <Animation4 />
      <br />
      <TrailDemo />
      <br />
      <TransitionDemo />
    </>
  )
}

export default Animation
