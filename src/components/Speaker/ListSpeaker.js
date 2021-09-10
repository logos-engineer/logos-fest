import React from 'react'
import ListSpeakerName from '@/data/listSpeakerName'
import { Container, Grid } from '../Common'
import SpeakerItem from './components/SpeakerItem'

const ListSpeaker = () => {
  return (
    <Container>
      <Grid className="gap-6 lg:gap-10">
        {ListSpeakerName &&
          ListSpeakerName.map((item, index) => (
            <div className="col-span-full sm:col-span-6 lg:col-span-3">
              <SpeakerItem
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
