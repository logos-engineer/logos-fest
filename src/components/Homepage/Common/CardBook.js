import clsx from 'clsx';
import React from 'react';

const CardBook = ({ className }) => {
  return (
    <div
      className={clsx(
        'max-h-[170px] relative flex bg-white rounded-2xl shadow-fest ',
        className
      )}
    >
      <div className="w-[170px] flex-shrink-0">
        <div className="aspect-w-1 aspect-h-1 bg-black-500 rounded-l-2xl overflow-hidden">
          <img
            src="/img/homepage/book/ornament.svg"
            className="object-cover"
            alt="Ornament Book"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow-0 my-auto px-10">
        <h4 className="text-black-primary font-semibold leading-normal">
          Bunga Rampai
        </h4>
        <p className="mt-2 text-black-primary text-opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu id orci
          lorem a nisl. Vestibulum, facilisis{' '}
        </p>
      </div>
    </div>
  );
};

export default CardBook;
