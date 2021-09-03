import React from 'react'
import Layout from '@/components/Layout/Layout'
import Grid from '@/components/Common/Grid'
import SpeakerCard from '@/components/ScheduleDetail/SpeakerCard'

export default function ScheduleDetail() {
  return (
    <Layout>
      <Grid className="mt-32">
        <div className="block col-span-7 col-start-1 pl-7 font-semibold">
          <h1 className="mb-6 text-black-primary text-3xl">
            Concept of Justice
          </h1>
          <div className="flex mb-6 space-x-8">
            <SpeakerCard />
            <SpeakerCard />
          </div>
          <p className="text-black-primary text-opacity-75">
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
        <div className="block col-span-3 col-start-9 h-96 bg-green-400"></div>
      </Grid>
      <Grid className="mt-16">
        <h1 className="col-span-12 pl-7 text-black-primary text-2xl font-semibold">
          Kelas lainnya dari Bootcamp ini
        </h1>
      </Grid>
    </Layout>
  )
}
