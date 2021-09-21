import React, { Fragment } from 'react'
import Grid from '@/components/Common/Grid'
import SpeakerCard from '@/components/ScheduleDetail/SpeakerCard'
import { Button, Container } from '@/components/Common'
import { Popover, Transition } from '@headlessui/react'
import { Router, useRouter } from 'next/dist/client/router'

export default function ScheduleDesc({ data }) {
  const route = useRouter()

  return (
    <section id="schedule-details" className="px-4 w-full lg:px-0">
      <Grid className="mt-24 mx-auto max-w-screen-xl lg:mt-32">
        <div className="block col-span-full lg:col-span-7 lg:col-start-1">
          <h1 className="mb-6 text-black-primary text-lg lg:text-3xl">
            {data && data.title}
          </h1>
          <div className="flex flex-col mb-6 space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
            {data && <SpeakerCard data={data.speaker} />}
          </div>
          <div className="flex flex-col mt-4 lg:hidden">
            <h1 className="text-black-primary text-sm">Date and Time</h1>
            <p className="mt-2 text-black-primary text-opacity-75 text-sm font-normal">
              {data && data.date}
            </p>
            <p className="mt-1 text-black-primary text-opacity-75 text-sm font-normal">
              {data && data.time} | 120 Menit
            </p>
          </div>
          {/*
           * // TODO Add button calender if we have time to implement it
           */}
          <hr className="my-7 w-full border-gray-100" />
          <p className="text-black-primary text-opacity-75 font-normal">
            {data && data.subtitle}
          </p>
        </div>
        <div className="h-[max-content] hidden col-span-full p-8 border rounded-xl lg:block lg:col-span-4 lg:col-start-9">
          <h1 className="mb-2 text-black-primary text-2xl font-semibold">
            Date and Time
          </h1>
          <p className="mb-4 w-56 text-black-primary text-opacity-75">
            {data && data.date} {data && data.time} | 120 Menit
          </p>

          <Popover className="relative hidden">
            <>
              <Popover.Button className="flex items-center mb-8 text-pink-500">
                Add to Calendar
                <img
                  src="/icon/add.svg"
                  alt="tambah"
                  className="ml-2 w-4 h-4"
                />
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
                    <img
                      src="/icon/apple.svg"
                      alt="apple"
                      className="w-4 h-4"
                    />
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
                    <img
                      src="/icon/yahoo.svg"
                      alt="yahoo"
                      className="w-4 h-4"
                    />
                    <p className="ml-3 font-medium">Yahoo</p>
                  </Button>
                </Popover.Panel>
              </Transition>
            </>
          </Popover>

          <Button
            className="w-full"
            onClick={() => route.push('https://lynk.id/logos_id/P9erAl8')}
          >
            Register Now
          </Button>
        </div>
      </Grid>
      {/*
       * *Floating Register
       */}
      <div className="shadow fixed z-20 bottom-0 left-0 right-0 block py-3 bg-white shadow-airbnb lg:hidden">
        <Container>
          <Button
            className="py-3 w-full text-base"
            onClick={() => route.push('https://lynk.id/logos_id/P9erAl8')}
          >
            Register Now
          </Button>
        </Container>
      </div>
    </section>
  )
}
