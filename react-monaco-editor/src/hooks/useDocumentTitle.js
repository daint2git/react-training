import { useEffect } from 'react'

function useDocumentTitle(tittle) {
  useEffect(() => {
    document.title = tittle
  })
}

export default useDocumentTitle
