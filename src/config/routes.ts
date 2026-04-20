import collection from "@/components/pages/collection";

const routes = {
  home: "/",
  collection: "/collection",
  collectionDetail: (slug?: number | string) =>
    `/collection/details/${slug ?? ""}`,
  search: "/search",
  stories: "/stories",
  warrantyPolicy: "/warranty-policy",
  popItems: "/pop-items",
};

export default routes;
