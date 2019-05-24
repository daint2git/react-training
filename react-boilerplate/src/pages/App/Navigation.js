import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Navigation = () => {
  const { t } = useTranslation()
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">{t('routes.home')}</Link>
        </li>
        <li>
          <Link to="/about">{t('routes.about')}</Link>
        </li>
        <li>
          <Link to="/other">{t('routes.other')}</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
