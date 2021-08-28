import { Button } from '@/components/Common';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const CardSchedule = ({ title, date, subtitle, imgPerson, urlRegister }) => {
  return (
    <div className="flex flex-col px-8 py-8 w-full bg-white rounded-2xl shadow-fest">
      <h5 className="text-black-500 text-xl font-semibold">{title}</h5>
      <p className="mt-2 text-pink-500 text-base">{date}</p>
      <p className="mt-4 text-base">{subtitle}</p>
      <div className="flex mt-6 w-full space-x-4">
        {imgPerson.map((item, index) => (
          <div
            className="h-[42px] w-[42px] rounded-md overflow-hidden"
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
          <Button variant="primary" size="base" className="mt-8">
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
