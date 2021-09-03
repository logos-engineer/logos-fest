import React from 'react'
import Layout from '@/components/Layout/Layout'

import ScheduleDesc from '@/components/ScheduleDetail/ScheduleDesc'
import BootcampClass from '@/components/ScheduleDetail/BootcampClass'
import TalksClass from '@/components/ScheduleDetail/TalksClass'
import { useRouter } from 'next/dist/client/router'

export default function ScheduleDetail() {
  const route = useRouter()
  const { category, event } = route.query
  console.log(category)

  return (
    <Layout>
      <ScheduleDesc />
      {category === 'bootcamp' && <BootcampClass />}
      {category === 'talks' && <TalksClass />}
    </Layout>
  )
}
