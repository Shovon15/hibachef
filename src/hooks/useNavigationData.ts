import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import useHTTP from "./useHTTP";
import api from "@/config/api/apiList";
import {
  setFetchedStatus,
  setNavigation,
} from "@/store/slices/navigationSlice";
import { get } from "@/lib/metadata/fetch";

export default function useNavigationData() {
  const { GetData } = useHTTP();
  const { dataFetched, header, footer, settings, socialLinks } = useAppSelector(
    (state) => state.navigation,
  );
  const dispatch = useAppDispatch();

  const getNavigationData = async () => {
    try {
      const response = (await get(api.siteInfo)) as any;

      const data = response?.data?.data;

      const headerData: IHeaderSection = {
        name: "Header",
        slug: "header",
        items: data?.header_navigation ?? [],
      };

      const footerData: IFooterSection = {
        name: "Footer",
        slug: "footer",
        items: data?.footer_navigation ?? [],
      };

      const settingsData: ISettingsSection = {
        name: "Settings",
        slug: "settings",
        items: data?.settings ? [data.settings] : [],
      };

      const socialLinksData: ISocialLinksSection = {
        name: "Social Links",
        slug: "social_Links",
        items: data?.social_links ?? [],
      };

      dispatch(
        setNavigation({
          header: headerData,
          footer: footerData,
          settings: settingsData,
          socialLinks: socialLinksData,
        }),
      );

      dispatch(setFetchedStatus(true));
    } catch (err) {
      console.error("Navigation fetch error:", err);
    }
  };

  useEffect(() => {
    if (!dataFetched) {
      getNavigationData();
    }
  }, [dataFetched]);

  return {
    navigation: { header, footer, settings, socialLinks },
    getNavigationData,
  };
}
