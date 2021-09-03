import React, { Fragment, useContext } from 'react'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import { Button } from '@/components/Common'
import { AuthContext } from '@/context/auth/AuthProvider'

export default function Profile() {
  const authContext = useContext(AuthContext)

  return (
    <div className="relative">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button aria-label="profile picture">
              <Image
                src="/img/header/profile.png"
                width={42}
                height={42}
                alt="profile picture"
              />
            </Popover.Button>
            <Transition
              appear
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 right-0 mt-1 p-4 w-72 max-w-sm bg-white rounded-md shadow-navbar sm:px-0 lg:max-w-3xl">
                <div className="px-4">
                  <section id="header-popover" className="flex pb-4 border-b">
                    <div className="block w-10 h-10 rounded-full">
                      <Image
                        src="/img/header/profile.png"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="ml-3">
                      <h1 className="text-black-primary text-sm font-medium">
                        John Doe
                      </h1>
                      <h1 className="text-gray-400 text-xs">
                        johndoe@gmail.com
                      </h1>
                    </div>
                  </section>
                  <section
                    id="content-popover"
                    className="flex flex-col border-b"
                  >
                    <Button
                      variant="unstyled"
                      className="flex items-center text-sm font-medium"
                    >
                      <img
                        src="/icon/schedules.svg"
                        alt="schedule icon"
                        className="w-3 h-3"
                      />
                      <p className="ml-3">Schedules</p>
                    </Button>
                    <Button
                      variant="unstyled"
                      className="flex items-center text-sm font-medium"
                    >
                      <img
                        src="/icon/mycalendar.svg"
                        alt="schedule icon"
                        className="w-3 h-3"
                      />
                      <p className="ml-3">Calendar</p>
                    </Button>
                  </section>
                  <Button
                    id="footer-popover"
                    className="mt-4 w-full"
                    onClick={authContext.logout}
                  >
                    Sign Out
                  </Button>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}
