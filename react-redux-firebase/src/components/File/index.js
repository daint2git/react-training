import React, { useState } from 'react'

const File = () => {
  const [file, setFile] = useState({})
  const fileId = performance.now()
  return (
    <div>
      Select a file:{' '}
      <button type="button" onClick={() => document.getElementById(fileId).click()}>
        Select file
      </button>
      <input
        type="file"
        id={fileId}
        onChange={e => {
          setFile(e.target.files[0])
        }}
        style={{ display: 'none' }}
      />
      <div>
        <span>File name: {file.name}</span>
      </div>
    </div>
  )
}

export default File
