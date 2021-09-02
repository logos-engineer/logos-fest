import WrapperProvider from '@/context/WrapperProvider'
import '@/styles/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <WrapperProvider>
      <Component {...pageProps} />
    </WrapperProvider>
  )
}

export default MyApp
