import React from 'react';

import { Poppins } from '@next/font/google';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import KontaktForma from '../components/kontakt/KontaktForma';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';

const poppins = Poppins({ 
    weight: ['400', '500', '600', '700'],
    style: ['normal'],
    subsets: ['latin'],
   });

const kontakt = () => {
  return (
    <div className={`w-full min-h-screen flex flex-col ${poppins.className}`}>
        <Nav />
        <Banner text="KONTAKT" smallText="POČETNA / KONTAKT" />
        <KontaktForma />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default kontakt