import React from 'react'
import Image from 'next/image'
import HeroMobile from '@/public/img/homepage/hero-mobile.png'

export default function MobileHeroImage() {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden lg:hidden">
      <div className="absolute w-full bg-black-500 bg-opacity-40 lg:h-full"></div>
      <Image
        className="border-8 lg:hidden"
        src={HeroMobile}
        alt=" Hero Image"
        layout="responsive"
        width={328}
        height={180}
      />
    </div>
  )
}
