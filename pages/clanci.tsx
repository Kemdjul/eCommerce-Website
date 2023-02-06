import React from 'react';
import Banner from '../components/Banner';
import ListaBlogova from '../components/clanci/ListaBlogova';
import CallToAction from '../components/homepage/CallToAction';
import Footer from '../components/homepage/Footer';
import Nav from '../components/Nav';

const clanci = () => {
  return (
    <div>
        <Nav />
        <Banner text="NOVOSTI" smallText="POČETNA / NOVOSTI" />
        <ListaBlogova />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default clanci