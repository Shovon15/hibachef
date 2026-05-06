"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import ImageComponent from "@/components/common/image";
import MainTitle from "@/components/common/Titles/MainTitle";
import SliderArrowIcon from "@/assets/icons/SliderArrowIcon";
import VideoCard from "./VideoCard";
import { VideoModal } from "./VideoModal";
import { useState } from "react";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
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
                  <VideoCard
                    src={src}
                    isActive={isActive}
                    setIsModalOpen={setIsModalOpen}
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="custom-prev absolute left-[14%] top-1/2 -translate-y-1/2 z-10 bg-white text-red-500 hover:text-white  hover:bg-[#E4002B] border border-[#E4002B] w-10 h-10 rounded-full shadow flex items-center justify-center p-2.5">
            <SliderArrowIcon />
          </button>

          <button className="custom-next absolute right-[14%] top-1/2 -translate-y-1/2 z-10 bg-white text-red-500 hover:text-white  hover:bg-[#E4002B] border border-[#E4002B] w-10 h-10 rounded-full shadow flex items-center justify-center p-2.5">
            <SliderArrowIcon className="rotate-180" />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <VideoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          videoUrl={"https://res.cloudinary.com/ds95mo5gr/video/upload/v1768109303/grok-video-5e7a4d0e-b6cb-43e8-be1f-df972c121bea_ymfkmm.mp4"}
          title={"selectedVideo.title"}
        />
      )}
    </>
  );
}
