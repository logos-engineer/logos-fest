import { FadeInUp } from '@/components/Animations'
import { motion } from 'framer-motion'
import React from 'react'

const SponsorMobile = () => {
  return (
    <>
      <div className="flex col-span-full items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/indika.svg"
          alt="Indika Foundation"
          className="w-[164px] h-auto"
        />
      </div>
      <div className="flex col-span-6 items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/magdalene.svg"
          alt="Magdalene"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <div className="flex col-span-6 items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/political-jokes.svg"
          alt="Political Jokes"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <div className="flex col-span-6 items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/greatmind.svg"
          alt="Great Mind"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <div className="flex col-span-6 items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/kelas.png"
          alt="Kelas Isolasi"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <div className="flex col-span-6 items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/jadi-gini.svg"
          alt="Jadi Gini"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <div className="flex col-span-6 items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/finery-report.png"
          alt="Finery Report"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <div className="flex col-span-6 items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/ekskul.svg"
          alt="Ekskul"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <div className="flex col-span-6 items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/kok-bisa.svg"
          alt="Kok Bisa"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
      <div className="flex col-span-full items-center justify-center">
        <motion.img
          variants={FadeInUp}
          src="/img/homepage/sponsors/inspect-history.svg"
          alt="Inspect History"
          className="max-w-[180px] w-full h-auto"
        />
      </div>
    </>
  )
}

export default SponsorMobile
