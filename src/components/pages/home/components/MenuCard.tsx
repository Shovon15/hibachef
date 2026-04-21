import React from "react";
import "./cardStyle.css";

type GlowCardProps = {
  className?: string;
};

const MenuCard = ({ className }: GlowCardProps) => {
  return (
    <div
      className={`relative w-[620px] h-[544px] rounded-[20px] overflow-hidden ${className}`}
    >
      <div className="w-full h-full rounded-[30px] bg-[conic-gradient(from_0deg,#FF0030,#32000A,#FF0030,#32000A)] blur-[18px] opacity-50 animate-spin-slow" />

      <div className="absolute inset-0 rounded-[20px] p-[5px] z-40">
        {/* 🧊 INNER CONTENT (cuts the border) */}
        <div className="w-full h-full rounded-[18px] bg-[#000000B2] p-10">
          <h1 className="text-xl font-bold text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
            incidunt?
          </h1>

          <p className="text-white pt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            doloremque cum iure ab quod. Molestias ipsa natus, veniam culpa
            ratione, nemo id suscipit accusamus minus dicta dolorem earum quasi
            vitae, laborum explicabo voluptate debitis ipsum! Mollitia dolorum,
            et fuga
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
