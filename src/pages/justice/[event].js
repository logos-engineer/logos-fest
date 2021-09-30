import Hero from '@/components/JusticeEvent/Hero'
import TalkLists from '@/components/JusticeEvent/TalkLists'
import Layout from '@/components/Layout/Layout'
import { useRouter } from 'next/dist/client/router'
import Seo from '@/components/Seo'

const Event = () => {
  const route = useRouter()

  const subtitleBootcamp =
    'Terdapat 4 buah kelas (Filsafat, Hukum, Gender, dan Politik) yang terdiri dari 3-4 pertemuan dalam Justice Bootcamp. Setiap pertemuan diisi oleh akademisi yang ahli di bidangnya.'
  const subtitleTalks =
    'Acara puncak Logos Fest tahun ini akan mengundang beberapa pemikir internasional yang penelitiannya berfokus pada konsep keadilan dan filsafat politik.'

  const eventName = route.query.event

  console.log(route.query)
  const eventDesc = eventName === 'bootcamp' ? subtitleBootcamp : subtitleTalks

  return (
    <Layout>
      <Seo
        templateTitle={`Justice - ${route.query.event}`}
        templateDesc={eventDesc}
      />
      <section id="justice-event" className="pt-120px w-full">
        <Hero eventName={eventName} />
        <TalkLists eventName={eventName} />
      </section>
    </Layout>
  )
}

export default Event
