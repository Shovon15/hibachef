"use client";
import ImageComponent from "@/components/common/image";
import bannerImage from "@/assets/images/banner-image.png";
import bannerBg from "@/assets/images/banner-bg.png";
import bannerBgMobile from "@/assets/images/banner-bg-mobile.png";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import NavLink from "@/components/common/link/NavLink";
import routes from "@/config/routes";
import { useIsMobile } from "@/hooks/useMobile";

type Props = {
  data?: any;
};

const HomeBanner = ({ data }: Props) => {
  const { isMobile } = useIsMobile();
  const backgroundShape = isMobile ? bannerBgMobile : bannerBg;
  return (
    <div className="relative">
      <div className="absolute bottom-0 z-20">
        <ImageComponent src={backgroundShape} alt="banner-background" />
      </div>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#161616,#1B1B1B,#333333CC,#24242400,#16161600)]" />

      <div className="relative w-full h-full">
        <ImageComponent
          src={bannerImage}
          alt="banner"
          className="object-cover w-full h-full"
        />

        <div className="absolute top-[20%] md:inset-0 flex gap-5 items-center z-30">
          <div className="w-full px-[5.13vw] md:px-[8.599vw]">
            <div className="md:max-w-4xl text-white space-y-10">
              <HighlightHeading
                text="we bring Hibachef to your backyard"
                highlight={["Hibachef"]}
                highlightClassName="text-primary"
                className="capitalize"
              />
              <p className="max-w-2xl">
                Sed ut maecenas dolor leo. Enim sit quis tincidunt blandit. Quis
                nunc tellus orci ultricies scelerisque tempor hac.
              </p>
              <NavLink href={routes.bookNow}>
                <PrimaryButton className="uppercase">Book Now</PrimaryButton>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
