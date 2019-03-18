import React from 'react'
import cssModuleNameTag from './cssModuleNameTag'
import styles from './styles.scss'

const cssModules = cssModuleNameTag(styles)

const Example = () => (
  <div className={cssModules`root example  center isHover false NaN undefined null`}>
    <p className={cssModules`content`}>with cssModuleNameTag</p>
    <span className={cssModules``}>abc</span>
  </div>
)

export default Example
