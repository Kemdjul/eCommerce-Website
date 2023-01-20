import React from 'react';
import Image from 'next/image';

import VitaImage from '../../assets/vita-kartica.jpg';

const Vita = () => {
  return (
    <div className="w-full h-[37.5rem] bg-red-400 flex flex-col justify-center items-center text-center text-white">
        <Image src={VitaImage} alt="Vita kartica" className="absolute w-full h-[37.5rem]" />
        <div className="flex flex-col  w-[52rem] items-center justify-center text-center z-10">
            <h3 className="text-[4rem] font-[600] drop-shadow-lg">VITA+ KARTICA</h3>
            <p className="text-2xl font-[400] leading-9">Preuzmite svoju VITA+ karticu vjernosti i ostvarite 5% popusta na slijedeću narudžbu te razne pogodnosti na proizvode i usluge kod nas i naših partnera</p>
            <button type="button" className="px-4 py-2 mt-10 bg-primary">ISPUNI PRISTUPNICU</button>
        </div>
    </div>
  )
}

export default Vita