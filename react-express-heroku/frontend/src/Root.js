import React from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const defaultAxios = axios.create({
  baseURL: DEVELOPMENT ? 'http://localhost:6969/api' : `${window.location.origin}/api`,
  timeout: 100000,
})

class Home extends React.Component {
  state = { value: '' }

  componentDidMount() {
    this.callApi()
  }

  callApi = () =>
    defaultAxios({
      url: '/home',
      method: 'get',
    }).then(res => this.setState({ value: res.data }))

  render() {
    return <div>{this.state.value}</div>
  }
}

class About extends React.Component {
  state = { value: '' }

  componentDidMount() {
    this.callApi()
  }

  callApi = () =>
    defaultAxios({
      url: '/about',
      method: 'get',
    }).then(res => this.setState({ value: res.data }))

  render() {
    return <div>{this.state.value}</div>
  }
}

class Root extends React.Component {
  render() {
    return (
      <>
        <h1>React Express</h1>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </nav>
            <main>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
              </Switch>
            </main>
          </div>
        </Router>
      </>
    )
  }
}

export default Root
