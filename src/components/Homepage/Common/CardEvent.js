import React from 'react'
import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Link from 'next/link'

const CardEvent = ({ imgSrc, imgAlt, title, subtitle, url }) => {
  return (
    <div className="mt-[18px] flex flex-col items-start px-4 py-6 bg-white rounded-xl shadow-fest sm:px-10 sm:py-10 sm:rounded-3xl">
      <div className="flex items-center justify-center w-8 h-8 bg-ocean-300 rounded-lg sm:w-16 sm:h-16 sm:rounded-2xl">
        <img className="w-4 h-4 sm:w-8 sm:h-8" src={imgSrc} alt={imgAlt} />
      </div>
      <h3 className="leading- 1.4 mt-4 text-black-primary font-semibold capitalize lg:mt-8 lg:text-2xl">
        {title}
      </h3>
      <p className="line-clamp-3 sm:line-clamp-5 mt-2 text-sm lg:mt-4 lg:text-base">
        {subtitle}
      </p>
      <Link href={url} passHref>
        <a
          aria-label={'Learn More ' + title}
          className="lg:mt-[42px] flex items-center mt-4 p-0 w-auto text-ocean-300 text-sm leading-normal sm:text-base"
        >
          Baca selengkapnya <ChevronRightIcon className="ml-1 w-6 h-6" />
        </a>
      </Link>
    </div>
  )
}

CardEvent.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
export default CardEvent
