import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { urlFor } from '../../lib/client';
import Dropdown from './Dropdown';

import Box from '@mui/material/Box';
import { Slider } from '@mui/material';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';

import { useStateContext } from '../../context/StateContext';

const ListaProdukata = ({ produkti }) => {
    const [value, setValue] = useState([0, 300]);
    const [productsShown, setProductsShown] = useState(0);
    const [page, setPage] = useState(1);
    const [sortirajPo, setSortirajPo] = useState();
    const [prikazi, setPrikazi] = useState(9);
    const [showOptions1, setShowOptions1] = useState(false);
    const [showOptions2, setShowOptions2] = useState(false);

    const { kategorija, setKategorija, trazi, traziValue, setTraziValue } = useStateContext();

    const handleKategorija = (kat) => {
        if (kat == kategorija) {
            setKategorija('');
            return;
        }

        setKategorija(kat);
    };

    const handleChangeCijena = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeSortiraj = (val) => {
        setSortirajPo(val);
        setShowOptions1(false);

        if (val == 'Cijeni') {
            produkti.sort((a, b) => b.cijena - a.cijena);
        }

        else if (val == 'A-Z') {
            produkti.sort((a, b) => a.naziv.toUpperCase() > b.naziv.toUpperCase() ); 
        }
    }

    const handleChangePrikazi = (prik) => {
        setPrikazi(prik);
        setShowOptions2(false);
    }

    const values = ["Cijeni", "A-Z"];
    const prikaziArray = [9, 18];

  return (
    <div className="min-h-screen md:px-60 mt-32">
        <div className="flex max-md:flex-col w-full min-h-screen">
            <div className="md:w-72 max-md:mx-8 max-md:pb-8 flex flex-col gap-8 md:min-h-screen">
                <div className="w-full min-h-96 md:sticky top-40 px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 justify-center">
                    <h4 className="text-[#22262A] text-2xl text-center">Kategorije</h4>
                    <button type="button" onClick={() => handleKategorija('Oxygen Optimal')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Oxygen Optimal' ? 'text-primary' : 'text-[#262626]'}>Oxygen Optimal</p>
                        <p className={kategorija == 'Oxygen Optimal' ? 'text-primary' : 'text-[#262626] opacity-40'}>21</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Dodaci prehrani')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Dodaci prehrani' ? 'text-primary' : 'text-[#262626]'}>Dodaci prehrani</p>
                        <p className={kategorija == 'Dodaci prehrani' ? 'text-primary' : 'text-[#262626] opacity-40'}>11</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Tinkture i čajevi')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Tinkture i čajevi' ? 'text-primary' : 'text-[#262626]'}>Tinkture i čajevi</p>
                        <p className={kategorija == 'Tinkture i čajevi' ? 'text-primary' : 'text-[#262626] opacity-40'}>1</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Gelovi i kreme')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Gelovi i kreme' ? 'text-primary' : 'text-[#262626]'}>Gelovi i kreme</p>
                        <p className={kategorija == 'Gelovi i kreme' ? 'text-primary' : 'text-[#262626] opacity-40'}>5</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Biljna ljekarna')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Biljna ljekarna' ? 'text-primary' : 'text-[#262626]'}>Biljna ljekarna</p>
                        <p className={kategorija == 'Biljna ljekarna' ? 'text-primary' : 'text-[#262626] opacity-40'}>25</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Fit program')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Fit program' ? 'text-primary' : 'text-[#262626]'}>Fit programi</p>
                        <p className={kategorija == 'Fit program' ? 'text-primary' : 'text-[#262626] opacity-40'}>9</p>
                    </button>
                    <button type="button" onClick={() => handleKategorija('Zaštita i dezinfekcija')} className="flex w-full justify-between font-[400]">
                        <p className={kategorija == 'Zaštita i dezinfekcija' ? 'text-primary' : 'text-[#262626]'}>Zaštita i dezinfekcija</p>
                        <p className={kategorija == 'Zaštita i dezinfekcija' ? 'text-primary' : 'text-[#262626] opacity-40'}>5</p>
                    </button>
                </div>

                <div className="w-full h-36 md:sticky top-[33rem] px-5 py-4 bg-[#E8E8E8] flex flex-col gap-4 text-center justify-center">
                    <h3 className="text-2xl text-[#22262A]">CIJENA</h3>
                    <Box sx={{ width: 248 }}>
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={value}
                            max={300}
                            onChange={handleChangeCijena}
                            valueLabelDisplay="auto"
                        />
                    </Box>
                    <p className="font-[400] text-[#22262A]">{value[0]}€ - {value[1]}€</p>
                </div>
            </div>

            <div className="w-full flex flex-col md:pl-8 max-md:px-4">
                {traziValue && (<div className="flex items-center px-4 py-2 text-xl">
                    <p>{traziValue.toUpperCase()}</p>
                    <IoIosClose onClick={() => setTraziValue('')} className="text-red-600 text-3xl cursor-pointer" />
                </div>)}
                
                <div className="w-full h-12 mb-8 flex justify-between items-center px-4 bg-[#E8E8E8] max-md:hidden">
                    <p className="hidden">9 od 53</p>
                    <div className="flex max gap-4">
                        <div onClick={() => setShowOptions1(!showOptions1)} className={showOptions1 ? "flex w-56 h-18 gap-2 translate-y-3 border-2 border-[#D0D0D0] rounded-lg px-2 py-1 bg-[#E8E8E8]" : "flex w-56 h-9 gap-2 border-2 border-[#D0D0D0] rounded-lg px-2 py-1 bg-[#E8E8E8]"}>
                            <p>Sortiraj po:</p>

                            <div className="flex flex-col cursor-pointer">
                                <p>{sortirajPo}</p>

                                <div className={showOptions1 ? "flex flex-col" : "hidden"}>
                                    {values.map((val) => {
                                    if(val != sortirajPo) return (<p onClick={() => handleChangeSortiraj(val)} key={val}>{val}</p>);
                                    })}
                                </div>
                            </div>
                        </div>

                        <div onClick={() => setShowOptions2(!showOptions2)} className={showOptions2 ? "hidden gap-2 translate-y-3 w-40 h-18 border-2 border-[#D0D0D0] rounded-lg px-2 py-1 bg-[#E8E8E8]" : "hidden gap-2 w-40 h-9 border-2 border-[#D0D0D0] rounded-lg px-2 py-1 bg-[#E8E8E8]"}>
                            <p>Prikaži:</p>

                            <div className="flex flex-col">
                                <p>{prikazi}</p>

                                <div className={showOptions2 ? "flex flex-col cursor-pointer" : "hidden"}>
                                    {prikaziArray.map((prik) => {
                                    if(prik != prikazi) return (<p onClick={() => handleChangePrikazi(prik)} key={prik}>{prik}</p>);
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full min-h-96 grid max-md:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-12 justify-between text-center">
                    {produkti?.map((produkt) => {
                        if (traziValue) {
                            if (produkt.naziv.toUpperCase().includes(traziValue.toUpperCase())) {
                                return (
                                    <div className="flex flex-col gap-2 items-center" key={produkt._id}>
                                <Link href={`produkt/${produkt.slug.current}`} className="flex flex-col items-center">
                                    <div className="absolute w-56 h-56 pt-32 flex gap-4 justify-center items-center opacity-0 hover:opacity-100 transition translate-y-4 hover:translate-y-0">
                                        <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-[#E8E8E8] rounded-full w-12 h-12"><AiOutlineHeart /></p>
                                        <Link href={`produkt/${produkt.slug.current}`}>
                                            <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-[#E8E8E8] rounded-full w-12 h-12"><AiOutlineShopping /></p>
                                        </Link>
                                    </div>
                                    <div className="w-56 h-56">
                                        <img src={urlFor(produkt.image[0].asset._ref)} className="w-56 h-56 object-contain border-2 border-[#E8E8E8]" />
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
                        }

                        if (kategorija) {
                            if (produkt.kategorija[0] == kategorija) {
                                if (produkt.cijena > value[0] && produkt.cijena < value[1]) return (
                                    <div className="flex flex-col gap-2 items-center" key={produkt._id}>
                                <Link href={`produkt/${produkt.slug.current}`} className="flex flex-col items-center">
                                    <div className="absolute w-56 h-56 pt-32 flex gap-4 justify-center items-center opacity-0 hover:opacity-100 transition translate-y-4 hover:translate-y-0">
                                        <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-[#E8E8E8] rounded-full w-12 h-12"><AiOutlineHeart /></p>
                                        <Link href={`produkt/${produkt.slug.current}`}>
                                            <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-[#E8E8E8] rounded-full w-12 h-12"><AiOutlineShopping /></p>
                                        </Link>
                                    </div>
                                    <div className="w-56 h-56">
                                        <img src={urlFor(produkt.image[0].asset._ref)} className="w-56 h-56 object-contain border-2 border-[#E8E8E8]" />
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
                        }

                        if (produkt.cijena > value[0] && produkt.cijena < value[1]) return (
                            <div className="flex flex-col gap-2 items-center" key={produkt._id}>
                                <Link href={`produkt/${produkt.slug.current}`} className="flex flex-col items-center">
                                    <div className="absolute w-56 h-56 pt-32 flex gap-4 justify-center items-center opacity-0 hover:opacity-100 transition translate-y-4 hover:translate-y-0">
                                        <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-[#E8E8E8] rounded-full w-12 h-12"><AiOutlineHeart /></p>
                                        <Link href={`produkt/${produkt.slug.current}`}>
                                            <p className="text-3xl text-black hover:text-primary transition flex items-center justify-center bg-[#E8E8E8] rounded-full w-12 h-12"><AiOutlineShopping /></p>
                                        </Link>
                                    </div>
                                    <div className="w-56 h-56">
                                        <img src={urlFor(produkt.image[0].asset._ref)} className="w-56 h-56 object-contain border-2 border-[#E8E8E8]" />
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