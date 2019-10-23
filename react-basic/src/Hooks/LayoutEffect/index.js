import React, { useEffect, useLayoutEffect, useState, useCallback, useRef } from 'react'

const useForceUpdate = () => {
  const [, setState] = useState(0)
  return useCallback(() => {
    setState(tick => tick + 1)
  }, [])
}

const Parent1 = () => {
  console.log('render Parent1')
  useEffect(() => {
    console.log('render useEffect Parent1')
  })
  return <Child1 />
}

const Child1 = () => {
  console.log('render Child1')
  useEffect(() => {
    console.log('render useEffect Child1')
  })
  return <ChildChild1 />
}

const ChildChild1 = () => {
  const ref = useRef(true)
  const forceUpdate = useForceUpdate()
  console.log('render ChildChild1')
  useEffect(() => {
    console.log('render useEffect ChildChild1')
    if (ref.current) {
      ref.current = false
      forceUpdate()
    }
  })
  return <div />
}

const Parent2 = () => {
  console.log('render Parent2')
  useLayoutEffect(() => {
    console.log('render useLayoutEffect Parent2')
  })
  return <Child2 />
}

const Child2 = () => {
  console.log('render Child2')
  useLayoutEffect(() => {
    console.log('render useLayoutEffect Child2')
  })
  return <ChildChild2 />
}

const ChildChild2 = () => {
  const ref = useRef(true)
  const forceUpdate = useForceUpdate()
  console.log('render ChildChild2')
  useLayoutEffect(() => {
    console.log('render useLayoutEffect ChildChild2')
    if (ref.current) {
      ref.current = false
      forceUpdate()
    }
  })
  return <div />
}

export default () => {
  return (
    <>
      <Parent1 />
      <Parent2 />
    </>
  )
}

// render Parent1
// render Child1
// render ChildChild1
// render Parent2
// render Child2
// render ChildChild2
// render useLayoutEffect ChildChild2
// render useLayoutEffect Child2
// render useLayoutEffect Parent2
// render useEffect ChildChild1
// render useEffect Child1
// render useEffect Parent1

// render Parent1
// render Child1
// render ChildChild1
// render Parent2
// render Child2
// render ChildChild2
// render useLayoutEffect ChildChild2
// render useLayoutEffect Child2
// render useLayoutEffect Parent2
// render useEffect ChildChild1
// render useEffect Child1
// render useEffect Parent1
// render ChildChild1
// render ChildChild2
// render useLayoutEffect ChildChild2
// render useEffect ChildChild1
