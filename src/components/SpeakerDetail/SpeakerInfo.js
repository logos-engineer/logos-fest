import React from 'react'
import { Container, Grid } from '@/components/Common'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FadeInUp } from '../Animations'

export default function SpeakerInfo({ photo, name, univ, desc }) {
  return (
    <section id="speaker-info" className="px-4 lg:px-0">
      <Container>
        <Grid className="mt-28 lg:mt-36">
          <motion.div
            variants={FadeInUp}
            className="h-[232px] w-[232px] lg:h-[380px] lg:w-[380px] block col-span-full mx-auto rounded-3xl overflow-hidden lg:col-span-4 lg:col-start-1 lg:mx-0"
          >
            <Image
              objectFit="cover"
              src={photo}
              width={380}
              height={380}
              layout="responsive"
              placeholder="blur"
              blurDataURL={photo}
              alt={name}
            />
          </motion.div>
          <motion.div
            variants={FadeInUp}
            className="flex flex-col col-span-full justify-center mt-8 lg:col-span-8 lg:col-start-5 lg:mt-0"
          >
            <h1 className="mb-1 text-black-primary text-lg font-semibold lg:mb-2 lg:text-3xl">
              {name}
            </h1>
            <h2 className="mb-4 text-black-primary text-opacity-75 text-base font-semibold lg:mb-6 lg:text-lg">
              {univ}
            </h2>
            <p className="text-black-primary text-opacity-75 text-sm lg:text-base">
              {desc ||
                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem neque
            pretium egestas in et, faucibus adipiscing lectus ipsum. Vel aliquam
            non eget quisque rhoncus velit. Gravida mi sed habitant sed
            sollicitudin auctor. Tincidunt risus, volutpat vel morbi. Velit,
            facilisis tellus neque`}
            </p>
          </motion.div>
        </Grid>
      </Container>
    </section>
  )
}
