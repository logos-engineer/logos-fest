import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

function IconLink({ src, alt, href }) {
  return (
    <Link href={href}>
      <a
        className="p-2 bg-white bg-opacity-10 rounded-full"
        href={href}
        title={alt}
      >
        <img src={src} className="h-[12.75px]" alt={src} />
      </a>
    </Link>
  );
}

IconLink.PropTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default IconLink;
