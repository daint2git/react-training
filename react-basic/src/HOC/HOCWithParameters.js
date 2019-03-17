import React from 'react'

function HOCFactoryFactory(...params) {
  // do something with params
  return function HOCFactory(WrappedComponent) {
    return class HOC extends React.Component {
      render() {
        return <WrappedComponent {...this.props} />
      }
    }
  }
}

const HOCFactoryFactory = (...params) => {
  // do something with params
  const HOCFactory = WrappedComponent => {
    const HOC = props => <WrappedComponent {...props} />
    return HOC
  }
  return HOCFactory
}

const HOCFactoryFactory = (...params) => WrappedComponent => {
  // do something with params
  const HOC = props => <WrappedComponent {...props} />
  return HOC
}

export default HOCFactoryFactory
