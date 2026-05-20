"use client";
import ImageComponent from "@/components/common/image";
import bannerBg from "@/assets/images/banner-bg.png";
import bannerBgMobile from "@/assets/images/banner-bg-mobile.png";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";
import { useIsMobile } from "@/hooks/useMobile";
import Paragraph from "@/components/common/typography/Paragraph";
import ScrollReveal from "@/components/common/animations/ScrollReveal";

const HomeBanner = () => {
  const { isMobile, isMounted } = useIsMobile();
  const backgroundShape = isMobile ? bannerBgMobile : bannerBg;

  const videoUrl = "/home-banner-video.mp4";

  return (
    <section
      className="relative min-h-screen"
      aria-label="Hibachef home banner"
    >
      {isMounted && (
        <div className="absolute bottom-0 z-20 pointer-events-none">
          <ImageComponent src={backgroundShape} alt="banner-background" />
        </div>
      )}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#161616,#1B1B1B,#333333CC,#24242400,#16161600)]" />

      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full lg:min-h-[560px] object-cover object-center"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute top-0 h-full  md:inset-0 flex gap-5 items-center z-30 pt-[5%]">
          <div className="w-full px-[5.13vw] md:px-[8.599vw]">
            <ScrollReveal className="md:max-w-4xl text-white space-y-5">
              <HighlightHeading
                text="we bring Hibachef to your backyard"
                highlight={["Hibachef"]}
                highlightClassName="text-primary"
                className="reveal-item capitalize w-[88%] md:w-auto leading-[120%]"
                animate={false}
                data-split="chars"
              />

              <Paragraph
                className="reveal-item max-w-2xl"
                content="Sed ut maecenas dolor leo. Enim sit quis tincidunt blandit. Quis nunc tellus orci ultricies scelerisque tempor hac."
                animate={false}
                data-split="lines"
              />
              <div className="reveal-item">
                <NavLink href={routes.bookNow}>
                  <PrimaryButton
                    className="block w-full md:w-auto md:inline-block "
                    innerClassName="uppercase text-[16px] px-14"
                  >
                    Book Now
                  </PrimaryButton>
                </NavLink>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
