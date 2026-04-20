import SchemaWrapper from "@/components/layout/schemaWrapper/SchemaWrapper";
import HomeComponent from "@/components/pages/home";

// import { Metadata } from "next";

// export async function generateMetadata(): Promise<Metadata> {
//   return await GetMetaData({
//     url: api.page.home,
//     siteUrl: routes.home,
//   });
// }

export default async function Home() {
  // const { data }: any = await get(api.page.home);
  // const { data: topCollectionData }: any = await brandGet(
  //   api.product.topCollection,
  // );
  // const { data: siteInfoData }: any = await get(api.siteInfo);

  // const jsonLd = getOrganizationJsonLd({
  //   logo: siteInfoData?.data?.settings?.logo,
  //   address: siteInfoData?.data?.settings?.address,
  //   copyright_text: siteInfoData?.data?.settings?.copyright_text,
  //   social_links: siteInfoData?.data?.social_links,
  // });

  return (
    <HomeComponent />
    // <SchemaWrapper jsonLd={jsonLd}>
    //   <HomeComponent
    //     data={data?.data?.sections}
    //     videoUrl={data?.data?.video}
    //     topCollectionData={topCollectionData}
    //   />
    // </SchemaWrapper>
  );
}
