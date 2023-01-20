import React from 'react';
import Image from 'next/image';

import BlogImage from '../../assets/blog-remove.jpg';

const Blogs = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <h3 className="text-4xl">NOVOSTI</h3>

      <div className="w-full h-[34.75rem] px-32">
        <div className="w-[30%] h-full flex flex-col gap-4 items-center justify-center text-center">
          <Image src={BlogImage} alt="Blog image" />
          <p className="text-xs text-primary">Datum, 2023</p>
          <h5 className="text-2xl">DIJABETEČKE KOMPILACIJE</h5>
          <p className="font-[400] text-[#828181]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu....</p>
          <button type="button" className="px-4 py-2 bg-primary text-white">READ MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Blogs