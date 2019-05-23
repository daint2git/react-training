import React from 'react'
import hoistNonReactStatics from 'hoist-non-react-statics'
import getDisplayName from './getDisplayName'

const withStyles = WrappedComponent => {
  const WithStyles = props => <WrappedComponent {...props} styles={{ color: 'red' }} />
  WithStyles.displayName = `WithStyles(${getDisplayName(WrappedComponent)})`
  hoistNonReactStatics(WithStyles, WrappedComponent)
  console.warn('typeof', typeof WithStyles.getCurrentTime)
  return WithStyles
}

export default withStyles
