import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: yellowgreen;
  border: 1px solid gold;
  text-align: center;
`

const Content = styled.p`
  color: white;
`

const Example = () => (
  <Wrapper>
    <Content>with styled-components</Content>
  </Wrapper>
)

export default Example
