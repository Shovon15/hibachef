import { ENV } from "../../secret";

export const SITE_INFORMATION = {
  appName: "Richmond Watches",
  metaTitle: "Richmond Watches",
  metaDescription: "Best watch collection",
  keywords: [
    "richmond watches",
    "luxury watches",
    "timepieces",
    "men's watches",
    "women's watches",
    "stylish watches",
    "richmond collection",
  ],
  url: ENV.FRONTEND_URL, // ✅ MUST be full URL
  ogImage: "/images/og.jpg",
};
