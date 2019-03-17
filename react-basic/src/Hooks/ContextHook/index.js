import React, { Component, useContext, useState } from 'react'
import { ThemeContext, themes, UserContext } from './context'

class ClassExample extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, handeThemeChange }) => (
          <UserContext.Consumer>
            {user => (
              <div style={{ backgroundColor: theme.background }}>
                <h3>{this.props.title}</h3>
                <p>{user.name}</p>
                <button onClick={handeThemeChange}>Change theme</button>
              </div>
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }
}

const FunctionExample = ({ title }) => {
  const { theme, handeThemeChange } = useContext(ThemeContext)
  const user = useContext(UserContext)
  return (
    <div style={{ backgroundColor: theme.background }}>
      <h3>{title}</h3>
      <p>{user.name}</p>
      <button onClick={handeThemeChange}>Change theme</button>
    </div>
  )
}

const ContextHook = () => {
  const [theme, setTheme] = useState(themes.light)
  const handeThemeChange = () => setTheme(theme === themes.dark ? themes.light : themes.dark)
  return (
    <>
      <h1>Hooks → Context Hook → useContext</h1>
      <div style={{ paddingLeft: 25 }}>
        <ThemeContext.Provider value={{ theme, handeThemeChange }}>
          <UserContext.Provider value={{ name: 'admin' }}>
            <ClassExample title="ClassExample" />
            <FunctionExample title="FunctionExample" />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
      <hr />
    </>
  )
}

export default ContextHook
