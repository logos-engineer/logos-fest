import React from 'react'
import Grid from '@/components/Common/Grid'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'

export default function BootcampClass({ data }) {
  return (
    <section id="kelas-lain" className="px-4 w-full lg:px-0">
      <Grid className="mt-16 mx-auto max-w-screen-xl">
        <h1 className="col-span-12 text-black-primary text-base font-semibold lg:text-2xl">
          Kelas lainnya dari Bootcamp ini
        </h1>
        <div className="grid gap-6 col-span-12 mt-4 lg:gap-10 lg:grid-cols-2 lg:mt-0">
          {data.map((list) => (
            <div className="col-span-1">
              <CardSchedule
                category={list.category}
                slug={list.slug}
                key={list.slug}
                title={list.title}
                date={list.date}
                subtitle={list.desc}
                urlRegister={list.url}
                imgPerson={list.speaker}
              />
            </div>
          ))}
        </div>
      </Grid>
    </section>
  )
}
