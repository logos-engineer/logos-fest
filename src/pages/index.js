import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import Hero from '@/components/Homepage/Hero';
import Event from '@/components/Homepage/Event';
import Schedule from '@/components/Homepage/Schedule';

export default function Home() {
  return (
    <>
      <Head>
        <title>Logos Festival</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Event />
        <Schedule />
      </Layout>
    </>
  );
}
