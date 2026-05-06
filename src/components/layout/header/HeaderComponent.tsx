"use client";
import { useRef, useState } from "react";
import ContentContainer from "../container/contentContainer";
import Logo from "@/components/common/logo/Logo";
import Hamburger from "./hamburger/Hamburger";
import MobileMenu from "./MobileMenu";
import NavItems from "./NavItems";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import PAGES from "@/dummyData";
import IconButton from "@/components/common/button/IconButton";
import { PhoneIcon } from "@/assets/icons";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchItemOpen, setIsSearchItemOpen] = useState<boolean>(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  // useNavigationData();

  // const { header } = useAppSelector((state) => state.navigation);

  return (
    <ContentContainer
      className={`fixed top-7.5 w-full z-30 flex items-center transition-all duration-300 ease-in-out h-[60px] lg:h-[100px] lg:px-[0vw]
         2xl:px-[10.67vw]`}
    >
      <header className="w-[92vw] mx-auto flex items-center justify-between h-full px-2 bg-[#ffffff]  rounded-full z-40">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-4 md:pl-5 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none focus:ring-0  size-[34px]"
            >
              <Hamburger isOpen={isMobileMenuOpen} />
            </button>
          </div>
          <Logo className="size-[50px] lg:size-[84px]" />
        </div>

        <div className="h-full justify-center items-center hidden lg:flex">
          {/* {header && header?.items?.length > 0 && (
            <NavItems navItems={header.items} />
          )} */}
          {PAGES.header && PAGES.header?.items?.length > 0 && (
            <NavItems navItems={PAGES.header.items} />
          )}
        </div>

        <div className=" flex justify-center items-center gap-2 lg:gap-5">
          <NavLink href={routes.bookNow}>
            <PrimaryButton className="!py-2.5 px-5 !text-nowrap">
              Book Now
            </PrimaryButton>
          </NavLink>
          <NavLink href={routes.contact}>
            <IconButton icon={<PhoneIcon />} className="!p-2.5 lg:!p-[14px]" />
          </NavLink>
        </div>

        {/* <MobileMenu
          isOpen={isMobileMenuOpen}
          navItems={header?.items}
          onClose={() => setIsMobileMenuOpen(false)}
        /> */}
      </header>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        navItems={PAGES?.header?.items}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </ContentContainer>
  );
};

export default HeaderComponent;
