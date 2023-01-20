import React from 'react';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <div className="w-full h-[22rem] flex justify-between items-center px-32">
        <Image />

        <div className="h-full flex flex-col justify-center items-center text-center gap-4">
            <h5 className="text-2xl">NEWSLETTER</h5>
            <p className="w-96 font-[400] text-[#454545]">Budite uvijek prvi koji će znati sve naše popuste, akcije, novosti i mnogo više od toga...</p>
            <div className="flex pb-2 justify-between border-b-2 border-black">
                <input placeholder="Vaša e-mail adresa" className="bg-transparent w-[35.5rem] focus:outline-none placeholder:text-black placeholder:font-[400]" />
                <button className="text-primary font-[600]">PRETPLATI SE</button>
            </div>
        </div>

        <div className="flex flex-col gap-4">
            <h5 className="text-xl">KATEGORIJE</h5>
            <div className="flex flex-col gap-2 font-[400] text-[#454545]">
                <p>Trgovina</p>
                <p>Kontakt</p>
                <p>Praćenje pošiljke</p>
                <p>Povrati</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    </div>
  )
}

export default CallToAction