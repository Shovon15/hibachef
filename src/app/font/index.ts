import localFont from "next/font/local";

export const CooperBlack = localFont({
  src: [{ path: "./COOPBL.ttf", weight: "400", style: "normal" }],
  variable: "--font-cooperBlack",
  display: "swap",
});

export const GraphikTrial = localFont({
  src: [
    { path: "./Graphik-Regular-Trial.otf", weight: "400", style: "normal" },
    { path: "./Graphik-Medium-Trial.otf", weight: "500", style: "normal" },
    { path: "./Graphik-Semibold-Trial.otf", weight: "600", style: "normal" },
  ],
  variable: "--font-graphikTrial",
  display: "swap",
});

// export const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-poppins",
//   display: "swap",
// });
// export const manrope = Manrope({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   variable: "--font-manrope",
//   display: "swap",
// });

// export const BoldCond = localFont({
//   src: [
//     {
//       path: "./Red-Rooster-Collection-BlockGothicRR-BoldCond.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-boldCond",
//   display: "swap",
// });
// export const Popins = localFont({
//   src: [{ path: "./Red-Rooster-Collection-BlockGothicRR-BoldCond.ttf", weight: "700", style: "normal" }],
//   variable: "--font-boldCond",
//   display: "swap",
// });
