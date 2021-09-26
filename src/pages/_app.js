import WrapperProvider from '@/context/WrapperProvider'
import '@/styles/tailwind.css'
import { AnimateSharedLayout } from 'framer-motion'

function MyApp({ Component, pageProps }) {
  return (
    <WrapperProvider>
      <AnimateSharedLayout>
        <Component {...pageProps} />
      </AnimateSharedLayout>
    </WrapperProvider>
  )
}

export default MyApp
