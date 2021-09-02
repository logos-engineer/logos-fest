import '@/styles/tailwind.css'
import ModalProvider from '@/context/RegistModal/ModalProvider'

function MyApp({ Component, pageProps }) {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  )
}

export default MyApp
