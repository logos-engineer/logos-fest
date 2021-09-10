import React from 'react'
import { Container, Grid } from '../Common'
import CardBook from './Common/CardBook'
import HeadSection from './Common/HeadSection'

const Book = () => {
  return (
    <section id="bunga-rampai" className="pb-20 pt-36 w-full">
      <Container>
        <Grid className="px-4">
          <div className="col-span-12 mb-4 lg:col-span-6 lg:col-start-4">
            <HeadSection
              title="Semua seminar akan kita bukukan menjadi"
              subtitle=""
            />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <CardBook className="pattern-before ornament-star" />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <CardBook className="pattern-after ornament-sun" />
          </div>
        </Grid>
      </Container>
    </section>
  )
}

export default Book
