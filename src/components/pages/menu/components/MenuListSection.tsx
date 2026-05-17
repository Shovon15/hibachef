import ImageComponent, { DEFAULT_IMAGE } from "@/components/common/image";
import ContentContainer from "@/components/layout/container/contentContainer";
import menuImage from "@/assets/images/menu-image.png";
import { useLayoutEffect, useRef, useState, useSyncExternalStore } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Props = { data?: any; reverse?: boolean };
const emptySubscribe = () => () => {};

const MenuListSection = ({ reverse = false, data }: Props) => {
  const entreeData = [
    { name: "Chicken" },
    { name: "Jumbo Shrimp" },
    { name: "Prime NY Strip" },
    { name: "Scallops" },
    { name: "Salmon" },
    { name: "Filet Mignon", additionalPrice: "8" },
    { name: "Lobster", additionalPrice: "15" },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<HTMLDivElement[]>([]);
  // const [mounted, setMounted] = useState(false);

  // useLayoutEffect(() => {
  //   setMounted(true);
  // }, []);

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  useLayoutEffect(() => {
    if (
      !isMounted ||
      !sectionRef.current ||
      !imageRef.current ||
      !contentRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      const imageX = reverse ? 120 : -120;
      const contentX = reverse ? -120 : 120;

      gsap.set(sectionRef.current, {
        y: 80,
        autoAlpha: 0,
      });

      gsap.set(imageRef.current, {
        x: imageX,
        autoAlpha: 0,
      });

      gsap.set(contentRef.current, {
        x: contentX,
        autoAlpha: 0,
      });

      gsap.set(itemRefs.current, {
        y: 24,
        autoAlpha: 0,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      tl.to(sectionRef.current, {
        y: 0,
        autoAlpha: 1,
        duration: 0.8,
      })
        .to(
          imageRef.current,
          {
            x: 0,
            autoAlpha: 1,
            duration: 1,
          },
          "-=0.55",
        )
        .to(
          contentRef.current,
          {
            x: 0,
            autoAlpha: 1,
            duration: 1,
          },
          "-=0.85",
        )
        .to(
          itemRefs.current,
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.55,
            stagger: 0.08,
          },
          "-=0.45",
        );

      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    }, sectionRef);

    return () => ctx.revert();
  }, [isMounted, reverse]);

  if (!isMounted) return null;

  return (
    <div
      ref={sectionRef}
      className={`
        flex flex-col lg:flex-row 
        ${reverse ? "lg:flex-row-reverse" : ""}
        py-12 lg:py-20 gap-10 lg:gap-32 overflow-hidden
      `}
    >
      {/* Image */}
      <div
        ref={imageRef}
        className={`w-full lg:w-[50%] flex items-center justify-center relative py-7 lg:py-32 ${
          reverse ? "pl-5" : "pr-5"
        }`}
      >
        <ImageComponent
          src={menuImage}
          alt="..."
          className={`w-[calc(100%-20px)] lg:w-[calc(100%-50px)] h-full object-cover z-20 ${
            reverse ? "mr-auto" : "ml-auto"
          }`}
        />

        <div
          className={`bg-[#E4002B] w-8 lg:w-24 h-full absolute top-0 ${
            reverse ? "right-0" : "left-0"
          }`}
        />
      </div>

      {/* Content */}
      <div ref={contentRef} className="w-full lg:w-[50%] px-5 my-auto">
        <div className={`max-w-[550px] ${reverse ? "ml-auto" : "mr-auto"}`}>
          <h2 className="text-3xl font-black text-primary uppercase mb-8 font-cooperBlack">
            Entree Choice
          </h2>

          <div className="flex flex-col">
            {entreeData.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemRefs.current[index] = el;
                }}
                className="flex justify-between items-center py-4 border-b border-gray-200 last:border-0"
              >
                <span className="text-lg font-bold text-black uppercase tracking-tight">
                  {item.name}
                </span>

                {item.additionalPrice && (
                  <span className="text-sm font-bold text-gray-600">
                    Additional{" "}
                    <span className="text-[#E31837] text-lg">
                      ${item.additionalPrice}
                    </span>
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuListSection;

const Shape = () => {
  return (
    <svg
      viewBox="0 0 94 674"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[94px] h-full"
      preserveAspectRatio="none"
    >
      <rect width="94" height="674" fill="#E4002B" />
    </svg>
  );
};
