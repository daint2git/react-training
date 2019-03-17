import React from 'react'

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    render() {
      const newProps = { text: 'Props Proxy HOC: Prop operation' }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

const TestComponent = ({ text, ...rest }) => <h3 {...rest}>Hello, {text}</h3>

export default ppHOC(TestComponent)
