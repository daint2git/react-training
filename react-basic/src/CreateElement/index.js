import React, { Component } from 'react'

const Component1 = () => (
  <button color="blue" shadowSize={2}>
    Click Me
  </button>
)

const Component2 = props =>
  React.createElement('button', { color: 'blue', shadowSize: 2 }, 'Click Me')

const Component3 = props => <div style={{ height: 50, backgroundColor: 'red' }} />

const Component4 = props =>
  React.createElement('div', { style: { height: 50, backgroundColor: 'red' } }, null)

class index extends Component {
  render() {
    return (
      <>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
      </>
    )
  }
}

export default index
