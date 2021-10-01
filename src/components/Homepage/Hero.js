import React, { useContext, useEffect } from 'react'
import { Button, Container, Grid } from '../Common'
import { ModalContext } from '@/context/RegistModal/ModalProvider'
import { useRouter } from 'next/dist/client/router'
import { route } from 'next/dist/server/router'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { StaggerChildFast, FadeInUp } from '../Animations'
import InViewDiv from '../Common/InViewDiv'
import Image from 'next/image'
import HeroImage from '@/public/img/homepage/main/logos-hero.png'
const Hero = () => {
  const modalContext = useContext(ModalContext)
  const router = useRouter()
  const controls = useAnimation()
  const [ref, inView] = useInView()
  controls.start("show")

  // useEffect(() => {
  //   if (inView) {
  //     controls.start('show')
  //   }
  // }, [inView])
  
  return (
    <section id="hero" className="lg:pt-[221px] pb-14 pt-28 w-full sm:pb-36">
      <Container>
        <Grid className="px-4 w-screen overflow-hidden lg:overflow-visible">
          <InViewDiv
            variants={StaggerChildFast}
            className="flex flex-col col-span-12 justify-center lg:col-span-5 lg:pr-7"
          >
            <motion.p variants={FadeInUp} className="text-ocean-300 text-md">
              3 November - 4 Desember
            </motion.p>
            <motion.h1
              variants={FadeInUp}
              className="mt-2 text-black-primary text-xl font-bold leading-snug lg:text-5xl"
            >
              Logos Fest
            </motion.h1>
            <motion.p variants={FadeInUp} className="mt-6 text-md">
              Festival edukasi inklusif yang mengangkat tema Justice. Seluruh
              kegiatan Logos Fest gratis dan tersedia Juru Bahasa Isyarat.
            </motion.p>
            <motion.div
              variants={FadeInUp}
              className="lg:mt-[42px] lg:pattern-before lg:ornament-small-star relative mt-6"
            >
              <Button
                onClick={() => {
                  router.push('/#schedule')
                  // modalContext.setmodalView(true)
                }}
                className="w-full lg:w-max"
              >
                Register Here!
              </Button>
            </motion.div>
          </InViewDiv>
          <div className="relative col-span-12 mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <motion.div
              ref={ref}
              variants={FadeInUp}
              initial="hidden"
              animate={controls}
              className="relative rounded-3xl overflow-hidden"
            >
              <Image
                placeholder="blur"
                src={HeroImage}
                alt="Logos Festival"
                width={694}
                height={400}
                layout="responsive"
                quality={100}
              />
            </motion.div>
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default Hero
