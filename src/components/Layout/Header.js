import Link from 'next/link'
import DesktopListAndButton from './Header/DesktopListAndButton'
import DetailNav from './Header/DetailNav'
import MobileListAndButton from './Header/MobileListAndButton'

const Header = () => {
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
          <MobileListAndButton />

          <DesktopListAndButton />
        </nav>
      </header>
    </>
  )
}

export default Header
