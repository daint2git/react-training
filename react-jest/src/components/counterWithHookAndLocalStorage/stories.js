import React from 'react'
import { storiesOf } from '@storybook/react'
import CounterWithHookAndLocalStorage from './'

storiesOf('CounterWithHookAndLocalStorage', module).add('default', () => (
  <CounterWithHookAndLocalStorage />
))
