import React from 'react'
import Link from 'next/link'
import { Button } from '../Common'
import Grid from '@/components/Common/Grid'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'
import { useRouter } from 'next/router'

export default function BootcampClass({ data }) {
  const route = useRouter()
  const { category, event } = route.query

  const recomendations = data
    .filter(function (item) {
      return item.slug !== event
    })
    .slice(0, 3)

  return (
    <section id="kelas-lain" className="px-4 w-full lg:px-0">
      <Grid className="mt-16 mx-auto max-w-screen-xl overflow-hidden">
        <div className="flex col-span-12">
          <h1 className="flex-grow text-black-primary text-2xl font-semibold">
            Kelas lainnya dari Bootcamp ini
          </h1>
          <Link passHref href={'/justice/bootcamps'}>
            <a aria-label="lihat semua">
              <Button variant="outline-primary">Lihat Semua</Button>
            </a>
          </Link>
        </div>
      </Grid>
      <Grid className="mx-auto pl-10 max-w-screen-2xl overflow-hidden">
        <Slider
          infinite={false}
          slidesToShow={2.1}
          slidesToScroll={2}
          arrows={false}
          className="flex col-span-12 col-start-1 items-stretch justify-start justify-items-stretch py-10"
        >
          {recomendations.map((list) => (
            <div className="items-stretch mr-10 px-5 py-5" key={list.title}>
              <CardSchedule
                category={category}
                slug={list.slug}
                key={list.title}
                title={list.title}
                date={list.date}
                subtitle={list.subtitle}
                urlRegister="/"
                imgPerson={list.speaker}
              />
            </div>
          ))}
        </Slider>
      </Grid>
    </section>
  )
}
