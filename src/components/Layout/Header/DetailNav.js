import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Button } from '@/components/Common'
import { useRouter } from 'next/router'
import Link from 'next/link'
import splitbee from '@splitbee/web'
import { SPLITBEE_EVENTS } from '@/constants/eventSplitbee'

const LinkList = [
  {
    name: 'Beranda',
    route: '/',
  },
  {
    name: 'Jadwal',
    route: '/schedule',
  },
  ,
  {
    name: 'Pemateri',
    route: '/speakers',
  },
]

export default function DetailNav({ viewModal, handleModal }) {
  const router = useRouter()
  return (
    <>
      <Transition appear show={viewModal} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={() => handleModal()}
        >
          <div className="min-h-screen text-center bg-black-primary bg-opacity-50">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 h-0"
              enterTo="opacity-100 h-full"
              leave="ease-in duration-200 delay-75 "
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500 delay-75 h-[341px] "
              enterFrom="opacity-0 translate-y-full"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in-out duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-full"
            >
              <div className="shadow-xl inline-block align-middle p-4 w-full text-left bg-white overflow-hidden transform transition-all">
                <Dialog.Title as="h3" className="flex items-center">
                  <a className="flex-grow">
                    <img
                      src="/icon/logos.png"
                      className="h-[32px] w-auto"
                      alt="Logos Logo"
                    />
                  </a>
                  <button
                    className="flex w-3 h-3"
                    aria-label="close"
                    onClick={() => handleModal()}
                  >
                    <img
                      src="/icon/modal/close.svg"
                      alt="close "
                      className="w-3 h-3"
                    />
                  </button>
                </Dialog.Title>
                <section
                  id="dialog-content"
                  className="flex flex-col mt-12 space-y-6"
                >
                  {LinkList.map((list) => (
                    <Link href={list.route} passHref key={list.name}>
                      <a aria-label="link to">
                        <Button
                          variant="unstyled"
                          size="sm"
                          className="text-left font-medium hover:bg-white"
                          onClick={() => {
                            splitbee.track(list.route, {
                              data: SPLITBEE_EVENTS.NAVIGATION,
                            })
                          }}
                        >
                          {list.name}
                        </Button>
                      </a>
                    </Link>
                  ))}

                  <Button
                    onClick={() => {
                      handleModal()
                      router.push('/#schedule')
                    }}
                  >
                    Registration
                  </Button>
                </section>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
