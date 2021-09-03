import React from 'react'
import { Button } from '../Common'
import Grid from '@/components/Common/Grid'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'
import listSchedule from '@/data/listSchedule'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'

export default function TalksClass() {
  const dummy = [
    {
      title: ' Keadilan dalam Undang - Eddy Omar ft. Hukum Online',
      date: '01 November 2021',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi nisi, quam id libero sed. Turpis luctus sed placerat quis a a. Nulla vestibulum, massa consectetur feugiat et. cerat luct...',
      person: [
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Eddy Omar' },
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Omar' },
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Eddy' },
      ],
      urlSchedule: '/',
      btnSchedule: 'Register Now',
    },
    {
      title: ' Keadilan dalam Pulau - Eddy Omar ft. Hukum Online',
      date: '02 November 2021',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi nisi, quam id libero sed. Turpis luctus sed placerat quis a a. Nulla vestibulum, massa consectetur feugiat et. cerat luct...',
      person: [
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Eddy Omar' },
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Omar' },
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Eddy' },
      ],
      urlSchedule: '/',
      btnSchedule: 'Register Now',
    },
    {
      title: ' Keadilan dalam Pulau - Eddy Omar ft. Hukum Online',
      date: '02 November 2021',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi nisi, quam id libero sed. Turpis luctus sed placerat quis a a. Nulla vestibulum, massa consectetur feugiat et. cerat luct...',
      person: [
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Eddy Omar' },
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Omar' },
        { imgUrl: '/img/homepage/schedule/person-1.png', name: 'Eddy' },
      ],
      urlSchedule: '/',
      btnSchedule: 'Register Now',
    },
  ]

  return (
    <>
      <Grid className="mt-16 mx-auto max-w-screen-xl overflow-hidden">
        <div className="flex col-span-12">
          <h1 className="flex-grow text-black-primary text-2xl font-semibold">
            Kelas lainnya dari Justice Talks
          </h1>
          <Button variant="outline-primary">Lihat Semua</Button>
        </div>
      </Grid>
      <Grid className="mx-auto pl-7 max-w-screen-2xl overflow-hidden">
        <Slider
          infinite={false}
          slidesToShow={2.1}
          slidesToScroll={2}
          arrows={false}
          className="col-span-12 col-start-1 justify-start py-10"
        >
          {dummy.map((list) => (
            <div className="mr-10 px-5 py-5">
              <CardSchedule
                key={list.title}
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
