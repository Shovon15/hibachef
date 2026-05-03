"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import FAQItemComponent from "./FAQItemComponent";
import { useState } from "react";

const FaqSection = () => {
  type FAQItem = {
    id: number;
    question: string;
    answer: string;
  };

  const allFAQs: FAQItem[] = [
    {
      id: 1,
      question: "What is Hibachef?",
      answer:
        "Hibachef is your go-to platform for discovering and sharing authentic Japanese recipes, updated regularly with new dishes and cooking tips.\n\nJoin thousands of food lovers using Hibachef to explore recipes, impress friends, and cook delicious meals faster.",
    },
    {
      id: 2,
      question: "How often do you add new recipes to Hibachef?",
      answer: "We add new recipes weekly to keep content fresh and exciting.",
    },
    {
      id: 3,
      question: "Is there a free trial available for Hibachef?",
      answer: "Yes, we offer a limited free trial for new users.",
    },
    {
      id: 4,
      question: "Does Hibachef offer monthly subscription plans?",
      answer: "Yes, monthly plans are available.",
    },
    {
      id: 5,
      question: "Are monthly plans available for Hibachef subscriptions?",
      answer: "Yes, flexible monthly plans are supported.",
    },
    {
      id: 6,
      question: "Does Hibachef offer monthly subscription options?",
      answer: "Yes, users can choose monthly billing.",
    },
    {
      id: 7,
      question: "Are there discounts for students and educators on Hibachef?",
      answer:
        "Yes, special discounts are available for students and educators.",
    },
    {
      id: 8,
      question: "What payment methods does Hibachef accept?",
      answer:
        "We accept credit cards, PayPal, and other major payment options.",
    },
    {
      id: 9,
      question: "Can I cancel my Hibachef subscription anytime?",
      answer: "Yes, subscriptions can be canceled anytime.",
    },
    {
      id: 10,
      question: "How do I upgrade from a Basic to a Premium Hibachef plan?",
      answer: "Go to account settings and choose upgrade plan.",
    },
    {
      id: 11,
      question:
        "What’s the difference between Hibachef’s Premium and Team plans?",
      answer: "Premium is for individuals; Team plans support collaboration.",
    },
    {
      id: 12,
      question: "What is Hibachef’s refund policy?",
      answer: "Refunds are processed based on our refund policy terms.",
    },
  ];
  const [openIndex, setOpenIndex] = useState<string | null>("left-0");

  const handleToggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };
  return (
    <ContentContainer className="pt-6 lg:pt-20  pb-26 lg:pb-36">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-3">
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
      </div>
    </ContentContainer>
  );
};
export default FaqSection;
