import React from 'react'
import Layout from '@/components/Layout/Layout'
import Grid from '@/components/Common/Grid'
import SpeakerCard from '@/components/ScheduleDetail/SpeakerCard'
import { Button } from '@/components/Common'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'
import listSchedule from '@/data/listSchedule'

export default function ScheduleDetail() {
  return (
    <Layout>
      <Grid className="mt-32 mx-auto max-w-screen-xl">
        <div className="block col-span-7 col-start-1 font-semibold">
          <h1 className="mb-6 text-black-primary text-3xl">
            Concept of Justice
          </h1>
          <div className="flex mb-6 space-x-8">
            <SpeakerCard />
            <SpeakerCard />
          </div>
          <p className="text-black-primary text-opacity-75 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            tempor in dictumst sed mattis sed tellus. Aliquam, facilisi ante in
            neque blandit scelerisque nunc. Scelerisque risus quis mauris risus,
            ac nullam. Purus ac, velit vestibulum egestas neque risus, cursus
            nec malesuada. Vitae et nunc turpis elementum. Leo in amet, risus,
            in tellus lobortis egestas. Semper cursus blandit purus feugiat
            egestas ut eu. Turpis egestas sociis odio et, amet fermentum mattis
            tristique. Eu condimentum vivamus eleifend netus facilisi. Metus
            abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvw
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique
            tempor in dictumst sed mattis sed tellus. Aliquam, facilisi ante in
            neque blandit scelerisque nunc. Scelerisque risus quis mauris risus,
            ac nullam. Purus ac, velit vestibulum egestas neque risus, cursus
            nec malesuada. Vitae et nunc turpis elementum. Leo in amet, risus,
            in tellus lobortis egestas. Semper cursus blandit purus feugiat
            egestas ut eu. Turpis egestas sociis odio et, amet fermentum mattis
            tristique. Eu condimentum vivamus eleifend netus facilisi. Metus.
          </p>
        </div>
        <div className="h-[max-content] block col-span-4 col-start-9 p-8 border rounded-xl">
          <h1 className="mb-2 text-black-primary text-2xl font-semibold">
            Date and Time
          </h1>
          <p className="mb-4 w-56 text-black-primary text-opacity-75">
            Senin, 7 November 2021 17.00 - 18.00 WIB | 60 Menit
          </p>
          <button className="flex items-center mb-8 text-pink-500">
            Add to Calendar
            <img src="/icon/add.svg" alt="tambah" className="ml-2 w-4 h-4" />
          </button>
          <Button>Register Now</Button>
        </div>
      </Grid>
      <Grid className="mt-16 mx-auto max-w-screen-xl">
        <h1 className="col-span-12 text-black-primary text-2xl font-semibold">
          Kelas lainnya dari Bootcamp ini
        </h1>
        <div className="grid gap-10 col-span-12 grid-cols-2">
          {listSchedule[0].schedule.map((list) => (
            <div className="col-span-1">
              <CardSchedule
                key={list.title}
                title={list.title}
                date={list.date}
                subtitle={list.subtitle}
                urlRegister={list.urlSchedule}
                imgPerson={list.person}
              />
            </div>
          ))}
        </div>
      </Grid>
    </Layout>
  )
}
