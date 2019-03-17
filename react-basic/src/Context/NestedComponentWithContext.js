import React from 'react'
import { ThemeContext2, themes } from './ThemeContext'

const ThemeTogglerButton = () => (
  <ThemeContext2.Consumer>
    {({ theme, toggleTheme }) => (
      <button onClick={toggleTheme} style={{ backgroundColor: theme.background }}>
        Toggle Theme
      </button>
    )}
  </ThemeContext2.Consumer>
)

const Content = () => (
  <div>
    <ThemeTogglerButton />
  </div>
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTheme = () =>
      this.setState(state => ({
        theme: state.theme === themes.dark ? themes.light : themes.dark,
      }))

    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    }
  }

  render() {
    return (
      <ThemeContext2.Provider value={this.state}>
        <Content />
      </ThemeContext2.Provider>
    )
  }
}

export default App
