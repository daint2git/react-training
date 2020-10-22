import React from 'react'
<<<<<<< HEAD
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Nav from '../Nav'
import Title from '../Title'
import Repos from '../Repos'
import Loading from '../Loading'
import Counter from '../Counter'

const Root = () => (
  <BrowserRouter>
    <Nav />
    <Loading />
    <Switch>
      <Route exact path="/" component={Title} />
      <Route exact path="/repos" component={Repos} />
      <Route exact path="/counter" component={Counter} />
    </Switch>
  </BrowserRouter>
=======
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
>>>>>>> 9e07edacd769f39f4987a7395c839ab434c6400a
)

export default Root
