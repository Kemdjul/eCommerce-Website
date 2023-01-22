import React from 'react';
import Image from 'next/image';

import BannerImg from '../assets/banner/banner.jpg';

const Banner = ({ text, smallText }) => {
  return (
    <div className="w-full h-[35rem] pt-[8.5rem] bg-red-400">
        <Image src={BannerImg} alt="Banner od košarice" className="w-full h-[26.5rem] absolute object-cover" />
    </div>
  )
}

export default Banner