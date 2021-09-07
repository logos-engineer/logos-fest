import React, { useContext } from 'react'
import { Button, Container, Grid } from '../Common'
import { ModalContext } from '@/context/RegistModal/ModalProvider'

const Hero = () => {
  const modalContext = useContext(ModalContext)

  return (
    <section id="hero" className="lg:pt-[221px] pb-36 pt-28 w-full">
      <Container>
        <Grid className="px-4 w-screen overflow-hidden lg:overflow-visible">
          <div className="flex flex-col col-span-12 justify-center lg:col-span-5 lg:pr-7">
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
          <div className="pattern-before ornament-dawn pattern-after ornament-star-hero relative col-span-12 mt-12 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <div className="aspect-w-3 aspect-h-2 lg:aspect-w-6 lg:aspect-h-4 relative rounded-3xl overflow-hidden">
              <iframe
                class="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/mnta9Pp2LqA?playlist=mnta9Pp2LqA&loop=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default Hero
