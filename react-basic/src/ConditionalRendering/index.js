import React from 'react'

const ConditionalRendering = () => (
  <>
    <div>{true}</div>
    <div>{false}</div>
    <div>{null}</div>
    <div>{undefined}</div>
    <div>{[]}</div>
    <div>{String(true)}</div>
    <div>{String(false)}</div>
    <div>{String(null)}</div>
    <div>{String(undefined)}</div>
    <div>{String([])}</div>
    <div>{true && null}</div>
    <div>{false && null}</div>
    <div>{true && undefined}</div>
    <div>{false && undefined}</div>
    <div>{true && []}</div>
    <div>{false && []}</div>
    <div>{true && <h1>true</h1>}</div>
    <div>{false && <h1>false</h1>}</div>
    <div>{undefined && <h1>undefined</h1>}</div>
    <div>{null && <h1>null</h1>}</div>
  </>
)

export default ConditionalRendering
