import React from 'react'
import BirdView from '@components/BirdView'
import RepoList from '@components/RepoList'
import Loading from '@components/Loading'
import TodoList from '@components/TodoList'

const Root = () => (
  <>
    <BirdView />
    <RepoList />
    <Loading />
    <hr />
    <TodoList />
  </>
)

export default Root
