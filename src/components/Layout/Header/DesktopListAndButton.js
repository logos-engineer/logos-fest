import { Button } from '@/components/Common'
import React from 'react'
import Profile from './Profile'
import Link from 'next/link'
import { useContext } from 'react'
import { AuthContext } from '@/context/auth/AuthProvider'
import { ModalContext } from '@/context/RegistModal/ModalProvider'
import { useRouter } from 'next/dist/client/router'

export default function DesktopListAndButton() {
  const router = useRouter()
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
      <div className="hidden space-x-3 lg:flex">
        {listMenu.map((item, index) => (
          <Link passHref href={item.link} key={index}>
            <a className="px-1 text-black-primary text-base font-medium leading-normal">
              {item.name}
            </a>
          </Link>
        ))}
      </div>
      <div className="hidden lg:block">
        {authContext.authData.loggedIn ? (
          <Profile />
        ) : (
          <Button
            onClick={() => {
              router.push('/#schedule')

              // modalContext.setmodalView(true)
            }}
          >
            Registration
          </Button>
        )}
      </div>
    </>
  )
}
