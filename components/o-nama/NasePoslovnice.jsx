import React from 'react';
import Image from 'next/image';

import NasePoslovniceSlika from '../../assets/o-nama/NasePoslovnice.png';

const NasePoslovnice = () => {
  return (
    <div className="w-full flex flex-col gap-4 px-80 py-12 justify-center items-center">
        <h3 className="text-3xl">NAŠE POSLOVNICE</h3>
        <div className="h-1 w-32 bg-primary" />
        <div className="flex gap-32 pt-8">
            <Image src={NasePoslovniceSlika} alt="SLika poslovnice.png" />

            <div className="flex flex-col gap-1 justify-center items-center">
                <p className="text-primary font-[600]">Trgovina</p>
                <p className="text-2xl">ZAGREB</p>
                <p className="text-[#828181]">Naša trgovina u Zagrebu nalazi se na adresi Trg Drage Iblera 10, na razini -1</p>
                <p className="text-primary font-[600]">OD PONEDJELJKA DO PETKA</p>
                <p>OD 09:00 DO 17:00</p>
                <p className="text-primary font-[600]">SUBOTA I NEDJELJA</p>
                <p>ZATVORENO</p>
            </div>
        </div>
    </div>
  )
}

export default NasePoslovnice