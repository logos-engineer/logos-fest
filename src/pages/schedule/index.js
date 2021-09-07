import { useState } from 'react'
import { Container, Grid } from '@/components/Common'
import CardSchedule from '@/components/Homepage/Common/CardSchedule'
import HeadSection from '@/components/Homepage/Common/HeadSection'
import Layout from '@/components/Layout/Layout'
import ClassList from '@/components/SchedulePage/ClassList'
import listSchedule from 'src/data/listSchedule'

const Schedule = () => {
  const [selected, setSelected] = useState(listSchedule[0].title)
  const [search, setSearch] = useState('')

  const findClass = (category) => {
    return category.title === selected
  }

  const renderFiltered = () => {
    return (
      <>
        {listSchedule &&
          listSchedule
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
                  subtitle={datas.subtitle}
                  urlRegister={datas.urlSchedule}
                  imgPerson={datas.person}
                />
              ) : null
            )}
      </>
    )
  }

  return (
    <section id="schedule">
      <Layout>
        <Container className="pt-[120px] w-full">
          <Grid>
            <div className="col-span-6 col-start-4">
              <HeadSection
                title="Schedule"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa cras ipsum dolor sit amet, consectetur"
              />
            </div>
            <div className="flex flex-col col-span-12">
              <div className="flex flex-row items-stretch justify-between">
                <div className="flex flex-row">
                  {listSchedule.map((item) => (
                    <ClassList
                      key={item.title}
                      title={item.title}
                      id={item.title}
                      active={selected === item.title}
                      setSelected={setSelected}
                    />
                  ))}
                </div>
                <div className="relative flex">
                  <input
                    type="text"
                    placeholder="Search"
                    className="px-4 border-2 rounded-lg focus:outline-none"
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
              <div className="grid gap-10 grid-cols-2 mt-12">
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
