/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
// eslint-disable-next-line import/no-unresolved, import/extensions
import MonacoEditor from 'react-monaco-editor'
/* eslint-enable import/no-extraneous-dependencies */

// Using with webpack
class CodeEditor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: '//a1\n//a2\n//a3\n//a4\n',
      theme: 'vs',
    }
    this.abc = React.createRef()
  }

  onChange = (newValue, e) => {
    console.log('onChange', newValue, e) // eslint-disable-line no-console
    // console.log(this.editor)
    // console.log(this.editor.getDomNode())
    // console.log('this.editor', this.editor.getModel().getFullModelRange())
    // console.log(this.editor.getVisibleRanges())
    console.log(this.editor.getPosition())
  }

  editorDidMount = (editor, monaco) => {
    // eslint-disable-next-line no-console
    console.log('editorDidMount', editor)
    this.editor = editor
    this.monaco = monaco
    this.editor.focus()
  }

  changeEditorValue = () => {
    if (this.editor) {
      this.editor.setValue('// code changed! \n')
    }
  }

  changeBySetState = () => {
    this.setState({ code: '// code changed by setState! \n' })
  }

  handleThemeChange = e => {
    this.setState({ theme: e.target.value })
  }

  onDidScrollChange = listener => {
    console.log('listener', listener)
  }

  render() {
    const { code, theme } = this.state
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: false,
      readOnly: false,
      cursorStyle: 'line',
      automaticLayout: false,
      lineNumbers: 'on',
      fontSize: 20,
    }
    return (
      <div>
        <div>
          <button onClick={this.changeEditorValue} type="button">
            Change value
          </button>
          <button onClick={this.changeBySetState} type="button">
            Change by setState
          </button>
        </div>
        <select onChange={this.handleThemeChange}>
          <option value="vs">vs</option>
          <option value="vs-dark">vs-dark</option>
          <option value="hc-black">hc-black</option>
        </select>
        <hr />
        <MonacoEditor
          ref={this.abc}
          height="500"
          language="javascript"
          value={code}
          options={options}
          theme={theme}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          onDidScrollChange={this.onDidScrollChange}
        />
      </div>
    )
  }
}

export default CodeEditor
