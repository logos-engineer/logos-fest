import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

function IconLink({ src, alt, href }) {
  return (
    <Link passHref href={href}>
      <a className="p-2 bg-white hover:bg-opacity-0 bg-opacity-10 rounded-full transition">
        <img src={src} className="h-[14px]" alt={alt} />
      </a>
    </Link>
  );
}

IconLink.propTypes = {
  src: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  height: propTypes.string//use tailwind height class
};

export default IconLink;
