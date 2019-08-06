import React, { ReactElement, useState, useEffect } from 'react'

interface Props {
  initialCount: number
  onMessageShow: (count: number) => void
  check?: boolean
}

const Counter = ({ initialCount, onMessageShow }: Props): ReactElement => {
  const [count, setCount] = useState(initialCount)

  useEffect((): void => {
    onMessageShow(count)
    console.log(initialCount)
  })

  return (
    <div>
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
    </div>
  )
}

interface ParentCounterProps {
  initialCount: number
}

const ParentCounter = ({ initialCount }: ParentCounterProps): ReactElement => {
  const handleMessageShow = (count: number): void => {
    console.log(`This is ${count}`)
  }

  return <Counter initialCount={initialCount} onMessageShow={handleMessageShow} />
}

export default ParentCounter
