import React from 'react'
import { Container, Grid } from '../Common'

const Hero = ({ eventName }) => {
  return (
    <Container>
      <Grid>
        <div className="flex flex-col col-span-6 col-start-4 items-center mb-12">
          <h3 className="text-center text-black-primary text-3xl font-semibold leading-normal">
            {eventName === 'talks' && 'Justice Talks'}
            {eventName === 'bootcamp' && 'Justice Bootcamp'}
          </h3>
          <p className="mt-4 text-center text-black-body text-lg leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa cras
            ipsum dolor sit amet, consectetur{' '}
          </p>
        </div>
      </Grid>
    </Container>
  )
}

export default Hero
