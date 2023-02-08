import React from 'react';
import Image from 'next/image';

import BannerImg from '../assets/banner/banner.jpg';

const Banner = ({ text, smallText }) => {
  return (
    <div className="w-full md:h-[35rem] max-md:h-[26.5rem] flex flex-col gap-4 justify-center items-center text-white max-md:pt-[12rem] md:pt-[8.5rem]">
        <Image src={BannerImg} alt="Banner od košarice" className="w-full md:h-[26.5rem] z-0 absolute object-cover" />
        <h3 className="z-10 font-[700] max-md:text-2xl md:text-6xl">{text}</h3>
        <p className="z-10 font-[400] max-md:text-sm">{smallText}</p>
    </div>
  )
}

export default Banner