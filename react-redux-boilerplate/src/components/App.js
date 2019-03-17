import React from 'react'
import { hot } from 'react-hot-loader'

import reactLogo from '../svg/react-logo.svg'
import reduxLogo from '../svg/redux-logo.svg'
import Counter from './counter'
import styles from './app.scss'

const App = () => (
  <div className={styles.root}>
    <div className={styles.header}>
      <h1 className={styles.title}>React Redux Boilerplate</h1>
      <img className={styles.logo} src={reactLogo} alt="react-logo" />
      <img className={styles.logo} src={reduxLogo} alt="redux-logo" />
    </div>
    <div>
      <Counter />
    </div>
  </div>
)

export default hot(module)(App)
