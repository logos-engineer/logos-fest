import React from 'react'
import Layout from '@/components/Layout/Layout'
import ScheduleDesc from '@/components/ScheduleDetail/ScheduleDesc'
import BootcampClass from '@/components/ScheduleDetail/BootcampClass'
import TalksClass from '@/components/ScheduleDetail/TalksClass'
import { useRouter } from 'next/dist/client/router'
import { Bootcamp, Talks } from '@/data/listScheduleDetail'
import Head from 'next/head'

export default function ScheduleDetail() {
  const route = useRouter()
  const { category, event } = route.query

  return (
    <>
      <Head>
        <title>Schedule detail - {category}</title>
      </Head>
      <Layout>
        <ScheduleDesc />
        {category === 'bootcamp' && <BootcampClass data={Bootcamp} />}
        {category === 'talks' && <TalksClass data={Talks} />}
      </Layout>
    </>
  )
}
