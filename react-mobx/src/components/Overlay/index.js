import React from 'react'
import styled from 'styled-components'

const ContainerStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`

const Overlay = () => <ContainerStyled />

export default Overlay
