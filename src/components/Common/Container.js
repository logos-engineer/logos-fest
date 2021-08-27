import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Container = ({ className, children }) => {
  return (
    <div className={clsx('flex mx-auto max-w-screen-xl', className)}>
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};
export default Container;
