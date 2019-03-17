import React from 'react'
import getDisplayName from './getDisplayName'
import setDisplayName from './setDisplayName'
import hash from './fnv-hash'

const either = (value, tester = value => !!value) => orElse => (tester(value) ? value : orElse)

const keyGenerator = (props = {}) => hash(JSON.stringify(props))

const repeaterComponent = (BaseComponent, propName = 'list') => {
  const RepeaterComponent = props => {
    const copyProps = { ...props }
    const list = copyProps[propName]
    // delete prop with key is propName
    delete copyProps[propName]
    return (
      list && (
        <>
          {list.map(elementProps => (
            <BaseComponent
              key={either(elementProps.key)(keyGenerator(elementProps))}
              {...elementProps}
              {...copyProps}
            />
          ))}
        </>
      )
    )
  }
  return setDisplayName(`repeaterComponent(${getDisplayName(BaseComponent)})`)(RepeaterComponent)
}

export default repeaterComponent
