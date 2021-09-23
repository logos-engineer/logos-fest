import { useState } from 'react'
import { Container, Grid } from '@/components/Common'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'
import HeadSection from '@/components/Homepage/Common/HeadSection'
import Layout from '@/components/Layout/Layout'
import ClassList from '@/components/SchedulePage/ClassList'
import { allSchedule } from '@/data/listScheduleName'

const Schedule = () => {
  const [selected, setSelected] = useState(allSchedule[0].title)
  const [search, setSearch] = useState('')

  const findClass = (category) => {
    return category.title === selected
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
    <section id="schedule">
      <Layout>
        <Container className="pt-[88px] lg:pt-[120px] px-4 w-full">
          <Grid>
            <div className="min-h[150px] col-span-full lg:col-span-6 lg:col-start-4">
              <HeadSection
                title="Jadwal"
                // subtitle={subtitleData}
              />     
            </div>
            <div className="fl flex flex-col col-span-12">
              <div className="flex flex-col-reverse gap-4 items-stretch justify-between lg:flex-row">
                <div className="no-scrollbar flex flex-row overflow-x-auto xl:overflow-x-auto">
                  {allSchedule?.map((item) => (
                    <ClassList
                      key={item.title}
                      title={item.title.toLowerCase().includes('talks') ?`${item.title}`: `B. ${item.title}`}
                      id={item.title}
                      active={selected === item.title}
                      setSelected={setSelected}
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
              </div>
            </div>
          </Grid>
        </Container>
      </Layout>
    </section>
  )
}

export default Schedule
