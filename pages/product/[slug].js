import React, { useState } from 'react';
import Link from 'next/link';
import { client, urlFor } from '../../lib/client';
import { useKeenSlider } from "keen-slider/react";

import CallToAction from '../../components/homepage/CallToAction';
import Footer from '../../components/homepage/Footer';

import { AiOutlineMinus, AiOutlinePlus, AiOutlineShoppingCart, AiOutlineHeart } from 'react-icons/ai';

import Nav from '../../components/Nav';

const AdaptiveHeight = (slider) => {
  const updateHeight = () => {
    slider.container.style.height = slider.slides[slider.track.details.rel].offsetHeight + "px"
  };
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
}

const ProductDetails = ({ product: { naziv, boja, cijena, image, kategorija }, products }) => {
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

    return (
        <div className="w-full h-screen items-center flex flex-col text-[#262626]">
          <Nav />

          <div className="w-full h-12 flex justify-center items-center gap-10 mt-[8.5rem]">
            <p className="text-primary font-[400]">Početna</p>
            <p className="text-primary font-[400]">Trgovina</p>
            <p className="text-[#262626] font-[400]">{naziv}</p>
          </div>
            

          <div className="flex w-[63.5rem] gap-20 justify-center mt-8">
            <div className="flex flex-col gap-4">
              <img src={urlFor(image[slider].asset._ref)} className="h-96 w-96 object-contain" />
              <div className="flex justify-center">
                {image.map((img, index) => { if (index < 4) {
                  return (
                      <img src={urlFor(img.asset._ref)} className="w-20 h-20 mr-4 object-contain" onClick={() => setSlider(index)} />
                  )
                }})}
              </div>
            </div>

            <div className="flex flex-col w-96 h-80">
              <h4 className="text-3xl font-[500]">{naziv}</h4>

              <div className="flex items-center mt-4">
                <p className="text-primary font-[700] text-4xl">€{cijena}</p>
                <p></p>
                <p></p>
              </div>

              <p className="text-[#C1C8CE] font-[400]">Cijena u zadnjih 30 dana: 10€</p>

              <div className="flex w-full justify-between mt-6">
                <div className="flex flex-col gap-1 font-[400]">
                  <p className="">Dostupnost:</p>
                  <p>Kategorija:</p>
                </div>

                <div className="flex flex-col gap-1">
                  <p>Na zalihi</p>
                  <p>{kategorija}</p>
                  <div className="flex gap-2">
                  
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex justify-between items-center mt-10">
                  <p className="text-xl font-[400]">Odabir boje:</p>
                  <div className="flex gap-3">
                    {boja.map((boja) => (
                      <div className={`w-6 h-6 rounded-full bg-${boja}`} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="w-full justify-between flex mt-6">
                <p>Veličina</p>
              </div>

              <div className="w-full flex justify-between mt-28">
                <div className="flex">
                  <div className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8] rounded-l-lg">
                    <AiOutlineMinus className="text-primary" />
                  </div>

                  <div className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8]">
                    0
                  </div>

                  <div className="w-10 h-10 flex justify-center items-center bg-[#F6F7F8] rounded-r-lg">
                    <AiOutlinePlus className="text-primary" />
                  </div>
                </div>

                <div className="px-4 py-2 gap-2 text-primary flex justify-around items-center bg-[#F6F7F8] rounded-lg">
                  <AiOutlineShoppingCart />
                  <p>Dodaj u košaricu</p>
                </div>

                <div className="w-8 h-8 text-primary flex justify-center items-center bg-[#F6F7F8] rounded-lg">
                  <AiOutlineHeart />
                </div>
              </div>
            </div>
          </div>

          <div className="w-[60rem] mt-16 min-h-screen bg-[#FAFAFB] rounded-lg">
            <div className="flex gap-12 px-10 py-8">
              <div className="absolute px-[27.5rem] pt-10 pb-7 border-b-[6px] border-[#E5E8EA]"/>
              <button type="button" className="text-primary font-[400] text-xl border-b-[6px] pb-10 border-primary z-10">Informacije o proizvodu</button>
              <button type="button" className="font-[400] text-xl pb-10 z-10">Vodič za veličinu</button>
              <button type="button" className="font-[400] text-xl pb-10 z-10">Povezani linkovi</button>
            </div>

            <div className="w-full px-10">
              Test
            </div>
          </div>

          <div className="w-full flex flex-col gap-8 justify-center items-center">
            <h3 className="text-4xl">POVEZANI PROIZVODI</h3>

            <div ref={sliderRef} className="flex w-[80rem] keen-slider">
            {products?.map((produkt) => (
              <div className="w-64 flex flex-col justify-center items-center keen-slider__slide">
                <Link href={`${produkt.slug.current}`}>
                  <div className="w- h- bg-green-800 border-2 border-gray-200">
                    <img src={urlFor(produkt.image[0].asset._ref)} alt="Product image" className="w-72 h-72 object-contain" />
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

export const getServerSideProps = async ({ params: { slug, kategorija } }) => {
  const trendyQuery = `*[_type == "trendy" && slug.current == '${slug}'][0]`;
  const product = await client.fetch(trendyQuery);
  
  const productsQuery = `*[_type == "trendy" && kategorija == '${product.kategorija}']`;
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
}

export default ProductDetails