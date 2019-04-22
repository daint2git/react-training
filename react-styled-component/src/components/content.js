import React from 'react'
import styled, { keyframes } from 'styled-components'
import Button from './button'
import ThemeContext from './ThemeContext'
import ThemeButton from './themeButton'
import ThemePropExample from './themePropExample'

const Wrapper = styled.main`
  margin-top: 60px;
  background: ${props => {
    switch (props.theme) {
      case 'light':
        return '#eeeeee'
      case 'dark':
        return '#222222'
      default:
        return 'linear-gradient(20deg, rgb(219, 112, 147), rgb(218, 163, 87))'
    }
  }};
  width: 100%;
  height: 100%;
  padding: 20px;

  * {
    letter-spacing: 0.5px;
  }
`

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`

const ReversedButton = props => (
  <button
    {...props}
    children={props.children
      .split('')
      .reverse()
      .join('')}
  />
)

const Link = ({ className, children }) => <a className={className}>{children}</a>

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || 'palevioletred'};
  background: papayawhip;
  border: none;
  border-radius: 3px;

  &[data-font-size='large'] {
    font-size: 2.5rem;
  }
`

const PasswordInput = styled.input.attrs(({ size = '1em' }) => ({
  // we can define static props
  type: 'password',
  // or we can define dynamic ones
  margin: size,
  padding: size,
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed props */
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`

const Rotate = styled.div`
  display: inline-block;
  animation: ${keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`

const Box = styled.div({
  backgroundColor: 'white',
  width: '50px',
  height: '50px',
})

const PropBox = styled.div(({ backgroundColor }) => ({
  backgroundColor,
  width: '50px',
  height: '50px',
}))

const Content = () => {
  const { theme } = React.useContext(ThemeContext)
  return (
    <Wrapper theme={theme}>
      <Button primary>Github</Button>
      <Button>Documentation</Button>
      <TomatoButton>Tomato</TomatoButton>
      <TomatoButton primary>Tomato primary</TomatoButton>
      <TomatoButton as="a">Link Tomato</TomatoButton>
      <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>
      <div>
        <Link className="abc">Unstyled, boring Link</Link>
        <br />
        <StyledLink className="abc">Styled, exciting Link</StyledLink>
      </div>
      <div>
        <Input defaultValue="@probablyup" type="text" data-font-size="large" />
        <Input defaultValue="@geelen" type="text" inputColor="rebeccapurple" />
      </div>
      <div>
        <PasswordInput placeholder="A small text input" size="1em" />
        <br />
        <PasswordInput placeholder="A bigger text input" size="2em" />
      </div>
      <Rotate>&lt; 💅 &gt;</Rotate>
      <ThemeButton />
      <ThemePropExample />
      <div>
        <Box backgroundColor="red" />
        <PropBox backgroundColor="red" />
      </div>
    </Wrapper>
  )
}

export default Content
