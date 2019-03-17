import React from 'react'

function ppHOC(WrappedComponent) {
  return class PP extends React.Component {
    state = { value: '' }

    onChange = e => this.setState({ value: e.target.value })

    render() {
      const newProps = {
        value: this.state.value,
        onChange: this.onChange,
      }
      return <WrappedComponent {...this.props} {...newProps} />
    }
  }
}

const TestComponent = props => (
  <div>
    <h3>Hello Props Proxy HOC: Abstraction of State</h3>
    <input name="name" {...props} />
  </div>
)

export default ppHOC(TestComponent)
