import React from 'react'
import { withTranslation } from 'react-i18next'

const RepoContainer = ({ t, children, ...other }) => (
  <div {...other}>
    <h2>{t('title')}</h2>
    {children}
  </div>
)

export default withTranslation()(RepoContainer)
