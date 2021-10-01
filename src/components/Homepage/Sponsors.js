import { motion } from 'framer-motion'
import React from 'react'
import { FadeInUp } from '../Animations'
import { Container, Grid } from '../Common'
import HeadSection from './Common/HeadSection'
import SponsorDekstop from './ListSponsor/SponsorDekstop'
import SponsorMobile from './ListSponsor/SponsorMobile'
import useMediaQueryHook from '@/hooks/useMediaQuery'

const Sponsors = () => {
  const isDesktop = useMediaQueryHook(1024)
  return (
    <section id="sponsor" className="pt-20 w-full lg:pt-36">
      <Container>
        <Grid className="gap-y-7 sm:gap-y-0">
          <motion.div
            variants={FadeInUp}
            className="col-span-12 mb-4 lg:col-span-6 lg:col-start-4"
          >
            <HeadSection title="Our Sponsor and Media Partner" subtitle="" />
          </motion.div>
          {isDesktop ? <SponsorDekstop /> : <SponsorMobile />}
        </Grid>
      </Container>
    </section>
  )
}

export default Sponsors
