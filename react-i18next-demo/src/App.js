import React, { Suspense } from 'react'
import { useTranslation, Trans } from 'react-i18next'

function MyComponent() {
  const { t, i18n } = useTranslation()
  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <>
      <Trans i18nKey="title" />
      <p>{t('description.part1')}</p>
      <p>{t('description.part2')}</p>
      <div>
        <button onClick={() => changeLanguage('vi')}>vi</button>
        <button onClick={() => changeLanguage('en')}>en</button>
      </div>
    </>
  )
}

// i18n translations might still be loaded by the xhr backend
// use react's Suspense
function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  )
}

export default App
