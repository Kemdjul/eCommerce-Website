import React from 'react';
import Produkt from '../components/kosarica/ProduktSidebar';

const kosaricaSidebar = () => {
  return (
    <div className="w-full h-screen flex z-[100] sticky">
        <div className="w-full h-full bg-[#D9D9D9] opacity-50">
        </div>

        <div className="w-[32.25rem] h-full flex flex-col gap-4 text-[#22262A] items-center bg-white px-4 py-8">
            <h5 className="text-3xl">MOJA KOŠARICA</h5>

            <Produkt />
            <Produkt />

            <div className="w-full flex px-6 justify-between items-center">
                <p className="text-2xl">Ukupno:</p>
                <p className="font-[400] text-2xl">40€</p>
            </div>

            <button type="button" className="mt-8 bg-primary rounded-lg text-white text-2xl w-64 h-[4.375rem]">Vidi košaricu</button>
            <button type="button" className="px-4 py-2 mt-8 bg-primary rounded-lg text-white text-2xl w-64 h-[4.375rem]">Plaćanje</button>
        </div>
    </div>
  )
}

export default kosaricaSidebar