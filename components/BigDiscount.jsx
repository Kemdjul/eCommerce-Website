import React from 'react';
import Image from 'next/image';

import DiscountImage from '../assets/discount-1.jpg';

const BigDiscount = () => {
  return (
    <div className="w-[36rem] h-[40rem] bg-black text-white justify-center p-4 m-4 flex flex-col">
        <Image 
            src={DiscountImage} 
            alt="Discount image" 
            className="absolute w-[27rem] h-[38rem] object-cover"
        />
        <div className="z-[1]">
            <p>Trending now</p>
            <h3>This Week's Most Wanted</h3>
            <button>DISCOVER NOW</button>
        </div>

        <div className="bg-slate-400 w-[27rem] h-[38rem] absolute opacity-0 border-4 border-slate-600 hover:opacity-20 duration-700 z-[1]"></div>
    </div>
  )
}

export default BigDiscount