import React from 'react'
import Footer from './Footer'
import Header from './Header'
import RegisterModal from './RegisterModal'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <RegisterModal />
      {children}
      <Footer />
    </>
  )
}

export default Layout
