import React from 'react'
import styled, { keyframes } from 'styled-components'
import { inject, observer } from 'mobx-react'

import Overlay from '@components/Overlay'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Rotate = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 100px;
  height: 100px;
  animation: ${rotate} 2s linear infinite;
`

const Loading = ({ LoaderStore: { isLoading } }) => {
  console.log('isLoading', isLoading)
  return isLoading ? (
    <>
      <Overlay />
      <Rotate />
    </>
  ) : null
}

export default inject('LoaderStore')(observer(Loading))
