import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context/StateContext';

import Napustanje from './kosarica/Napustanje';

import { BsCreditCard2Back } from 'react-icons/bs';
import { AiFillCheckCircle, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { CiBank } from 'react-icons/ci';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import { client } from '../lib/client';

const Placanje = () => {
    const [opcijaPlacanja, setOpcijaPlacanja] = useState(0);
    const [imePrezime, setImePrezime] = useState('');
    const [email, setEmail] = useState('');
    const [brojTel, setBrojTel] = useState('');
    const [adresa, setAdresa] = useState('');
    const [napomena, setNapomena] = useState('');
    const { postupak, setPostupak, cartItems, setShowPlacanje, showNapustanje, setShowNapustanje } = useStateContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {};
        Array.from(e.currentTarget.elements).forEach(field => {
            if ( !field.name ) return;
            formData[field.name] = field.value;
        });

        fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(formData),
        });

        console.log(formData);

        setImePrezime(e.target.fime.value + ' ' + event.target.fprezime.value);
        setEmail(e.target.email.value);
        setBrojTel(e.target.fbroj.value);
        setAdresa(e.target.fadresa.value + ' ' + e.target.fgrad.value + ' ' + e.target.fpostbroj.value);
        setNapomena(e.target.fnapomena.value);
        setPostupak(2);
    }

    const transformCartItems = () => {
        const array = [];

        cartItems.map((i, index) => {
            array.push({
                proizvod: {
                    _ref: cartItems[index]._id,
                },
                kolicina: cartItems[index].quantity,
                izabranaBoja: cartItems[index].izabranaBoja,
                izabranaVelicina: cartItems[index].izabranaVelicina,
            });
        });
        
        return array;
    }

    const cartItemsTransformed = transformCartItems();

    let item = [{
        _type: 'narudzbe',
        imePrezime: imePrezime,
        proizvodi: cartItemsTransformed,
        email: email,
        brojTel: brojTel,
        adresa: adresa,
        napomena: napomena,
      }];

    const handleSecond = () => {
        client.create(item[0]);
        setPostupak(3);
    };

    const handleThird = () => {
        setShowPlacanje(false);
        setPostupak(1);
    };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center z-[101] fixed">
        <div className="absolute w-full h-screen bg-gray-600 opacity-40 max-md:hidden" />
        <AiOutlineClose className="relative md:translate-x-[16rem] max-md:translate-x-40 translate-y-16 text-2xl z-[103] text-primary opacity-60" onClick={() => {
            setShowNapustanje(true);
        }} />
        {showNapustanje && <Napustanje />}
        {postupak == 1 && (<div className="md:w-[40rem] md:h-[30rem] max-md:w-screen max-md:h-screen md:px-4 flex flex-col md:gap-3 max-md:gap-4 max-md:py-2 md:justify-center items-center bg-white z-[102] md:rounded-lg">
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
                <form className="flex flex-col gap-2 items-center max-md:px-10" onSubmit={(event) => handleSubmit(event)}>
                    <div className="flex max-md:flex-col max-md:w-full md:gap-[10%] max-md:gap-2">
                        <div className="flex flex-col md:w-[45%] gap-2">
                            <input required={true} type="text" id="fime" name="fime" placeholder="Ime" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                            <input required={true} type="email" id="ime" name="email" placeholder="Email" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                            <input required={true} type="text" id="fime" name="fadresa" placeholder="Adresa" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                        </div>

                        <div className="flex flex-col md:w-[45%] gap-2">
                            <input required={true} type="text" id="fprezime" name="fprezime" placeholder="Prezime" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                            <input required={true} type="text" id="fbroj" name="fbroj" placeholder="Broj telefona" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm" />
                            <div className="flex max-md:flex-col max-md:w-full md:justify-between max-md:gap-2">
                                <input required={true} type="text" id="fgrad" name="fgrad" placeholder="Grad" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm md:w-[45%]" />
                                <input required={true} type="text" id="fpostbroj" name="fpostbroj" placeholder="Poštanski broj" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm md:w-[45%]" />
                            </div>
                        </div>
                    </div>

                    <input type="text" id="fnapomena" name="fnapomena" placeholder="Napomena" className="focus:outline-none bg-[#DFDEDE] px-2 py-1 text-sm text-center md:w-[60%] max-md:w-full md:mt-2" />
                    <div className="flex items-center gap-4">
                        <input required={true} type="checkbox" id="fuvjeti" name="fuvjeti" value="Uvjeti" />
                        <label for="fuvjeti" className="text-sm"> Pročitao/la sam i slažem se s uvjetima korištenja i odredbama web-stranice. </label>
                    </div>
                    <div className="flex items-center gap-4">
                        <input type="checkbox" id="fnewsletter" name="fnewsletter" value="Newsletter" />
                        <label for="fnewsletter" className="text-sm"> Pretplati me na naš newsletter.</label>
                    </div>

                    <input type="submit" value="Opcije plaćanja" className="px-12 py-2 text-lg text-white bg-primary rounded-lg" />
                </form>
            </div>
        </div>)}

        {postupak == 2 && (<div className="md:w-[40rem] md:h-[30rem] max-md:w-screen max-md:h-screen flex flex-col md:gap-3 max-md:gap-4 max-md:py-2 md:justify-center items-center bg-white z-[102] md:rounded-lg">
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

        {postupak == 3 && (<div className="md:w-[40rem] md:h-[30rem] max-md:w-screen max-md:h-screen flex flex-col md:gap-3 max-md:gap-4 max-md:py-40 md:justify-center items-center bg-white z-[102] md:rounded-lg">
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