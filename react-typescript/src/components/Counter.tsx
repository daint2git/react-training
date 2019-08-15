import React, { useState, useEffect } from 'react'

interface Props {
  initialCount: number
  onMessageShow: (count: number) => void
  check?: boolean
}

const Counter: React.FC<Props> = ({
  initialCount,
  onMessageShow,
  children,
  ...rest
}): React.ReactElement => {
  const [count, setCount] = useState(initialCount)

  useEffect((): void => {
    onMessageShow(count)
    console.log(initialCount) // eslint-disable-line
  })

  return (
    <div {...rest}>
      <h2>Count {count}</h2>
      <button
        type="button"
        onClick={(): void => {
          setCount(count + 1)
        }}
      >
        +
      </button>
      <button type="button" onClick={(): void => setCount(count - 1)}>
        -
      </button>
      {children}
    </div>
  )
}

interface ParentCounterProps {
  initialCount: number
}

const ParentCounter = ({ initialCount }: ParentCounterProps): JSX.Element => {
  const handleMessageShow = (count: number): void => {
    console.log(`This is ${count}`) // eslint-disable-line
  }

  return (
    <Counter initialCount={initialCount} onMessageShow={handleMessageShow}>
      <div>This is Children</div>
    </Counter>
  )
}

export default ParentCounter
