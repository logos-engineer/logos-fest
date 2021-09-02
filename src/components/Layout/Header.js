import { ModalContext } from '@/context/RegistModal/ModalProvider'
import Link from 'next/link'
import { useContext } from 'react'
import { Button } from '../Common'

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

  return (
    <div className="relative">
      <header className="fixed z-30 left-0 right-0 top-0 py-4 bg-white shadow-navbar">
        <nav className="flex items-center justify-between mx-auto max-w-screen-xl">
          <Link passHref href="/">
            <a>
              <img
                src="/icon/logos.svg"
                className="h-[32px] w-auto"
                alt="Logos Logo"
              />
            </a>
          </Link>
          <div className="flex space-x-3">
            {listMenu.map((item, index) => (
              <Link passHref href={item.link} key={index}>
                <a className="px-1 text-black-primary text-base font-medium leading-normal">
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
          <Button onClick={() => modalContext.setmodalView(true)}>
            Registration
          </Button>
        </nav>
      </header>
    </div>
  )
}

export default Header
