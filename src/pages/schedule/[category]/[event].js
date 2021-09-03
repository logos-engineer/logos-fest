import React from 'react'
import Layout from '@/components/Layout/Layout'

import ScheduleDesc from '@/components/ScheduleDetail/ScheduleDesc'
import BootcampClass from '@/components/ScheduleDetail/BootcampClass'
import TalksClass from '@/components/ScheduleDetail/TalksClass'

export default function ScheduleDetail() {
  return (
    <Layout>
      <ScheduleDesc />
      {/* <BootcampClass /> */}
      <TalksClass />
    </Layout>
  )
}
