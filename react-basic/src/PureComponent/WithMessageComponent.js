import React from 'react'

const WithMessageComponent = ({ message }) => {
  console.log('render WithMessageComponent')
  return <li>{message}</li>
}

export default WithMessageComponent
