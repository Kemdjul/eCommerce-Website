import React from 'react';
import Image from 'next/image';

import VitaImage from '../../assets/vita-kartica.jpg';

const Vita = () => {
  return (
    <div className="w-full md:h-[37.5rem] max-md:h-[30rem] flex flex-col justify-center items-center text-center text-white">
        <Image src={VitaImage} alt="Vita kartica" className="absolute w-full md:h-[37.5rem] max-md:h-[30rem] max-md:object-cover" />
        <div className="flex flex-col max-md:gap-4 md:w-[52rem] items-center justify-center text-center z-10">
            <h3 className="md:text-[4rem] max-md:text-5xl font-[600] drop-shadow-lg">VITA+ KARTICA</h3>
            <p className="md:text-2xl max-md:px-8 font-[400] md:leading-9">Preuzmite svoju VITA+ karticu vjernosti i ostvarite 5% popusta na slijedeću narudžbu<span className="max-md:hidden"> te razne pogodnosti na proizvode i usluge kod nas i naših partnera</span></p>
            <a href='/pdf/VITA_PLUS.pdf' target='_blank' className="px-4 py-2 mt-10 bg-primary">ISPUNI PRISTUPNICU</a>
        </div>
    </div>
  )
}

export default Vita