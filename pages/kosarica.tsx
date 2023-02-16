import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import Produkt from '../components/kosarica/Produkt.jsx';
import { useStateContext } from '../context/StateContext';
import Placanje from '../components/Placanje';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';

import { Poppins } from '@next/font/google';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

const Kosarica = () => {
  const { cartItems, totalQuantities, qty, incQty, decQty, totalPrice, showPlacanje, setShowPlacanje } = useStateContext();

  const handleClick = () => {
    if (totalQuantities != 0) {
      setShowPlacanje(true);
    }
  }

  return (
  <>
    <Head>
      <title>Košarica - Odaberi Zdravlje</title>
      <meta name="description" content="Vaš izbor naših proizvoda." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <div className={`flex flex-col gap-8 text-[#22262A] ${poppins.className}`}>
        <Nav />
        {showPlacanje && <Placanje />}
        <Banner text="KOŠARICA" smallText="" />
        <div className="h-12 md:mx-72 md:px-8 border-b-2 border-[#F6F7F8] flex items-center justify-between ">
          <h5 className="text-[#22262A] md:text-xl max-md:text-lg">PROIZVODI</h5>
          <div className="flex md:gap-14 max-md:gap-2">
            <h5 className="text-[#22262A] md:text-xl max-md:text-lg max-md:hidden">CIJENA</h5>
            <h5 className="text-[#22262A] md:text-xl max-md:text-lg max-md:hidden">KOLIČINA</h5>
            <h5 className="text-[#22262A] md:text-xl max-md:text-lg max-md:hidden">UKUPNO</h5>
          </div>
        </div>
        <div className="w-full min-h-96 md:px-80">
          {cartItems?.map((item: any) => (
            <Produkt produkt={item} key={item._id} />
          ))}
        </div>

        <div className="md:px-80 flex max-md:flex-col max-md:items-center max-md:gap-4 justify-between">
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
                  <p>{totalQuantities != 0 ? totalPrice > 70 ? '0.00€' : '4.00€' : '0.00€'}</p>
                  <p>Ne</p>
                </div>
              </div>

              <div className="flex justify-between px-2 font-[600] text-lg">
                <p>UKUPNO</p>
                <p className="text-right">{(totalQuantities != 0 ? totalPrice > 70 ? totalPrice : totalPrice + 4 : 0).toFixed(2)}€</p>
              </div>

              <button onClick={() => {handleClick()}} type="button" className="bg-primary rounded-lg h-12 flex justify-center items-center text-white">
                <p>Plaćanje</p>
              </button>
            </div>
        </div>
        <CallToAction />
        <Footer />
      </div>
  </>
  )
}

export default Kosarica