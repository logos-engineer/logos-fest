import { motion } from 'framer-motion'
import React from 'react'
import { FadeInUp } from '../Animations'
import { Container, Grid } from '../Common'

const Hero = () => {
  return (
    <Container>
      <Grid>
        <div className="flex flex-col col-span-full items-center mb-12 sm:col-span-8 sm:col-start-3 lg:col-span-6 lg:col-start-4">
          <motion.h3
            variants={FadeInUp}
            className="text-center text-black-primary text-lg font-semibold leading-normal sm:text-2xl lg:text-3xl"
          >
            Speakers
          </motion.h3>
          {/* <p className="mt-4 text-center text-black-body text-base leading-normal sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa cras
            ipsum dolor sit amet, consectetur{' '}
          </p> */}
        </div>
      </Grid>
    </Container>
  )
}

export default Hero
