import React, { useState } from 'react';
import Link from 'next/link';

import { urlFor } from '../../lib/client';

const New = ({ produkti }) => {
  const [kategorija, setKategorija] = useState('Akcija');

  let count = 0;

  return (
    <div className="w-full min-h-screen mt-16 max-md:px-4 md:px-32 gap-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h3 className="text-4xl">NAŠI PROIZVODI</h3>
          <div className="h-1 w-40 bg-primary" />
          <p className="text-lg text-[#454545] text-center">Pogledajte našu cijelu paletu proizvoda.</p>
          
          <ul className="md:flex max-md:grid max-md:grid-cols-3 items-center justify-center mt-6 text-xl max-md:gap-4 md:gap-3">
            <button type="button" onClick={() => setKategorija('Akcija')}>
              <li className={kategorija == 'Akcija' ? `text-primary border-b-2 border-primary` : `text-gray-600`}>AKCIJA</li>
            </button>
            
            <div className="h-4 w-[1px] bg-gray-400 max-md:hidden" />

            <button type="button" onClick={() => setKategorija('Oxygen Optimal')}>
              <li className={kategorija == 'Oxygen Optimal' ? `text-primary border-b-2 border-primary` : `text-gray-600`}>OXYGEN OPTIMAL</li>
            </button>

            <div className="h-4 w-[1px] bg-gray-400 max-md:hidden" />

            <button type="button" onClick={() => setKategorija('Dodaci prehrani')}>
              <li className={kategorija == 'Dodaci prehrani' ? `text-primary border-b-2 border-primary` : `text-gray-600`}>DODACI PREHRANI</li>
            </button>

            <div className="h-4 w-[1px] bg-gray-400 max-md:hidden" />

            <button type="button" onClick={() => setKategorija('Čajevi i tinkture')}>
              <li className={kategorija == 'Čajevi i tinkture' ? `text-primary border-b-2 border-primary` : `text-gray-600`}>ČAJEVI I TINKTURE</li>
            </button>

            <div className="h-4 w-[1px] bg-gray-400 max-md:hidden" />

            <button type="button" onClick={() => setKategorija('Gelovi i kreme')}>
              <li className={kategorija == 'Gelovi i kreme' ? `text-primary border-b-2 border-primary` : `text-gray-600`}>GELOVI I KREME</li>
            </button>
          </ul>
        </div>

        <div className="w-full h-[63rem] grid max-sm:grid-cols-1 overflow-hidden max-md:grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center">
        {produkti?.map((produkt) => 
          {
            if (count < 8)
              if (produkt.kategorija?.find((kat) => kat == kategorija)) {
                count++;
                return (
                  <div className="w-full h-full pt-8 flex flex-col justify-top items-center" key={produkt._id}>
                    <Link href={`produkt/${produkt.slug.current}`}>
                      <div className="md:w-[100%] max-md:w-72 h-80 bg-green-800 border-2 border-gray-200">
                        <img src={urlFor(produkt.image[0].asset._ref)} alt="Product image" className="w-full h-full object-cover" />
                      </div>
                    </Link>
                      <div className="py-3 flex flex-col items-center justify-center text-center">
                        <Link href={`produkt/${produkt.slug.current}`}>
                          <p className="text-xl font-[500] tracking-widest">{produkt.naziv.toUpperCase()}</p>
                        </Link>
                        <div className="flex items-center gap-4">
                          <p className="text-primary">€{produkt.cijenaSPopustom ? produkt.cijenaSPopustom.toFixed(2) : produkt.cijena.toFixed(2)}</p>
                            {produkt.staraCijena && (<p className="text-sm text-[#828181] line-through">{produkt.cijenaSPopustom ? produkt.cijena.toFixed(2) : ''}</p>)}
                        </div>
    
                        <button 
                          className="mt-1 px-4 py-2 bg-primary text-white rounded-full"
                          type="button">DODAJ U KOŠARICU</button>
                      </div>
                  </div>
                )}
            })}
        </div>
      </div>
  )
}

export default New