import React from 'react';
import propTypes from 'prop-types';
import Link from 'next/link';

function IconLink({ src, alt, href }) {
  return (
    <Link href={href}>
      <a
        className="p-2 bg-white bg-opacity-10 rounded-full"
        href={href}
        title={alt}
      >
        <img src={src} className="h-[12.75px]" alt={alt} />
      </a>
    </Link>
  );
}

IconLink.propTypes = {
  src: propTypes.string.isRequired,
  href: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
};

export default IconLink;
