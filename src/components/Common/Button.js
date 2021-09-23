import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'

const Button = ({
  children,
  variant = 'primary',
  size = 'base',
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        'rounded-md transition-all',
        className,
        variant === 'primary' && ['text-white bg-ocean-300 hover:bg-ocean-500'],
        variant === 'secondary' && [
          'text-white bg-ocean-500 hover:bg-ocean-800',
        ],
        variant === 'outline-primary' && [
          'text-ocean-300 bg-white hover:bg-ocean-300 hover:text-white border border-ocean-300',
        ],
        variant === 'outline-secondary' && [
          'text-black-primary bg-white font-medium hover:bg-gray-200 hover:to-black-primary border ',
        ],
        variant === 'unstyled' && [
          ' bg-white  hover:bg-gray-200 hover:to-black-primary ',
        ],
        size === 'base' && ['px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-base'],
        size === 'sm' && ['px-4 py-2 text-base']
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
