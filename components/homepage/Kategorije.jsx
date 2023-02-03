import React from 'react';
import Image from 'next/image';

import Oxygen from '../../assets/kategorije/oxygen.jpg';
import Dodaci from '../../assets/kategorije/dodaci.jpg';
import Cajevi from '../../assets/kategorije/cajevi.jpg';
import Gelovi from '../../assets/kategorije/gelovi.jpg';

const Kategorije = () => {
  return (
    <div className="flex flex-col w-full min-h-[37.5rem] bg-orange-400 text-white">
      <div className="w-full min-h-[18.75rem] md:flex max-md:grid bg-cyan-400">
        <div className="flex flex-col w-full max-md:min-h-[18.75rem] justify-center px-12 max-md:gap-8 md:gap-16 hover:cursor-pointer">
          <Image 
            src={Oxygen} 
            alt="Oxygen Optimal" 
            className="absolute left-0 md:w-[50%] h-[18.75rem] object-cover"  
          />
          <h3 className="text-5xl font-[600] z-10">Oxygen Optimal</h3>
          <p className="text-[0.938rem] font-[600] border-b-2 w-12 z-10">Više...</p>
        </div>

        <div className="flex flex-col w-full max-md:min-h-[18.75rem] justify-center max-md:px-12 max-md:gap-8 md:gap-16">
          <Image 
            src={Dodaci} 
            alt="Oxygen Optimal" 
            className="absolute md:right-0 max-md:left-0 md:w-[50%] h-[18.75rem] object-cover"  
          />
          <h3 className="text-5xl font-[600] z-10">Dodaci prehrani</h3>
          <p className="text-[0.938rem] font-[600] border-b-2 w-12 z-10">Više...</p>
        </div>
      </div>

      <div className="w-full min-h-[18.75rem] md:flex max-md:grid bg-cyan-400">
        <div className="flex flex-col w-full max-md:min-h-[18.75rem] justify-center px-12 max-md:gap-8 md:gap-16">
          <Image 
            src={Cajevi} 
            alt="Oxygen Optimal" 
            className="absolute left-0 md:w-[50%] h-[18.75rem] object-cover"  
          />
          <h3 className="text-5xl font-[600] z-10">Čajevi i tinkture</h3>
          <p className="text-[0.938rem] font-[600] border-b-2 w-12 z-10">Više...</p>
        </div>

        <div className="flex flex-col w-full max-md:min-h-[18.75rem] justify-center max-md:px-12 max-md:gap-8 md:gap-16">
          <Image 
            src={Gelovi} 
            alt="Oxygen Optimal" 
            className="absolute max-md:left-0 md:right-0 md:w-[50%] h-[18.75rem] object-cover"  
          />
          <h3 className="text-5xl font-[600] z-10">Gelovi i kreme</h3>
          <p className="text-[0.938rem] font-[600] border-b-2 w-12 z-10">Više...</p>
        </div>
      </div>
    </div>
  )
}

export default Kategorije