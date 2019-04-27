import React from 'react'
import styles from './styles.scss'
import file from './file.jpg'

const Example = () => (
  <div className={styles.root}>
    <button className={styles.button}>Click</button>
    <img src={file} alt="file" />
  </div>
)

export default Example
