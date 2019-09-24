import React from 'react'
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
)

export default Root
