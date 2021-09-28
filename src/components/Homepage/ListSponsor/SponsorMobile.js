import { FadeInUp } from '@/components/Animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

const SponsorMobile = () => {
  const ListSponsor = [
    {
      imgSrc: '/img/homepage/sponsors/political-jokes.svg',
      alt: 'Political Jokes',
      url: 'https://www.instagram.com/politicaljokesid/',
    },
    {
      imgSrc: '/img/homepage/sponsors/kok-bisa.svg',
      alt: 'Kok Bisa',
      url: 'https://www.instagram.com/kokbisa/',
    },
    {
      imgSrc: '/img/homepage/sponsors/ekskul.svg',
      alt: 'Ekskul',
      url: 'https://www.instagram.com/ekskulindonesia/',
    },

    {
      imgSrc: '/img/homepage/sponsors/jadi-gini.svg',
      alt: 'Jadi Gini',
      url: 'https://www.instagram.com/_jadigini/',
    },
    {
      imgSrc: '/img/homepage/sponsors/magdalene.svg',
      alt: 'Magdalene',
      url: 'https://www.instagram.com/magdaleneid/',
    },
    {
      imgSrc: '/img/homepage/sponsors/kelas.png',
      alt: 'Kelas Isolasi',
      url: 'https://www.instagram.com/kelas.isolasi/',
    },
    {
      imgSrc: '/img/homepage/sponsors/greatmind.svg',
      alt: 'Great Mind',
      url: 'https://www.instagram.com/greatmind.id/',
    },
    {
      imgSrc: '/img/homepage/sponsors/finery-report.png',
      alt: 'Finery Report',
      url: 'https://www.instagram.com/thefineryreport/',
    },
  ]

  return (
    <>
      <div className="flex col-span-full items-center justify-center">
        <Link href="https://indikafoundation.org/" passHref>
          <a target="_blank">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/indika.svg"
              alt="Indika Foundation"
              className="w-[164px] h-auto"
            />
          </a>
        </Link>
      </div>

      {ListSponsor.map((item, idx) => (
        <div className="flex col-span-6 items-center justify-center" key={idx}>
          <Link href={item.url} passHref>
            <a target="_blank">
              <motion.img
                variants={FadeInUp}
                src={item.imgSrc}
                alt={item.alt}
                className="max-w-[180px] w-full h-auto"
              />
            </a>
          </Link>
        </div>
      ))}

      <div className="flex col-span-full items-center justify-center">
        <Link href="https://www.instagram.com/inspecthistory/" passHref>
          <a target="_blank">
            <motion.img
              variants={FadeInUp}
              src="/img/homepage/sponsors/inspect-history.svg"
              alt="Inspect History"
              className="max-w-[180px] w-full h-auto"
            />
          </a>
        </Link>
      </div>
    </>
  )
}

export default SponsorMobile
