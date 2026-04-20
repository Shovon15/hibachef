import { Inter, Poppins, Manrope } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const DmSans = localFont({
  src: [
    { path: "./DMSans-Bold.ttf", weight: "700", style: "normal" },
    { path: "./DMSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./DMSans-Light.ttf", weight: "300", style: "normal" },
  ],
  variable: "--font-dmSans",
  display: "swap",
});

export const MyriadPro = localFont({
  src: [{ path: "./MyriadPro-Regular.otf", weight: "400", style: "normal" }],
  variable: "--font-myriadPro",
  display: "swap",
});

export const BoldCond = localFont({
  src: [
    {
      path: "./Red-Rooster-Collection-BlockGothicRR-BoldCond.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-boldCond",
  display: "swap",
});
// export const Popins = localFont({
//   src: [{ path: "./Red-Rooster-Collection-BlockGothicRR-BoldCond.ttf", weight: "700", style: "normal" }],
//   variable: "--font-boldCond",
//   display: "swap",
// });
