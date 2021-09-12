import React from 'react'
import { Container, Grid } from '../Common'

const Hero = ({ eventName }) => {
  return (
    <Container>
      <Grid className="px-4 lg:px-0">
        <div className="flex flex-col col-span-12 items-center mb-12 lg:col-span-6 lg:col-start-4">
          <h3 className="text-center text-black-primary text-lg font-semibold leading-normal lg:text-3xl">
            {eventName === 'talks' && 'Justice Talks'}
            {eventName === 'bootcamp' && 'Justice Bootcamp'}
          </h3>
          <p className="mt-3 text-center text-black-body text-base leading-normal lg:mt-4 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa cras
            ipsum dolor sit amet, consectetur{' '}
          </p>
        </div>
      </Grid>
    </Container>
  )
}

export default Hero
