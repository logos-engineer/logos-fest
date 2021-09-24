import React from 'react'
import Layout from '@/components/Layout/Layout'
import ScheduleDesc from '@/components/ScheduleDetail/ScheduleDesc'
import BootcampClass from '@/components/ScheduleDetail/BootcampClass'
import TalksClass from '@/components/ScheduleDetail/TalksClass'
import { useRouter } from 'next/dist/client/router'
import { Bootcamp, Talks } from '@/data/listScheduleDetail'
import Head from 'next/head'
import { allSchedule } from '@/data/listScheduleName'

export default function ScheduleDetail({ dataSchedule, recomendation }) {
  const route = useRouter()
  const { category, event } = route.query

  return (
    <>
      <Head>
        <title>Schedule detail - {category}</title>
      </Head>
      <Layout>
        <ScheduleDesc data={dataSchedule} />
        {/* {category === 'bootcamp' && <BootcampClass data={Bootcamp} />}
        {category === 'talks' && <TalksClass data={Talks} />} */}
        <BootcampClass data={recomendation} />
      </Layout>
    </>
  )
}

export function getStaticPaths() {
  const paths = allSchedule
    .map((data) => data.schedule)
    .flat()
    .map((data) => ({
      params: {
        event: data.slug,
        category: data.category,
      },
    }))

  return {
    paths, //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  }
}

export function getStaticProps({ params }) {
  const flatSchedule = allSchedule.map((data) => data.schedule).flat()

  const indexSchedule = flatSchedule
    .map((data) => data.slug)
    .indexOf(params.event)
  const dataSchedule = flatSchedule[indexSchedule]
  const recomendation = generateRecomen(indexSchedule, flatSchedule)

  return {
    props: {
      dataSchedule,
      recomendation,
    },
  }
}

function generateRandom(exceptNum) {
  const num = Math.floor(Math.random() * (13 - 0) + 0)
  return num === exceptNum ? generateRandom() : num
}

function generateRecomen(currIndex, data) {
  const indexRecom1 = generateRandom(currIndex)
  const indexRecom2 = generateRandom(currIndex)

  const recom1 = data[indexRecom1]
  const recom2 = data[indexRecom2]

  return [recom1, recom2]
}
