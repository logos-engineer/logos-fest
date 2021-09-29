import Layout from '@/components/Layout/Layout'
import React from 'react'
import SpeakerInfo from '@/components/SpeakerDetail/SpeakerInfo'
import SpeakerClass from '@/components/SpeakerDetail/SpeakerClass'
import Head from 'next/head'
import ListSpeakerName from '@/data/listSpeakerName'
import { allSchedule } from '@/data/listScheduleName'
import Seo from '@/components/Seo'

export default function SpeakerDetail({ speakerData, speakerClass }) {
  return (
    <>
      <Seo templateTitle={`Speaker - ${speakerData.name}`} />
      <Layout>
        <SpeakerInfo
          photo={speakerData.imgUrl}
          name={speakerData.name}
          univ={speakerData.jabatan}
          desc={speakerData.profile}
        />
        <SpeakerClass listClass={speakerClass} />
      </Layout>
    </>
  )
}
export function getStaticPaths() {
  const paths = ListSpeakerName.map((data) => ({
    params: { name: data.slug },
  }))
  return {
    paths, //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  }
}

export function getStaticProps({ params }) {
  //Get Speaker Data
  const speakerIndex = ListSpeakerName.map((data) => data.slug).indexOf(
    params.name
  )
  const speakerData = ListSpeakerName[speakerIndex]
  const speakerClass = []

  //Get Speaker Class
  allSchedule.map((data) =>
    data.schedule.map((child) =>
      child.speaker.map((speak) => {
        if (speak.slug === params.name) {
          speakerClass.push(child)
          return
        }
      })
    )
  )

  return {
    props: {
      speakerData,
      speakerClass: speakerClass,
    },
  }
}
