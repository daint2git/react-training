import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Users = () => <h2>Users</h2>

const BasicRouting = () => (
  <>
    <h1>BasicRouting</h1>
    <Router>
      <div className={cssModules`root`}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </main>
      </div>
    </Router>
  </>
)

export default BasicRouting
