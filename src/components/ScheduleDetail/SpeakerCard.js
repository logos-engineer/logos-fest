import React from 'react'
import Image from 'next/image'
import useDataUrl from '@/hooks/useDataUrl'

export default function SpeakerCard({ imgSrc, name, job }) {
  const dataUrl = useDataUrl(275, 332)
  return (
    <div className="flex">
      <div className="w-12 h-12 rounded-xl overflow-hidden">
        <Image
          src={imgSrc}
          height={48}
          width={48}
          placeholder="blur"
          objectFit="cover"
          layout="responsive"
          blurDataURL={dataUrl}
        />
      </div>
      <div className="ml-4">
        <h1 className="line-clamp-1 lg:line-clamp-none text-black-primary font-semibold">
          {name}
        </h1>
        <p className="text-black-body text-sm font-normal">{job}</p>
      </div>
    </div>
  )
}
