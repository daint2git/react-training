import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Title from 'components/Title'
import Nav from 'components/Nav'
import Loading from 'components/Loading'
import HomePage from 'components/HomePage'
import RepoPage from 'components/RepoPage'
import CounterPage from 'components/CounterPage'

const Root = () => (
  <>
    <Title />
    <Nav />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/repo" exact component={RepoPage} />
      <Route path="/counter" exact component={CounterPage} />
    </Switch>
    <Loading />
  </>
)

export default Root
