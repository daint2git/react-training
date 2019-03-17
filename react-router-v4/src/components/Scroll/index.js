import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import ScrollToTopOnMount from './ScrollToTopOnMount'

const Navigation = () => (
  <nav style={{ position: 'fixed' }}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>
)

const Home = () => <div>Home</div>
const About = () => (
  <div>
    <ScrollToTopOnMount />
    <div>About</div>
  </div>
)
const Users = () => <div>Users</div>
const NoMatch = () => <div>NoMatch</div>

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', width: '100vw' }}>
        <Navigation />
        <div style={{ minHeight: '200vh', marginLeft: '30%' }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/users" component={Users} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
