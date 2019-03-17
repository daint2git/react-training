import React from 'react'

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      return (
        <div style={{ backgroundColor: 'aqua' }}>
          <WrappedComponent {...this.props} />
        </div>
      )
    }
  }
}

const TestComponent = props => (
  <h3 {...props}>Hello Props Proxy HOC: Wrap a WrappedComponent with another element</h3>
)

export default ppHOC(TestComponent)
