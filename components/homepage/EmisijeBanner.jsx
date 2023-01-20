import React from 'react';
import Image from 'next/image';

import Banner from '../../assets/emisije-banner.jpg';

const Video = () => {
  return (
    <div className="bg-gray-600 w-full h-[37.5rem] mt-8 flex justify-center items-center">
        <Image src={Banner} className="w-full h-[37.5rem] object-cover absolute" />
        
        <div className="flex flex-col justify-center items-center text-center z-10 relative text-white">
          <h2 className="text-[4rem] font-[600]">NOVE EMISIJE</h2>
          <p className="w-[50rem] text-[1.33rem] leading-9 font-[400]">Uz pregršt informacija, interesantnih i aktualnih tema tu možete pronaći i zdrave i jednostavne recepte, različite vježbe kao i proizvode na prirodnoj bazi.</p>
          <button 
            type="button" 
            className="px-4 py-2 bg-primary mt-10">POGLEDAJ VIŠE...</button>
        </div>
    </div>
  )
}

export default Video