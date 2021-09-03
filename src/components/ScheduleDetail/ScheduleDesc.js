import React, { Fragment } from 'react'
import Grid from '@/components/Common/Grid'
import SpeakerCard from '@/components/ScheduleDetail/SpeakerCard'
import { Button } from '@/components/Common'
import { Popover, Transition } from '@headlessui/react'

export default function ScheduleDesc() {
  return (
    <Grid className="mt-32 mx-auto max-w-screen-xl">
      <div className="block col-span-7 col-start-1 font-semibold">
        <h1 className="mb-6 text-black-primary text-3xl">Concept of Justice</h1>
        <div className="flex mb-6 space-x-8">
          <SpeakerCard />
          <SpeakerCard />
        </div>
        <p className="text-black-primary text-opacity-75 font-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
          tempor in dictumst sed mattis sed tellus. Aliquam, facilisi ante in
          neque blandit scelerisque nunc. Scelerisque risus quis mauris risus,
          ac nullam. Purus ac, velit vestibulum egestas neque risus, cursus nec
          malesuada. Vitae et nunc turpis elementum. Leo in amet, risus, in
          tellus lobortis egestas. Semper cursus blandit purus feugiat egestas
          ut eu. Turpis egestas sociis odio et, amet fermentum mattis tristique.
          Eu condimentum vivamus eleifend netus facilisi. Metus
          abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
          tempor in dictumst sed mattis sed tellus. Aliquam, facilisi ante in
          neque blandit scelerisque nunc. Scelerisque risus quis mauris risus,
          ac nullam. Purus ac, velit vestibulum egestas neque risus, cursus nec
          malesuada. Vitae et nunc turpis elementum. Leo in amet, risus, in
          tellus lobortis egestas. Semper cursus blandit purus feugiat egestas
          ut eu. Turpis egestas sociis odio et, amet fermentum mattis tristique.
          Eu condimentum vivamus eleifend netus facilisi. Metus.
        </p>
      </div>
      <div className="h-[max-content] block col-span-4 col-start-9 p-8 border rounded-xl">
        <h1 className="mb-2 text-black-primary text-2xl font-semibold">
          Date and Time
        </h1>
        <p className="mb-4 w-56 text-black-primary text-opacity-75">
          Senin, 7 November 2021 17.00 - 18.00 WIB | 60 Menit
        </p>

        <Popover className="relative">
          <>
            <Popover.Button>
              <button className="flex items-center mb-8 text-pink-500">
                Add to Calendar
                <img
                  src="/icon/add.svg"
                  alt="tambah"
                  className="ml-2 w-4 h-4"
                />
              </button>
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-10 top-7 flex flex-col py-3 w-56 bg-white rounded-xl shadow-fest">
                <Button
                  className="flex items-center"
                  variant="unstyled"
                  size="sm"
                >
                  <img
                    src="/icon/google.svg"
                    alt="google"
                    className="w-4 h-4"
                  />
                  <p className="ml-3 font-medium">Google</p>
                </Button>
                <Button
                  className="flex items-center"
                  variant="unstyled"
                  size="sm"
                >
                  <img src="/icon/apple.svg" alt="apple" className="w-4 h-4" />
                  <p className="ml-3 font-medium">Apple</p>
                </Button>
                <Button
                  className="flex items-center"
                  variant="unstyled"
                  size="sm"
                >
                  <img
                    src="/icon/outlook.svg"
                    alt="outlook"
                    className="w-4 h-4"
                  />
                  <p className="ml-3 font-medium">Outlook</p>
                </Button>
                <Button
                  className="flex items-center"
                  variant="unstyled"
                  size="sm"
                >
                  <img src="/icon/yahoo.svg" alt="yahoo" className="w-4 h-4" />
                  <p className="ml-3 font-medium">Yahoo</p>
                </Button>
              </Popover.Panel>
            </Transition>
          </>
        </Popover>

        <Button className="w-full">Register Now</Button>
      </div>
    </Grid>
  )
}
