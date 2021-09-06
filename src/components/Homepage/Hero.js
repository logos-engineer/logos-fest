import React, { useContext } from 'react'
import { Button, Container, Grid } from '../Common'
import Image from 'next/image'
import HeroImg from '@/public/img/homepage/hero-1.png'
import HeroMobile from '@/public/img/homepage/hero-mobile.png'
import { ModalContext } from '@/context/RegistModal/ModalProvider'

const Hero = () => {
  const modalContext = useContext(ModalContext)

  return (
    <section id="hero" className="lg:pt-[221px] pb-36 pt-28 w-full">
      <Container>
        <Grid>
          <div className="flex flex-col col-span-11 justify-center pl-4 lg:col-span-5 lg:pr-7">
            <p className="text-pink-500 text-md">1 November - 1 Desember</p>
            <h1 className="mt-2 text-black-primary text-xl font-bold leading-snug lg:text-5xl">
              Logos Fest
            </h1>
            <p className="mt-6 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              aliquet massa dui suscipit.
            </p>
            <div className="lg:mt-[42px] lg:pattern-before lg:ornament-small-star relative mt-6">
              <Button
                onClick={() => modalContext.setmodalView(true)}
                className="w-full lg:w-max"
              >
                Register Here!
              </Button>
            </div>
          </div>
          <div className="col-span-11 pl-4 lg:col-span-7 lg:col-start-6">
            <div className="relative hidden w-full h-full rounded-3xl overflow-hidden lg:block">
              <div className="absolute w-full bg-black-500 bg-opacity-40 lg:h-full"></div>
              <Image
                src={HeroImg}
                alt="Hero Image"
                className="relative w-full h-full object-contain"
                layout="responsive"
                width={698}
                height={444}
              />
            </div>
            <div className="relative w-full rounded-3xl overflow-hidden lg:hidden">
              <div className="absolute w-full bg-black-500 bg-opacity-40 lg:h-full"></div>
              <Image
                className="border-8 lg:hidden"
                src={HeroMobile}
                alt=" Hero Image"
                layout="responsive"
                width={328}
                height={180}
              />
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default Hero
