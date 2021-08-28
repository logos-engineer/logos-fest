import propTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

function FooterLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="relative text-white text-lg font-medium" href={href}>
        {children}
      </a>
    </Link>
  );
}

FooterLink.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string.isRequired,
};
export default FooterLink;
