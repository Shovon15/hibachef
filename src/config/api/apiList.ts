import { ENV } from "../../../secret";

const BASE_URL = ENV.BASE_URL;
const TIMEZONE_BD_URL = ENV.TIMEZONE_BD_URL + "/brand";

export const showPerPage = 12;
export const brandToken = ENV.BRAND_TOKEN;
export const brandId = ENV.BRAND_ID;

const api = {
  page: {
    home: `${BASE_URL}/pages/home`,
    collection: `${BASE_URL}/pages/collection`,
    collectionItem: (gender: string) => `${BASE_URL}/pages/${gender}`,

    stories: `${BASE_URL}/pages/stories`,
    warrantyPolicy: `${BASE_URL}/pages/warranty-policy`,
    popItems: `${BASE_URL}/pages/pop-items`,
  },
  product: {
    collection: (filter?: string) =>
      `${TIMEZONE_BD_URL}/all-brand-products${filter ? `?${filter}` : ""}`,
    details: (model?: string) => `${TIMEZONE_BD_URL}/product-details/${model}`,
    topCollection: `${TIMEZONE_BD_URL}/top-brand-products`,
  },

  navigation: `${BASE_URL}/navigation`,

  siteInfo: `${BASE_URL}/site-info`,

  search: (query: string) =>
    `${TIMEZONE_BD_URL}/seach-brand-products?name=${query}`,
};
export default api;
