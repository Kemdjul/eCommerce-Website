import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';
import Dropdown from './Dropdown';

import Box from '@mui/material/Box';
import { Slider } from '@mui/material';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';

const ListaProdukata = ({ produkti }) => {
    const [kategorija, setKategorija] = useState('');
    const [value, setValue] = useState([0, 40]);
    const [totalCount, setTotalCount] = useState(0);
    const [productsShown, setProductsShown] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        produkti.map(() => setTotalCount((prevCount) => prevCount + 1));
    }, []);

    const handleKategorija = (kat) => {
        if (kat == kategorija) {
            setKategorija('');
            return;
        }

        setKategorija(kat);
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <div className="min-h-screen md:px-60 mt-32">
        <div className="flex max-md:flex-col w-full min-h-screen">
            <div className="md:w-72 max-md:mx-8 max-md:pb-8 flex flex-col gap-8 md:min-h-screen">
                <div className="w-full min-h-96 md:sticky top-40 px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 justify-center">
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

                <div className="w-full h-36 md:sticky top-[33rem] px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 text-center justify-center">
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
            </div>

            <div className="w-full flex flex-col md:pl-8 max-md:px-4">
                <div className="w-full h-12 mb-8 flex justify-between items-center px-4 bg-[#E8E8E8]">
                    <p>9 od {totalCount}</p>
                    <Dropdown label="Sortiraj po" values={["Cijeni", "A-Z"]} />
                    <Dropdown label="Prikaži" values={[9, 18]} />
                </div>

                <div className="w-full min-h-96 grid max-md:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-5 justify-between text-center">
                    {produkti?.map((produkt) => {
                        if (kategorija) {
                            if (produkt.kategorija[0] == kategorija) {
                                if (produkt.cijena > value[0] && produkt.cijena < value[1]) return (
                                    <div className="flex flex-col gap-2 items-center">
                                        <Link href={`produkt/${produkt.slug.current}`}>
                                            <div className="border-2 border-[#E8E8E8]">
                                                <img src={urlFor(produkt.image[0].asset._ref)} className="w-56 h-56 object-contain" />
                                            </div>
                                            <p className="text-xl font-[700]">{produkt.naziv}</p>
                                            <div className="flex gap-2 items-center justify-center">
                                                <p className="text-lg">{produkt.cijena.toFixed(2)}€</p>
                                                {produkt.staraCijena && <p className="text-[#9098B1] line-through">{produkt.staraCijena?.toFixed(2)}€</p>}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }
                            else return;
                        }

                        if (produkt.cijena > value[0] && produkt.cijena < value[1]) return (
                            <div className="flex flex-col gap-2 items-center">
                                <Link href={`produkt/${produkt.slug.current}`}>
                                    <div className="absolute w-56 h-56 pt-32 flex gap-4 justify-center items-center opacity-0 hover:opacity-100 transition translate-y-4 hover:translate-y-0">
                                        <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-[#E8E8E8] rounded-full w-12 h-12"><AiOutlineHeart /></p>
                                        <Link href={`produkt/${produkt.slug.current}`}>
                                            <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-[#E8E8E8] rounded-full w-12 h-12"><AiOutlineShopping /></p>
                                        </Link>
                                    </div>
                                    <div className="border-2 border-[#E8E8E8]">
                                        <img src={urlFor(produkt.image[0].asset._ref)} className="w-56 h-56 object-contain" />
                                    </div>
                                    <p className="text-xl font-[700]">{produkt.naziv}</p>
                                    <div className="flex gap-2 items-center justify-center">
                                        <p className="text-lg">{produkt.cijena.toFixed(2)}€</p>
                                        {produkt.staraCijena && <p className="text-[#9098B1] line-through">{produkt.staraCijena?.toFixed(2)}€</p>}
                                    </div>
                                </Link>
                            </div>
                    )})}
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListaProdukata