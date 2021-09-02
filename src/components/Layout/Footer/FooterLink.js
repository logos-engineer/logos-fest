import propTypes from 'prop-types';
import React from 'react';
import Link from 'next/link';

function FooterLink({ href, children }) {
  return (
    <Link passHref href={href}>
      <a className="relative pb-2 text-white text-lg font-medium border-b-2 border-transparent hover:border-white transition-colors">
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