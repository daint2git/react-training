import React from 'react'
import { Switch, Route } from 'react-router-dom'

import withDynamicImport from 'hocs/withDynamicImport'

const Home = withDynamicImport(() => import('../pages/Home/index'))
const About = withDynamicImport(() => import('../pages/About/index'))
const NotFound = withDynamicImport(() => import('../pages/NotFound/index'))

const configureRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)

export default configureRoutes
