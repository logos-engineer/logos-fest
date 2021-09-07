import React from 'react'
import Image from 'next/image'
import HeroMobile from '@/public/img/homepage/hero-mobile.png'

export default function MobileHeroImage() {
  return (
    <div className="relative aspect-w-3 aspect-h-2 rounded-3xl overflow-hidden lg:hidden">
     
      <iframe class="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/mnta9Pp2LqA?playlist=mnta9Pp2LqA&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}
