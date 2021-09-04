import Layout from '@/components/Layout/Layout'
import React from 'react'
import listSchedule from '@/data/listSchedule'
import SpeakerInfo from '@/components/SpeakerDetail/SpeakerInfo'
import SpeakerClass from '@/components/SpeakerDetail/SpeakerClass'
import Head from "next/head"

export default function SpeakerDetail() {

  return (
    <>
      <Head>
        <title>Speaker Detail</title>
      </Head>
    <Layout>
      <SpeakerInfo
        photo="/img/speaker/person-2.png"
        name="Zildjidan Ramadhan Syam"
        univ="Universitas Indonesia"
      />
      <SpeakerClass listClass={listSchedule[0].schedule} />
      </Layout>
      </>
  )
}
