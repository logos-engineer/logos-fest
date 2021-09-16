import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Speaker/Hero'
import ListSpeaker from '@/components/Speaker/ListSpeaker'
import React from 'react'
import Head from 'next/head'

const Speakers = () => {
  return (
    <>
      <Head>
        <title>List Speaker</title>
      </Head>
      <Layout>
        <section id="speaker-logos" className="pt-120px px-4 w-full lg:px-0">
          <Hero />
          <ListSpeaker />
        </section>
      </Layout>
    </>
  )
}

export default Speakers
