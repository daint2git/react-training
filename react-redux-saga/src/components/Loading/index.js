import React from 'react'
import styled, { keyframes } from 'styled-components'
import { connect } from 'react-redux'

import Overlay from 'components/Overlay'

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

const Loading = ({ isLoading }) =>
  isLoading ? (
    <>
      <Overlay />
      <Rotate />
    </>
  ) : null

const mapStateToProps = state => ({
  isLoading: state.loading.isLoading,
})

export default connect(mapStateToProps)(Loading)
