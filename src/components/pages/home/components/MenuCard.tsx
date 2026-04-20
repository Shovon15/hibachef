import React from "react";
import "./cardStyle.css";

type GlowCardProps = {
  children: React.ReactNode;
  className?: string;
};

const MenuCard = ({ children, className }: GlowCardProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glow layer */}
      <div className="animated-border-box-glow rounded-xl" />

      {/* Border layer */}
      <div className="animated-border-box rounded-xl" />

      {/* Content */}
      <div className="relative z-10 p-8 rounded-xl  backdrop-blur-md h-full">
        {children}
      </div>
    </div>
  );
};

export default MenuCard;
