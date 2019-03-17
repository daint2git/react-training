import React from 'react'
import repeaterComponent from './repeaterComponent'

const list = [
  {
    id: 101,
    name: 'name 101',
  },
  {
    id: 102,
    name: 'name 102',
  },
  {
    id: 103,
    name: 'name 103',
  },
]

const TestComponent = ({ id, name }) => (
  <div style={{ padding: 10, backgroundColor: 'aqua' }}>
    <p>{id}</p>
    <p>{name}</p>
  </div>
)

const ManyTestComponent = repeaterComponent(TestComponent)

export default () => <ManyTestComponent list={list} otherProps="otherProps" />
