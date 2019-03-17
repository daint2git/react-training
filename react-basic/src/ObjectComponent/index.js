import React from 'react'

const MyComponents = {
  ComponentA: props => <div>{props.children}</div>,
  ComponentB: props => <div>{props.children}</div>,
}

export default () => (
  <>
    <MyComponents.ComponentA>This is Component A</MyComponents.ComponentA>
    <MyComponents.ComponentB>This is Component B</MyComponents.ComponentB>
  </>
)
