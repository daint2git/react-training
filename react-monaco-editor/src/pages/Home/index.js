import React, { useState } from 'react'
import classnames from 'classnames/bind'
import Editor from 'components/molecules/Editor'

import styles from './styles.scss'

const cx = classnames.bind(styles)

const options = {
  // selectOnLineNumbers: true,
  minimap: {
    enabled: false,
  },
  wordWrap: 'on',
  // scrollbar: {
  //   horizontal: 'hidden',
  //   vertical: 'visible',
  //   verticalScrollbarSize: '6px',
  // },
  automaticLayout: true,
}

const EditorArea = () => {
  const [code, setCode] = useState('')
  const [language] = useState('javascript')

  const editorDidMount = editor => {
    editor.focus()
  }

  const onChange = newValue => {
    console.log('dsdsds')
    setCode(newValue)
  }

  return (
    <Editor
      width="500"
      height="600"
      language={language}
      value={code}
      options={options}
      onChange={onChange}
      editorDidMount={editorDidMount}
    />
  )
}

const Home = () => {
  return (
    <>
      {/* <div className={cx('root')}>
        <div className={cx('header')}>
          <h1 className={cx('title')}>{t('title')}</h1>
          <img className={cx('logo')} src={reactLogo} alt="react-logo" />
          <img className={cx('logo')} src={reduxLogo} alt="redux-logo" />
        </div>
      </div> */}
      <EditorArea />
    </>
  )
}

export default Home
