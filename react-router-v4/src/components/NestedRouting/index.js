import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Index = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Topic = ({ match }) => <h3>Requested Param: {match.params.id}</h3>
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v State</Link>
      </li>
      <Route path={`${match.path}/:id`} component={Topic} />
      <Route exact path={match.path} render={() => <h3>Please select a topic.</h3>} />
    </ul>
  </div>
)

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>
    </li>
    <li>
      <Link to="/topics">Topics</Link>
    </li>
  </ul>
)

const NestedRouting = () => (
  <>
    <h1>NestedRouting</h1>
    <Router>
      <>
        <Header />
        <div className={cssModules`root`}>
          <Route path="/" exact component={Index} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} />
        </div>
      </>
    </Router>
  </>
)

export default NestedRouting
