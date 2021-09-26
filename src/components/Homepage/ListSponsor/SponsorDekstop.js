import { FadeInUp } from '@/components/Animations'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import PoliticalImg from '@/public/img/homepage/sponsors/dekstop/political.png'
import KokBisaImg from '@/public/img/homepage/sponsors/dekstop/kok-bisa.png'
import EkskulImg from '@/public/img/homepage/sponsors/dekstop/ekskul.png'
import InspectImg from '@/public/img/homepage/sponsors/dekstop/inspect-history.png'
import JadiImg from '@/public/img/homepage/sponsors/dekstop/jadi-gini.png'
import MagdaleneImg from '@/public/img/homepage/sponsors/dekstop/magdalene.png'
import KelasImg from '@/public/img/homepage/sponsors/dekstop/kelas-isolasi.png'
import GreatMind from '@/public/img/homepage/sponsors/dekstop/great-mind.png'
import FineryImg from '@/public/img/homepage/sponsors/dekstop/finery-report.png'

const SponsorDekstop = () => {
  const ListSponsor = [
    {
      imgSrc: PoliticalImg,
      alt: 'Political Jokes',
    },
    {
      imgSrc: KokBisaImg,
      alt: 'Kok Bisa',
    },
    {
      imgSrc: EkskulImg,
      alt: 'Ekskul',
    },
    {
      imgSrc: InspectImg,
      alt: 'Inspect History',
    },
    {
      imgSrc: JadiImg,
      alt: 'Jadi Gini',
    },
    {
      imgSrc: MagdaleneImg,
      alt: 'Magdalene',
    },
    {
      imgSrc: KelasImg,
      alt: 'Kelas Isolasi',
    },
    {
      imgSrc: GreatMind,
      alt: 'Great Mind',
    },
    {
      imgSrc: FineryImg,
      alt: 'Finery Report',
    },
  ]
  return (
    <>
      <div className="flex col-span-full items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/indika.svg"
          alt="Indika Foundation"
          className="w-[214px] h-auto"
        />
      </div>
      <div className="flex col-span-full justify-center space-x-8">
        {/* component Import Nextjs image*/}

        {ListSponsor.slice(0, 6).map((item, index) => (
          <motion.div variants={FadeInUp} className="relative w-auto">
            <Image
              key={index}
              src={item.imgSrc}
              alt={item.alt}
              width={index === 5 ? 185 : 140}
              height={90}
              placeholder="blur"
              quality={100}
            />
          </motion.div>
        ))}
      </div>
      <div className="flex col-span-full items-center justify-center">
        {ListSponsor.slice(6, 9).map((item, index) => (
          <motion.div variants={FadeInUp} className="relative w-auto">
            <Image
              key={index}
              src={item.imgSrc}
              alt={item.alt}
              width={140}
              height={90}
              placeholder="blur"
              quality={100}
            />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SponsorDekstop
