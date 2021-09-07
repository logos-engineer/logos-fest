import React from 'react'
import Image from 'next/image'
import HeroImg from '@/public/img/homepage/hero-1.png'

export default function DesktopHeroImage() {
  return (
    <div className="relative  hidden aspect-w-6 aspect-h-4 rounded-3xl overflow-hidden lg:block">
    
      {/* <div className="absolute w-full bg-black-500 bg-opacity-40 lg:h-full"></div> */}
      <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/mnta9Pp2LqA?playlist=mnta9Pp2LqA&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
