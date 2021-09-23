import React from 'react'
import Layout from '@/components/Layout/Layout'
import ScheduleDesc from '@/components/ScheduleDetail/ScheduleDesc'
import BootcampClass from '@/components/ScheduleDetail/BootcampClass'
import TalksClass from '@/components/ScheduleDetail/TalksClass'
import { useRouter } from 'next/dist/client/router'
import { Bootcamp, Talks } from '@/data/listScheduleDetail'
import Head from 'next/head'
import { bootcamps } from '@/data/index'

export default function ScheduleDetail() {
  const route = useRouter()
  const { category, event } = route.query
  const bootcamp = bootcamps.flat()
  const bootcampDetail = bootcamp.find((kelas) => kelas.slug === event)

  return (
    <>
      <Head>
        <title>Schedule detail - {category}</title>
      </Head>
      <Layout>
        <ScheduleDesc data={category === 'bootcamp' ? bootcampDetail : null} />
        {category === 'bootcamp' && <BootcampClass data={bootcamp} />}
        {category === 'talks' && <BootcampClass data={Talks} />}
      </Layout>
    </>
  )
}
