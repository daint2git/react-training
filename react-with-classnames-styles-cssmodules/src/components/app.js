import React from 'react'
import { hot } from 'react-hot-loader'
import ExampleWithClassNames from './classnames'
import ExampleWithStyledComponents from './styledComponents'
import ExampleWithCssModuleNameTag from './cssModuleNameTag'

const App = () => (
  <div>
    <h2>Styles</h2>
    <ExampleWithClassNames />
    <div style={{ margin: '10px 0', border: '1px solid black' }} />
    <ExampleWithStyledComponents />
    <div style={{ margin: '10px 0', border: '1px solid black' }} />
    <ExampleWithCssModuleNameTag />
  </div>
)

export default hot(module)(App)
