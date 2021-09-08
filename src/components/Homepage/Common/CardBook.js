import clsx from 'clsx'
import React from 'react'

const CardBook = ({ className }) => {
  return (
    <div
      className={clsx(
        'lg:max-h-[170px] relative flex flex-col mt-6 bg-white rounded-2xl shadow-fest lg:flex-row lg:mt-0',
        className
      )}
    >
      <div className="lg:w-[170px] flex-shrink-0 w-full h-24 overflow-hidden lg:h-full lg:overflow-visible">
        <div className="aspect-w-2 aspect-h-3 lg:aspect-h-1 lg:aspect-w-1 bg-black-500 rounded-2xl overflow-hidden lg:rounded-l-2xl">
          <img
            src="/img/homepage/book/ornament.svg"
            className="object-cover"
            alt="Ornament Book"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow-0 my-auto p-4 lg:px-10">
        <h4 className="text-black-primary text-sm font-semibold leading-normal lg:text-base">
          Bunga Rampai
        </h4>
        <p className="mt-2 text-black-primary text-opacity-70 text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu id orci
          lorem a nisl. Vestibulum, facilisis{' '}
        </p>
      </div>
    </div>
  )
}

export default CardBook
