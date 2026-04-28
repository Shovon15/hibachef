"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import ImageComponent from "@/components/common/image";
import MainTitle from "@/components/common/Titles/MainTitle";

const slides = [
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
  "/blog-img-2.png",
];

export default function FeaturedVideos() {
  return (
    <div className="w-full py-10   pt-20">
      <h2
        className={`text-[clamp(2.25rem,3.333vw,4rem)] leading-[clamp(2.5rem,3.333vw,4rem)] font-normal text-center font-cooperBlack `}
      >
        <span className="text-[#E4002B]">Featured</span> Videos
      </h2>
      <div className="w-full  relative mt-14">
        <Swiper
          modules={[Navigation, EffectCoverflow]}
          effect="coverflow"
          centeredSlides
          loop
          loopPreventsSliding={false}
          slidesPerView="auto"
          spaceBetween={0}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          touchRatio={1}
          resistanceRatio={0.85}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 175,
            depth: 31,
            modifier: 4,
            slideShadows: false,
          }}
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 175,
          //   depth: 31,
          //   modifier: 4,
          //   slideShadows: false,
          // }}
          //   breakpoints={{
          //     768: {
          //       slidesPerView: 2.2,
          //     },
          //     1024: {
          //       slidesPerView: 2.5,
          //     },
          //   }}
          className=" !overflow-hidden"
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index} className="!w-[865px] !h-[490px] ">
              {({ isActive }) => (
                <div
                  className={`rounded-xl overflow-hidden transition-all duration-500 w-full h-full  ${
                    isActive ? "scale-100 " : "scale-100 "
                  }`}
                >
                  <div className="relative w-full h-full">
                    <ImageComponent
                      src={src}
                      alt="slide"
                      className="w-full  object-cover rounded-xl"
                    />

                    <div className=" absolute bg-[linear-gradient(0deg,rgba(15,23,36,0.34)_0%,rgba(15,23,36,0.08)_100%)] top-0 w-full h-full rounded-xl flex justify-between items-end p-9 font-graphikTrial font-medium">
                      <div className=" flex items-center gap-2 bg-[#0F1724B8] backdrop-blur-md text-white px-3 py-2 rounded-full text-sm ">
                        ▶ Timelapse
                      </div>

                      <div className=" bg-[#0F1724B8] backdrop-blur-md text-white text-xs px-2 py-1 rounded">
                        0:54
                      </div>
                    </div>
                    {/* Overlay content */}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="custom-prev absolute left-[14%] top-1/2 -translate-y-1/2 z-10 bg-white text-red-500 hover:text-white  hover:bg-[#E4002B] border border-[#E4002B] w-10 h-10 rounded-full shadow flex items-center justify-center">
          ‹
        </button>

        <button className="custom-next absolute right-[14%] top-1/2 -translate-y-1/2 z-10 bg-white text-red-500 hover:text-white  hover:bg-[#E4002B] border border-[#E4002B] w-10 h-10 rounded-full shadow flex items-center justify-center">
          ›
        </button>
      </div>
    </div>
  );
}
