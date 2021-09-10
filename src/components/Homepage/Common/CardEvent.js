import React from 'react'
import PropTypes from 'prop-types'
import { ChevronRightIcon } from '@heroicons/react/solid'

const CardEvent = ({ imgSrc, imgAlt, title, subtitle, url }) => {
  return (
    <div className="mt-[18px] flex flex-col items-start px-10 py-10 bg-white rounded-3xl shadow-fest">
      <div className="flex items-center justify-center w-16 h-16 bg-pink-500 rounded-2xl">
        <img className="w-8 h-8" src={imgSrc} alt={imgAlt} />
      </div>
      <h3 className="mt-4 text-black-primary font-semibold leading-1.4 capitalize lg:mt-8 lg:text-2xl">
        {title}
      </h3>
      <p className="mt-2 text-sm lg:mt-4 lg:text-base">{subtitle}</p>
      <a
        href={url}
        className="lg:mt-[42px] flex items-center mt-4 p-0 w-auto text-pink-500 leading-normal"
      >
        Learn More <ChevronRightIcon className="ml-1 w-6 h-6" />
      </a>
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
