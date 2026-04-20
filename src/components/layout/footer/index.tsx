"use client";

import useNavigationData from "@/hooks/useNavigationData";
import BottomSection from "./BottomSection";
import TopSection from "./TopSection";
import { useAppSelector } from "@/store/hooks";

const Footer = ({ data }: any) => {
  return (
    <div className="">
      <footer className="w-full relative">
        <TopSection />
        {/* <div className="fixed bottom-0 left-0 w-full  z-[-10]"> */}
        <BottomSection />
        {/* </div> */}
      </footer>
    </div>
  );
};

export default Footer;
