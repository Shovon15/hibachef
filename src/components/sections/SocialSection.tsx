import React from "react";
import {
  FacebookIcon,
  GoogleIcon,
  InstagramIcon,
  LinkedinIcon,
  PinterestIcon,
  WhatsAppIcon,
  XIcon,
  YoutubeIcon,
} from "@/assets/icons";
import { cn } from "@/utils/helpers/cn";

const SocialSection = ({
  className,
  socialLinks,
}: {
  className?: string;
  socialLinks?: ISocialLinksSection;
}) => {
  const iconMap: Record<string, React.ElementType> = {
    facebook: FacebookIcon,
    x: XIcon,
    instagram: InstagramIcon,
    youtube: YoutubeIcon,
    linkedin: LinkedinIcon,
    whatsapp: WhatsAppIcon,
    pinterest: PinterestIcon,
    google: GoogleIcon,
  };

  return (
    <div
      className={cn(
        `flex flex-row justify-center items-center gap-2 lg:gap-6`,
        className,
      )}
    >
      {socialLinks?.items?.map((item: ISocialItem, index: number) => {
        const iconKey = item.name.toLowerCase();
        const IconComp = iconMap[iconKey];

        return (
          <a
            key={index}
            href={item?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-8 h-8 hover:opacity-90 transition"
          >
            {IconComp ? (
              <IconComp className="h-[30px] w-[30px] text-white" />
            ) : (
              <span className="text-white text-xs">
                {item.name.slice(0, 1)}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default SocialSection;
