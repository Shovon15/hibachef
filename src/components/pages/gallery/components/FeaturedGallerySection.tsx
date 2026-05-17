"use client";
import React, { useRef, useCallback, useState } from "react";
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
import SliderArrowIcon from "@/assets/icons/SliderArrowIcon";
import { cn } from "@/utils/helpers/cn";
import { useIsMobile } from "@/hooks/useMobile";

type Props = { data?: any; autoplay?: boolean };

// ───────────────────────────────────────────────────────────────────────────

const FeaturedGallerySection = ({ data, autoplay = false }: Props) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const handleSwiper = useCallback((swiper: any) => {
    // wait one tick so refs are attached to DOM
    setTimeout(() => {
      const nav = swiper.params.navigation;
      if (nav && typeof nav !== "boolean") {
        nav.prevEl = prevRef.current;
        nav.nextEl = nextRef.current;
      }
      swiper.navigation.destroy();
      swiper.navigation.init();
      swiper.navigation.update();
    }, 0);
  }, []);

  const {isMobile, isMounted} = useIsMobile();
  const shouldUseMobile = isMounted && isMobile;
 
  // ─── exact design-spec constants ───────────────────────────────────────────
  const ACTIVE_W = 519;
  const MOBILE_ACTIVE_W = 259;
  const ACTIVE_H = 390;
  const MOBILE_ACTIVE_H = 390;
  const ACTIVE_R = 10;
  const MOBILE_ACTIVE_R = 10;

  const INACTIVE_W = 191;
  const MOBILE_INACTIVE_W = 191;
  const INACTIVE_H = 340;
  const MOBILE_INACTIVE_H = 340;
  const INACTIVE_R = 6.4;
  const MOBILE_INACTIVE_R = 6.4;

  const ACTIVE_SIZE = {
    width: shouldUseMobile ? MOBILE_ACTIVE_W : ACTIVE_W,
    height: shouldUseMobile ? MOBILE_ACTIVE_H : ACTIVE_H,
    radius: shouldUseMobile ? MOBILE_ACTIVE_R : ACTIVE_R,
  };

  const INACTIVE_SIZE = {
    width: shouldUseMobile ? MOBILE_INACTIVE_W : INACTIVE_W,
    height: shouldUseMobile ? MOBILE_INACTIVE_H : INACTIVE_H,
    radius: shouldUseMobile ? MOBILE_INACTIVE_R : INACTIVE_R,
  };

  return (
    <div className="w-full mx-auto py-10 lg:py-[2.79vw] bg-black overflow-hidden">
      <div data-anim="title">
        <HighlightHeading
          text="Featured Gallery"
          highlight={["Gallery"]}
          highlightClassName="text-primary"
          className="text-center mb-14 text-white"
        />
      </div>
      <div className="relative h-[470px] xl:px-[3.125vw] 2xl:px-[5.21vw] ">
        <Swiper
          onSwiper={handleSwiper}
          onSlideChange={() => {}}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          watchSlidesProgress={true}
          observer={true}
          observeParents={true}
          loopPreventsSliding={false}
          speed={700}
          autoplay={
            autoplay
              ? {
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
              : false
          }
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 120,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "gallery-pagination-bullet",
            bulletActiveClass: "gallery-pagination-bullet-active",
          }}
          className="product-slider-coverflow !h-full !pb-[50px]"
        >
          {data.map((item: any, index: number) => (
            <SwiperSlide
              key={index}
              style={{ width: ACTIVE_W }}
              className="!h-full !flex items-center justify-center cursor-pointer select-none"
            >
              {({ isActive }) => (
                <div
                  style={{
                    // ── exact spec sizes ──────────────────────────────────
                    width: isActive ? ACTIVE_SIZE.width : INACTIVE_SIZE.width,
                    height: isActive
                      ? ACTIVE_SIZE.height
                      : INACTIVE_SIZE.height,
                    borderRadius: isActive
                      ? ACTIVE_SIZE.radius
                      : INACTIVE_SIZE.radius,
                    opacity: 1,
                    // ── smooth morph ──────────────────────────────────────
                    transition: [
                      "width 700ms cubic-bezier(0.22,1,0.36,1)",
                      "height 700ms cubic-bezier(0.22,1,0.36,1)",
                      "border-radius 700ms ease",
                    ].join(", "),
                    overflow: "hidden",
                    flexShrink: 0,
                  }}
                >
                  <ImageComponent
                    src={item?.src || ""}
                    alt={item?.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover", // cover for both states → no layout jump
                      display: "block",
                      transition: "opacity 700ms ease",
                    }}
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── Prev Button ─────────────────────────────────────────────── */}
        <div className="absolute left-0 h-full top-0 z-10 w-[18%] flex justify-end items-center pointer-events-none bg-gradient-to-l from-[#00000000] to-[#000000]">
          <button
            ref={prevRef}
            className="
              swiper-button-prev-custom pointer-events-auto
              bg-white shadow rounded-full w-10 h-10
              hidden lg:flex items-center justify-center p-3
              text-[#E4002B] border border-[#E4002B]
              hover:bg-[#E4002B] hover:text-white
              transition-all disabled:opacity-50
            "
          >
            <SliderArrowIcon />
          </button>
        </div>

        {/* ── Next Button ─────────────────────────────────────────────── */}
        <div className="absolute right-0 h-full top-0 z-10 w-[18%] flex justify-start items-center pointer-events-none bg-gradient-to-r from-[#00000000] to-[#000000]">
          <button
            ref={nextRef}
            className="
              swiper-button-next-custom pointer-events-auto
              bg-white shadow rounded-full w-10 h-10
              hidden lg:flex items-center justify-center p-3
              text-[#E4002B] border border-[#E4002B]
              hover:bg-[#E4002B] hover:text-white
              transition-all disabled:opacity-50
            "
          >
            <SliderArrowIcon className="rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedGallerySection;
