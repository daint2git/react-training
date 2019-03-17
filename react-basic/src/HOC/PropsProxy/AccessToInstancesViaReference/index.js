import React from 'react'

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    proc(wrappedComponentInstance) {
      wrappedComponentInstance.method()
    }

    render() {
      const props = { ...this.props, ref: this.proc.bind(this) }
      return <WrappedComponent {...props} />
    }
  }
}

const TestComponent = props => {
  return <h3 {...props}>Hello Props Proxy HOC: Access to instances via reference</h3>
}

export default ppHOC(TestComponent)
