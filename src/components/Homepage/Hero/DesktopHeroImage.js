import React from 'react'
import Image from 'next/image'
import HeroImg from '@/public/img/homepage/hero-1.png'

export default function DesktopHeroImage() {
  return (
    <div className="relative hidden w-full h-full rounded-3xl overflow-hidden lg:block">
      <div className="absolute w-full bg-black-500 bg-opacity-40 lg:h-full"></div>
      <Image
        src={HeroImg}
        alt="Hero Image"
        className="relative w-full h-full object-contain"
        layout="responsive"
        width={698}
        height={444}
      />
    </div>
  )
}
