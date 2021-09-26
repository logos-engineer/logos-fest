import { motion } from 'framer-motion'
import React from 'react'
import { FadeInUp } from '../Animations'
import { Container, Grid } from '../Common'
import HeadSection from './Common/HeadSection'

const Sponsors = () => {
  return (
    <section id="sponsor" className="pt-20 w-full">
      <Container>
        <Grid className="gap-y-7 sm:gap-y-0">
          <motion.div
            variants={FadeInUp}
            className="col-span-12 mb-4 lg:col-span-6 lg:col-start-4"
          >
            <HeadSection title="Our Sponsor and Media Partner" subtitle="" />
          </motion.div>
          <div className="flex col-span-full items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/indika.svg"
              alt=""
              className="w-[164px] h-auto"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/magdalene.svg"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/political-jokes.svg"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/greatmind.svg"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/kelas.png"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/jadi-gini.svg"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/finery-report.png"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/ekskul.svg"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
          <div className="flex col-span-6 items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/kok-bisa.svg"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
          <div className="flex col-span-full items-center justify-center">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/inspect-history.svg"
              alt=""
              className="max-w-[180px] w-full h-auto"
            />
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default Sponsors
