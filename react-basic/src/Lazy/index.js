import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loader from './Loader'

const dynamicImport = url => () =>
  new Promise((resolve, reject) => setTimeout(() => resolve(import(`${url}`)), 1000))
const Home = lazy(dynamicImport('./home'))
const Posts = lazy(dynamicImport('./posts'))
const About = lazy(dynamicImport('./about'))

const NoMatch = () => <div>NoMatch</div>

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={waitingComponent(Home)} />
      <Route path="/about" component={waitingComponent(About)} />
      <Route path="/posts" component={waitingComponent(Posts)} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Router>
)

const waitingComponent = Component => {
  const WaitingComponent = props => (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  )
  return WaitingComponent
}

export default App
