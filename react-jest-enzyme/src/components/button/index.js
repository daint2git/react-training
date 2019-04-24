import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  color: white;
  background-color: black;
`

const Button = props => <StyledButton type="button" {...props} />

export default Button
