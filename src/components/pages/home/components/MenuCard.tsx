import React from "react";
import "./cardStyle.css";

type GlowCardProps = {
  className?: string;
};

const MenuCard = ({ className }: GlowCardProps) => {
  return (
    <div
      className={`relative w-[340px] h-[400px] rounded-[20px] overflow-hidden ${className}`}
    >
      {/* 🔥 OUTER ROTATING GLOW (outside content flow) */}
      <div className="absolute -inset-[20px] animate-spin-slow">
        <div className="w-full h-full rounded-[30px] bg-[conic-gradient(from_0deg,#FF0030,#32000A,#FF0030)] blur-[18px] opacity-60" />
      </div>

      {/* 🎯 BORDER MASK LAYER */}
      <div className="absolute inset-0 rounded-[20px] bg-[conic-gradient(from_0deg,#FF0030,#32000A,#FF0030)] animate-spin-slow p-[2px]">
        {/* Inner cut-out (this makes background transparent) */}
        <div className="w-full h-full rounded-[18px] bg-transparent" />
      </div>

      {/* 🧊 CONTENT (fully transparent background) */}
      <div className="relative z-10 w-full h-full rounded-[18px] bg-[#000000B2] p-5">
        <h1 className="text-xl font-bold text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
          incidunt?
        </h1>

        <p className="text-white pt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          doloremque cum iure ab quod. Molestias ipsa natus, veniam culpa
          ratione, nemo id suscipit accusamus minus dicta dolorem earum quasi
          vitae, laborum explicabo voluptate debitis ipsum! Mollitia dolorum, et
          fuga
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
