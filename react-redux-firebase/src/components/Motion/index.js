import React, { useState } from 'react'
import { Motion, spring, StaggeredMotion } from 'react-motion'

const MotionDemo = () => {
  return (
    <Motion defaultStyle={{ x: 0 }} style={{ x: spring(10) }}>
      {value => <div>{value.x}</div>}
    </Motion>
  )
}

/* eslint-disable react/no-array-index-key */
const StaggeredMotionDemo = () => {
  const [isShow, setShow] = useState(false)
  return (
    <div>
      <button type="button" onClick={() => setShow(!isShow)}>
        Click
      </button>
      {isShow && (
        <StaggeredMotion
          defaultStyles={[{ h: 0 }, { h: 0 }, { h: 0 }]}
          styles={prevInterpolatedStyles =>
            prevInterpolatedStyles.map((_, i) => {
              return i === 0 ? { h: spring(100) } : { h: spring(prevInterpolatedStyles[i - 1].h) }
            })
          }
        >
          {interpolatingStyles => (
            <div>
              {interpolatingStyles.map((style, i) => (
                <div key={i} style={{ border: '1px solid', height: style.h }} />
              ))}
            </div>
          )}
        </StaggeredMotion>
      )}
    </div>
  )
}
/* eslint-enable react/no-array-index-key */

export default () => (
  <>
    <MotionDemo />
    <StaggeredMotionDemo />
  </>
)
