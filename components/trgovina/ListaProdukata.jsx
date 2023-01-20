import React from 'react';

const ListaProdukata = () => {
  return (
    <div className="min-h-screen px-60 mt-32">
        <div className="flex w-full min-h-screen">
            <div className="w-72 flex flex-col gap-8 min-h-screen">
                <div className="w-full min-h-96 px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 justify-center">
                    <h4 className="text-[#22262A] text-2xl text-center">Kategorije</h4>
                    <div className="flex w-full justify-between font-[400]">
                        <p className="text-primary">Oxygen Optimal</p>
                        <p className="text-primary">20</p>
                    </div>
                    <div className="flex w-full justify-between font-[400]">
                        <p className="text-[#262626]">Dodaci prehrani</p>
                        <p className="text-[#262626] opacity-40">20</p>
                    </div>
                    <div className="flex w-full justify-between font-[400]">
                        <p className="text-[#262626]">Tinkture i čajevi</p>
                        <p className="text-[#262626] opacity-40">20</p>
                    </div>
                    <div className="flex w-full justify-between font-[400]">
                        <p className="text-[#262626]">Gelovi i kreme</p>
                        <p className="text-[#262626] opacity-40">20</p>
                    </div>
                    <div className="flex w-full justify-between font-[400]">
                        <p className="text-[#262626]">Biljna ljekarna</p>
                        <p className="text-[#262626] opacity-40">20</p>
                    </div>
                    <div className="flex w-full justify-between font-[400]">
                        <p className="text-[#262626]">Fit Program</p>
                        <p className="text-[#262626] opacity-40">20</p>
                    </div>
                    <div className="flex w-full justify-between font-[400]">
                        <p className="text-[#262626]">Zaštita i dezinfekcija</p>
                        <p className="text-[#262626] opacity-40">20</p>
                    </div>
                </div>

                <div className="w-full h-36 px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 text-center justify-center">
                    <h3 className="text-2xl text-[#22262A]">CIJENA</h3>
                    <p className="font-[400] text-[#22262A]">15€ - 200€</p>

                </div>

                <div className="w-full h-32 px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 text-center justify-center">
                    <h3 className="text-2xl text-[#22262A]">BOJA</h3>
                    <div className="flex gap-4 items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-[#006CFF]" />
                        <div className="w-4 h-4 rounded-full bg-[#FC3E39]" />
                        <div className="w-4 h-4 rounded-full bg-[#171717]" />
                        <div className="w-4 h-4 rounded-full bg-[#FFF600]" />
                        <div className="w-4 h-4 rounded-full bg-[#FF00B4]" />
                    </div>
                </div>

                <div className="w-full h-32 px-5 bg-[#E8E8E8] flex flex-col text-center gap-4 justify-center">
                    <p className="font-[400] text-[#22262A]">VIŠE...</p>
                </div>
            </div>

            <div className="w-full flex flex-col pl-8">
                <div className="w-full h-[22rem] flex flex-col gap-4 px-[4rem] justify-center bg-primary text-white">
                    <h3 className="text-5xl font-[600]">Ultra Prost</h3>
                    <p className="text-sm font-[400] leading-7 w-[25.625rem]">Ciljana bio formula za probleme s prostatom. Sastojci doprinose sveobuhvatno kada je u pitanju zdravlje muškarca i prostate.</p>
                    <button type="button" className="py-2 bg-white text-primary w-[6.5rem] text-[13px]">NARUČI SADA</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListaProdukata