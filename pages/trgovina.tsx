import React from 'react';
import Head from 'next/head';
import { Poppins } from '@next/font/google';

import Nav from '../components/Nav';
import TrgovinaHeader from '../components/trgovina/TrgovinaHeader';
import ListaProdukata from '../components/trgovina/ListaProdukata';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';
import { client } from '../lib/client';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

const Trgovina = ({ produkti }: any) => {
  return (
    <>
      <Head>
        <title>Trgovina - Odaberi Zdravlje</title>
        <meta name="description" content="Prolistajte kroz asortiman naših kvalitetnih proizvoda za sve vaše zdravstvene tegobe." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={poppins.className}>
        <Nav />
        <TrgovinaHeader />
        <ListaProdukata produkti={produkti} />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const produktiQuery = `*[_type == "produkt"]`;
  const produkti = await client.fetch(produktiQuery);

  return {
    props: {
      produkti,
    },
  };
}

export default Trgovina