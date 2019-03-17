import React from 'react'

function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      return super.render()
    }
  }
}

class TestComponent extends React.Component {
  render() {
    return <h3 {...this.props}>Hello Inheritance Inversion HOC</h3>
  }
}

export default iiHOC(TestComponent)
