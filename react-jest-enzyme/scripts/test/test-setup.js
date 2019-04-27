// needed for regenerator-runtime
// (ES7 generator support is required by redux-saga)
import '@babel/polyfill'

import React from 'react'
import { shallow, mount, render } from 'enzyme'
import { createSerializer } from 'enzyme-to-json'
import renderer from 'react-test-renderer'

// Set the default serializer for Jest to be the from enzyme-to-json
// This produces an easier to read (for humans) serialized format.
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }))

// Make all functions available in all test files without importing
global.React = React
global.shallow = shallow
global.mount = mount
global.render = render
global.renderer = renderer
