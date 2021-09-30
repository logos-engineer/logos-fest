import WrapperProvider from '@/context/WrapperProvider'
import '@/styles/tailwind.css'
import { AnimateSharedLayout } from 'framer-motion'
import { useEffect } from 'react'
import splitbee from '@splitbee/web'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    splitbee.init({
      token: 'C75H4N98QDIJ',
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
