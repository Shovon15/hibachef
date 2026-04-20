// require("dotenv").config({ path: ".env" });

export const ENV = {
  BASE_URL: process.env.NEXT_PUBLIC_BASE_URL!,
  TIMEZONE_BD_URL: process.env.NEXT_PUBLIC_TIMEZONE_BD_URL!,
  FRONTEND_URL: process.env.NEXT_PUBLIC_FRONTEND_URL!,

  BRAND_TOKEN: process.env.NEXT_PUBLIC_BRAND_TOKEN!,
  BRAND_ID: process.env.NEXT_PUBLIC_BRAND_ID!,
  API_CACHE_TIME: process.env.NEXT_PUBLIC_API_CACHE_TIME!,
  NODE_ENV: "",
};
