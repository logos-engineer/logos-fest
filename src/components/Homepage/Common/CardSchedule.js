import { Button } from '@/components/Common';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CardSchedule = ({ title, date, subtitle, imgPerson, urlRegister }) => {
  return (
    <div className="flex flex-col px-4 py-4 w-full bg-white rounded-2xl shadow-fest md:px-8 md:py-8">
      <h5 className="text-[16px] text-black-500 font-semibold md:text-xl">
        {title}
      </h5>
      <p className="mt-2 text-pink-500 text-sm md:text-base">{date}</p>
      <p className="mt-4 text-sm md:text-base">{subtitle}</p>
      <div className="flex mt-4 w-full space-x-3 md:mt-6 md:space-x-4">
        {imgPerson.map((item, index) => (
          <div
            className="h-[24px] w-[24px] md:h-[42px] md:w-[42px] rounded-md overflow-hidden"
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
          <Button variant="primary" size="base" className="mt-4 md:mt-8">
            Register Now
          </Button>
        </a>
      </Link>
    </div>
  );
};

CardSchedule.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  subtitle: PropTypes.string,
  imgPerson: PropTypes.array,
  urlRegister: PropTypes.string,
};

export default CardSchedule;
