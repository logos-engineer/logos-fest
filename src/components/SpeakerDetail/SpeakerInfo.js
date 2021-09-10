import React from 'react'
import { Grid } from '@/components/Common'
import Image from 'next/image'

export default function SpeakerInfo({ photo, name, univ, desc }) {
  return (
    <section id="speaker-info">
      <Grid className="mt-36">
        <div className="h-[380px] block col-span-4 col-start-2 rounded-3xl overflow-hidden">
          <Image
            src={photo}
            width={380}
            height={380}
            layout="responsive"
            placeholder="empty"
          />
        </div>
        <div className="flex flex-col col-span-6 col-start-6 justify-center">
          <h1 className="mb-2 text-black-primary text-3xl font-semibold">
            {name}
          </h1>
          <h2 className="mb-6 text-gray-600 text-lg font-semibold">{univ}</h2>
          <p className="text-black-primary text-opacity-75">
            {desc ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem neque
            pretium egestas in et, faucibus adipiscing lectus ipsum. Vel aliquam
            non eget quisque rhoncus velit. Gravida mi sed habitant sed
            sollicitudin auctor. Tincidunt risus, volutpat vel morbi. Velit,
            facilisis tellus neque`}
          </p>
        </div>
      </Grid>
    </section>
  )
}
