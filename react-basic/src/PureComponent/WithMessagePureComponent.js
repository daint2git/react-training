import React from 'react'

const WithMessagePureComponent = ({ message }) => {
  console.log('render WithMessagePureComponent')
  return <li>{message}</li>
}

export default WithMessagePureComponent
