import React from "react";
import NavLink from "../link/NavLink";
import ImageComponent from "../image";
import logo from "@/assets/images/logo.png";
import { cn } from "@/utils/helpers/cn";

const Logo = ({ className }: { className?: string }) => {
  return (
    <NavLink
      href="/"
      className={cn(`flex justify-start items-center`, className)}
    >
      <ImageComponent src={logo} alt="logo" className="w-full h-full" />
    </NavLink>
  );
};

export default Logo;

const LogoFile = () => {
  return <></>;
};
