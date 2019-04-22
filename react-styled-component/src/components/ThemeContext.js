import React from 'react'

const ThemeContext = React.createContext()

const THEMES = ['default', 'light', 'dark']

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(THEMES[0])
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export default ThemeContext
export { THEMES, ThemeProvider }
