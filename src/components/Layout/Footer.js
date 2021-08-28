import React from 'react';

import FooterLink from './Footer/FooterLink';
import IconLink from './Footer/IconLink';

const Footer = () => {
  return (
    <footer className="mt-32 px-40 py-14 w-full bg-pink-500">
      <div className="mx-auto max-w-screen-xl">
        <img
          src="/icon/logos-white.svg"
          className="h-[32px] mx-auto w-auto"
          alt="Logos Logo"
        />
        <div className="w-[50%] flex justify-between mt-6 mx-auto">
          <FooterLink href="/">Sitemap</FooterLink>
          <FooterLink href="/">Privacy Policy</FooterLink>
          <FooterLink href="/">Contact Us</FooterLink>
        </div>

        <div className="h-[1px] flex mt-11 w-full bg-white bg-opacity-20">
          {' '}
        </div>
        <div className="flex items-center justify-between mt-6">
          <h5 className="text-white font-semibold">© 2021 Logos ID</h5>
          <div className="flex gap-1">
            <IconLink src="/icon/instagram.svg" href="/" alt="instagram" />
            <IconLink src="/icon/spotify.svg" href="/" alt="spotify" />
            <IconLink src="/icon/twitter.svg" href="/" alt="twitter" />
            <IconLink src="/icon/youtube.svg" href="/" alt="youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
