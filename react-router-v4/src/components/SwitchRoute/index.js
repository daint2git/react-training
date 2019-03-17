import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const User = () => <h2>User</h2>
const NoMatch = () => <h2>NoMatch</h2>

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/user01">Users</Link>
      </li>
    </ul>
  </nav>
)

const WithNoSwitchRoute = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/:user" component={User} />
    <Route component={NoMatch} />
  </>
)

const WithSwitchRoute = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/:user" component={User} />
    <Route component={NoMatch} />
  </Switch>
)

const SwitchRoute = () => (
  <>
    <h1>SwitchRoute</h1>
    <Router>
      <div className={cssModules`root`}>
        <Navigation />
        <div>
          <h3>WithNoSwitchRoute</h3>
          <WithNoSwitchRoute />
        </div>
        <div>
          <h3>WithSwitchRoute</h3>
          <WithSwitchRoute />
        </div>
      </div>
    </Router>
  </>
)

export default SwitchRoute
