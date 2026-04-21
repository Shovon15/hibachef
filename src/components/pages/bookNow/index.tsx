"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import Tabs from "./components/Tabs";
import { useState } from "react";
import DateSlot from "./components/DateSlot";
import PageBanner from "../../layout/container/PageBanner";
import BookNowBg from "@/assets/images/book-banner.png";
import YourInformation from "./components/YourInformation";
import HibachiPackages from "./components/HibachiPackages";

const steps = [
  { id: 1, label: "Date & Slot" },
  { id: 2, label: "Your Information" },
  { id: 3, label: "Hibachi Packages" },
  { id: 4, label: "Side Orders" },
  { id: 5, label: "Table/Chair Rental" },
];

const BookNowIndexComponent = () => {
  const [currentStep, setCurrentStep] = useState(steps[0].id);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <DateSlot
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        );
      case 2:
        return <YourInformation/>;
      case 3:
        return <HibachiPackages/>;
      case 4:
        return <div>Step 4</div>;
      case 5:
        return <div>Step 5</div>;
      default:
        return null;
    }
  };
  return (
    <div>
      <PageBanner
        bgImage={BookNowBg}
        title="Book Your Hibachef"
        description="Hibachi Chef at Home brings the essence of Japanese cuisine right to your doorstep. Discover our menu, crafted with the finest ingredients to deliver authentic hibachi flavors and aromas. From sizzling meats and fresh seafood to vibrant hibachi vegetables and fried rice, our offerings are designed to impress. Explore our pricing options to find the perfect package for your next event."
      />
      <ContentContainer className="flex pt-[70px] pb-[120px]">
        <Tabs
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <div className="flex-1 ">{renderStep()}</div>
      </ContentContainer>
    </div>
  );
};

export default BookNowIndexComponent;
