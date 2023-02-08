import React, {useState, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import { urlFor } from '../../lib/client';
import { useStateContext } from '../../context/StateContext';
import Link from 'next/link';

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

const HeaderBanner = ({ banneri }) => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = React.useState(false);
  const [bannerRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      rubberband: false,
      slideChanged(s) {
        setCurrentSlide(s.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [AdaptiveHeight]
  );

  const { cartItems } = useStateContext();

  return (
    <div className="w-full h-screen bg-slate-400 flex flex-col justify-center items-center">
      <div ref={bannerRef} className="mt-[8.5rem] w-full h-screen keen-slider">
        {banneri?.map((banner) => (
          <div className="flex flex-col items-center justify-center keen-slider__slide">
            <img src={urlFor(banner.image.asset._ref)} className="w-full h-screen absolute object-cover" />
            <div className="flex flex-col gap-4 ml-96 w-[35rem] justify-center">
              <h5 className="text-primary md:text-2xl font-[600] z-[1]">{banner.smallText1}</h5>
              <h1 className="md:text-6xl text-5xl font-[600] z-[1]">{banner.bigText}</h1>
              <h5 className="text-[#454545] font-[400] z-[1] opacity-0 md:opacity-100">{banner.smallText2}</h5>
              <Link 
                href='/produkt/ultraprost'
                className="z-[1] px-4 py-2 bg-primary w-48 mt-12 text-white">
                  {banner.buttonText}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (() => banneri.length > 1) (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
    </div>
  )
}

export default HeaderBanner