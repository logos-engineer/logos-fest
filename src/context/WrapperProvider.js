import AuthProvider from './auth/AuthProvider'
import ModalProvider from './RegistModal/ModalProvider'
import React from 'react'

export default function WrapperProvider({ children }) {
  return (
    <>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </>
  )
}
