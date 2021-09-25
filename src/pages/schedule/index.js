import { useState } from 'react'
import { Container, Grid } from '@/components/Common'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'
import HeadSection from '@/components/Homepage/Common/HeadSection'
import Layout from '@/components/Layout/Layout'
import ClassList from '@/components/SchedulePage/ClassList'
import { allSchedule } from '@/data/listScheduleName'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { FadeInUp } from '@/components/Animations'
import { motion } from 'framer-motion'

const Schedule = () => {
  const route = useRouter()
  const [selected, setSelected] = useState(
    route.query.event || allSchedule[0].slug
  )
  const [search, setSearch] = useState('')

  const changeSchedule = (slug) => {
    route.push(`/schedule?event=${slug}`)
    setSelected(slug)
  }

  const findClass = (category) => {
    return category.slug === selected
  }

  const renderFiltered = () => {
    return (
      <>
        {allSchedule &&
          allSchedule
            .find(findClass)
            .schedule.map((datas, index) =>
              datas.title
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ? (
                <CardSchedule
                  slug={datas.slug}
                  category={datas.category}
                  key={datas.title}
                  title={datas.title}
                  date={datas.date}
                  subtitle={datas.desc}
                  urlRegister={datas.url}
                  imgPerson={datas.speaker}
                />
              ) : null
            )}
      </>
    )
  }

  const subtitleData = allSchedule.find(findClass).subtitle

  return (
    <>
      <Head>
        <title>Jadwal</title>
      </Head>
      <section id="schedule" className="flex flex-col min-h-screen">
        <Layout>
          <Container className="pt-[88px] lg:pt-[120px] px-4 w-full">
            <Grid>
              <motion.div
                variants={FadeInUp}
                className="min-h[150px] col-span-full lg:col-span-6 lg:col-start-4"
              >
                <HeadSection
                  title="Jadwal"
                  // subtitle={subtitleData}
                />
              </motion.div>
              <motion.div
                variants={FadeInUp}
                className="flex flex-col col-span-12 mt-4 sm:mt-0"
              >
                <div className="flex flex-col-reverse gap-4 items-stretch justify-between lg:flex-row">
                  <div className="no-scrollbar flex flex-row overflow-x-auto xl:overflow-x-auto">
                    {allSchedule?.map((item) => (
                      <ClassList
                        key={item.title}
                        title={
                          item.title.toLowerCase().includes('talks')
                            ? `${item.title}`
                            : `B. ${item.title}`
                        }
                        id={item.title}
                        active={selected === item.slug}
                        setSelected={() => changeSchedule(item.slug)}
                      />
                    ))}
                  </div>
                  <div className="relative max-h-12">
                    <input
                      type="text"
                      placeholder="Search"
                      className="px-4 py-3 w-full h-full border rounded-lg focus:outline-none"
                      onChange={(event) => {
                        setSearch(event.target.value)
                      }}
                    />
                    <img
                      src="/icon/search.svg"
                      alt=""
                      className="absolute bottom-4 right-4"
                    />
                  </div>
                </div>
                <div className="grid gap-6 grid-cols-1 mt-12 lg:gap-10 lg:grid-cols-2">
                  {renderFiltered()}
                  {selected === 'justice-talks' && (
                    <p className="col-span-2 mt-3 w-full text-center text-black-primary text-xl font-bold leading-snug lg:mt-4 lg:text-3xl">
                      Segera datang
                    </p>
                  )}
                </div>
              </motion.div>
            </Grid>
          </Container>
        </Layout>
      </section>
    </>
  )
}

export default Schedule
