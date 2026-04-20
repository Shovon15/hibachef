interface IProductResponse {
  data: IProductData[];
  links: ILinks;
  meta: IMeta;
}

 interface IProductData {
  id: number;
  model: string;
  material: string;
  gender: "Male" | "Female" | string;
  slug: string;
  category: string;
  image: string;
  created_at: string; // ISO datetime string
  updated_at: string | null; // ISO datetime string or null
  brand: string;
}

interface ILinks {
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
}

interface IMeta {
  current_page: number;
  from: number | null;
  last_page: number;
  path: string;
  per_page: number;
  to: number | null;
  total: number;
  links: IMetaLink[];
}

interface IMetaLink {
  url: string | null;
  label: string; // can include html like "&laquo; Previous"
  active: boolean;
}
