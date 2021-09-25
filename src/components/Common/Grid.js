import clsx from 'clsx'
import React from 'react'
import PropTypes from 'prop-types'
import InViewDiv from './InViewDiv'
import { StaggerChildFast } from '../Animations'

const Grid = ({ className, children }) => {
  return (
    <InViewDiv variants={StaggerChildFast} className={clsx('grid grid-cols-12 w-full lg:gap-10', className)}>
      {children}
    </InViewDiv>
  )
}

Grid.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Grid
