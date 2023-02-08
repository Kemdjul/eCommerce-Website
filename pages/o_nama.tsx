import React from 'react';
import Banner from '../components/Banner';
import TkoSmoMi from '../components/o-nama/TkoSmoMi';
import NasePoslovnice from '../components/o-nama/NasePoslovnice';
import CestaPitanja from '../components/o-nama/CestaPitanja';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';
import Nav from '../components/Nav';

import { Poppins } from '@next/font/google';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

const o_nama = () => {
  return (
    <div className={`w-full min-h-screen flex flex-col ${poppins.className}`}>
      <Nav />
      <Banner text="O NAMA" smallText="POČETNA / O NAMA" />
      <TkoSmoMi />
      <NasePoslovnice />
      <CestaPitanja />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default o_nama