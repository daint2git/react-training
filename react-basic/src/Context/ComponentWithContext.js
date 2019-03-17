import React from 'react'
import { ThemeContext, themes } from './ThemeContext'

class ThemedButton extends React.Component {
  render() {
    let props = this.props
    let theme = this.context
    return <button {...props} style={{ backgroundColor: theme.background }} />
  }
}

ThemedButton.contextType = ThemeContext

const Toolbar = props => (
  <ThemedButton onClick={props.changeTheme}>ThemedButton Change theme</ThemedButton>
)

class App extends React.Component {
  state = { theme: themes.light }

  toggleTheme = () =>
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }))

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
        <div style={{ padding: 10 }} />
        <ThemedButton>ThemedButton</ThemedButton>
      </div>
    )
  }
}

export default App
