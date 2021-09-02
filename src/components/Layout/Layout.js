import React from 'react'
import Footer from './Footer'
import Header from './Header'
import RegisterModal from './RegisterModal'

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <Header />
      <RegisterModal />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
