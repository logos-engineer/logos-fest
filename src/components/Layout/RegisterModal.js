import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Button } from '@/components/Common'

export default function RegisterModal({
  isOpen = false,
  closeModal = () => {},
}) {
  return (
    <>
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 inset-0 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="px-4 min-h-screen text-center bg-black-primary bg-opacity-50">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block align-middle h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="shadow-xl inline-block align-middle my-8 p-8 w-full max-w-md text-left bg-white border rounded-2xl overflow-hidden transform transition-all">
                <button className="flex mb-2 ml-auto w-3 h-3">
                  <img
                    src="/icon/modal/close.svg"
                    alt="close "
                    className="w-3 h-3"
                  />
                </button>
                <Dialog.Title
                  as="h3"
                  className="bord text-black-primary text-2xl font-medium"
                >
                  Sign in.
                </Dialog.Title>

                <Dialog.Description className="mt-2 text-gray-500 text-sm">
                  Deskripsi untuk login dengan maksimal dua baris loremipsum
                  dolor sit amet.....
                </Dialog.Description>
                <section
                  id="dialog-content"
                  className="flex flex-col mt-6 space-y-2"
                >
                  <Button
                    variant="outline-secondary"
                    className="flex items-center"
                  >
                    <img src="/icon/google.svg" className="w-4 h-4" />
                    <p className="mx-auto">Sigin in with Google</p>
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="flex items-center"
                  >
                    <img src="/icon/fb.svg" className="w-4 h-4" />
                    <p className="mx-auto">Sigin in with Facebook</p>
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className="flex items-center"
                  >
                    <img src="/icon/twitterblue.svg" className="w-4 h-4" />
                    <p className="mx-auto">Sigin in with Twitter</p>
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
