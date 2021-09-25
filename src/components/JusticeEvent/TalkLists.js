import React from 'react'
import { Container, Grid } from '../Common'
import CardSchedule from '../Homepage/Common/CardSchedule'
import { allSchedule } from '@/data/listScheduleName'
import { motion } from 'framer-motion'
import { StaggerChildFast } from '../Animations'

const TalkLists = ({ eventName }) => {
  const bootcampData = allSchedule.filter(
    (value) => value.title.toLocaleLowerCase() !== 'justice talks'
  )
  const talksData = allSchedule.filter(
    (value) => value.title.toLocaleLowerCase() === 'justice talks'
  )
  let finalEvent = eventName === 'bootcamp' ? bootcampData : talksData

  return (
    <Container>
      <Grid className="px-4 lg:px-0">
        <div className="flex flex-col col-span-12 sm:min-h-screen">
          <motion.div
            variants={StaggerChildFast}
            className="grid gap-6 grid-cols-1 mt-12 lg:gap-10 lg:grid-cols-2"
          >
            {finalEvent.length > 1 ? (
              finalEvent.map((datas, idx) => (
                <CardSchedule
                  titleLink={`/schedule?event=${datas.slug}`}
                  key={idx}
                  slug={datas.slug}
                  title={`Bootcamp ${datas.title}`}
                  date={datas.period}
                  subtitle={datas.subtitle}
                  urlRegister={datas.url}
                  imgPerson={datas.speakersData}
                />
              ))
            ) : (
              <p className="col-span-2 mt-3 w-full text-center text-black-body text-base leading-normal lg:mt-4 lg:text-lg">
                Segera datang
              </p>
            )}
          </motion.div>
        </div>
      </Grid>
    </Container>
  )
}

export default TalkLists
