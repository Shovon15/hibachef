import { HighlightHeading } from "@/components/common/typography/HighlightHeading";
import React from "react";
import MenuCard from "./MenuCard";
import "./cardStyle.css";
import ImageComponent from "@/components/common/image";
import menuBg from "@/assets/images/menu-bg.jpg";

type Props = { data?: any };

const MenuSection = ({ data }: Props) => {
  const menuPricingData = [
    {
      title: "Hibachef Packages",
      items: [
        {
          name: "Hibachi Regular",
          price: "$55/Person",
          description: "Choose Two Entrees",
        },
        {
          name: "Hibachi Special",
          price: "$65/Person",
          description: "Includes Chicken, Shrimp, And NY Strip",
        },
        {
          name: "Hibachi Kids",
          price: "$30/Child",
          description: "Choose One Entree",
        },
      ],
      footer: [
        "*Price May Vary By Location",
        "Have Questions? Visit Our FAQ Page",
      ],
    },
    {
      title: "Entree Choices",
      items: [
        { name: "Chicken" },
        { name: "Jumbo Shrimp" },
        { name: "Prime NY Strip" },
        { name: "Scallops" },
        { name: "Salmon" },
        { name: "Filet Mignon" },
        { name: "Lobster" },
      ],
      extraSections: [
        {
          title: "All Hibachi Packages",
          items: [
            "Salad With Ginger Dressing",
            "Mixed Vegetables",
            "Egg Fried Rice",
          ],
        },
        {
          title: "Mixed Vegetables",
          items: [
            "Zucchini",
            "Onion",
            "Carrot",
            "Broccoli",
            "Mushroom",
            "Asparagus",
          ],
        },
      ],
    },
  ];

  return (
    <div className="border-4 border-red-500 h-screen">
      <ImageComponent
        src={menuBg}
        alt="..."
        className="w-full h-auto object-cover"
      />
      <HighlightHeading
        text="Menu & Pricing"
        highlight={["Menu"]}
        highlightClassName="text-primary text-center"
      />

      <div className="w-[50vw]">
        <div className="center-box">
          <div className="animated-border-box-glow"></div>
          <div className="animated-border-box"></div>
        </div>
      </div>
      {/* <MenuCard>
        <h3 className="text-xl font-bold mb-4 text-center">
          Hibachef Packages
        </h3>

        <div className="space-y-3 text-sm text-center">
          <p>
            <b>Hibachi Regular</b> – $55/Person
          </p>
          <p>
            <b>Hibachi Special</b> – $65/Person
          </p>
          <p>
            <b>Hibachi Kids</b> – $30/Child
          </p>

          <p className="text-xs mt-4 opacity-70">*Price May Vary By Location</p>
        </div>
      </MenuCard> */}
    </div>
  );
};

export default MenuSection;
