import React from 'react';
import { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { Container, Grid } from '../Common';
import HeadSection from './Common/HeadSection';
import listSchedule from 'src/data/listSchedule';

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
          <div className="col-span-12">
            <Tab.Group>
              <Tab.List>
                {listSchedule &&
                  listSchedule.map((item, index) => (
                    <Tab as={Fragment}>
                      {({ selected }) => (
                        <button
                          className={
                            selected
                              ? 'bg-blue-500 text-white'
                              : 'bg-white text-black'
                          }
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
                    <Tab.Panel>
                      {item.schedule.map((datas, index) => (
                        <div className="shadow bg-white">{datas.title}</div>
                      ))}
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
