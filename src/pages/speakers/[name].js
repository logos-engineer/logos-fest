import Layout from '@/components/Layout/Layout'
import React from 'react'
import listSchedule from '@/data/listSchedule'
import SpeakerInfo from '@/components/SpeakerDetail/SpeakerInfo'
import SpeakerClass from '@/components/SpeakerDetail/SpeakerClass'
import Head from 'next/head'
import ListSpeakerName from '@/data/listSpeakerName'

export default function SpeakerDetail({ speakerData }) {
  console.log(speakerData)
  return (
    <>
      <Head>
        <title>Speaker Detail</title>
      </Head>
      <Layout>
        /* * TODO : use getServerSide/getStaticProps to get data for detail
        speaker from listSpeakerName using id/slug */
        <SpeakerInfo
          photo={speakerData.img}
          name={speakerData.name}
          univ={speakerData.jabatan}
          desc={speakerData.profile}
        />
        {/* <SpeakerClass listClass={listSchedule[0].schedule} /> */}
      </Layout>
    </>
  )
}
export function getStaticPaths() {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export function getStaticProps({ params }) {
  const speakerIndex = ListSpeakerName.map((data) => data.slug).indexOf(
    params.name
  )
  const speakerData = ListSpeakerName[speakerIndex]
  return {
    props: {
      speakerData,
    },
  }
}
