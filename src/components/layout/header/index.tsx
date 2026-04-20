"use client";
import { useRef, useState } from "react";
import ContentContainer from "../container/contentContainer";
import { cn } from "@/utils/helpers/cn";
import Logo from "@/components/common/logo/Logo";
import GlobalSearch from "./searchComponent/GlobalSearch";
import Hamburger from "./hamburger/Hamburger";
import MobileMenu from "./MobileMenu";
import NavItems from "./NavItems";
import { useAppSelector } from "@/store/hooks";
import useNavigationData from "@/hooks/useNavigationData";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import PAGES from "@/dummyData";
import IconButton from "@/components/common/button/IconButton";
import { PhoneIcon } from "@/assets/icons";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchItemOpen, setIsSearchItemOpen] = useState<boolean>(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  // useNavigationData();

  // const { header } = useAppSelector((state) => state.navigation);

  return (
    <ContentContainer
      className={`fixed top-7.5 w-full z-[999] flex items-center transition-all duration-300 ease-in-out h-[100px]`}
    >
      <header className="w-[92vw] mx-auto flex items-center justify-between h-full md:px-2 lg:bg-[#ffffff]  rounded-full">
        <div className="flex items-center gap-4 md:pl-5 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none focus:ring-0  size-[34px]"
          >
            <Hamburger isOpen={isMobileMenuOpen} />
          </button>
        </div>
        <Logo className="size-[84px]" />

        <div className="h-full justify-center items-center hidden lg:flex">
          {/* {header && header?.items?.length > 0 && (
            <NavItems navItems={header.items} />
          )} */}
          {PAGES.header && PAGES.header?.items?.length > 0 && (
            <NavItems navItems={PAGES.header.items} />
          )}
        </div>

        <div className=" flex justify-center items-center gap-2 lg:gap-5">
          <PrimaryButton>Book Now</PrimaryButton>
          <IconButton icon={<PhoneIcon />} />
        </div>

        {/* <MobileMenu
          isOpen={isMobileMenuOpen}
          navItems={header?.items}
          onClose={() => setIsMobileMenuOpen(false)}
        /> */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          navItems={PAGES?.header?.items}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </header>
    </ContentContainer>
  );
};

export default Header;
