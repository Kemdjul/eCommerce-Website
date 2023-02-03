import React from 'react';
import Image from 'next/image';

import Logo from '../../assets/logo.png';

const CallToAction = () => {
  return (
    <div className="md:w-full max-md:w-screen h-[22rem] flex justify-between items-center md:px-32">
        <Image src={Logo} className="w-44 max-md:hidden" />

        <div className="h-full max-md:w-screen max-md:px-4 flex flex-col justify-center items-center text-center gap-4">
            <h5 className="text-2xl">NEWSLETTER</h5>
            <p className="md:w-96 font-[400] text-[#454545] max-md:hidden">Budite uvijek prvi koji će znati sve naše popuste, akcije, novosti i mnogo više od toga...</p>
            <div className="max-md:w-full flex max-md:flex-col max-md:gap-4 md:pb-2 max-md:items-center max-md:text-center justify-between md:border-b-2 border-black">
                <input placeholder="Vaša e-mail adresa" className="bg-transparent md:w-[35.5rem] focus:outline-none placeholder:text-black placeholder:font-[400] max-md:border-b-2 max-md:border-black max-md:pb-2" />
                <button className="md:text-primary max-md:text-white max-md:bg-primary max-md:px-20 max-md:py-3 font-[600]">PRETPLATI<span className="max-md:hidden"> SE</span></button>
            </div>
        </div>

        <div className="flex flex-col gap-4 max-md:hidden">
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