import { configure, addParameters } from '@storybook/react'

addParameters({
  options: {
    showPanel: false,
  },
})

const requests = require.context('../src/components/', true, /story\.js$/)
configure(requests.keys().forEach(requests), module)
