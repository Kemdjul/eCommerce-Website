import React, {useState, useEffect } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from "keen-slider/react";
import Image from 'next/image';

import { client } from '../../lib/client';
import { urlFor } from '../../lib/client';

import Banner1 from '../../assets/banner-1.jpg';
import Banner2 from '../../assets/banner-2.jpg';
import handler from '../../pages/api/hello';



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

const HeaderBanner = ({ bannersField }) => {
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

  return (
    <div className="w-full h-screen bg-slate-400 flex flex-col justify-center items-center">
      <div ref={bannerRef} className="mt-[8.5rem] w-full h-screen keen-slider">
        {bannersField?.map((banner) => (
          <div>
            <img src={urlFor(banner.image[0].asset._ref)} className="keen-slider__slide w-full h-screen object-cover" />
            <div className="absolute left-1/3 top-1/3 z-[1]">
              <h5 className="header-h5 z-[1]">{banner.smallText1}</h5>
              <h1 className="header-h1 z-[1]">{banner.bigText}</h1>
              <h5 className="header-h5 m-8 z-[1]">{banner.smallText2}</h5>
              <button type="button" className="px-9 py-3 border-[1px] border-white rounded-full text-white z-[1]">
                Discover Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (() => bannersField.length > 1) (
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