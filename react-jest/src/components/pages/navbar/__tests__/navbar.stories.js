import React from 'react'
import { storiesOf } from '@storybook/react'
import NavBar from '../navbar'

const props = {
  data: [
    {
      url: '/a',
      children: 'A Link',
    },
    {
      url: '/b',
      children: 'B Link',
    },
    {
      url: '/c',
      children: 'C Link',
    },
  ],
}

storiesOf('NavBar', module)
  .add('default', () => <NavBar />)
  .add('with props', () => <NavBar {...props} />)
