import { configure } from '@storybook/react'

const requests = require.context('../src/components/', true, /stories\.js$/)
configure(requests.keys().forEach(requests), module)
