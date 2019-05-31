import React from 'react'

import CodeEditor from './CodeEditor'
import AnotherEditor from './AnotherEditor'

const App = () => (
  <div>
    <h2>Monaco Editor Sample (controlled mode)</h2>
    <CodeEditor />
    <hr />
    <h2>Another editor (uncontrolled mode)</h2>
    <AnotherEditor />
  </div>
)

export default App
