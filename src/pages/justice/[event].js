import Hero from '@/components/JusticeEvent/Hero'
import TalkLists from '@/components/JusticeEvent/TalkLists'
import Layout from '@/components/Layout/Layout'
import { useRouter } from 'next/dist/client/router'
import Head from 'next/head'

const Event = () => {
  const route = useRouter()
  const eventName = route.query.event
  return (
    <Layout>
      <Head>
        <title>Justice {eventName}</title>
      </Head>
      <section id="justice-event" className="pt-120px w-full">
        <Hero eventName={eventName} />
        <TalkLists />
      </section>
    </Layout>
  )
}

export default Event
