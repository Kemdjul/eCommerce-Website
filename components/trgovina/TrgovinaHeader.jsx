import React from 'react';
import Image from 'next/image';

import Banner from '../../assets/banner/trgovinaBanner.jpg';

const TrgovinaHeader = () => {
  return (
    <div className="flex flex-col pt-[8.5rem] justify-center items-center w-full max-md:h-96 md:h-[34.5rem]">
        <Image src={Banner} alt="Banner" className="absolute w-full max-md:h-96 md:h-[26.5rem] object-cover" />
        <h3 className="text-3xl max-md:hidden">Trgovina</h3>
    </div>
  )
}

export default TrgovinaHeader