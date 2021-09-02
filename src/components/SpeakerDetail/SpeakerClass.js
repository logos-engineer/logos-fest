import React from 'react'
import { Grid } from '@/components/Common'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'

export default function SpeakerClass({ listClass }) {
  return (
    <section id="speaker-class">
      <Grid>
        <h1 className="col-span-11 col-start-2 mt-32 text-black-primary text-3xl font-semibold">
          Speaker Classes
        </h1>
        <div className="grid gap-10 col-span-10 col-start-2 grid-cols-2">
          {listClass.map((list) => (
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
    </section>
  )
}
