import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
}

export const ThemeContext = React.createContext(themes.dark)

export const ThemeContext2 = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
})
