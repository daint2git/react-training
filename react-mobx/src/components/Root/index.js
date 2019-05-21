import React from 'react'
import BirdView from '@components/BirdView'
import RepoList from '@components/RepoList'
import Loading from '@components/Loading'

const Root = () => (
  <>
    <BirdView />
    <RepoList />
    <Loading />
  </>
)

export default Root
