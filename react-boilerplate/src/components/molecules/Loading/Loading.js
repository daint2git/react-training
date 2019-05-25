import React from 'react'

import cssModuleNameTag from 'utils/cssModuleNameTag'
import Backdrop from 'components/atoms/Backdrop'

import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Wave = () => (
  <div className={cssModules`wave`}>
    <span className={cssModules`dot`} />
    <span className={cssModules`dot`} />
    <span className={cssModules`dot`} />
  </div>
)

const Loading = () => (
  <Backdrop type="loading">
    <div className={cssModules`root`}>
      <Wave />
    </div>
  </Backdrop>
)

export default Loading
