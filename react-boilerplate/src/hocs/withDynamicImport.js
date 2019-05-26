import React, { lazy, Suspense } from 'react'

import getDisplayName from './utils/getDisplayName'
import setDisplayName from './utils/setDisplayName'

const withDynamicImport = (importFunc, { fallback = null } = { fallback: null }) => {
  const LazyComponent = lazy(importFunc)

  const WithDynamicImport = props => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  )

  if (process.env.NODE_ENV !== 'production') {
    return setDisplayName(`withDynamicImport(${getDisplayName(LazyComponent)})`)(WithDynamicImport)
  }

  return WithDynamicImport
}

export default withDynamicImport
