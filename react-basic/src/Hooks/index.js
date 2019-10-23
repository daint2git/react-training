import React from 'react'
import CallbackHook from './CallbackHook'
import ContextHook from './ContextHook'
import EffectHook from './EffectHook'
import MemoHook from './MemoHook'
import RefHook from './RefHook'
import StateHook from './StateHook'
import LayoutEffect from './LayoutEffect'

export default () => (
  <>
    <CallbackHook />
    <ContextHook />
    <EffectHook />
    <MemoHook />
    <RefHook />
    <StateHook />
    <LayoutEffect />
  </>
)
