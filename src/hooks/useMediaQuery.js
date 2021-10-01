import { useState, useCallback, useEffect } from 'react'

import { useMediaQuery } from 'react-responsive'

const useMediaQueryHook = (width) => {
  const [desktop, setDesktop] = useState(false)
  const isDekstop = useMediaQuery({ minWidth: width })
  useEffect(() => {
    if (isDekstop !== desktop) {
      setDesktop(isDekstop)
    }
    console.log('Dekstop', isDekstop)
  }, [isDekstop])

  return desktop
}

export default useMediaQueryHook
