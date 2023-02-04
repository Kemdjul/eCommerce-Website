import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useRouter } from 'next/router';

import Oxygen from '../../assets/kategorije/oxygen.jpg';
import Dodaci from '../../assets/kategorije/dodaci.jpg';
import Cajevi from '../../assets/kategorije/cajevi.jpg';
import Gelovi from '../../assets/kategorije/gelovi.jpg';

import { useStateContext } from '../../context/StateContext';

const Kategorije = () => {
  const { setKategorija } = useStateContext();

  const handleClick = (kat) => {
    setKategorija(kat);
  };

  return (
    <div className="flex flex-col w-full min-h-[37.5rem] bg-orange-400 text-white">
      <div className="w-full min-h-[18.75rem] md:flex max-md:grid bg-cyan-400">
        <Link href={'/trgovina'} className="flex flex-col w-full max-md:min-h-[18.75rem] justify-center px-12 max-md:gap-8 md:gap-16 hover:cursor-pointer">
          <Image 
            src={Oxygen} 
            alt="Oxygen Optimal" 
            className="absolute left-0 md:w-[50%] h-[18.75rem] object-cover"
            onClick={handleClick('Oxygen Optimal')}
          />
          <h3 className="text-5xl font-[600] z-10">Oxygen Optimal</h3>
          <p className="text-[0.938rem] font-[600] border-b-2 w-12 z-10">Više...</p>
        </Link>

        <Link onClick={handleClick('Dodaci prehrani')} href='/trgovina' className="flex flex-col w-full max-md:min-h-[18.75rem] justify-center max-md:px-12 max-md:gap-8 md:gap-16">
          <Image 
            src={Dodaci} 
            alt="Dodaci prehrani" 
            className="absolute md:right-0 max-md:left-0 md:w-[50%] h-[18.75rem] object-cover"  
          />
          <h3 className="text-5xl font-[600] z-10">Dodaci prehrani</h3>
          <p className="text-[0.938rem] font-[600] border-b-2 w-12 z-10">Više...</p>
        </Link>
      </div>

      <div className="w-full min-h-[18.75rem] md:flex max-md:grid bg-cyan-400">
        <Link onClick={handleClick('Tinkture i čajevi')} href='/trgovina' className="flex flex-col w-full max-md:min-h-[18.75rem] justify-center px-12 max-md:gap-8 md:gap-16">
          <Image 
            src={Cajevi} 
            alt="Tinkture i čajevi" 
            className="absolute left-0 md:w-[50%] h-[18.75rem] object-cover"  
          />
          <h3 className="text-5xl font-[600] z-10">Tinkture i čajevi</h3>
          <p className="text-[0.938rem] font-[600] border-b-2 w-12 z-10">Više...</p>
        </Link>

        <Link href='/trgovina' className="flex flex-col w-full max-md:min-h-[18.75rem] justify-center max-md:px-12 max-md:gap-8 md:gap-16">
          <Image 
            src={Gelovi} 
            alt="Gelovi i kreme" 
            className="absolute max-md:left-0 md:right-0 md:w-[50%] h-[18.75rem] object-cover"
            onClick={handleClick('Gelovi i kreme')}  
          />
          <h3 className="text-5xl font-[600] z-10">Gelovi i kreme</h3>
          <p className="text-[0.938rem] font-[600] border-b-2 w-12 z-10">Više...</p>
        </Link>
      </div>
    </div>
  )
}

export default Kategorije