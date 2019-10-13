import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import axios from 'axios'
const renderComponent = forceUpdate => {
  const result = []
  for (let i = 0; i < 100; i++) {
    result.push(
      <div key={i} onClick={forceUpdate}>
        aa {i}
      </div>,
    )
  }
  return result
}

export function useForceUpdate() {
  const [, setTick] = useState(0)
  const update = useCallback(() => {
    setTick(tick => tick + 1)
  }, [])
  return update
}

// Usage
export default function App() {
  // Ref for the element that we want to detect whether on screen

  // Call the hook passing in ref and root margin
  // In this case it would only be considered onScreen if more ...
  // ... than 300px of element is visible.

  const [data, setData] = useState([])
  const [page, setPage] = useState(0)

  const getUsers = useCallback(
    page => {
      console.log('vao getUsers')
      axios.get(`https://api.github.com/users?since=${page}&per_page=30`).then(res => {
        setData(data.concat(res.data))
        const lastUser = res.data[res.data.length - 1]
        const page = lastUser.id
        setPage(page)
      })
    },
    [data],
  )

  useEffect(() => {
    getUsers(page)
  }, [])

  const onHandler = useCallback(
    entry => {
      console.log('onHandler page', page)
      getUsers(page)
    },
    [data, getUsers, page],
  )

  console.error('App', page, data.length)

  return (
    <div>
      <div style={{ height: 200 }}>
        <h1>Scroll down to next section 👇</h1>
      </div>

      {data.length > 0 && (
        <LazyLoad onHandler={onHandler}>
          <ul>
            {data.map(item => (
              <li key={item.id}>
                {item.id}: {item.login}
              </li>
            ))}
          </ul>
        </LazyLoad>
      )}
    </div>
  )
}

// Hook
function LazyLoad({ children, onHandler }) {
  console.error('LazyLoad')
  // State and setter for storing whether element is visible

  const containerRef = useRef()
  const bottomRef = useRef()

  // const firstUpdate = useRef(true)

  useEffect(() => {
    console.log('new')

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        console.log('render', entry.isIntersecting)
        // console.log('firstUpdate.current', firstUpdate.current)
        if (entry.isIntersecting) {
          onHandler(entry)
        }

        // setIntersecting(entry.isIntersecting)
      },
      {
        root: null,
        // rootMargin: '0px 0px 100px 0px',
      },
    )

    if (bottomRef.current) {
      observer.observe(bottomRef.current)
    }

    return () => {
      observer.unobserve(bottomRef.current)
    }
  }, [onHandler]) // Empty array ensures that effect is only run on mount and unmount

  return (
    <>
      {children}
      <div ref={bottomRef} style={{ height: 50, color: 'red' }}>
        Loading...
      </div>
    </>
  )
}
