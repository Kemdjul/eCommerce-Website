import React from 'react';
import Image from 'next/image';

import Partner1 from '../../assets/partneri/1.jpg';
import Partner2 from '../../assets/partneri/2.jpg';
import Partner3 from '../../assets/partneri/3.jpg';

const Partneri = () => {
  return (
    <div className="w-full min-h-96 flex flex-col gap-2 items-center justify-center md:px-48 py-16">
        <h3 className="text-4xl">PARTNERI</h3>
        <div className="w-40 h-1 bg-primary" />

        <div className="flex max-md:px-8 justify-between md:mt-8 w-full items-center justify-center">
          <Image className="max-md:w-20 md:w-32" src={Partner1} />
          <Image className="max-md:w-20 md:w-32" src={Partner2} />
          <Image className="max-md:w-20 md:w-32" src={Partner3} />
        </div>
    </div>
  )
}

export default Partneri