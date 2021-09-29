import WrapperProvider from '@/context/WrapperProvider'
import '@/styles/tailwind.css'
import { AnimateSharedLayout } from 'framer-motion'
import { useEffect } from 'react'
import splitbee from '@splitbee/web'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init({
      token: 'OF7G9OB5SDD8',
      disableCookie: false,
    })
  }, [])
  return (
    <WrapperProvider>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </WrapperProvider>
  )
}

export default MyApp
