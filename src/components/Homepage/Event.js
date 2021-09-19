import React from 'react'
import { Container, Grid } from '../Common'
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
          <div className="col-span-12 lg:col-span-6 lg:col-start-4">
            <HeadSection
              title="Kegiatan Festival"
              subtitle="Pada festival perdana Logos Fest, kami memperhatikan pedagogi untuk kelas-kelas yang diadakan."
            />
          </div>
          {listEvent.map((item, index) => (
            <div className="col-span-12 lg:col-span-6" key={index}>
              <CardEvent
                imgSrc={item.img}
                imgAlt={item.title}
                title={item.title}
                subtitle={item.desc}
                url={item.link}
              />
            </div>
          ))}
        </Grid>
      </Container>
    </section>
  )
}

export default Event
