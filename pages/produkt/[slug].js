import React, { useState } from 'react';
import Link from 'next/link';
import { client, urlFor } from '../../lib/client';
import { useKeenSlider } from "keen-slider/react";
import { PortableText } from '@portabletext/react';
import { urlBuilder } from '../../lib/client';
import { getImageDimensions } from '@sanity/asset-utils';

import CallToAction from '../../components/homepage/CallToAction';
import Footer from '../../components/homepage/Footer';

import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

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
  const [sliderRef, instanceRef] = useKeenSlider(
  {
    initial: 0,
    rubberband: false,
    slides: {
      perView: 4,
      spacing: 12,
    },
    /*slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },*/
    created() {
      setLoaded(true)
    },
  },
  [AdaptiveHeight]
  );

  const { incQty, decQty, qty, onAdd, setShowCart } = useStateContext();
  const handleClick = () => {
    onAdd(produkt, qty);

    setShowCart(true);
  }

    return (
        <div className="w-full h-screen items-center flex flex-col text-[#262626]">
          <Nav />

          <div className="w-full h-12 flex justify-center items-center gap-10 mt-[8.5rem]">
            <p className="text-primary font-[400]">Početna</p>
            <p className="text-primary font-[400]">Trgovina</p>
            <p className="text-[#262626] font-[400]">{produkt.naziv}</p>
          </div>
            

          <div className="flex w-[63.5rem] gap-20 justify-center mt-8">
            <div className="flex flex-col gap-4">
              <img src={urlFor(produkt.image[slider].asset._ref)} className="h-96 w-96 object-contain" />
              <div className="flex justify-center">
                {produkt.image.map((img, index) => { if (index < 4) {
                  return (
                      <img src={urlFor(img.asset._ref)} className="w-20 h-20 mr-4 object-contain" onClick={() => setSlider(index)} />
                  )
                }})}
              </div>
            </div>

            <div className="flex flex-col w-96 h-80">
              <h4 className="text-3xl font-[500]">{produkt.naziv}</h4>

              <div className="flex items-center mt-4">
                <p className="text-primary font-[700] text-4xl">{produkt.cijena.toFixed(2)}€</p>
                <p></p>
                <p></p>
              </div>

              {produkt.staraCijena && <p className="text-[#C1C8CE] font-[400]">Cijena u zadnjih 30 dana: {produkt.staraCijena.toFixed(2)}€</p>}

              <div className="flex w-full justify-between mt-6">
                <div className="flex flex-col gap-1 font-[400]">
                  <p className="">Dostupnost:</p>
                  <p>Kategorija:</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p>Na zalihi</p>
                  <p>{produkt.kategorija[0]}</p>
                  <div className="flex gap-2">
                  
                  </div>
                </div>
              </div>

              {produkt.boja && (<div className="w-full">
                <div className="flex justify-between items-center mt-10">
                  <p className="text-xl font-[400]">Odabir boje:</p>
                  <div className="flex gap-3">
                    {produkt.boja.map((boja) => (
                      <div className={`w-6 h-6 rounded-full bg-${boja}`} />
                    ))}
                  </div>
                </div>
              </div>)}

              {produkt.velicina && (<div className="w-full justify-between flex mt-6">
                <p>Veličina</p>
              </div>)}

              <div className="w-full flex justify-between mt-28">
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

                <div className="w-8 h-8 text-primary flex justify-center items-center bg-[#F6F7F8] rounded-lg">
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[60rem] mt-16 pb-8 bg-[#FAFAFB] rounded-lg">
            <div className="flex gap-12 px-10 py-8">
              <div className="absolute px-[27.5rem] pt-10 pb-7 border-b-[6px] border-[#E5E8EA]"/>
              <button type="button" className="text-primary font-[400] text-xl border-b-[6px] pb-10 border-primary z-10">Informacije o proizvodu</button>
              <button type="button" className="font-[400] text-xl pb-10 z-10">Vodič za veličinu</button>
              <button type="button" className="font-[400] text-xl pb-10 z-10">Povezani linkovi</button>
            </div>

            <div className="w-full px-10">
              <PortableText value={produkt.opis} components={components} />
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <h3 className="text-4xl">POVEZANI PROIZVODI</h3>

            <div ref={sliderRef} className="flex w-[80rem] keen-slider">
            {produkti?.map((slicniProdukt) => (
              <div className="w-64 flex flex-col justify-center items-center keen-slider__slide">
                <Link href={`${slicniProdukt.slug.current}`}>
                  <div className="bg-green-800 border-2 border-gray-200">
                    <img src={urlFor(slicniProdukt.image[0].asset._ref)} alt="Product image" className="w-72 h-72 object-contain" />
                  </div>
                </Link>

                <div className="py-3 flex flex-col items-center">
                  <Link href={`${produkt.slug.current}`}>
                    <p className="text-3xl font-[700]">{produkt.naziv}</p>
                  </Link>
                  </div>
              </div>
              ))}
              </div>
          </div>
          
          <div className="mt-10 w-full">
            <CallToAction />
          </div>
          
          <div className="w-screen mt-32">
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