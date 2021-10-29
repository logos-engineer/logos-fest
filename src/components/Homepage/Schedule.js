import React from 'react'
import { Tab } from '@headlessui/react'
import { Button, Container, Grid } from '../Common'
import HeadSection from './Common/HeadSection'
import { allSchedule } from '@/data/listScheduleName'
import clsx from 'clsx'
import { Fragment } from 'react'
import CardSchedule from './Common/CardSchedule'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import Link from 'next/link'
import InViewDiv from '../Common/InViewDiv'
import { FadeInUp } from '../Animations'

import useMediaQueryHook from '@/hooks/useMediaQuery'

const tabDesktop = () => {
  return (
    <Tab.List className="mt-6 lg:mt-0">
      {allSchedule &&
        allSchedule.map((item, index) => (
          <Tab as={Fragment} key={index}>
            {({ selected }) => (
              <button
                className={clsx(
                  'mx-3 px-3 py-2 rounded-full transition-all lg:px-5 lg:py-3 lg:rounded-md',
                  selected
                    ? 'bg-ocean-300 text-white'
                    : 'bg-white text-black-primary opacity-40'
                )}
              >
                {item.title.toLowerCase().includes('talks')
                  ? `${item.title}`
                  : `${item.title}`}
              </button>
            )}
          </Tab>
        ))}
    </Tab.List>
  )
}

const tabMobile = () => {
  return (
    <Tab.List className="mt-6 lg:mt-0">
      <Slider
        infinite={false}
        slidesToShow={4.2}
        slidesToScroll={1}
        arrows={false}
        className="px-4 w-screen max-w-screen-sm lg:max-w-screen-md"
      >
        {allSchedule &&
          allSchedule.map((item, index) => (
            <div className="flex" key={index}>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      'py-2 w-full text-xs font-semibold rounded-full transition-all',
                      selected
                        ? 'bg-ocean-300 text-white'
                        : 'bg-white text-black-primary opacity-40 bord'
                    )}
                  >
                    {item.title.toLowerCase().includes('talks')
                      ? `${item.title}`
                      : `${item.title}`}
                  </button>
                )}
              </Tab>
            </div>
          ))}
      </Slider>
    </Tab.List>
  )
}

const Schedule = () => {
  const isDesktop = useMediaQueryHook(1024)
  return (
    <section id="schedule" className="pt-14 w-full sm:pt-36">
      <Container className="overflow-hidden">
        <Grid className="px-4">
          <InViewDiv
            variants={FadeInUp}
            className="col-span-12 lg:col-span-6 lg:col-start-4"
          >
            <HeadSection
              title="Jadwal Kelas"
              subtitle="Kelas Kelas Logos Festival"
            />
          </InViewDiv>
          <InViewDiv
            variants={FadeInUp}
            className="flex flex-col col-span-12 items-center justify-center"
          >
            <Tab.Group>
              {isDesktop ? tabDesktop() : tabMobile()}

              <Tab.Panels className={'w-full'}>
                {allSchedule &&
                  allSchedule.map((item, index) => {
                    let itemSchedule = item?.schedule?.filter(
                      (_, index) => index < 2
                    )
                    return (
                      <Tab.Panel
                        className="grid gap-6 grid-cols-1 mt-12 lg:gap-10 lg:grid-cols-2"
                        key={index}
                      >
                        {itemSchedule.length !== 0 ? (
                          itemSchedule.map((datas, index) => {
                            const {
                              category,
                              date,
                              desc,
                              slug,
                              title,
                              url,
                              speaker,
                            } = datas
                            return (
                              <CardSchedule
                                slug={slug}
                                category={category}
                                key={index}
                                title={title}
                                date={date}
                                subtitle={desc}
                                urlRegister={url}
                                imgPerson={speaker}
                              />
                            )
                          })
                        ) : (
                          <p className="col-span-2 mt-3 w-full text-center text-black-primary text-xl font-bold leading-snug lg:mt-4 lg:text-3xl">
                            Segera datang
                          </p>
                        )}
                        <Link passHref href="/schedule">
                          <a
                            aria-label="Lihat semua jadwal"
                            className="flex col-span-full justify-center mt-4"
                          >
                            <Button size="base" variant="outline-primary">
                              Lihat semua jadwal
                            </Button>
                          </a>
                        </Link>
                      </Tab.Panel>
                    )
                  })}
              </Tab.Panels>
            </Tab.Group>
          </InViewDiv>
        </Grid>
      </Container>
    </section>
  )
}

export default Schedule
