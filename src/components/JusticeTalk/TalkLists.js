import React from 'react'
import { Container, Grid } from '../Common'
import listSchedule from '@/data/listSchedule'
import CardSchedule from '../Homepage/Common/CardSchedule'

const TalkLists = () => {
  return (
    <Container>
      <Grid>
        <div className="flex flex-row col-span-full justify-center mt-4 space-x-10">
          {listSchedule &&
            listSchedule
              .find((element) => element.title === 'Justice Talks')
              .schedule.map((datas) => (
                <CardSchedule
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
