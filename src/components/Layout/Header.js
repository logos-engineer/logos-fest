import { AuthContext } from '@/context/auth/AuthProvider'
import { ModalContext } from '@/context/RegistModal/ModalProvider'
import Link from 'next/link'
import { useContext } from 'react'
import { DesktopListAndButton } from './Header/DesktopListAndButton'

const Header = () => {
  const listMenu = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Schedule',
      link: '/schedule',
    },
    {
      name: 'Speakers',
      link: '/speakers',
    },
  ]
  const modalContext = useContext(ModalContext)
  const authContext = useContext(AuthContext)

  return (
    <>
      <header className="fixed z-30 left-0 right-0 top-0 py-4 bg-white shadow-navbar lg:w-screen">
        <nav className="flex items-center justify-between mx-auto px-4 max-w-screen-xl lg:px-0">
          <Link passHref href="/">
            <a>
              <img
                src="/icon/logos.svg"
                className="h-[32px] w-auto"
                alt="Logos Logo"
              />
            </a>
          </Link>
          <button className="lg:hidden">
            <img src="/icon/ham.svg" alt="menu nav" className="w-6 h-6" />
          </button>
          <DesktopListAndButton />
        </nav>
      </header>
    </>
  )
}

export default Header
