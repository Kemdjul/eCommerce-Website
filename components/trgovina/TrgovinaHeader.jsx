import React from 'react';
import Image from 'next/image';

import Banner from '../../assets/banner/trgovinaBanner.jpg';

const TrgovinaHeader = () => {
  return (
    <div className="flex flex-col pt-[8.5rem] justify-center items-center w-full h-[34.5rem] bg-red-600">
        <Image src={Banner} alt="Banner" className="absolute w-full h-[26.5rem]" />
        <h3 className="text-3xl">Trgovina</h3>
    </div>
  )
}

export default TrgovinaHeader