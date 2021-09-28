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
import splitbee from '@splitbee/web'
import { SPLITBEE_EVENTS } from 'src/constants/eventSplitbee'
import Link from 'next/link'

const SponsorDekstop = () => {
  const ListSponsor = [
    {
      imgSrc: PoliticalImg,
      alt: 'Political Jokes',
      url: 'https://www.instagram.com/politicaljokesid/',
    },
    {
      imgSrc: KokBisaImg,
      alt: 'Kok Bisa',
      url: 'https://www.instagram.com/kokbisa/',
    },
    {
      imgSrc: EkskulImg,
      alt: 'Ekskul',
      url: 'https://www.instagram.com/ekskulindonesia/',
    },
    {
      imgSrc: InspectImg,
      alt: 'Inspect History',
      url: 'https://www.instagram.com/inspecthistory/',
    },
    {
      imgSrc: JadiImg,
      alt: 'Jadi Gini',
      url: 'https://www.instagram.com/_jadigini/',
    },
    {
      imgSrc: MagdaleneImg,
      alt: 'Magdalene',
      url: 'https://www.instagram.com/magdaleneid/',
    },
    {
      imgSrc: KelasImg,
      alt: 'Kelas Isolasi',
      url: 'https://www.instagram.com/kelas.isolasi/',
    },
    {
      imgSrc: GreatMind,
      alt: 'Great Mind',
      url: 'https://www.instagram.com/greatmind.id/',
    },
    {
      imgSrc: FineryImg,
      alt: 'Finery Report',
      url: 'https://www.instagram.com/thefineryreport/',
    },
  ]
  return (
    <>
      <Link href="https://indikafoundation.org/" passHref>
        <a
          target="_blank"
          className="flex col-span-full items-center justify-center"
          onClick={() =>
            splitbee.track('https://indikafoundation.org/', {
              data: SPLITBEE_EVENTS.SPONSOR,
            })
          }
        >
          <motion.img
            variants={FadeInUp}
            src="/img/homepage/sponsors/indika.svg"
            alt="Indika Foundation"
            className="w-[214px] h-auto"
          />
        </a>
      </Link>
      <div className="flex col-span-full justify-center space-x-8">
        {/* component Import Nextjs image*/}

        {ListSponsor.slice(0, 6).map((item, index) => (
          <motion.div variants={FadeInUp} className="relative w-auto">
            <Link href={item.url} passHref>
              <a
                target="_blank"
                onClick={() => {
                  splitbee.track('https://indikafoundation.org/', {
                    data: SPLITBEE_EVENTS.SPONSOR,
                  })
                }}
              >
                <Image
                  key={index}
                  src={item.imgSrc}
                  alt={item.alt}
                  width={index === 5 ? 185 : 140}
                  height={90}
                  placeholder="blur"
                  quality={100}
                />
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex col-span-full items-center justify-center">
        {ListSponsor.slice(6, 9).map((item, index) => (
          <motion.div variants={FadeInUp} className="relative w-auto">
            <Link href={item.url} passHref>
              <a
                target="_blank"
                onClick={() => {
                  splitbee.track('https://indikafoundation.org/', {
                    data: SPLITBEE_EVENTS.SPONSOR,
                  })
                }}
              >
                <Image
                  key={index}
                  src={item.imgSrc}
                  alt={item.alt}
                  width={140}
                  height={90}
                  placeholder="blur"
                  quality={100}
                />
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SponsorDekstop
