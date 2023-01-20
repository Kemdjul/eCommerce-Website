import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { urlFor } from '../../lib/client';

import Trendy_1 from '../../assets/trendy-1.jpg';

const New = ({ newField }) => {
  return (
    <div className="w-full min-h-screen mt-16 px-32 gap-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className="text-4xl">NAŠI PROIZVODI</h3>
          <div className="h-1 w-40 bg-primary" />
          <p className="text-lg text-[#454545]">Pogledajte našu cijelu paletu proizvoda.</p>
          
          <ul className="flex items-center mt-6 text-xl gap-3">
            <li className="text-primary border-b-2 border-primary">AKCIJA</li>
            <div className="h-4 w-[1px] bg-gray-400" />
            <li className="text-gray-600">OXYGEN OPTIMAL</li>
            <div className="h-4 w-[1px] bg-gray-400" />
            <li className="text-gray-600">DODACI PREHRANI</li>
            <div className="h-4 w-[1px] bg-gray-400" />
            <li className="text-gray-600">ČAJEVI I TINKTURE</li>
            <div className="h-4 w-[1px] bg-gray-400" />
            <li className="text-gray-600">GELOVI I KREME</li>
          </ul>
        </div>

        <div className="w-full h-[33.5rem] flex gap-5 justify-center items-center">
        {newField?.map((newP, index) => 
          {
            if (index < 4) return (
              <div className="w-[22.5%] h-[100%] flex flex-col justify-center items-center">
                <Link href={`product/${newP.slug.current}`}>
                  <div className="w-[100%] h-80 bg-green-800 border-2 border-gray-200">
                    <img src={urlFor(newP.image[0].asset._ref)} alt="Product image" className="w-full h-full object-cover" />
                  </div>
                </Link>
                  <div className="py-3 flex flex-col items-center">
                    <Link href={`product/${newP.slug.current}`}>
                      <p className="text-xl font-[500] tracking-widest">{newP.naziv}</p>
                    </Link>
                    <div className="flex gap-4">
                      <p className="text-primary">€{newP.cijena}</p>
                      {newP.staraCijena?.map(() => (
                        <p>{newP.staraCijena}</p>
                      ))}
                    </div>

                    <button 
                      className="mt-1 px-4 py-2 bg-primary text-white rounded-full"
                      type="button">DODAJ U KOŠARICU</button>
                  </div>
              </div>
            )
          })}
        </div>

        <div className="w-full h-[33.5rem] flex gap-5 justify-center items-center">
        {newField?.map((newP, index) => 
          {
            if (index > 3 && index < 8) return (
              <div className="w-[22.5%] h-[100%] flex flex-col justify-center items-center">
                <Link href={`product/${newP.slug.current}`}>
                  <div className="w-[100%] h-80 bg-green-800 border-2 border-gray-200">
                    <img src={urlFor(newP.image[0].asset._ref)} alt="Product image" className="w-full h-full object-cover" />
                  </div>
                </Link>
                  <div className="py-3 flex flex-col items-center">
                    <Link href={`product/${newP.slug.current}`}>
                      <p className="text-xl font-[500] tracking-widest">{newP.naziv}</p>
                    </Link>
                    <div className="flex gap-4">
                      <p className="text-primary">€{newP.cijena}</p>
                      {newP.staraCijena?.map(() => (
                        <p>{newP.staraCijena}</p>
                      ))}
                    </div>

                    <button 
                      className="mt-1 px-4 py-2 bg-primary text-white rounded-full"
                      type="button">DODAJ U KOŠARICU</button>
                  </div>
              </div>
            )
          })}
        </div>
      </div>
  )
}

export default New