import React from 'react'
import styled from 'styled-components'

import ThemeContext, { THEMES } from './ThemeContext'

import Button from './button'

const ToolBar = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: rgb(219, 112, 147);
`

const ThemeSelectbox = styled(Button)``

const Header = () => {
  const { setTheme } = React.useContext(ThemeContext)
  return (
    <ToolBar>
      <ThemeSelectbox
        as="select"
        onChange={e => {
          setTheme(e.target.value)
        }}
      >
        {THEMES.map(theme => (
          <option key={theme} value={theme}>
            {theme}
          </option>
        ))}
      </ThemeSelectbox>
    </ToolBar>
  )
}

export default Header
