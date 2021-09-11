import React from 'react'
import { Container, Grid } from '../Common'
import listSchedule from '@/data/listSchedule'
import CardSchedule from '../Homepage/Common/CardSchedule'

const TalkLists = () => {
  return (
    <Container>
      <Grid className="px-4 lg:px-0">
        <div className="flex flex-row flex-wrap col-span-full justify-center mt-4 space-y-6 lg:flex-nowrap lg:space-x-10 lg:space-y-0">
          {listSchedule &&
            listSchedule
              .find((element) => element.title === 'Justice Talks')
              .schedule.map((datas, idx) => (
                <CardSchedule
                  key={idx}
                  slug={datas.slug}
                  title={datas.title}
                  date={datas.date}
                  subtitle={datas.subtitle}
                  urlRegister={datas.urlSchedule}
                  imgPerson={datas.person}
                />
              ))}
        </div>
      </Grid>
    </Container>
  )
}

export default TalkLists
