import React from 'react'
import Grid from '@/components/Common/Grid'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'

export default function BootcampClass({ data }) {
  return (
    <Grid className="mt-16 mx-auto max-w-screen-xl">
      <h1 className="col-span-12 text-black-primary text-2xl font-semibold">
        Kelas lainnya dari Bootcamp ini
      </h1>
      <div className="grid gap-10 col-span-12 grid-cols-2">
        {data.map((list) => (
          <div className="col-span-1">
            <CardSchedule
              category={list.category}
              slug={list.slug}
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
  )
}
