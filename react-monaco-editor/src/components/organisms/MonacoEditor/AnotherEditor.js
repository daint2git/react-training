import React from 'react'
import MonacoEditor from 'react-monaco-editor'

class AnotherEditor extends React.Component {
  // eslint-disable-line react/no-multi-comp
  constructor(props) {
    super(props)
    const jsonCode = ['{', '    "$schema": "http://myserver/foo-schema.json"', '}'].join('\n')
    this.state = {
      code: jsonCode,
    }
  }

  editorWillMount = monaco => {
    monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      schemas: [
        {
          uri: 'http://myserver/foo-schema.json',
          schema: {
            type: 'object',
            properties: {
              p1: {
                enum: ['v1', 'v2'],
              },
              p2: {
                $ref: 'http://myserver/bar-schema.json',
              },
            },
          },
        },
        {
          uri: 'http://myserver/bar-schema.json',
          schema: {
            type: 'object',
            properties: {
              q1: {
                enum: ['x1', 'x2'],
              },
            },
          },
        },
      ],
    })
  }

  render() {
    const { code } = this.state
    return (
      <div>
        <MonacoEditor
          width="800"
          height="600"
          language="json"
          defaultValue={code}
          editorWillMount={this.editorWillMount}
        />
      </div>
    )
  }
}

export default AnotherEditor
