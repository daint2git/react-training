import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

const ComponentWithRegex = ({ match }) => (
  <div>
    <h3>Only asc/desc are allowed: {match.params.direction}</h3>
  </div>
)

const URLParameters = () => (
  <>
    <h1>NestedRouting</h1>
    <Router>
      <div className={cssModules`root`}>
        <h2>Accounts</h2>
        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>
        <Route path="/:id" component={Child} />
        <Route path="/order/:direction(asc|desc)" component={ComponentWithRegex} />
      </div>
    </Router>
  </>
)

export default URLParameters
