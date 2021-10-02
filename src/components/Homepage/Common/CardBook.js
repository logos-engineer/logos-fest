import clsx from 'clsx'
import React from 'react'
import Image from 'next/image'
import useDataUrl from '@/hooks/useDataUrl'
const CardBook = ({ className, title, subtitle, imgSrc }) => {
  const dataUrl = useDataUrl(170, 170)
  return (
    <div
      className={clsx(
        'lg:max-h-[170px] relative flex flex-col mt-6 bg-white rounded-xl shadow-fest sm:rounded-2xl lg:flex-row lg:mt-0 ',
        className
      )}
    >
      <div className="lg:w-[170px] flex-shrink-0 w-full h-24 bg-ocean-300 rounded-t-xl overflow-hidden lg:h-full lg:overflow-visible">
        <div className="flex items-end justify-center h-full">
          {/* <Image
            src={imgSrc}
            width={170}
            height={170}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={dataUrl}
            className="object-cover"
            alt={title}
          /> */}
          <img
            src={imgSrc}
            alt={title}
            className="h-[96px] w-[106px] lg:h-[170px] lg:w-[170px] -mb-1"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow-0 my-auto p-4 lg:px-10">
        <h3 className="text-black-primary text-sm font-semibold leading-normal lg:text-base">
          {title}
        </h3>
        <p className="mt-2 text-black-primary text-opacity-70 text-sm lg:text-base">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default CardBook
