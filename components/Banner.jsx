import React from 'react';
import Image from 'next/image';

import BannerImg from '../assets/banner/banner.jpg';

const Banner = ({ text, smallText }) => {
  return (
    <div className="w-full h-[35rem] flex flex-col gap-4 justify-center items-center text-white pt-[8.5rem] bg-red-400">
        <Image src={BannerImg} alt="Banner od košarice" className="w-full h-[26.5rem] z-0 absolute object-cover" />
        <h3 className="z-10 font-[700] text-6xl">{text}</h3>
        <p className="z-10 font-[400]">{smallText}</p>
    </div>
  )
}

export default Banner