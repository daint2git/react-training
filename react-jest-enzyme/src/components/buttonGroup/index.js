import React from 'react'
import styled from 'styled-components'
import Button from '@components/button'

const Wrapper = styled.div`
  display: flex;
`

const ButtonGroup = () => (
  <Wrapper>
    <Button className="class">
      <strong>Hello!</strong>
    </Button>
    <Button className="class1">
      <strong>Hello2!</strong>
    </Button>
  </Wrapper>
)

export default ButtonGroup
