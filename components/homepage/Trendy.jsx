import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { useKeenSlider } from "keen-slider/react";

import BigDiscount from './BigDiscount';
import SmallDiscount from './SmallDiscount';

import { urlFor } from '../../lib/client';

import Small_1 from '../../assets/small-discount-1.png';
import Small_2 from '../../assets/small-discount-2.png';
import Trendy_1 from '../../assets/trendy-1.jpg';

const AdaptiveHeight = (slider) => {
  const updateHeight = () => {
    slider.container.style.height = slider.slides[slider.track.details.rel].offsetHeight + "px"
  };
  slider.on("created", updateHeight);
  slider.on("slideChanged", updateHeight);
}

function Arrow(props) {
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "w-32 h-32 absolute left-0 fill-white opacity-60" : "w-32 h-32 absolute right-0 fill-white opacity-60"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

const Trendy = ({ trendyField }) => {
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
    <div>
      <div className="w-full h-screen mt-16">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h3 className="text-4xl font-[500]">IZDVOJENI PROIZVODI</h3>
          <div className="h-1 w-48 bg-primary" />
          <p className="font-weight-[500] font-lg text-[#454545]">Ovdje se nalaze ovotjedni proizvodi koji se emitiraju u našim Odaberi zdravlje emisijama.</p>
        </div>

        
        <div className="w-full h-[34rem] px-[6.5rem] my-8 flex">
            
          <div ref={sliderRef} className="flex w-full keen-slider">

            {trendyField?.map((trendy) => (
              <div className="w-96 h-[100%] flex flex-col justify-center items-center keen-slider__slide">
                <Link href={`product/${trendy.slug.current}`}>
                  <div className="w-92 h-96 bg-green-800 border-2 border-gray-200">
                    <img src={urlFor(trendy.image[0].asset._ref)} alt="Product image" className="w-full h-full object-cover" />
                  </div>
                </Link>
                  <div className="py-3 flex flex-col items-center">
                    <Link href={`product/${trendy.slug.current}`}>
                      <p className="text-xl font-[500] tracking-widest">{trendy.naziv}</p>
                    </Link>
                    <div className="flex gap-4">
                      <p className="text-primary">€{trendy.cijena}</p>
                      {trendy.staraCijena?.map(() => (
                        <p>{trendy.staraCijena}</p>
                      ))}
                    </div>

                    <button 
                      className="mt-1 px-4 py-2 bg-primary text-white rounded-full"
                      type="button">DODAJ U KOŠARICU</button>
                  </div>
              </div>
            ))}
        </div>

        </div>
      </div>
    </div>
  )
}

export default Trendy