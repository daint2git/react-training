import { hot, setConfig } from 'react-hot-loader'
import React, { useEffect } from 'react'

import TransitionGroup from './TransitionGroup'

setConfig({
  reloadHooks: false,
})

const Root = () => {
  useEffect(() => {
    document.title = 'Hello'
  })

  return (
    <>
      <div>Hello</div>
      <TransitionGroup />
    </>
  )
}

export default hot(module)(Root)
