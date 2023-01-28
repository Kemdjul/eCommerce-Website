import React, { useState } from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';
import Dropdown from './Dropdown';

import Box from '@mui/material/Box';
import { Slider } from '@mui/material';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';

const ListaProdukata = ({ produkti }) => {
    const [kategorija, setKategorija] = useState('');
    const [value, setValue] = useState([0, 40]);
    const [color, setColor] = useState('');

    const handleKategorija = (kat) => {
        if (kat == kategorija) {
            setKategorija('');
            return;
        }

        setKategorija(kat);
    };

    const handleColor = (col) => {
        if (col == color) {
            setColor('');
            return;
        }

        setColor(col);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    function valueLabelFormat(value) {
      return `${value}€`;
    };

  return (
    <div className="min-h-screen px-60 mt-32">
        <div className="flex w-full min-h-screen">
            <div className="w-72 flex flex-col gap-8 min-h-screen">
                <div className="w-full min-h-96 px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 justify-center">
                    <h4 className="text-[#22262A] text-2xl text-center">Kategorije</h4>
                    <button type="button" onClick={() => handleKategorija('Oxygen Optimal')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Oxygen Optimal' ? 'text-primary' : 'text-[#262626]'}>Oxygen Optimal</p>
                        <p className={kategorija == 'Oxygen Optimal' ? 'text-primary' : 'text-[#262626] opacity-40'}>20</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Dodaci prehrani')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Dodaci prehrani' ? 'text-primary' : 'text-[#262626]'}>Dodaci prehrani</p>
                        <p className={kategorija == 'Dodaci prehrani' ? 'text-primary' : 'text-[#262626] opacity-40'}>20</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Tinkture i čajevi')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Tinkture i čajevi' ? 'text-primary' : 'text-[#262626]'}>Tinkture i čajevi</p>
                        <p className={kategorija == 'Tinkture i čajevi' ? 'text-primary' : 'text-[#262626] opacity-40'}>20</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Gelovi i kreme')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Gelovi i kreme' ? 'text-primary' : 'text-[#262626]'}>Gelovi i kreme</p>
                        <p className={kategorija == 'Gelovi i kreme' ? 'text-primary' : 'text-[#262626] opacity-40'}>20</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Biljna ljekarna')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Biljna ljekarna' ? 'text-primary' : 'text-[#262626]'}>Biljna ljekarna</p>
                        <p className={kategorija == 'Biljna ljekarna' ? 'text-primary' : 'text-[#262626] opacity-40'}>20</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Fit Program')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Fit Program' ? 'text-primary' : 'text-[#262626]'}>Fit programi</p>
                        <p className={kategorija == 'Fit Program' ? 'text-primary' : 'text-[#262626] opacity-40'}>20</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Zaštita i dezinfekcija')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Zaštita i dezinfekcija' ? 'text-primary' : 'text-[#262626]'}>Zaštita i dezinfekcija</p>
                        <p className={kategorija == 'Zaštita i dezinfekcija' ? 'text-primary' : 'text-[#262626] opacity-40'}>20</p>
                    </button>
                </div>

                <div className="w-full h-36 px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 text-center justify-center">
                    <h3 className="text-2xl text-[#22262A]">CIJENA</h3>
                    <Box sx={{ width: 248 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            max={40}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                    <p className="font-[400] text-[#22262A]">{value[0]}€ - {value[1]}€</p>

                </div>

                <div className="w-full h-32 px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 text-center justify-center">
                    <h3 className="text-2xl text-[#22262A]">BOJA</h3>
                    <div className="flex gap-4 items-center justify-center">
                        <div className={color == 'Plavo' ? "w-4 h-4 px-2 py-2 border-2 border-[#006CFF] rounded-full bg-[#006CFF]" : "w-4 h-4 rounded-full bg-[#006CFF]"} onClick={() => handleColor('Plavo')} />
                        <div className={color == 'Crveno' ? "w-4 h-4 px-2 py-2 border-2 border-[#FC3E39] rounded-full bg-[#FC3E39]" : "w-4 h-4 rounded-full bg-[#FC3E39]"} onClick={() => handleColor('Crveno')} />
                        <div className={color == 'Crno' ? "w-4 h-4 px-2 py-2 border-2 border-[#171717] rounded-full bg-[#171717]" : "w-4 h-4 rounded-full bg-[#171717]"} onClick={() => handleColor('Crno')} />
                        <div className={color == 'Žuto' ? "w-4 h-4 px-2 py-2 border-2 border-[#FFF600] rounded-full bg-[#FFF600]" : "w-4 h-4 rounded-full bg-[#FFF600]"} onClick={() => handleColor('Žuto')} />
                        <div className={color == 'Ljubičasto' ? "w-4 h-4 px-2 py-2 border-2 border-[#FF00B4] rounded-full bg-[#FF00B4]" : "w-4 h-4 rounded-full bg-[#FF00B4]"} onClick={() => handleColor('Ljubičasto')} />
                    </div>
                </div>

                <div className="w-full h-16 px-5 bg-[#E8E8E8] flex flex-col text-center gap-4 justify-center">
                    <p className="font-[400] text-[#22262A]">VIŠE...</p>
                </div>
            </div>

            <div className="w-full flex flex-col pl-8">
                <div className="w-full h-[22rem] flex flex-col gap-4 px-[4rem] justify-center bg-primary text-white">
                    <h3 className="text-5xl font-[600]">Ultra Prost</h3>
                    <p className="text-sm font-[400] leading-7 w-[25.625rem]">Ciljana bio formula za probleme s prostatom. Sastojci doprinose sveobuhvatno kada je u pitanju zdravlje muškarca i prostate.</p>
                    <button type="button" className="py-2 bg-white text-primary w-[6.5rem] text-[13px]">NARUČI SADA</button>
                </div>
            
                <div className="w-full h-12 my-8 flex justify-between items-center px-4 bg-red-400">
                    <p>9 od 104</p>
                    <Dropdown label="Sortiraj po:" values={["Cijeni", "A-Z"]} />
                </div>

                <div className="w-full min-h-96 grid grid-cols-3 gap-x-2 gap-y-5 justify-between">
                    {produkti?.map((produkt) => {
                        if (kategorija) {
                            if (produkt.kategorija[0] == kategorija) {
                                if (produkt.cijena > value[0] && produkt.cijena < value[1]) return (
                                    <div className="flex flex-col gap-2 items-center">
                                        <div className="bg-green-800 border-2 border-gray-200">
                                            <img src={urlFor(produkt.image[0].asset._ref)} className="w-56 h-56 object-contain" />
                                        </div>
                                        <p className="text-xl font-[700]">{produkt.naziv}</p>
                                        <div className="flex gap-2 items-center">
                                            <p className="text-lg">{produkt.cijena.toFixed(2)}€</p>
                                            {produkt.staraCijena && <p className="text-[#9098B1] line-through">{produkt.staraCijena?.toFixed(2)}€</p>}
                                        </div>
                                    </div>
                                )
                            }

                            

                            else return;
                        }

                        if (produkt.cijena > value[0] && produkt.cijena < value[1]) return (
                            <div className="flex flex-col gap-2 items-center">
                                <div className="absolute w-56 h-56 pt-32 flex gap-4 justify-center items-center opacity-0 hover:opacity-100 transition translate-y-4 hover:translate-y-0">
                                    <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-gray-300 rounded-full w-12 h-12"><AiOutlineHeart /></p>
                                    <Link href={`produkt/${produkt.slug.current}`}>
                                        <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-gray-300 rounded-full w-12 h-12"><AiOutlineShopping /></p>
                                    </Link>
                                </div>
                                <div className="bg-green-800 border-2 border-gray-200">
                                    <img src={urlFor(produkt.image[0].asset._ref)} className="w-56 h-56 object-contain" />
                                </div>
                                <p className="text-xl font-[700]">{produkt.naziv}</p>
                                <div className="flex gap-2 items-center">
                                    <p className="text-lg">{produkt.cijena.toFixed(2)}€</p>
                                    {produkt.staraCijena && <p className="text-[#9098B1] line-through">{produkt.staraCijena?.toFixed(2)}€</p>}
                                </div>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListaProdukata