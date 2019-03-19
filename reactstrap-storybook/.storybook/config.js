import { configure } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.min.css'

const requests = require.context('../src/components/', true, /stories\.js$/)
configure(requests.keys().forEach(requests), module)
