import React from 'react'

function iiHOC(WrappedComponent) {
  return class Enhancer extends WrappedComponent {
    render() {
      return (
        <div>
          <h2>HOC Debugger Component</h2>
          <p>Props</p>
          <pre>{JSON.stringify(this.props, null, 2)}</pre>
          <p>State</p>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          {super.render()}
        </div>
      )
    }
  }
}

class TestComponent extends React.Component {
  state = { text: 'Operation of State' }
  render() {
    return <h3 {...this.props}>Hello Inheritance Inversion HOC: {this.state.text}</h3>
  }
}

export default iiHOC(TestComponent)
