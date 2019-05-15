import React, { PureComponent } from 'react'
import { Route, Link } from 'react-router-dom'

import Home from 'components/Home'
import About from 'components/About'

const NavigationBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
  </ul>
)

class Root extends PureComponent {
  render() {
    console.log('render Root')
    return (
      <div>
        <h1>React App</h1>
        <NavigationBar />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    )
  }
}
export default Root
