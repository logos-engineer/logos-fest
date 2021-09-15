import React from 'react'
import ListSpeakerName from '@/data/listSpeakerName'
import { Container, Grid } from '../Common'
import SpeakerItem from './components/SpeakerItem'

const ListSpeaker = () => {
  return (
    <Container>
      <Grid className="gap-6 lg:gap-10">
        {ListSpeakerName &&
          ListSpeakerName.map((item) => (
            <div
              className="col-span-full sm:col-span-6 lg:col-span-3"
              key={item.id}
            >
              <SpeakerItem
                slug={item.slug}
                name={item.name}
                university={item.jabatan}
                imgSrc={item.img}
              />
            </div>
          ))}
      </Grid>
    </Container>
  )
}

export default ListSpeaker
