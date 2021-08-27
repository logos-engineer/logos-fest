import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRightIcon } from '@heroicons/react/solid';

const CardEvent = ({ imgSrc, imgAlt, title, subtitle, url }) => {
  return (
    <div className="shadow-fest mt-[18px] flex flex-col items-start px-10 py-10 bg-white rounded-3xl">
      <div className="flex items-center justify-center w-16 h-16 bg-pink-500 rounded-2xl">
        <img className="w-8 h-8" src={imgSrc} alt={imgAlt} />
      </div>
      <h3 className="mt-8 text-black-primary text-2xl font-semibold leading-1.4 capitalize">
        {title}
      </h3>
      <p className="mt-4">{subtitle}</p>
      <a
        href={url}
        className="mt-[42px] flex items-center p-0 w-auto text-pink-500 leading-normal"
      >
        Learn More <ChevronRightIcon className="ml-1 w-6 h-6" />
      </a>
    </div>
  );
};

CardEvent.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default CardEvent;
