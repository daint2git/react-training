import React from 'react'

// function SimpleHoC(WrappedComponent) {
//   return class Simple extends React.Component {
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
// }

// function SimpleHoC(WrappedComponent) {
//   return function Simple(props) {
//     return <WrappedComponent {...props} />
//   }
// }

// const SimpleHoC = WrappedComponent => {
//   return class Simple extends React.Component {
//     render() {
//       return <WrappedComponent {...this.props} />
//     }
//   }
// }

const SimpleHoC = WrappedComponent => {
  const Simple = props => <WrappedComponent {...props} />
  return Simple
}

const TestComponent = () => <h1>Hello HoC</h1>

export default SimpleHoC(TestComponent)
