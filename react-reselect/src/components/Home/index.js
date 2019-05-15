import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import TodoList from 'components/TodoList'
import Counter from 'components/Counter'

const Home = () => {
  console.log('render Home')
  const [, forceUpdate] = useState(null)
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <TodoList />
      <button type="button" onClick={() => forceUpdate(Date.now())}>
        Force render
      </button>
      {/* <Counter /> */}
    </>
  )
}

export default Home
