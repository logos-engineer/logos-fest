import React from 'react';
import ListSpeakerName from '@/data/listSpeakerName';
import { Container, Grid } from '../Common';
import SpeakerItem from './components/SpeakerItem';

const ListSpeaker = () => {
  return (
    <Container>
      <Grid>
        {ListSpeakerName &&
          ListSpeakerName.map((item, index) => (
            <div className="col-span-3">
              <SpeakerItem
                name={item.name}
                university={item.university}
                imgSrc={item.img}
              />
            </div>
          ))}
      </Grid>
    </Container>
  );
};

export default ListSpeaker;
