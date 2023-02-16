import Head from 'next/head';
import styles from '../../styles/Home.module.css';

import Nav from '../components/Nav';
import HeaderBanner from '../components/homepage/HeaderBanner';
import IzdvojeniProdukti from '../components/homepage/IzdvojeniProdukti';
import EmisijeBanner from '../components/homepage/EmisijeBanner';
import Partneri from '../components/homepage/Partneri';
import Kategorije from '../components/homepage/Kategorije';
import New from '../components/homepage/New';
import Vita from '../components/homepage/Vita';
import Social from '../components/homepage/Social';
import Blogs from '../components/homepage/Blogs';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';

import { Poppins } from '@next/font/google';

import { client } from '../lib/client';

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
 });

const Home = ({ banneri, produkti, blogovi }:any) => {
  return (
    <>
      <Head>
        <title>Odaberi Zdravlje</title>
        <meta name="description" content="Ovdje se nalaze ovotjedni proizvodi koji se emitiraju u našim Odaberi zdravlje emisijama. Nove emisije. Pogledajte naše najnovije emisije 5. sezone." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={poppins.className}>
        <Nav />
        <HeaderBanner banneri={banneri} />
        <IzdvojeniProdukti produkti={produkti} />
        <EmisijeBanner />
        <Partneri />
        <Kategorije />
        <New produkti = {produkti} />
        <Vita />
        <Blogs blogovi={blogovi} />
        <CallToAction />
        <Footer />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const bannerQuery = `*[_type == "banners"]`;
  const banneri = await client.fetch(bannerQuery);

  const produktiQuery = `*[_type == "produkt"]`;
  const produkti = await client.fetch(produktiQuery);

  const blogoviQuery = `*[_type == "blogovi"]`;
  const blogovi = await client.fetch(blogoviQuery);

  return {
    props: {
      banneri,
      produkti,
      blogovi,
    },
  };
}

export default Home;