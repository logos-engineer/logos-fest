import React from 'react'

import FooterLink from './Footer/FooterLink'
import IconLink from './Footer/IconLink'

const Footer = () => {
  return (
    <footer className="bg-ocean-300 mt-32 p-4 w-full border lg:px-40 lg:py-14">
      <div className="max-w-screen-xl lg:mx-auto">
        <img
          src="/icon/logos.png"
          className="h-[32px] w-auto lg:mx-auto"
          alt="Logos Logo"
        />
        {/* <div className="lg:w-[50%] flex flex-col justify-between mt-6 w-full lg:flex-row lg:mx-auto">
          <FooterLink href="/">Sitemap</FooterLink>
          <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink href="/">Contact Us</FooterLink>
        </div> */}

        <div className="h-[1px] flex mt-6 w-full bg-white bg-opacity-20 lg:mt-11">
          {' '}
        </div>
        <div className="flex flex-col justify-between mt-6 lg:flex-row lg:items-center">
          <h5 className="text-white text-xs lg:text-base lg:font-semibold">
            © Logos ID 2021. All Right Reserved
          </h5>
          <div className="flex gap-4 mt-4 lg:gap-1 lg:mt-0">
            <IconLink src="/icon/instagram.svg" href="/" alt="instagram" />
            <IconLink src="/icon/spotify.svg" href="/" alt="spotify" />
            <IconLink src="/icon/twitter.svg" href="/" alt="twitter" />
            <IconLink src="/icon/youtube.svg" href="/" alt="youtube" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
