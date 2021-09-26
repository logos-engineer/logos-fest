import React from 'react'
import ListSpeakerName from '@/data/listSpeakerName'
import { Container, Grid } from '../Common'
import SpeakerItem from './components/SpeakerItem'
import { motion } from 'framer-motion'
import { FadeInUp } from '../Animations'
import InViewDiv from '../Common/InViewDiv'

const ListSpeaker = () => {
  return (
    <Container>
      <Grid className="gap-6 lg:gap-10">
        {ListSpeakerName &&
          ListSpeakerName.map((item) => (
            <InViewDiv
              variants={FadeInUp}
              className="col-span-full sm:col-span-6 lg:col-span-3"
              key={item.id}
            >
              <SpeakerItem
                slug={item.slug}
                name={item.name}
                university={item.jabatan}
                imgSrc={item.imgUrl}
              />
            </InViewDiv>
          ))}
      </Grid>
    </Container>
  )
}

export default ListSpeaker
