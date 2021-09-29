import Hero from '@/components/JusticeEvent/Hero'
import TalkLists from '@/components/JusticeEvent/TalkLists'
import Layout from '@/components/Layout/Layout'
import { useRouter } from 'next/dist/client/router'
import Seo from '@/components/Seo'

const Event = () => {
  const route = useRouter()
  const eventName = route.query.event
  return (
    <Layout>
      <Seo templateTitle={`Justice - ${eventName}`} />
      <section id="justice-event" className="pt-120px w-full">
        <Hero eventName={eventName} />
        <TalkLists eventName={eventName} />
      </section>
    </Layout>
  )
}

export default Event
