import Head from 'next/head'
import Layout from '@/components/Layout/Layout'
import Hero from '@/components/Homepage/Hero'
import Event from '@/components/Homepage/Event'
import Schedule from '@/components/Homepage/Schedule'
import Book from '@/components/Homepage/Book'
import Sponsors from '@/components/Homepage/Sponsors'
import Seo from '@/components/Seo'

export default function Home() {
  return (
    <>
      <Seo />
      <Layout>
        <Hero />
        <Event />
        <Schedule />
        <Book />
        <Sponsors />
      </Layout>
    </>
  )
}
