import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import StoreContext from './Context'
import Store from './Store'
import Login from './Login'
import Navbar from './Navbar'

const styles = {
  fontSize: '25px',
  padding: '15px',
  backgroundColor: 'aquamarine',
}

const Home = () => <h2 style={styles}>Home</h2>

const ProductDetail = ({ match }) => <h2 style={styles}>ProductDetail {match.params.id}</h2>

const Products = ({ match }) => (
  <>
    <h2 style={styles}>Products</h2>
    <Route path={`${match.path}/:id`} component={ProductDetail} />
  </>
)

const About = () => <h2 style={styles}>About</h2>

const AuthRoute = ({ component: Component, ...rest }) => {
  const { appState } = useContext(StoreContext)
  return (
    <Route
      render={props =>
        appState.user.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
      {...rest}
    />
  )
}

const Root = () => (
  <Store>
    <Router>
      <div>
        <Navbar />
        <div style={{ marginTop: '30px' }}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <AuthRoute path="/products" component={Products} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  </Store>
)

export default Root
