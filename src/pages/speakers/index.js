import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Speaker/Hero'
import ListSpeaker from '@/components/Speaker/ListSpeaker'
import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { StaggerChildFast } from '@/components/Animations'
import Seo from '@/components/Seo'

const Speakers = () => {
  return (
    <>
      <Seo templateTitle="Speakers" />
      <Layout>
        <motion.section
          variants={StaggerChildFast}
          id="speaker-logos"
          className="pt-120px px-4 w-full lg:px-0"
        >
          <Hero />
          <ListSpeaker />
        </motion.section>
      </Layout>
    </>
  )
}

export default Speakers
