import React from 'react';
import Banner from '../components/Banner';
import EmisijeFeed from '../components/emisije/EmisijeFeed';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';
import Nav from '../components/Nav';

import { Poppins } from '@next/font/google';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

const emisije = () => {
  return (
    <div className={`w-full flex flex-col min-h-screen ${poppins.className}`}>
        <Nav />
        <Banner text="EMISIJE" smallText="POČETNA / EMISIJE" />
        <EmisijeFeed />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default emisije