"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const reviews = [
  {
    name: "James Wilson",
    time: "1d ago",
    rating: 5,
    text: "Absolutely amazing hibachi experience! The chefs were incredibly skilled, performing tricks while cooking delicious meals right in front of us.",
  },
  {
    name: "Olivia Bennett",
    time: "1d ago",
    rating: 4,
    text: "What a fantastic hibachi dinner! The chef's showmanship was top-notch, and the food was bursting with flavor.",
  },
  {
    name: "Natalie Rodriguez",
    time: "12h ago",
    rating: 3,
    text: "An unforgettable hibachi night! The chef entertained us while serving delicious dishes.",
  },
  {
    name: "Natalie Rodriguez",
    time: "12h ago",
    rating: 2,
    text: "An unforgettable hibachi night! The chef entertained us while serving delicious dishes.",
  },
  {
    name: "Natalie Rodriguez",
    time: "12h ago",
    rating: 5,
    text: "An unforgettable hibachi night! The chef entertained us while serving delicious dishes.",
  },
  {
    name: "Natalie Rodriguez",
    time: "12h ago",
    rating: 4,
    text: "An unforgettable hibachi night! The chef entertained us while serving delicious dishes.",
  },
];

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill={filled ? "#FACC15" : "#E5E7EB"}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 
    9.24l-7.19-.61L12 2 9.19 8.63 2 
    9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function TestimonialSlider() {
  return (
    <div className="relative px-10 py-10 ">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={3.4}
        loop
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-[#F2F2F2] rounded-2xl p-5 shadow-sm h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-sm">{item.name}</h3>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="google"
                  className="w-5 h-5"
                />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} filled={index < item.rating} />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-gray-600 line-clamp-3">
                {item.text}
              </p>

              {/* Read more */}
              <button className="text-red-500 text-xs mt-3 font-semibold">
                READ MORE
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button className="prev-btn absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow rounded-full w-8 h-8 flex items-center justify-center">
        ‹
      </button>

      <button className="next-btn absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
        ›
      </button>

      {/* Pagination */}
      <div className="custom-pagination mt-6 flex justify-center gap-2" />
    </div>
  );
}