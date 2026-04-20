// src/data/footerItems.ts
export type FooterLinkItem = {
  label: string;
  href: string;
};

export type FooterSocialItem = {
  label: string;
  href: string;
  iconKey: string; // ✅ you will map this to real icon components later
};

export type FooterColumn =
  | {
      id: string;
      title: string;
      type: "links";
      items: FooterLinkItem[];
    }
  | {
      id: string;
      title: string;
      type: "social";
      items: FooterSocialItem[];
    }
  | {
      id: string;
      title: string;
      type: "subscribe";
      description?: string;
      placeholder?: string;
      buttonText?: string;
    };

export const footerData: FooterColumn[] = [
  {
    id: "watches",
    title: "Watches",
    type: "links",
    items: [
      { label: "New Releases", href: "/watches/new-releases" },
      { label: "Best Sellers", href: "/watches/best-sellers" },
      { label: "Men’s Watches", href: "/watches/mens" },
      { label: "Ladies’ Watches", href: "/watches/ladies" },
      { label: "Accessories", href: "/watches/accessories" },
      { label: "Shop All Watches", href: "/watches" },
    ],
  },
  {
    id: "story",
    title: "The Story",
    type: "links",
    items: [
      { label: "Our Philosophies of Watchmaking", href: "/story/philosophy" },
      { label: "Ambassadors & Partners", href: "/story/ambassadors" },
      { label: "Our Town", href: "/story/our-town" },
      { label: "The Journal", href: "/journal" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    id: "your-bremont",
    title: "Your Bremont",
    type: "links",
    items: [
      { label: "My Club Bremont", href: "/account/club" },
      { label: "Download a Brochure", href: "/brochure" },
      { label: "FAQs", href: "/faqs" },
      { label: "Servicing & Repairs", href: "/service" },
      { label: "Warranty", href: "/warranty" },
      { label: "Finance", href: "/finance" },
      { label: "Delivery & Returns", href: "/delivery-returns" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    id: "store",
    title: "Locate a Store",
    type: "links",
    items: [
      { label: "Find Your Nearest Store", href: "/stores" },
      { label: "View Our Boutiques", href: "/boutiques" },
      { label: "Community", href: "/community" },
      { label: "#BremontSpotted", href: "/bremontspotted" },
      { label: "Altitude Forum", href: "/forum" },
    ],
  },
  {
    id: "social",
    title: "Share & Follow",
    type: "social",
    items: [
      { label: "Facebook", href: "https://facebook.com", iconKey: "facebook" },
      { label: "X", href: "https://x.com", iconKey: "x" },
      { label: "Instagram", href: "https://instagram.com", iconKey: "instagram" },
      { label: "YouTube", href: "https://youtube.com", iconKey: "youtube" },
      { label: "LinkedIn", href: "https://linkedin.com", iconKey: "linkedin" },
      { label: "WhatsApp", href: "https://whatsapp.com", iconKey: "whatsapp" },
      { label: "Pinterest", href: "https://pinterest.com", iconKey: "pinterest" },
    ],
  },
  {
    id: "subscribe",
    title: "Subscribe",
    type: "subscribe",
    description: "Sign up to receive updates and offers.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
  },
];
