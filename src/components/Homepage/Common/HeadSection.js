import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'

const HeadSection = ({ className, title, subtitle = '' }) => {
  return (
    <div className={clsx('flex flex-col ', className)}>
      <h2 className="text-center text-black-primary text-lg font-semibold leading-1.4 capitalize lg:text-3xl">
        {title}
      </h2>
      {subtitle && subtitle.length > 0 && (
        <h3 className="mt-4 text-center text-sm lg:text-md">{subtitle}</h3>
      )}
    </div>
  )
}

HeadSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default HeadSection
