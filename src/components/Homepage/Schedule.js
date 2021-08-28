import React from 'react';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { Button, Container, Grid } from '../Common';
import HeadSection from './Common/HeadSection';
import listSchedule from 'src/data/listSchedule';
import clsx from 'clsx';
import CardSchedule from './Common/CardSchedule';

const Schedule = () => {
  return (
    <section id="schedule" className="pt-36 w-full">
      <Container>
        <Grid>
          <div className="col-span-6 col-start-4">
            <HeadSection
              title="Schedule"
              subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa cras ipsum dolor sit amet, consectetur "
            />
          </div>
          <div className="flex flex-col col-span-12 items-center justify-center">
            <Tab.Group>
              <Tab.List>
                {listSchedule &&
                  listSchedule.map((item, index) => (
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={clsx(
                            'mx-3 px-5 py-3 rounded-md transition-all',
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
              <Tab.Panels>
                {listSchedule &&
                  listSchedule.map((item, index) => (
                    <Tab.Panel className="grid gap-10 grid-cols-2 mt-12">
                      {item.schedule.map((datas, index) => (
                        <CardSchedule
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
  );
};

export default Schedule;
