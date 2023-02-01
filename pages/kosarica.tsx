import React, { useEffect } from 'react';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Produkt from '../components/kosarica/Produkt.jsx';
import { useStateContext } from '../context/StateContext';
import Placanje from '../components/Placanje';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';

import { client } from '../lib/client';

const kosarica = () => {
  const { cartItems, qty, incQty, decQty, totalPrice } = useStateContext();

  let transaction = client.transaction();

  let item = [{
    _id: '1',
    _type: 'narudzbe',
    proizvodi: 'Test narudzba',
  }];

  useEffect(() => {
    client.create(item[0]);
  }, []);

  return (
    <div className="flex flex-col gap-8 text-[#22262A]">
        <Nav />
        <Placanje />
        <Banner text="TRGOVINA" smallText="POČETNA / TRGOVINA" />
        <div className="h-12 mx-72 px-8 border-b-2 border-[#F6F7F8] flex items-center justify-between ">
          <h5 className="text-[#22262A] text-xl">PROIZVODI</h5>
          <div className="flex gap-14">
            <h5 className="text-[#22262A] text-xl">CIJENA</h5>
            <h5 className="text-[#22262A] text-xl">KOLIČINA</h5>
            <h5 className="text-[#22262A] text-xl">UKUPNO</h5>
          </div>
        </div>
        <div className="w-full min-h-96 px-80">
          {cartItems?.map((item) => (
            <Produkt produkt={item} />
          ))}
        </div>

        <div className="px-80 flex justify-between">
            <div className="flex">
              <input placeholder="Kupon kod" className="w-56 h-12 rounded-l-md px-2 border-2 focus:outline-none border-[#F1F3F4]" />
              <input type="submit" value="Iskoristi" className="w-24 h-12 flex bg-primary text-white rounded-r-md cursor-pointer" />
            </div>

            <div className="flex flex-col w-72 gap-4">
              <div className="w-full flex justify-between">
                <div className="flex flex-col gap-2 font-[400]">
                  <p>Ukupno</p>
                  <p>Dostava</p>
                  <p>Kupon</p>
                </div>

                <div className="flex flex-col gap-2 font-[400] text-right">
                  <p>{totalPrice.toFixed(2)}€</p>
                  <p>4.00€</p>
                  <p>Ne</p>
                </div>
              </div>

              <div className="flex justify-between px-2 font-[600] text-lg">
                <p>UKUPNO</p>
                <p className="text-right">{(totalPrice + 4).toFixed(2)}€</p>
              </div>

              <button type="button" className="bg-primary rounded-lg h-12 flex justify-center items-center text-white">
                <p>Plaćanje</p>
              </button>
            </div>
        </div>
        <CallToAction />
        <Footer />
    </div>
  )
}

export default kosarica