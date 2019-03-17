import React from 'react'

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

const TestComponent = props => <h3 {...props}>Hello Props Proxy HOC</h3>

export default ppHOC(TestComponent)
