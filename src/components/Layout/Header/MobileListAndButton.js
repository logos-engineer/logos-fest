import React from 'react'
import { useState } from 'react'
import DetailNav from './DetailNav'

export default function MobileListAndButton() {
  const [viewList, setviewList] = useState(false)

  const handleView = (value) => {
    setviewList(value)
  }
  return (
    <>
      <button className="pr-4 lg:hidden" onClick={() => handleView(true)}>
        <img src="/icon/ham.svg" alt="menu nav" className="w-6 h-6" />
      </button>
      <DetailNav viewModal={viewList} handleModal={() => handleView(false)} />
    </>
  )
}
