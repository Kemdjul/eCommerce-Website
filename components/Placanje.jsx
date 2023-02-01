import React, { useState } from 'react';

import { BsCreditCard2Back } from 'react-icons/bs';
import { AiFillCheckCircle, AiOutlineCheck } from 'react-icons/ai';
import { CiBank } from 'react-icons/ci';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

const Placanje = () => {
    const [postupak, setPostupak] = useState(1);
    const [opcijaPlacanja, setOpcijaPlacanja] = useState(0);

    const handleFirst = () => {
        setPostupak(2);
    };

    const handleSecond = () => {
        setPostupak(3);
    };

    const handleThird = () => {
        setPostupak(0);
    };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center z-[101] fixed">
        <div className="absolute w-full h-screen bg-gray-600 opacity-40" />
        {postupak == 1 && (<div className="w-[40rem] h-[30rem] flex flex-col gap-3 justify-center items-center bg-white z-[102]">
            <h3 className="font-[600] text-3xl text-primary">Podaci za dostavu</h3>
            <div className="flex items-center text-white">
                <div className="rounded-full bg-primary w-8 h-8 flex justify-center items-center">
                    <p>1</p>
                </div>
                <div className="h-1 w-4 bg-[#DFDEDE]" />
                <div className="rounded-full bg-[#DFDEDE] w-8 h-8 flex justify-center items-center">
                    <p>2</p>
                </div>
                <div className="h-1 w-4 bg-[#DFDEDE]" />
                <div className="rounded-full bg-[#DFDEDE] w-8 h-8 flex justify-center items-center">
                    <p>3</p>
                </div>
            </div>
            <div className="flex mt-2">
                <form className="flex flex-col gap-4 items-center">
                    <div className="flex gap-[10%]">
                        <div className="flex flex-col w-[45%] gap-6">
                            <input type="text" id="fime" name="fime" placeholder="Ime" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                            <input type="email" id="fime" name="femail" placeholder="Email" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                            <input type="text" id="fime" name="fadresa" placeholder="Adresa" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                        </div>

                        <div className="flex flex-col w-[45%] gap-6">
                            <input type="text" id="fprezime" name="fprezime" placeholder="Prezime" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                            <input type="email" id="fbroj" name="fbroj" placeholder="Broj telefona" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                            <div className="flex justify-between">
                                <input type="text" id="fgrad" name="fgrad" placeholder="Grad" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm w-[45%]" />
                                <input type="text" id="fpostbroj" name="fpostbroj" placeholder="Poštanski broj" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm w-[45%]" />
                            </div>
                        </div>
                    </div>

                    <input type="text" id="fnapomena" name="fnapomena" placeholder="Napomena" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm text-center w-[60%] mt-2" />
                    <div>
                        <input type="checkbox" id="fuvjeti" name="fuvjeti" value="Uvjeti" />
                        <label for="fuvjeti"> Pročitao/la sam i slažem se s uvjetima korištenja i odredbama web-stranice. </label>
                    </div>
                    <div>
                        <input type="checkbox" id="fnewsletter" name="fnewsletter" value="Newsletter" />
                        <label for="fnewsletter"> Pretplati me na naš newsletter.</label>
                    </div>

                    <input onClick={() => handleFirst()} type="submit" value="Opcije plaćanja" className="px-12 py-2 text-lg text-white bg-primary rounded-lg" />
                </form>
            </div>
        </div>)}

        {postupak == 2 && (<div className="w-[40rem] h-[30rem] flex flex-col gap-6 justify-center items-center bg-white z-[102]">
            <h3 className="font-[600] text-3xl text-primary">Podaci za dostavu</h3>
            <div className="flex items-center text-white">
                <div className="rounded-full bg-primary w-8 h-8 flex justify-center items-center">
                    <p>1</p>
                </div>
                <div className="h-1 w-4 bg-primary" />
                <div className="rounded-full bg-primary w-8 h-8 flex justify-center items-center">
                    <p>2</p>
                </div>
                <div className="h-1 w-4 bg-[#DFDEDE]" />
                <div className="rounded-full bg-[#DFDEDE] w-8 h-8 flex justify-center items-center">
                    <p>3</p>
                </div>
            </div>
            
            <div className="flex flex-col">
                <div className="flex justify-between items-center w-96 h-16 px-6 bg-[#e9f6ee] opacity-50">
                    <BsCreditCard2Back className="text-2xl text-primary" />
                    <p className="font-[700] text-xl w-60">Kartično plaćanje</p>
                    <div className="border-2 border-[#DFDEDE] px-2 py-2">
                        <AiOutlineCheck className={opcijaPlacanja == 'kartica' ? '' : 'opacity-0'} />
                    </div>
                </div>

                <div className="flex justify-between items-center w-96 h-16 pl-4 pr-6 bg-[#f6f7f8] opacity-50">
                    <CiBank className="text-4xl text-primary" />
                    <p className="font-[700] text-xl w-60">Bankovna transakcija</p>
                    <div className="border-2 border-[#DFDEDE] px-2 py-2">
                        <AiOutlineCheck className={opcijaPlacanja == 'banka' ? '' : 'opacity-0'} />
                    </div>
                </div>

                <div onClick={() => setOpcijaPlacanja('pouzece')} className="flex justify-between items-center w-96 h-16 pl-5 pr-6 bg-[#f6f7f8]">
                    <FaRegMoneyBillAlt className="text-3xl text-primary" />
                    <p className="font-[700] text-xl w-60">Plačanje pouzećem</p>
                    <div className="border-2 border-[#DFDEDE] px-2 py-2">
                        <AiOutlineCheck className={opcijaPlacanja == 'pouzece' ? '' : 'opacity-0'} />
                    </div>
                </div>
            </div>

            <p className="text-sm text-center px-12 text-[#999999] font-[400]">Dostavu vršimo preko Overseas Express dostavne službe, ukoliko želite izvršiti narudžbu izvan RH, molimo vas da nas kontaktirate.</p>
            <button onClick={() => handleSecond()} type="button" className="px-12 py-2 text-lg text-white bg-primary rounded-lg">Plati</button>
        </div>)}

        {postupak == 3 && (<div className="w-[40rem] h-[30rem] flex flex-col gap-6 justify-center items-center bg-white z-[102]">
            <h3 className="font-[600] text-3xl text-primary">Podaci za dostavu</h3>
            <div className="flex items-center text-white">
                <div className="rounded-full bg-primary w-8 h-8 flex justify-center items-center">
                    <p>1</p>
                </div>
                <div className="h-1 w-4 bg-primary" />
                <div className="rounded-full bg-primary w-8 h-8 flex justify-center items-center">
                    <p>2</p>
                </div>
                <div className="h-1 w-4 bg-primary" />
                <div className="rounded-full bg-primary w-8 h-8 flex justify-center items-center">
                    <p>3</p>
                </div>
            </div>
            
            <AiFillCheckCircle className="text-9xl text-primary" />
            <p className="text-xl text-primary font-[700]">Uspješno ste izvršili narudžbu.</p>

            <p className="text-sm text-center px-12 text-[#999999] font-[400]">Rok isporuke je od 3 do 5 radnih dana.</p>
            <button onClick={() => handleThird()} type="button" className="px-12 py-2 text-lg text-white bg-primary rounded-lg">Završi narudžbu</button>
        </div>)}
    </div>
  )
}

export default Placanje