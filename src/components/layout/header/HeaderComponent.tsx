"use client";
import { useEffect, useRef, useState } from "react";
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
import gsap from "gsap";

const HeaderComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isSearchItemOpen, setIsSearchItemOpen] = useState<boolean>(false);
  const searchWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const middleRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);

  // useNavigationData();

  // const { header } = useAppSelector((state) => state.navigation);

  const [scrolled, setScrolled] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      gsap.set(headerRef.current, {
        width: "10vw",
        opacity: 0,
        scale: 0.95,
        transformOrigin: "center center",
        overflow: "hidden",
      });

      gsap.set([leftRef.current, rightRef.current], {
        opacity: 0,
        y: 0,
      });

      gsap.set(middleRef.current, {
        opacity: 0,
        y: 28,
      });

      tl.to(headerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.45,
      });

      tl.to(headerRef.current, {
        width: "92vw",
        duration: 0.9,
        ease: "expo.out",
      });

      tl.fromTo(
        leftRef.current,
        { opacity: 0, x: 28 }, // ← comes from left
        { opacity: 1, x: 0, duration: 0.5 },
      );

      tl.fromTo(
        rightRef.current,
        { opacity: 0, x: -28 }, // ← comes from right
        { opacity: 1, x: 0, duration: 0.5 },
        "<", // ← this makes it start at the same time as left
      );

      tl.to(middleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      tl.to(middleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <ContentContainer
      ref={containerRef}
      className={`fixed top-7.5 w-full h-[clamp(60px,8vw,100px)] z-40 px-[5.333vw] lg:px-[0vw] 2xl:px-[10.67vw] flex items-center transition-all duration-300 ease-in-out`}
    >
      <header
        ref={headerRef}
        className={`
            mx-auto flex items-center justify-between h-full 
            px-2 py-[10px] bg-[#ffffff] rounded-full z-[9999]
            overflow-hidden
            transition-shadow duration-500 ease-in-out
            ${
              scrolled
                ? "shadow-[0_8px_30px_rgba(0,0,0,0.12)] backdrop-blur-md"
                : "shadow-none"
            }
          `}
      >
        {/* left */}
        <div
          ref={leftRef}
          className="flex items-center gap-3 !h-full w-[32%] lg:w-[7%] shrink-0"
        >
          <div className="flex items-center gap-4 md:pl-5 lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none focus:ring-0 size-[34px]"
            >
              <Hamburger isOpen={isMobileMenuOpen} />
            </button>
          </div>

          <div className="h-full flex items-center">
            <Logo className="h-full w-auto max-h-[100px]" />
          </div>
        </div>

        {/* middle */}
        <div
          ref={middleRef}
          className="hidden lg:flex h-full w-[74%] items-center justify-center px-2 overflow-hidden"
        >
          {PAGES.header && PAGES.header?.items?.length > 0 && (
            <NavItems navItems={PAGES.header.items} />
          )}
        </div>

        {/* right */}
        <div
          ref={rightRef}
          className="flex justify-end items-center gap-2 xl:gap-5 h-full w-[68%] lg:w-[17%] shrink-0 lg:py-[0.781vw] 2xl:py-[clamp(8px,0.8vw,10px)]"
        >
          <NavLink href={routes.bookNow} className="h-full">
            <PrimaryButton
              className="h-full"
              innerClassName="uppercase whitespace-nowrap !text-[clamp(14px,0.95vw,16px)]"
            >
              Book Now
            </PrimaryButton>
          </NavLink>

          <NavLink href={routes.contact} className="h-full shrink-0">
            <IconButton
              icon={<PhoneIcon className="md:size-[22px] lg:size-[24px]" />}
              className="h-full aspect-square !p-0"
            />
          </NavLink>
        </div>
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
