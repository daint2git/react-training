import React, { Component } from 'react'
import StateHook from './StateHook'
import EffectHook from './EffectHook'
import ContextHook from './ContextHook'

class Hooks extends Component {
  render() {
    return (
      <>
        <StateHook />
        <EffectHook />
        <ContextHook />
      </>
    )
  }
}

export default Hooks
