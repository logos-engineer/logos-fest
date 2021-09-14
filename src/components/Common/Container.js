import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

const Container = ({ className, children }) => {
  return (
    <div
      className={clsx('flex mx-auto px-4 max-w-screen-xl lg:px-0', className)}
    >
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}
export default Container
