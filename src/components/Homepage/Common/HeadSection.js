import clsx from 'clsx';
import React from 'react';
import PropTypes from 'prop-types';

const HeadSection = ({ className, title, subtitle = '' }) => {
  return (
    <div className={clsx('flex flex-col ', className)}>
      <h3 className="text-center text-black-primary text-3xl font-semibold leading-1.4 capitalize">
        {title}
      </h3>
      {subtitle && subtitle.length > 0 && (
        <h6 className="mt-4 text-center text-md">{subtitle}</h6>
      )}
    </div>
  );
};

HeadSection.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default HeadSection;
