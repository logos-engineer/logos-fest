import { motion } from 'framer-motion'
import React from 'react'
import { FadeInUp } from '../Animations'
import { Container, Grid } from '../Common'
import InViewDiv from '../Common/InViewDiv'
import CardEvent from './Common/CardEvent'
import HeadSection from './Common/HeadSection'

const Event = () => {
  const listEvent = [
    {
      img: '/icon/justice-bootcamp.svg',
      title: 'Justice Bootcamp',
      desc: 'Terdapat 4 buah kelas (Filsafat, Hukum, Gender, dan Politik) yang terdiri dari 3-4 pertemuan dalam Justice Bootcamp. Setiap pertemuan diisi oleh akademisi yang ahli di bidangnya.',
      link: '/justice/bootcamp',
    },
    {
      img: '/icon/justice-talks.svg',
      title: 'Justice Talks',
      desc: 'Acara puncak Logos Fest tahun ini akan mengundang beberapa pemikir internasional yang penelitiannya berfokus pada konsep keadilan dan filsafat politik.',
      link: '/justice/talks',
    },
  ]
  return (
    <section id="event-product" className="pt-5 w-full">
      <Container>
        <Grid className="px-4 lg:px-0">
          <InViewDiv
            variants={FadeInUp}
            className="col-span-12 lg:col-span-6 lg:col-start-4"
          >
            <HeadSection
              title="Kegiatan Festival"
              subtitle="Pada festival perdana Logos Fest, kami memperhatikan pedagogi untuk kelas-kelas yang diadakan."
            />
          </InViewDiv>
          {listEvent.map((item, index) => (
            <InViewDiv
              variants={FadeInUp}
              className="col-span-12 lg:col-span-6"
              key={index}
            >
              <CardEvent
                imgSrc={item.img}
                imgAlt={item.title}
                title={item.title}
                subtitle={item.desc}
                url={item.link}
              />
            </InViewDiv>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Event
