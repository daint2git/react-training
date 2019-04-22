import styled, { css } from 'styled-components'

const Button = styled.button`
  display: block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  font-size: 20px;
  background: transparent;
  color: ${props => (props.primary ? 'palevioletred' : 'white')};
  border: 2px solid white;
  text-align: center;
  cursor: pointer;
  transition: 0.5s;

  &::before {
    content: '🚀';
  }

  &:hover {
    opacity: 0.5;
  }

  ${props =>
    props.primary &&
    css`
      background: white;
    `}
`

export default Button
