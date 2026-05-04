"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import FAQItemComponent from "./FAQItemComponent";
import { useState } from "react";
import { Accordion } from "@/components/common/accordion/Accordion";

const FaqSection = () => {
  const faqData: IFaqItem[] = [
    {
      title: "What is Hibachi catering?",
      sub_title: "Live cooking experience",
      content:
        "Hibachi catering is a live cooking service where chefs prepare meals in front of your guests, combining entertainment with delicious food.",
    },
    {
      title: "How many guests can you serve?",
      sub_title: "Flexible group sizes",
      content:
        "We can accommodate small gatherings as well as large parties. Contact us for custom arrangements based on your guest count.",
    },
    {
      title: "Do you provide all cooking equipment?",
      sub_title: "Fully equipped service",
      content:
        "Yes, our chefs bring all necessary equipment including grills, utensils, and ingredients.",
    },
    {
      title: "What menu options are available?",
      sub_title: "Customizable menu",
      content:
        "We offer a variety of proteins including chicken, steak, shrimp, and vegetarian options. You can customize your menu.",
    },
    {
      title: "How long does the event last?",
      sub_title: "Typical duration",
      content:
        "Most events last between 1.5 to 2 hours depending on the number of guests and menu selection.",
    },
    {
      title: "Do you offer vegetarian options?",
      sub_title: "Plant-based meals",
      content:
        "Yes, we provide delicious vegetarian and vegan-friendly dishes upon request.",
    },
    {
      title: "What space is required?",
      sub_title: "Setup requirements",
      content:
        "We typically need a flat outdoor or well-ventilated indoor space for safe grill setup.",
    },
    {
      title: "How far in advance should I book?",
      sub_title: "Booking timeline",
      content:
        "We recommend booking at least 1–2 weeks in advance to ensure availability.",
    },
    {
      title: "Is there a deposit required?",
      sub_title: "Payment policy",
      content:
        "Yes, a deposit is required to secure your booking. The remaining balance is due before the event.",
    },
    {
      title: "What happens in case of bad weather?",
      sub_title: "Weather policy",
      content:
        "We can reschedule or adjust the setup depending on weather conditions to ensure safety and comfort.",
    },
  ];

  return (
    <ContentContainer className="pt-6 lg:pt-20  pb-26 lg:pb-36">
      <Accordion items={faqData} defaultOpenFirst={true} />
      {/* <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="space-y-3 lg:space-y-4">
          {allFAQs?.slice(0, allFAQs.length / 2)?.map((item, index) => {
            const key = `left-${index}`;
            return (
              <FAQItemComponent
                key={key}
                item={item}
                isOpen={openIndex === key}
                onClick={() => handleToggle(key)}
              />
            );
          })}
        </div>
        <div className="space-y-4">
          {allFAQs
            ?.slice(allFAQs.length / 2, allFAQs.length)
            ?.map((item, index) => {
              const key = `right-${index}`;
              return (
                <FAQItemComponent
                  key={key}
                  item={item}
                  isOpen={openIndex === key}
                  onClick={() => handleToggle(key)}
                />
              );
            })}
        </div>
      </div> */}
    </ContentContainer>
  );
};
export default FaqSection;
