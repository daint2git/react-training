import React from 'react'
import { ReactReduxContext } from 'react-redux'

import getInjectors from './sagaInjectors'

const useInjectSaga = ({ key, saga, mode }) => {
  const context = React.useContext(ReactReduxContext)
  React.useEffect(() => {
    const injectors = getInjectors(context.store)
    injectors.injectSaga(key, { saga, mode })

    return () => {
      injectors.ejectSaga(key)
    }
  }, [context.store, key, mode, saga])
}

export default useInjectSaga
