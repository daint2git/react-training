import React from 'react'

const ThemeContext = React.createContext('light')
const UserContext = React.createContext({ name: 'Guest' })

const Layout = () => (
  <div>
    <h1>Context</h1>
    <Content />
  </div>
)

const Content = () => (
  <ThemeContext.Consumer>
    {theme => (
      <UserContext.Consumer>{user => <Profile user={user} theme={theme} />}</UserContext.Consumer>
    )}
  </ThemeContext.Consumer>
)

const Profile = props => (
  <div style={{ backgroundColor: props.theme }}>
    <h3>{props.user}</h3>
  </div>
)

const App = () => (
  <ThemeContext.Provider value="red">
    <UserContext.Provider value="admin">
      <Layout />
    </UserContext.Provider>
  </ThemeContext.Provider>
)

export default App
