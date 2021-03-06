import React from 'react'
import { Container, Grid } from '../Common'
import CardBook from './Common/CardBook'
import HeadSection from './Common/HeadSection'
// import ImgBraille from '@/public/img/homepage/book/braille.svg'
// import ImgRampai from '@/public/img/homepage/book/rampai.svg'
import InViewDiv from '../Common/InViewDiv'
import { FadeInUp } from '../Animations'
import { motion } from 'framer-motion'

const Book = () => {
  return (
    <section id="bunga-rampai" className="pt-20 w-full lg:pt-36">
      <Container>
        <Grid className="px-4">
          <motion.div
            variants={FadeInUp}
            className="col-span-12 mb-4 lg:col-span-6 lg:col-start-4"
          >
            <HeadSection title="Buku Gratis untuk Kita Semua!" subtitle="" />
          </motion.div>
          <motion.div variants={FadeInUp} className="col-span-12 lg:col-span-6">
            <CardBook
              className="pattern-before ornament-star"
              title="Bunga Rampai"
              subtitle="Buku ini berisi transkripsi dari seluruh rangkaian acara Logos Fest. Mulai dari Justice Bootcamp hingga Justice Talks. "
              imgSrc="/img/homepage/book/rampai.svg"
            />
          </motion.div>
          <motion.div variants={FadeInUp} className="col-span-12 lg:col-span-6">
            <CardBook
              className="pattern-after ornament-sun"
              title="Buku Braille"
              subtitle="Buku ini adalah hasil translasi dari bunga rampai yang akan dibagikan ke berbagai perpustakaan dan yayasan."
              imgSrc="/img/homepage/book/braille.svg"
            />
          </motion.div>
        </Grid>
      </Container>
    </section>
  )
}

export default Book
