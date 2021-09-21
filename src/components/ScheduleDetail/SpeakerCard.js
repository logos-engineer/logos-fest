import React from 'react'
import Link from 'next/link'

export default function SpeakerCard({ data }) {
  return (
    <Link href={`/speakers/${data.slug}`}>
      <a className="flex">
        <img
          className="w-12 h-12 rounded-xl object-cover object-center"
          src={data && data.img}
        />
        <div className="ml-4">
          <h1 className="text-black-primary font-semibold">
            {data && data.name}
          </h1>
          <p className="text-black-body text-sm font-normal">
            {data && data.jabatan}
          </p>
        </div>
      </a>
    </Link>
  )
}
