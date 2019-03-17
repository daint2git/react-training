import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import cssModuleNameTag from 'utils/cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}

function OldSchoolMenuLink({ to, activeOnlyWhenExact, label }) {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      /* eslint-disable react/no-children-prop */
      children={({ match }) => (
        <div className={match && 'active'}>
          {match && '> '}
          <Link to={to}>{label}</Link>
        </div>
      )}
    />
  )
}

function CustomLink() {
  return (
    <>
      <h1>CustomLink</h1>
      <Router>
        <div className={cssModules`root`}>
          <OldSchoolMenuLink to="/" activeOnlyWhenExact label="Home" />
          <OldSchoolMenuLink to="/about" label="About" />
          <hr />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    </>
  )
}

export default CustomLink
