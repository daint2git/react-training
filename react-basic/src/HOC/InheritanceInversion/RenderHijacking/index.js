import React from 'react'

function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      if (this.props.isVisibled) {
        return super.render()
      } else {
        return null
      }
    }
  }
}

class TestComponent extends React.Component {
  render() {
    return <h3>Hello Inheritance Inversion HOC: Render Hijacking</h3>
  }
}

export default iiHOC(TestComponent)
