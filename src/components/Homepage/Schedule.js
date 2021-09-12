import React from 'react'
import { Tab } from '@headlessui/react'
import { Button, Container, Grid } from '../Common'
import HeadSection from './Common/HeadSection'
import listSchedule from 'src/data/listSchedule'
import clsx from 'clsx'
import { Fragment } from 'react'
import CardSchedule from './Common/CardSchedule'
import useMediaQuery from '@/hooks/useMediaQuery'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import Link from 'next/link'

const tabDesktop = () => {
  return (
    <Tab.List className="mt-6 lg:mt-0">
      {listSchedule &&
        listSchedule.map((item, index) => (
          <Tab as={Fragment} key={index}>
            {({ selected }) => (
              <button
                className={clsx(
                  'mx-3 px-3 py-2 rounded-full transition-all lg:px-5 lg:py-3 lg:rounded-md',
                  selected
                    ? 'bg-pink-500 text-white'
                    : 'bg-white text-black-primary opacity-40'
                )}
              >
                {item.title}
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
        {listSchedule &&
          listSchedule.map((item, index) => (
            <div className="flex" key={index}>
              <Tab as={Fragment}>
                {({ selected }) => (
                  <button
                    className={clsx(
                      'py-2 w-full text-xs font-semibold rounded-full transition-all',
                      selected
                        ? 'bg-pink-500 text-white'
                        : 'bg-white text-black-primary opacity-40 bord'
                    )}
                  >
                    {item.title}
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
  const isDesktop = useMediaQuery(1024)
  return (
    <section id="schedule" className="pt-36 w-full">
      <Container className="overflow-hidden">
        <Grid className="px-4">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4">
            <HeadSection
              title="Schedule"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa cras ipsum dolor sit amet, consectetur "
            />
          </div>
          <div className="flex flex-col col-span-12 items-center justify-center">
            <Tab.Group>
              {isDesktop ? tabDesktop() : tabMobile()}

              <Tab.Panels>
                {listSchedule &&
                  listSchedule.map((item, index) => (
                    <Tab.Panel
                      className="grid gap-5 grid-cols-1 mt-12 lg:gap-10 lg:grid-cols-2"
                      key={index}
                    >
                      {item.schedule.map((datas, index) => (
                        <CardSchedule
                          slug={datas.slug}
                          category={datas.category}
                          key={index}
                          title={datas.title}
                          date={datas.date}
                          subtitle={datas.subtitle}
                          urlRegister={datas.urlSchedule}
                          imgPerson={datas.person}
                        />
                      ))}
                      <Link passHref href="/schedule">
                        <a
                          aria-label="See All Schedule"
                          className="flex col-span-full justify-center mt-4"
                        >
                          <Button size="base" variant="outline-primary">
                            See All Schedule
                          </Button>
                        </a>
                      </Link>
                    </Tab.Panel>
                  ))}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default Schedule
