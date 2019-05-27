import { hot } from 'react-hot-loader'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import slowImport from 'utils/slowImport'
import { Loading } from 'components/molecules/Loading'
import RootLayout from 'components/templates/RootLayout'
import withDynamicImport from 'hocs/withDynamicImport'

const Home = withDynamicImport(() => import('../Home'))
const About = withDynamicImport(() => import('../About'))
const Login = withDynamicImport(() => slowImport(import('../Login'), 1000), {
  fallback: <Loading />,
})
const NotFound = withDynamicImport(() => slowImport(import('../NotFound'), 1000), {
  fallback: <Loading />,
})

const App = () => (
  <RootLayout>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  </RootLayout>
)

export default hot(module)(App)
