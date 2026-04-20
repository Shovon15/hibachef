import routes from "@/config/routes";
import { SITE_INFORMATION } from "@/config/seo";

interface ProductJsonLdProps {
  name: string;
  model: string;
  category: string;
  brand: string;
  image: string;
  description: string;
  gender: string;
  material: string;
  url: string;
  specification: string;
}

export function getProductJsonLd({
  name,
  model,
  category,
  brand,
  image,
  description,
  gender,
  material,
  url,
  specification,
}: ProductJsonLdProps) {
  const additionalProperty = [
    model && {
      "@type": "PropertyValue",
      name: "Model",
      value: model,
    },
    category && {
      "@type": "PropertyValue",
      name: "Category",
      value: category,
    },
    gender && {
      "@type": "PropertyValue",
      name: "Gender",
      value: gender,
    },
    material && {
      "@type": "PropertyValue",
      name: "Material",
      value: material,
    },
    specification && {
      "@type": "PropertyValue",
      name: "Specification",
      value: specification,
    },
  ].filter(Boolean);

  const jsonLd: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    image: image ? [image] : undefined,
    description,
    category,
    material,
    brand: {
      "@type": "Brand",
      name: brand || SITE_INFORMATION.appName,
    },
    url: url
      ? `${SITE_INFORMATION.url}${routes.collectionDetail(url)}`
      : undefined,
    additionalProperty: additionalProperty.length
      ? additionalProperty
      : undefined,
  };

  return jsonLd;
}
