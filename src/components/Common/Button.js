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
        variant === 'primary' && ['text-white bg-pink-500 hover:bg-pink-700'],
        variant === 'secondary' && ['text-white bg-red-500 hover:bg-pink-800'],
        variant === 'outline-primary' && [
          'text-pink-500 bg-white hover:bg-pink-500 hover:text-white border border-pink-500',
        ],
        variant === 'outline-secondary' && [
          'text-black-primary bg-white font-medium hover:bg-gray-200 hover:to-black-primary border ',
        ],
        variant === 'unstyled' && [
          ' bg-white  hover:bg-gray-200 hover:to-black-primary ',
        ],
        size === 'base' && ['px-6 py-3 text-base']
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
