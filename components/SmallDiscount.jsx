import React from 'react';
import Image from 'next/image';

const SmallDiscount = ({ image }) => {
    return (
      <div className="w-[40rem] h-[19.5rem] bg-black text-white justify-center p-4 m-4 flex flex-col">
          <Image 
            src={image} 
            alt="Discount image" 
            className="absolute w-[38rem] h-[17.5rem] object-cover" 
          />
          <div className="z-[1]">
              <p>Trending now</p>
              <h3>This Week's Most Wanted</h3>
              <button>DISCOVER NOW</button>
          </div>

          <div className="bg-slate-400 w-[38rem] h-[17.5rem] absolute opacity-0 border-4 border-slate-600 hover:opacity-30 duration-700 z-[1]"></div>
      </div>
    )
  }
  
  export default SmallDiscount