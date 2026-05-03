"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ImageComponent from "../image";
import { getTimeAgo } from "@/utils/helpers/getTimeAgo";
import SliderArrowIcon from "@/assets/icons/SliderArrowIcon";
import StarRating from "./StarRating";
import GoogleFavicon from "@/assets/icons/GoogleFavicon";

const reviews = [
  {
    name: "James Wilson",
    time: "2025-12-29T11:30:00",
    rating: 5,
    text: "Absolutely amazing hibachi experience! The chefs were incredibly skilled, performing tricks while cooking delicious meals right in front of us. The flavors were vibrant, and the atmosphere was lively. Plus, the after-dinner dessert was a delightful surprise!",
  },
  {
    name: "Olivia Bennett",
    time: "2024-12-29T01:30:00",
    rating: 4,
    text: "What a fantastic hibachi dinner! The chef's showmanship was top-notch, and the food was bursting with flavor. We loved the interactive cooking style, and the service was impeccable. A perfect night out with friends!",
  },
  {
    name: "Natalie Rodriguez",
    time: "2024-05-26T12:30:00",
    rating: 3.5,
    text: "An unforgettable hibachi night! The chef entertained us with his culinary skills while serving up mouthwatering dishes. The combination of fresh ingredients and fun atmosphere made it a memorable dining experience. Highly recommend!",
  },
  {
    name: "Natalie Rodriguez",
    time: "2026-09-29T09:30:00",
    rating: 2,
    text: "What a fantastic hibachi dinner! The chef's showmanship was top-notch, and the food was bursting with flavor. We loved the interactive cooking style, and the service was impeccable. A perfect night out with friends!",
  },
  {
    name: "Natalie Rodriguez",
    time: "2026-01-12T08:30:00",
    rating: 5,
    text: "An unforgettable hibachi night! The chef entertained us with his culinary skills while serving up mouthwatering dishes. The combination of fresh ingredients and fun atmosphere made it a memorable dining experience. Highly recommend!",
  },
  {
    name: "Natalie Rodriguez",
    time: "2024-05-29T11:30:00",
    rating: 4,
    text: "Absolutely amazing hibachi experience! The chefs were incredibly skilled, performing tricks while cooking delicious meals right in front of us. The flavors were vibrant, and the atmosphere was lively. Plus, the after-dinner dessert was a delightful surprise!",
  },
];

export default function TestimonialSlider() {
  return (
    <div className=" py-9">
      <div className="relative">
        <Swiper
          modules={[Navigation, EffectCoverflow, Pagination]}
          effect="coverflow"
          centeredSlides
          loop
          loopPreventsSliding={false}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
          }}
          slidesPerView="auto"
          spaceBetween={20}
          speed={1200}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          touchRatio={1}
          resistanceRatio={0.85}
          navigation={{
            nextEl: ".next-btn",
            prevEl: ".prev-btn",
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 0,
            slideShadows: false,
          }}
        >
          {reviews.map((item, i) => (
            <SwiperSlide key={i} className="max-w-[75%] lg:max-w-[370px] ">
              <div className="bg-[#F2F2F2] rounded-2xl p-5 shadow-sm h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex justify-start items-start gap-4">
                    <div className="w-10 h-10 rounded-full">
                      <ImageComponent
                        src={"/user-img.jpg"}
                        alt="user"
                        width={1000}
                        height={1000}
                        className="rounded-full"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold font-graphikTrial text-[#1A1A1A] text-base">{item.name}</h3>
                      <p className="text-xs text-[#00000080] font-graphikTrial font-normal mt-1">
                        {getTimeAgo(item.time)}
                      </p>
                    </div>
                  </div>

                  <GoogleFavicon className="w-6 h-6" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 my-4">
                  <StarRating initialValue={item.rating} readOnly />
                </div>

                {/* Text */}
                <p className="text-sm lg:text-base font-graphikTrial font-normal text-[#1A1A1A] line-clamp-4 ">
                  {item.text}
                </p>

                {/* Read more */}
                <button className="text-[#E4002B] text-sm lg:text-base  mt-4 font-semibold uppercase underline">
                  READ MORE
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="bg-[linear-gradient(270deg,rgba(255,255,255,0)_0%,#ffffff_100%)] absolute -left-0.5 lg:left-0 h-full top-0  z-10 w-[6%] flex justify-center items-center  ">
          <button className="prev-btn  bg-white shadow rounded-full w-10 h-10 hidden lg:flex items-center justify-center p-3 text-[#E4002B] border border-[#E4002B] hover:bg-[#E4002B] hover:text-white ">
            <SliderArrowIcon />
          </button>
        </div>
        <div className="bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,#ffffff_100%)] absolute -right-0.5 lg:right-0 h-full top-0  z-10 w-[6%] flex justify-center items-center  ">
          <button className="next-btn bg-white shadow rounded-full w-10 h-10  hidden lg:flex items-center justify-center p-3 text-[#E4002B] border border-[#E4002B] hover:bg-[#E4002B] hover:text-white">
            <SliderArrowIcon className="rotate-180" />
          </button>
        </div>
      </div>

      {/* Pagination */}
      <div className="custom-pagination mt-6 flex justify-center items-center gap-2" />
    </div>
  );
}
