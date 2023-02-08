import React from 'react';

import { FiMapPin } from 'react-icons/fi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';
import { FaBullhorn } from 'react-icons/fa';

const KontaktForma = () => {
  return (
    <div className="flex px-40 pb-12 pt-16 gap-12">
        <div className="flex flex-col gap-4 w-[68rem]">
            <h3 className="text-4xl font-[700]">Pošaljite nam <span className="text-primary">poruku</span></h3>
            <div className="h-1 w-28 bg-primary" />
            <p className="text-[#666666] font-[400]">Za sve dodatne infomacije pozovite nas na naš besplatni broj telefona 0800 330 022.</p>
            <form className="flex flex-col gap-8 items-start">
                <div className="grid grid-cols-2 gap-8 w-full">
                    <div className="flex flex-col gap-1">
                        <label className="text-[#666666] font-[400]">Ime *</label>
                        <input type="text" className="border-2 border-gray-400 focus:outline-none px-2 py-2" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[#666666] font-[400]">Email *</label>
                        <input type="text" className="border-2 border-gray-400 focus:outline-none px-2 py-2" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[#666666] font-[400]">Predmet</label>
                        <input type="text" className="border-2 border-gray-400 focus:outline-none px-2 py-2" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-[#666666] font-[400]">Broj telefona</label>
                        <input type="text" className="border-2 border-gray-400 focus:outline-none px-2 py-2" />
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <label className="text-[#666666] font-[400]">Vaša poruka</label>
                    <textarea className="border-2 border-gray-400 focus:outline-none px-2 py-2 h-48" />
                </div>
                <input type="submit" value="POŠALJI PORUKU" className="px-10 py-4 rounded-lg bg-primary text-white" />
            </form>
            <p className="text-[#666666] font-[400]">Napomena: odgovor slijedi najkasnije u roku od 2 radna dana.</p>
        </div>

        <div className="flex flex-col w-[30rem] gap-4">
            <h4 className="text-primary text-2xl font-[700]">Kontakt informacije</h4>
            
            <div className="flex items-center gap-4">
                <FiMapPin className="text-white bg-primary rounded-full w-10 h-10 px-2 py-2" />
                <p>Trg Drage Iblera 10, 1000 Zagreb, Hrvatska</p>
            </div>

            <div className="flex items-center gap-4">
                <GrMail className="text-white bg-primary rounded-full w-10 h-10 px-2 py-2" />
                <p>info@odaberizdravlje.hr</p>
            </div>

            <div className="flex items-center gap-4">
                <BsFillTelephoneFill className="text-white bg-primary rounded-full w-10 h-10 px-2 py-2" />
                <p>0800 330 022</p>
            </div>
            
            <div className="bg-primary flex flex-col w-full min-h-[22rem] px-6 py-6 text-white gap-4">
                <FaBullhorn className="text-7xl" />
                <h5 className="text-lg font-[700]">Želite li postati partner?</h5>
                <p className="font-[400]">Ovo je test vidit cemo sta cemo s tim.</p>
                <p className="font-[400]">Teritatis et quasi architecto. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
            </div>
        </div>
    </div>
  )
}

export default KontaktForma