import React from 'react';
import { Button, Container, Grid } from '../Common';
import Image from 'next/image';
import HeroImg from '@/public/img/homepage/hero-1.png';
const Hero = () => {
  return (
    <section id="hero" className="pt-[221px] pb-36 w-full">
      <Container>
        <Grid>
          <div className="flex flex-col col-span-5 justify-center pr-7">
            <p className="text-pink-500 text-md">1 November - 1 Desember</p>
            <h1 className="mt-2 text-black-primary text-5xl font-bold leading-snug">
              Logos Fest
            </h1>
            <p className="mt-6 text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id
              aliquet massa dui suscipit.
            </p>
            <div className="mt-[42px] pattern-before ornament-small-star relative">
              <Button>Register Here!</Button>
            </div>
          </div>
          <div className="col-span-7 col-start-6">
            <div className="relative w-full h-full rounded-3xl overflow-hidden">
              <div className="absolute w-full h-full bg-black-500 bg-opacity-40"></div>
              <Image
                src={HeroImg}
                alt=" Hero Image"
                layout="responsive"
                width={698}
                height={444}
              />
            </div>
          </div>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
