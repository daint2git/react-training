import { useState, useCallback, useEffect } from 'react'

const INITIAL_DIMENSIONS = () => ({
  windowHeight: undefined,
  windowWidth: undefined,
})

function useWindowDimensions() {
  const [dimensions, setDimensions] = useState(() => INITIAL_DIMENSIONS())

  const resize = useCallback(() => {
    setDimensions({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    })
  }, [setDimensions])

  useEffect(() => {
    window.addEventListener('resize', resize)
    resize()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [resize])

  return dimensions
}

export default useWindowDimensions
