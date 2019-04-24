import React from 'react'
import Header from '../header'
import NavBar from '../navbar'
import Main from '../main'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const Wrapper = styled.div`
  display: flex;
`

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <NavBar />
        <Main>{children}</Main>
      </Wrapper>
    </>
  )
}

export default Layout
