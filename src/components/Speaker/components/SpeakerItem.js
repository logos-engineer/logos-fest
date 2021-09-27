import Image from 'next/image'
import React from 'react'
import useDataUrl from '@/hooks/useDataUrl'
import Link from 'next/link'
import splitbee from '@splitbee/web'
import { SPLITBEE_EVENTS } from '@/constants/eventSplitbee'

const SpeakerItem = ({ name, imgSrc, university, slug }) => {
  const dataUrl = useDataUrl(275, 332)
  return (
    <Link href={`/speakers/${slug}`} passHref>
      <a
        aria-label={`${name} detail`}
        onClick={() =>
          splitbee.track(`/speakers/${slug}`, {
            data: SPLITBEE_EVENTS.SPEAKERS,
          })
        }
      >
        <div className="relative w-full h-full rounded-2xl cursor-pointer overflow-hidden">
          <Image
            src={imgSrc}
            alt="Speaker Logos"
            width={275}
            height={332}
            layout="responsive"
            objectFit="cover"
            placeholder="blur"
            blurDataURL={dataUrl}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0">
            <div className="absolute bottom-0 left-0 right-0 flex flex-col pb-4 pt-12 px-4 h-auto bg-speaker-gradient">
              <h4 className="text-white text-md font-semibold">{name}</h4>
              <p className="text-white text-base">{university}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default SpeakerItem
