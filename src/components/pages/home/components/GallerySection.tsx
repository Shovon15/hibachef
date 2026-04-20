"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./sliderStyle.css";
import { cn } from "@/utils/helpers/cn";
import NavLink from "@/components/common/link/NavLink";
import ImageComponent from "@/components/common/image";
import PAGES from "@/dummyData";
import { SwiperOptions } from "swiper/types";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import PrimaryButton from "@/components/common/button/PrimaryButton";

type Props = { data?: any };

const GallerySection = ({ data }: Props) => {
  return (
    <div className="text-center">
      <HighlightHeading
        text="Gallery"
        // highlight={["Menu"]}
        highlightClassName="text-primary text-center"
      />
      <GallerySlider data={PAGES.galleryData.items} />
    </div>
  );
};

export default GallerySection;

type SliderProps = {
  data: any[];
  autoplay?: boolean;
};

const GallerySlider = ({ data, autoplay = false }: SliderProps) => {
  const swiperRef = useRef<any>(null);
  const [stretch, setStretch] = useState(-100);

  const getSwiperConfig = (
    stretch: number,
    autoplay: boolean,
  ): SwiperOptions => ({
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],

    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    loopPreventsSliding: false,
    speed: 600,

    autoplay: autoplay
      ? {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }
      : false,

    coverflowEffect: {
      rotate: 0,
      stretch,
      depth: -200,
      modifier: 0.2,
      slideShadows: false,
    },

    navigation: {
      prevEl: ".swiper-button-prev-custom",
      nextEl: ".swiper-button-next-custom",
      //   clickable: true,
    },

    // pagination: {
    //   el: ".my-swiper-pagination",
    //   clickable: true,
    //   bulletClass: "my-bullet",
    //   bulletActiveClass: "my-bullet-active",
    // },
  });
  return (
    <div className={cn(`w-full mx-auto py-10`)}>
      <div className="relative xl:px-20 !overflow-visible">
        <Swiper
          ref={swiperRef}
          // onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            // @ts-ignore
            swiper.params.coverflowEffect.stretch = stretch;
          }}
          {...getSwiperConfig(stretch, autoplay)}
          className=""
        >
          {data.map((product: ISliderCard, index: number) => (
            <SwiperSlide
              // onClick={() => handleClick(product)}
              className="!w-[70.53vw] md:!w-[23.00vw] lg:!w-[12.44vw] !h-[99.24vw] md:!h-[27.80vw] lg:!h-[22.81vw] cursor-pointer select-none "
              key={index}
            >
              {({ isActive }) => (
                <NavLink href={"#"}>
                  <div
                    className={`w-full h-full relative transition-all duration-500 flex flex-col items-center justify-center ${
                      isActive ? "z-20" : "z-10"
                    }`}
                  >
                    <ImageComponent
                      src={product?.image || ""}
                      alt={product?.slug}
                      className="max-w-full max-h-full object-contain card-image-shadow"
                    />
                  </div>
                </NavLink>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 left-0  z-9 w-full">
          <CircleShape />
        </div>
        <div className="absolute bottom-0 left-0  z-9 overflow-hidden w-full">
          <CircleShapeBottom />
        </div>
        {/* <div className="relative w-full h-[5px] lg:h-[10px]">
          <div className="absolute inset-0 blur-lg opacity-70 bg-[linear-gradient(90deg,#000_0%,#000_0%,#fff_50%,#000_100%,#000_100%)]" />
        </div> */}

        {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50 flex items-center justify-between pointer-events-none bg-[#0c0c0c96] w-[60px] h-[70%] lg:h-[100%]">
          <button className="swiper-button-prev-custom pointer-events-auto cursor-pointer ml-5">
            <LeftArrowIcon />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 z-50 flex items-center justify-between pointer-events-none bg-[#0c0c0c96] w-[60px] h-[70%] lg:h-[100%]">
          <button className="swiper-button-next-custom pointer-events-auto cursor-pointer !ml-3.5">
            <RightArrowIcon />
          </button>
        </div> */}
      </div>
      <PrimaryButton>Go to gallery</PrimaryButton>
      {/* <div className="my-swiper-pagination  !mt-10 !relative !bottom-0 !text-center" /> */}
    </div>
  );
};

const CircleShape = () => {
  return (
    <svg
      // width="1820"
      // height="37"
      viewBox="0 0 1920 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <ellipse cx="960" cy="-155.5" rx="1655" ry="192.5" fill="white" />
    </svg>
  );
};
const CircleShapeBottom = () => {
  return (
    <svg
      // width="1820"
      // height="37"
      viewBox="0 0 1920 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
    >
      <ellipse cx="960" cy="192.5" rx="1655" ry="192.5" fill="white" />
    </svg>
  );
};
