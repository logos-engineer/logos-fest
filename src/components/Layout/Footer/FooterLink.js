import propTypes from 'prop-types'
import React from 'react'
import Link from 'next/link'

function FooterLink({ href, children }) {
  return (
    <Link passHref href={href}>
      <a className="relative pb-2 w-max text-white text-sm font-medium border-b-2 border-transparent hover:border-white transition-colors lg:text-lg">
        {children}
      </a>
    </Link>
  )
}

FooterLink.propTypes = {
  children: propTypes.node.isRequired,
  href: propTypes.string.isRequired,
}
export default FooterLink
