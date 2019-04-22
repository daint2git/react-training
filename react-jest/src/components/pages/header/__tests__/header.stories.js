import React from 'react'
import { storiesOf } from '@storybook/react'
import Header from '../header'

const props = {
  user: {
    name: 'Dai',
    age: 26,
    carrer: 'developer',
  },
  message: {
    title: 'message title',
    content: 'message content',
  },
}

storiesOf('Header', module)
  .add('default', () => <Header />)
  .add('with props', () => <Header {...props} />)
