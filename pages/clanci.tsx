import React from 'react';
import Banner from '../components/Banner';
import ListaBlogova from '../components/clanci/ListaBlogova';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';
import Nav from '../components/Nav';

import { client } from '../lib/client';

const clanci = ({ blogovi }) => {
  return (
    <div>
        <Nav />
        <Banner text="NOVOSTI" smallText="POČETNA / NOVOSTI" />
        <ListaBlogova blogovi={blogovi} />
        <CallToAction />
        <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
    const blogoviQuery = `*[_type == "blogovi"]`;
    const produkti = await client.fetch(blogoviQuery);
  
    return {
      props: {
        blogovi,
      },
    };
  }

export default clanci