import React from 'react'
import { Button } from '../Common'
import Grid from '@/components/Common/Grid'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import Link from 'next/link'

export default function TalksClass({ data }) {
  return (
    <>
      <Grid className="mt-16 mx-auto max-w-screen-xl overflow-hidden">
        <div className="flex col-span-12">
          <h1 className="flex-grow text-black-primary text-2xl font-semibold">
            Kelas lainnya dari Justice Talks
          </h1>
          <Link passHref href={'/justice/talks'}>
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
          {data.map((list, idx) => (
            <div className="items-stretch mr-10 px-5 py-5">
              <CardSchedule
                category={list.category}
                slug={list.slug}
                key={idx}
                title={list.title}
                date={list.date}
                subtitle={list.subtitle}
                urlRegister={list.urlSchedule}
                imgPerson={list.person}
              />
            </div>
          ))}
        </Slider>
      </Grid>
    </>
  )
}
