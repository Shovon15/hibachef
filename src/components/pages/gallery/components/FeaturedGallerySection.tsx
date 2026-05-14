"use client";
import Heading2 from "@/components/common/typography/Heading2";
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
import "./style.css";
import ImageComponent from "@/components/common/image";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";

type Props = { data?: any; autoplay?: boolean };

const FeaturedGallerySection = ({ data, autoplay = false }: Props) => {
  const [stretch, setStretch] = useState(-200);
  const swiperRef = useRef<any>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <div
      ref={sectionRef}
      className="w-full mx-auto py-[2.79vw] bg-black overflow-hidden"
    >
      <div data-anim="title">
        <HighlightHeading
          text="Featured Gallery"
          highlight={["Gallery"]}
          highlightClassName="text-primary"
          className="text-center mb-14 text-white"
        />
      </div>

      <div className="relative h-[clamp(430px,36vw,520px)] xl:px-[3.125vw] 2xl:px-[5.21vw]">
        <Swiper
          ref={swiperRef}
          onSlideChange={handleSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            // @ts-ignore
            swiper.params.coverflowEffect.stretch = stretch;
          }}
          onBeforeInit={(swiper) => {
            if (typeof swiper.params.navigation !== "boolean") {
              //@ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              //@ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={false}
          centeredSlides
          slidesPerView="auto"
          centeredSlidesBounds={false}
          loop
          watchSlidesProgress
          observer
          observeParents
          autoplay={
            autoplay
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          speed={1200}
          coverflowEffect={{
            rotate: 0,
            // stretch: stretch,
            stretch: -100,
            depth: 500,
            modifier: 0.5,
            slideShadows: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          // navigation={{
          //   prevEl: prevRef.current,
          //   nextEl: nextRef.current,
          // }}
          pagination={{
            clickable: true,
            bulletClass: "gallery-pagination-bullet",
            bulletActiveClass: "gallery-pagination-bullet-active",
          }}
          className="product-slider-coverflow !h-full !py-[2.37vw] !pb-[70px]"
        >
          {data.map((item: any, index: number) => (
            <SwiperSlide
              key={index}
              className="!w-auto !h-full cursor-pointer select-none !flex items-center justify-center"
            >
              {({ isActive }) => (
                <div
                  className={`
                            !h-full cursor-pointer select-none flex items-center justify-center
                            transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                            ${isActive ? "w-[clamp(300px,36vw,519px)]" : "w-[151px]"}
                          `}
                >
                  <div
                    className={`
                          transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                          ${
                            isActive
                              ? "w-[clamp(300px,36vw,519px)] h-[clamp(360px,27vw,390px)]"
                              : "w-[151px] h-[340px]"
                          }
                        `}
                  >
                    <div className="w-full h-full relative flex flex-col overflow-hidden">
                      <div className="relative w-full h-full mx-auto flex items-end justify-center">
                        <ImageComponent
                          src={item?.src || ""}
                          alt={item?.alt}
                          className={`
                                  w-full h-full
                                  transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                                  ${
                                    isActive
                                      ? "object-contain max-w-full max-h-full card-image-shadow"
                                      : "object-cover"
                                  }
                                `}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className="bg-gradient-to-r from-[#000000] to-[#00000000] absolute left-20 top-1/2 -translate-y-1/2 log h-44 "></div> */}

        {/* <button
          ref={prevRef}
          type="button"
          className="swiper-button-prev-custom absolute left-4 md:left-[20%] top-1/2 -translate-y-1/2 z-50 text-white size-12 bg-gradient-to-r from-[#000000] to-[#00000000] flex items-center justify-center"
        >
          {`left<<<<`}
        </button>

        <button
          ref={nextRef}
          type="button"
          className="swiper-button-next-custom absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 text-white size-12 rounded-full bg-gradient-to-r from-[#00000000] to-[#000000] flex items-center justify-center"
        >
          {`right>>>>`}
        </button> */}
      </div>
    </div>
  );
};

export default FeaturedGallerySection;
