import React from 'react'
import { Tab } from '@headlessui/react'
import { Button, Container, Grid } from '../Common'
import HeadSection from './Common/HeadSection'
import listSchedule from 'src/data/listSchedule'
import clsx from 'clsx'
import { Fragment } from 'react'

import CardSchedule from './Common/CardSchedule'

const Schedule = () => {
  return (
    <section id="schedule" className="pt-36 w-full">
      <Container>
        <Grid className="px-4">
          <div className="col-span-12 lg:col-span-6 lg:col-start-4">
            <HeadSection
              title="Schedule"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa cras ipsum dolor sit amet, consectetur "
            />
          </div>
          <div className="flex flex-col col-span-12 items-center justify-center">
            <Tab.Group>
              <Tab.List className="mt-6 lg:mt-0">
                <div className="hidden lg:block">
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
                </div>
              </Tab.List>
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
                      <div className="flex col-span-full justify-center mt-4">
                        <Button size="base" variant="outline-primary">
                          See All Schedule
                        </Button>
                      </div>
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
