import React from 'react'
import { Container, Grid } from '@/components/Common'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'
import { motion } from 'framer-motion'
import { FadeInUp } from '../Animations'

export default function SpeakerClass({ listClass }) {
  return (
    <section id="speaker-class" className="px-4 lg:px-0">
      <Container>
        <Grid>
          <motion.h1
            variants={FadeInUp}
            className="col-span-full mt-10 text-black-primary text-base font-semibold lg:col-span-11 lg:col-start-1 lg:mt-32 lg:text-3xl"
          >
            Speaker Classes
          </motion.h1>
          <div className="grid gap-6 col-span-full mt-4 sm:col-span-full sm:col-start-1 lg:gap-10 lg:grid-cols-2 lg:mt-0">
            {listClass.map((list) => (
              <div className="col-span-1">
                <CardSchedule
                  slug={list.slug}
                  category={list.category}
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
      </Container>
    </section>
  )
}
