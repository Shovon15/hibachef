import React from "react";
import ContentContainer from "../container/contentContainer";
import PAGES from "@/dummyData";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsAppIcon,
  XIcon,
  YoutubeIcon,
} from "@/assets/icons";
import NavLink from "@/components/common/link/NavLink";
import ImageComponent from "@/components/common/image";
<ImageComponent src={footerLogo} alt="logo" className="w-full h-full" />;
import footerLogo from "@/assets/images/footer-logo.png";
import { cn } from "@/utils/helpers/cn";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import footerBg from "@/assets/images/footer-bg.png";

type Props = { props?: any };

const TopSection = (props: Props) => {
  const iconMap: Record<string, React.ElementType> = {
    facebook: FacebookIcon,
    x: XIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon,
    linkedin: LinkedinIcon,
    whatsapp: WhatsAppIcon,
    pinterest: PinterestIcon,
  };

  const Icon = ({ iconKey }: { iconKey: string }) => {
    const IconComp = iconMap[iconKey];

    // fallback if icon not found
    if (!IconComp) {
      return (
        <span className="inline-flex h-5 w-5 items-center justify-center rounded border border-white/20 text-[10px] text-white/70">
          {iconKey.slice(0, 1).toUpperCase()}
        </span>
      );
    }

    return <IconComp className="h-5 w-5 text-white" />;
  };
  return (
    <div
      style={{
        backgroundImage: `url(${footerBg.src})`,
      }}
    >
      <ContentContainer
        disablePX
        className="w-full flex flex-col gap-5 justify-center items-center text-white py-[51px] max-w-[803px] mx-auto"
      >
        <FooterLogo className="w-[284px] h-[81px]" />
        <h2>Bringing the Sizzle to Your Doorstep</h2>
        <p className="text-center">
          Hibachef catering offers unforgettable private dinner parties with
          friends and family, as well as larger events like weddings and family
          reunions. Treat your family and friends to a live, interactive cooking
          experience they won’t soon forget!
        </p>

        <PrimaryButton>Book Now</PrimaryButton>
      </ContentContainer>
    </div>
  );
};

export default TopSection;

const FooterLogo = ({ className }: { className?: string }) => {
  return (
    <>
      <ImageComponent
        src={footerLogo}
        alt="logo"
        className={cn(`w-full h-full`, className)}
      />
    </>
  );
};
