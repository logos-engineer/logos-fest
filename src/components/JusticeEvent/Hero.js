import { motion } from 'framer-motion'
import React from 'react'
import { FadeInUp } from '../Animations'
import { Container, Grid } from '../Common'

const Hero = ({ eventName }) => {
  const subtitleBootcamp =
    'Terdapat 4 buah kelas (Filsafat, Hukum, Gender, dan Politik) yang terdiri dari 3-4 pertemuan dalam Justice Bootcamp. Setiap pertemuan diisi oleh akademisi yang ahli di bidangnya.'
  const subtitleTalks =
    'Acara puncak Logos Fest tahun ini akan mengundang beberapa pemikir internasional yang penelitiannya berfokus pada konsep keadilan dan filsafat politik.'

  return (
    <Container>
      <Grid className="px-4 lg:px-0">
        <div className="flex flex-col col-span-12 items-center mb-12 lg:col-span-6 lg:col-start-4">
          <motion.h3
            variants={FadeInUp}
            className="text-center text-black-primary text-lg font-semibold leading-normal lg:text-3xl"
          >
            {eventName === 'talks' && 'Justice Talks'}
            {eventName === 'bootcamp' && 'Justice Bootcamp'}
          </motion.h3>
          <motion.p
            variants={FadeInUp}
            className="mt-3 text-center text-black-body text-base leading-normal lg:mt-4 lg:text-lg"
          >
            {eventName === 'talks' ? subtitleTalks : subtitleBootcamp}
          </motion.p>
        </div>
      </Grid>
    </Container>
  )
}

export default Hero
