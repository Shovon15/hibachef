"use client";
import ContentContainer from "../container/contentContainer";
import PAGES from "@/dummyData";
import NavLink from "@/components/common/link/NavLink";
import { cn } from "@/utils/helpers/cn";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsAppIcon,
  XIcon,
  YoutubeIcon,
} from "@/assets/icons";
import ImageComponent from "@/components/common/image";
import SocialSection from "@/components/sections/SocialSection";
import { useAppSelector } from "@/store/hooks";

const BottomSection = () => {
  const { footer, settings, socialLinks } = useAppSelector(
    (state) => state.navigation,
  );
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
    <div className="">
      <div className=" bg-primary text-center text-white py-5">
        <p>We ready to have you the best Hibachef experiences</p>
        {/* <SocialSection socialLinks={socialLinks} className="!flex-col" /> */}
      </div>

      <div className="bg-black text-center text-white py-5">
        <p>
          &copy; {new Date().getFullYear()} Hibachef Chef at Home. All Rights
          Reserved. Site by FDM.
        </p>
      </div>
    </div>
  );
};

export default BottomSection;

type FooterLogoProps = {
  logo?: string;
};

export const FooterLogo: React.FC<FooterLogoProps> = ({ logo }) => {
  return (
    <div className="w-[152px] h-[30px] lg:w-[210px] lg:h-[40px] flex items-center justify-center overflow-hidden">
      {logo && (
        <ImageComponent
          src={logo}
          alt="logo"
          className="object-contain w-full h-full card-image-shadow"
        />
      )}
    </div>
  );
};
