import Image from 'next/image';
import React from 'react';
import SpeakerImg from '@/public//img/speaker/person-1.png';
import useDataUrl from '@/hooks/useDataUrl';
const SpeakerItem = ({ name, imgSrc, university }) => {
  const dataUrl = useDataUrl(275, 332);
  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden">
      <Image
        src={imgSrc}
        alt="Speaker Logos"
        width={275}
        height={332}
        layout="responsive"
        placeholder="blur"
        blurDataURL={dataUrl}
      />
      <div className="bg-speaker-gradient absolute bottom-0 left-0 right-0 top-0">
        <div className="absolute bottom-0 left-0 right-0 flex flex-col p-4 h-auto">
          <h4 className="text-white text-md font-semibold">{name}</h4>
          <p className="text-white text-base">{university}</p>
        </div>
      </div>
    </div>
  );
};

export default SpeakerItem;
