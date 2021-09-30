import { Button } from '@/components/Common'
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import InViewDiv from '@/components/Common/InViewDiv'
import { FadeInUp } from '@/components/Animations'
import clsx from 'clsx'
import splitbee from '@splitbee/web'
import { SPLITBEE_EVENTS } from '@/constants/eventSplitbee'

const CardSchedule = ({
  title,
  date,
  subtitle,
  imgPerson,
  urlRegister,
  category,
  slug,
  titleLink,
  className,
}) => {
  return (
    <InViewDiv
      variants={FadeInUp}
      className={clsx(
        'flex flex-col px-4 py-6 w-full bg-white rounded-xl shadow-fest sm:px-8 sm:py-8 sm:rounded-2xl',
        className
      )}
    >
      <Link href={titleLink || `/schedule/${category}/${slug}`} passHref>
        <a
          aria-label={title}
          className="flex-1 cursor-pointer"
          onClick={() =>
            splitbee.track(titleLink || `/schedule/${category}/${slug}`, {
              data: SPLITBEE_EVENTS.SCHEDULE,
            })
          }
        >
          <h5 className="text-black-500 text-base font-semibold lg:text-xl">
            {title}
          </h5>
        </a>
      </Link>
      <p className="mt-2 text-ocean-300 text-sm lg:text-base">{date}</p>
      <p className="line-clamp-3 mt-4 text-sm lg:text-base">
        {subtitle.length > 226 ? subtitle.substring(0, 226) + '...' : subtitle}
      </p>
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
      {/* <Link href={urlRegister} passHref> */}
      <a
        className="mt-8"
        target="_blank"
        href={urlRegister}
        onClick={() => splitbee.track(urlRegister, { data: category })}
      >
        <Button variant="primary" size="base">
          Register Now
        </Button>
      </a>
      {/* </Link> */}
    </InViewDiv>
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
