import React from 'react'
import { hot } from 'react-hot-loader'

import { createGlobalStyle } from 'styled-components'

import { ThemeProvider } from './ThemeContext'
import Header from './header'
import Content from './content'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const App = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Header />
      <Content />
    </ThemeProvider>
  )
}

export default hot(module)(App)
