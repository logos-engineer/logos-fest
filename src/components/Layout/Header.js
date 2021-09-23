import clsx from 'clsx'
import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DesktopListAndButton from './Header/DesktopListAndButton'
import MobileListAndButton from './Header/MobileListAndButton'

const Header = () => {
  const route = useRouter()
  const [onTop, setOnTop] = useState(true)

  const handleScroll = () => {
    if (onTop !== (window.pageYOffset === 0)) {
      setOnTop(window.pageYOffset === 0)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <>
      <header
        className={clsx(
          'fixed z-30 left-0 right-0 top-0 py-4 w-screen bg-white transition-all',
          !onTop && 'shadow-navbar'
        )}
      >
        <nav className="flex items-center justify-between mx-auto px-4 max-w-screen-xl lg:px-0">
          <Link passHref href="/">
            <a
              onClick={() => {
                if (route.pathname === '/') {
                  window.scrollTo({
                    top: 0,
                  })
                }
              }}
            >
              <img
                src="/icon/logos.png"
                className="h-[32px] w-auto"
                alt="Logos Logo"
              />
            </a>
          </Link>
          <MobileListAndButton />

          <DesktopListAndButton />
        </nav>
      </header>
    </>
  )
}

export default Header
