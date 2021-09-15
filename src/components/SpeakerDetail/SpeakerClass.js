import React from 'react'
import { Grid } from '@/components/Common'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'

export default function SpeakerClass({ listClass }) {
  return (
    <section id="speaker-class" className="px-4 lg:px-0">
      <Grid>
        <h1 className="col-span-full mt-10 text-black-primary text-base font-semibold lg:col-span-11 lg:col-start-2 lg:mt-32 lg:text-3xl">
          Speaker Classes
        </h1>
        <div className="grid gap-6 col-span-full mt-4 sm:col-span-10 sm:col-start-2 lg:gap-10 lg:grid-cols-2 lg:mt-0">
          {listClass.map((list) => (
            <div className="col-span-1">
              <CardSchedule
                slug={list.slug}
                category={list.category}
                key={list.id}
                title={list.title}
                date={list.date}
                subtitle={list.subtitle}
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
