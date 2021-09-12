import { Button } from '@/components/Common'
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

const CardSchedule = ({
  title,
  date,
  subtitle,
  imgPerson,
  urlRegister,
  category,
  slug,
}) => {
  return (
    <div className="flex flex-col px-8 py-8 w-full bg-white rounded-2xl shadow-fest">
      <Link href={`/schedule/${category}/${slug}`} passHref>
        <a aria-label={title} className="cursor-pointer">
          <h5 className="text-black-500 text-base font-semibold lg:text-xl">
            {title}
          </h5>
        </a>
      </Link>
      <p className="mt-2 text-pink-500 text-sm lg:text-base">{date}</p>
      <p className="mt-4 text-sm lg:text-base">{subtitle}</p>
      <div className="flex mt-6 w-full space-x-4">
        {imgPerson.map((item, index) => (
          <div
            className="h-[24px] w-[24px] lg:h-[42px] lg:w-[42px] rounded-md overflow-hidden"
            key={index}
          >
            <img
              src={item.imgUrl}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
        ))}
      </div>
      <Link href={urlRegister} passHref>
        <a>
          <Button variant="primary" size="base" className="mt-4 lg:mt-8">
            Register Now
          </Button>
        </a>
      </Link>
    </div>
  )
}

CardSchedule.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  subtitle: PropTypes.string,
  imgPerson: PropTypes.array,
  urlRegister: PropTypes.string,
}

export default CardSchedule
