import ImageComponent from "@/components/common/image";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import { VideoModal } from "./VideoModal";

const VideoCard = ({ src, isActive, setIsModalOpen }: any) => {

  return (
    <>
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
            <div
              className=" flex items-center gap-2 bg-[#0F1724B8] backdrop-blur-md text-white px-3 py-2 rounded-full text-sm "
              onClick={() => setIsModalOpen(true)}
            >
              ▶ Timelapse
            </div>

            <div className=" bg-[#0F1724B8] backdrop-blur-md text-white text-xs px-2 py-1 rounded">
              0:54
            </div>
          </div>
          {/* Overlay content */}
        </div>
      </div>
      
    </>
  );
};

export default VideoCard;
