import React, { useState } from 'react';
import Link from 'next/link';
import { client, urlFor } from '../../lib/client';
import { useKeenSlider } from "keen-slider/react";
import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';
import { useMediaQuery } from 'react-responsive';

import CallToAction from '../../components/homepage/CallToAction';
import Footer from '../../components/homepage/Footer';

import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineHeart, AiFillCaretDown } from 'react-icons/ai';

import Nav from '../../components/Nav';
import { useStateContext } from '../../context/StateContext';

const SampleImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlFor(value.asset?._ref)}
      alt={value.alt || ' '}
      loading="lazy"
      className="max-w-lg max-h-lg object-contain"
    />
  )
}

const components = {
  types: {
    image: SampleImageComponent,
  },
  list: {
    bullet: ({children}) => <ul className="list-disc mt-4">{children}</ul>,
    number: ({children}) => <ol className="list-disc mt-4">{children}</ol>,
  },
}

const AdaptiveHeight = (slider) => {
  const updateHeight = () => {
    slider.container.style.height = slider.slides[slider.track.details.rel].offsetHeight + "px"
  };
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
}

const ProductDetails = ({ produkt, produkti }) => {
  const [slider, setSlider] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const [showBoje, setShowBoje] = useState(false);
  const [izabranaBoja, setIzabranaBoja] = useState(produkt.boja ? produkt.boja[0] : '');
  const [showVelicina, setShowVelicina] = useState(false);
  const [izabranaVelicina, setIzabranaVelicina] = useState(produkt.velicina ? produkt.velicina[0] : '');

  const [sliderRef, instanceRef] = useKeenSlider(
  {
    initial: 0,
    rubberband: false,
    slides: {
      perView: isMobile ? 1 : 4,
      spacing: isMobile ? 1 : 12,
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  }, [AdaptiveHeight]);

  const { incQty, decQty, qty, onAdd, setShowCart } = useStateContext();
  const handleClick = () => {
    onAdd(produkt, qty, izabranaBoja, izabranaVelicina);

    setShowCart(true);
  }

  const handleOdaberiBoju = (boja) => {
    setIzabranaBoja(boja);
  }

    return (
        <div className="md:w-full max-md:w-screen md:h-screen items-center flex flex-col text-[#262626]">
          <Nav />

          <div className="w-full h-12 flex justify-center items-center bg-[#F6F7F8] py-4 md:gap-10 max-md:gap-1 mt-[8.5rem]">
            <p className="text-primary font-[400]">Početna</p>
            <p className="text-[#C1C8CE]">/</p>
            <p className="text-primary font-[400]">Trgovina</p>
            <p className="text-[#C1C8CE]">/</p>
            <p className="text-[#262626] font-[400]">{produkt.naziv}</p>
          </div>
            

          <div className="flex max-md:flex-col md:w-[63.5rem] gap-20 justify-center mt-8">
            <div className="flex flex-col gap-4">
              <img src={urlFor(produkt.image[slider].asset._ref)} className="h-96 w-96 object-contain" />
              <div className="flex justify-center">
                {produkt.image.map((img, index) => { if (index < 4) {
                  return (
                      <img src={urlFor(img.asset._ref)} className="w-20 h-20 mr-4 object-contain" onClick={() => setSlider(index)} key={produkt._id} />
                  )
                }})}
                {!produkt.zaliha && <p className="-translate-y-[25rem] max-md:-translate-x-28 md:-translate-x-32 bg-red-400 h-6 flex justify-center items-center text-gray-100 px-2 rounded-lg absolute">Nema na zalihi</p>}
              </div>
            </div>

            <div className="flex flex-col md:w-96 max-md:px-10">
              <h4 className="text-3xl font-[500] max-md:text-center">{produkt.naziv}</h4>

              <div className="flex items-center mt-4 gap-4">
                <p className="text-primary font-[700] text-4xl">{produkt.cijenaSPopustom ? produkt.cijenaSPopustom.toFixed(2) : produkt.cijena.toFixed(2)}€</p>
                <p>{produkt.cijenaSPopustom ? produkt.cijena.toFixed(2) : ''}</p>
                <p></p>
              </div>

              <p className="text-[#C1C8CE] font-[400]">Cijena u zadnjih 30 dana: {produkt.staraCijena ? produkt.staraCijena.toFixed(2) : produkt.cijenaSPopustom ? produkt.cijenaSPopustom.toFixed(2) : produkt.cijena.toFixed(2)}€</p>

              <div className="flex w-full md:justify-between max-md:justify-between mt-6">
                <div className="flex flex-col gap-1 font-[400]">
                  <p className="">Dostupnost:</p>
                  <p>Kategorija:</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="max-md:text-right">Na zalihi</p>
                  <p className="max-md:text-right">{produkt.kategorija[0]}</p>
                </div>
              </div>

              {produkt.boja && (<div className="w-full">
                <div className={showBoje ? "flex justify-between mt-10 pb-16" : "flex justify-between mt-10"}>
                  <p className="text-xl font-[400]">Odabir boje:</p>
                  <div className="flex flex-col gap-3 w-28">
                    <p className="flex items-center gap-2" onClick={() => setShowBoje(!showBoje)}>{izabranaBoja} <AiFillCaretDown /></p>
                    <div onClick={() => setShowBoje(!showBoje)} className={showBoje ? "flex flex-col h-6 max-md:gap-2" : "hidden"}>
                      {produkt.boja.map((boja) => {
                        if(boja != izabranaBoja)
                          return (<p onClick={() => setIzabranaBoja(boja)} key={boja}>{boja}</p>)
                      })}
                    </div>
                  </div>
                </div>
              </div>)}

              {produkt.velicina && (<div className="w-full">
                <div className={showVelicina ? "flex justify-between mt-10 pb-12" : "flex justify-between mt-10"}>
                  <p className="text-xl font-[400]">Odabir veličine:</p>
                  <div className="flex flex-col gap-3 w-28 cursor-pointer">
                    <p className="flex items-center gap-2" onClick={() => setShowVelicina(!showVelicina)}>{izabranaVelicina} <AiFillCaretDown /></p>
                    <div onClick={() => setShowVelicina(!showVelicina)} className={showVelicina ? "flex flex-col h-6" : "hidden"}>
                      {produkt.velicina.map((vel) => {
                        if (vel != izabranaVelicina)
                          return (<p onClick={() => setIzabranaVelicina(vel)} key={vel}>{vel}</p>)
                      })}
                    </div>
                  </div>
                </div>
              </div>)}

              <div className="w-full flex justify-between items-center max-md:gap-2 md:mt-28 max-md:mt-10">
                {produkt.zaliha && <div className="flex md:gap-8 items-center max-md:gap-2">
                  <div className="flex">
                    <button type="button" onClick={decQty} className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8] rounded-l-lg">
                      <AiOutlineMinus className="text-primary" />
                    </button>

                    <div className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8]">
                      {qty}
                    </div>

                    <button type="button" onClick={incQty} className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8] rounded-r-lg">
                      <AiOutlinePlus className="text-primary" />
                    </button>
                  </div>

                  <button type="button" onClick={handleClick} className="px-4 py-2 gap-2 text-primary flex justify-around items-center bg-[#F6F7F8] rounded-lg">
                    <AiOutlineShoppingCart />
                    <p>Dodaj u košaricu</p>
                  </button>
                </div>}

                <div className="w-8 h-8 text-primary flex justify-center items-center bg-[#F6F7F8] rounded-lg cursor-pointer">
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-[60rem] md:mt-16 max-md:mt-8 pb-8 bg-[#FAFAFB] rounded-lg">
            <div className="flex gap-12 px-10 py-8">
              <div className="absolute md:px-[27.5rem] pt-10 pb-7 border-b-[6px] border-[#E5E8EA]"/>
              <button type="button" className="text-primary font-[400] text-xl border-b-[6px] pb-10 border-primary z-10">Informacije o proizvodu</button>
              {produkt.kategorija[0] == "Oxygen Optimal" && <button type="button" className="font-[400] text-xl pb-10 z-10">Vodič za veličinu</button>}
            </div>

            <div className="md:w-full max-md:w-screen md:px-10 max-md:px-4">
              <PortableText value={produkt.opis} components={components} />
            </div>
          </div>

          <div className="md:w-full max-md:w-screen max-md:pt-16 md:mt-16 flex flex-col md:gap-8 justify-center items-center">
            <h3 className="md:text-4xl max-md:text-3xl">POVEZANI PROIZVODI</h3>

            <div ref={sliderRef} className="flex md:w-[80rem] max-md:w-screen max-md:overflow-hidden keen-slider">
            {produkti?.map((slicniProdukt) => (
              <div className="w-64 flex flex-col pt-8 items-center keen-slider__slide" key={slicniProdukt._id}>
                <Link href={`${slicniProdukt.slug.current}`}>
                  <div className="bg-green-800 border-2 border-gray-200">
                    <img src={urlFor(slicniProdukt.image[0].asset._ref)} alt="Product image" className="w-72 h-72 object-contain" />
                  </div>
                </Link>

                <div className="py-3 flex flex-col items-center">
                  <Link href={`${produkt.slug.current}`}>
                    <p className="md:text-2xl max-md:text-xl text-center">{slicniProdukt.naziv}</p>
                  </Link>
                  </div>
              </div>
              ))}
              </div>
          </div>
          
          <div className="w-full">
            <CallToAction />
          </div>
          
          <div className="w-screen">
            <Footer />
          </div>
        </div>
  )
}

export const getServerSideProps = async ({ params: { slug } }) => {
  const produktQuery = `*[_type == "produkt" && slug.current == '${slug}'][0]`;
  const produkt = await client.fetch(produktQuery);
  
  const produktiQuery = `*[_type == "produkt" && kategorija[0] == '${produkt.kategorija[0]}' && _id != '${produkt._id}']`;
  const produkti = await client.fetch(produktiQuery);

  return {
    props: {
      produkt,
      produkti,
    },
  };
}

export default ProductDetails