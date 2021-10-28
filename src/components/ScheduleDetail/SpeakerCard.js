import React from 'react'
import Image from 'next/image'
import useDataUrl from '@/hooks/useDataUrl'
import Link from 'next/link'

export default function SpeakerCard({ imgSrc, name, job, slug }) {
  const dataUrl = useDataUrl(275, 332)
  return (
    <Link href={`/speakers/${slug}`} passHref>
      <a aria-label={name}>
        <div className="min-w-[240px] md:max-w-[240px] lg:md:max-w-[240px] grid gap-1 grid-cols-5">
          <div className="h-[fit-content] col-span-1 rounded-xl overflow-hidden">
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
          <div className="col-start- col-span-4">
            <h1 className="line-clamp-1 lg:line-clamp-none text-black-primary font-semibold">
              {name}
            </h1>
            <p className="line-clamp-2 text-black-body text-sm font-normal">
              {job}
            </p>
          </div>
        </div>
      </a>
    </Link>
  )
}
