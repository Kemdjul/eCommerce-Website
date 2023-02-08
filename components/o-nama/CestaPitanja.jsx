import React, { useState } from 'react';

import { AiOutlinePlusSquare, AiOutlineMinusSquare } from 'react-icons/ai';

const CestaPitanja = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4 items-center px-20 py-12">
        <h3 className="text-3xl">ČESTA PITANJA</h3>
        <div className="h-1 w-36 bg-primary" />
        <div className="w-full grid grid-cols-2 gap-x-32 px">
            <div className={open1 ? "flex flex-col" : "flex flex-col pb-12"}>
                <div className="flex gap-4 w-full items-center px-4 py-4 bg-[#D6D6D6]">
                    <AiOutlinePlusSquare onClick={() => setOpen1(true)} className={open1 ? "hidden" : "text-primary text-2xl cursor-pointer"} />
                    <AiOutlineMinusSquare onClick={() => setOpen1(false)} className={open1 ? "text-primary text-2xl cursor-pointer" : "hidden"} />
                    <p className="text-lg text-[#333333] font-[700]">Koliki je rok isporuke?</p>
                </div>

                <div className={open1 ? "flex flex-col font-[400] text-[#666666] py-2 text-center" : "hidden"}>
                    <p>U pravilu, ukoliko je proizvod na stanju, 3-5 radna dana.</p>
                </div>
            </div>

            <div className={open2 ? "flex flex-col" : "flex flex-col pb-12"}>
                <div className="flex justify-end gap-4 w-full items-center px-4 py-4 bg-[#D6D6D6] text-right">
                    <p className="text-lg text-[#333333] font-[700]">Šaljete li pakete za zemlje osim Hrvatske?</p>
                    <AiOutlinePlusSquare onClick={() => setOpen2(true)} className={open2 ? "hidden" : "text-primary text-2xl cursor-pointer"} />
                    <AiOutlineMinusSquare onClick={() => setOpen2(false)} className={open2 ? "text-primary text-2xl cursor-pointer" : "hidden"} />
                </div>

                <div className={open2 ? "flex flex-col font-[400] text-[#666666] py-2 text-center" : "hidden"}>
                    <p>Da, ukoliko želite naručiti nešto od proizvoda, kontaktirajte nas na info@odaberizdravlje.hr</p>
                </div>
            </div>

            <div className={open3 ? "flex flex-col" : "flex flex-col pb-12"}>
                <div className="flex gap-4 w-full items-center px-4 py-4 bg-[#D6D6D6]">
                    <AiOutlinePlusSquare onClick={() => setOpen3(true)} className={open3 ? "hidden" : "text-primary text-2xl cursor-pointer"} />
                    <AiOutlineMinusSquare onClick={() => setOpen3(false)} className={open3 ? "text-primary text-2xl cursor-pointer" : "hidden"} />
                    <p className="text-lg text-[#333333] font-[700]">Koji je način dostave?</p>
                </div>

                <div className={open3 ? "flex flex-col font-[400] text-[#666666] py-2 text-center" : "hidden"}>
                    <p>Sve pošiljke šaljemo putem Overseas Express-a.</p>
                </div>
            </div>

            <div className={open4 ? "flex flex-col" : "flex flex-col pb-12"}>
                <div className="flex justify-end gap-4 w-full items-center px-4 py-4 bg-[#D6D6D6] text-right">
                    <p className="text-lg text-[#333333] font-[700]">Koje su mogućnosti plaćanja?</p>
                    <AiOutlinePlusSquare onClick={() => setOpen4(true)} className={open4 ? "hidden" : "text-primary text-2xl cursor-pointer"} />
                    <AiOutlineMinusSquare onClick={() => setOpen4(false)} className={open4 ? "text-primary text-2xl cursor-pointer" : "hidden"} />
                </div>

                <div className={open4 ? "flex flex-col font-[400] text-[#666666] py-2 text-center" : "hidden"}>
                    <p>Plaćanje prilikom preuzimanja/ pouzećem</p>
                    <p>Online plaćanje karticom</p>
                    <p>Bankovni prijenos</p>
                </div>
            </div>

            <div className={open5 ? "flex flex-col" : "flex flex-col pb-12"}>
                <div className="flex gap-4 w-full items-center px-4 py-4 bg-[#D6D6D6]">
                    <AiOutlinePlusSquare onClick={() => setOpen5(true)} className={open5 ? "hidden" : "text-primary text-2xl cursor-pointer"} />
                    <AiOutlineMinusSquare onClick={() => setOpen5(false)} className={open5 ? "text-primary text-2xl cursor-pointer" : "hidden"} />
                    <p className="text-lg text-[#333333] font-[700]">Zašto nemate besplatnu dostavu?</p>
                </div>

                <div className={open5 ? "flex flex-col font-[400] text-[#666666] py-2 text-center" : "hidden"}>
                    <p>Imamo, ukoliko potrošite više od 500kn pri narudžbi, dobivate besplatnu dostavu.</p>
                </div>
            </div>

            <div className={open6 ? "flex flex-col" : "flex flex-col pb-12"}>
                <div className="flex justify-end gap-4 w-full items-center px-4 py-4 bg-[#D6D6D6] text-right">
                    <p className="text-lg text-[#333333] font-[700]">Kada mogu podnijeti reklamaciju?</p>
                    <AiOutlinePlusSquare onClick={() => setOpen6(true)} className={open6 ? "hidden" : "text-primary text-2xl cursor-pointer"} />
                    <AiOutlineMinusSquare onClick={() => setOpen6(false)} className={open6 ? "text-primary text-2xl cursor-pointer" : "hidden"} />
                </div>

                <div className={open6 ? "flex flex-col font-[400] text-[#666666] py-2 text-center" : "hidden"}>
                    <p>U roku od 14 dana od isporuke paketa.</p>
                </div>
            </div>

            <div className={open7 ? "flex flex-col" : "flex flex-col pb-12"}>
                <div className="flex gap-4 w-full items-center px-4 py-4 bg-[#D6D6D6]">
                    <AiOutlinePlusSquare onClick={() => setOpen7(true)} className={open7 ? "hidden" : "text-primary text-2xl cursor-pointer"} />
                    <AiOutlineMinusSquare onClick={() => setOpen7(false)} className={open7 ? "text-primary text-2xl cursor-pointer" : "hidden"} />
                    <p className="text-lg text-[#333333] font-[700]">Koja su moja prava u procesu reklamacije?</p>
                </div>

                <div className={open7 ? "flex flex-col font-[400] text-[#666666] py-2 text-center" : "hidden"}>
                    <p>U slučaju nedostatka na proizvodu, moguć je povrat novca. Također, imate pravo zahtijevati uklanjanje nedostataka zamjenom/ popravkom proizvoda.</p>
                </div>
            </div>

            <div className={open8 ? "flex flex-col" : "flex flex-col pb-12"}>
                <div className="flex justify-end gap-4 w-full items-center px-4 py-4 bg-[#D6D6D6] text-right">
                    <p className="text-lg text-[#333333] font-[700]">Na koji način mogu podnijeti reklamaciju?</p>
                    <AiOutlinePlusSquare onClick={() => setOpen8(true)} className={open8 ? "hidden" : "text-primary text-2xl cursor-pointer"} />
                    <AiOutlineMinusSquare onClick={() => setOpen8(false)} className={open8 ? "text-primary text-2xl cursor-pointer" : "hidden"} />
                </div>

                <div className={open8 ? "flex flex-col font-[400] text-[#666666] py-2 text-center" : "hidden"}>
                    <p>Na stranicu povrati ili pozivom na 0800 330 022</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CestaPitanja