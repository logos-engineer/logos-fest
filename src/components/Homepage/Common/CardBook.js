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
      <div className="lg:w-[170px] flex-shrink-0 w-full h-24 overflow-hidden lg:h-full lg:overflow-visible">
        <div className="aspect-w-2 aspect-h-3 lg:aspect-h-1 lg:aspect-w-1 rounded-2xl overflow-hidden lg:rounded-l-2xl">
          <Image
            src={imgSrc}
            width={170}
            height={170}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={dataUrl}
            className="object-cover"
            alt={title}
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow-0 my-auto p-4 lg:px-10">
        <h4 className="text-black-primary text-sm font-semibold leading-normal lg:text-base">
          {title}
        </h4>
        <p className="mt-2 text-black-primary text-opacity-70 text-sm lg:text-base">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default CardBook
