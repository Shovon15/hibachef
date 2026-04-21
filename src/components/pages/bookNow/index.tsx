"use client";
import ContentContainer from "@/components/layout/container/contentContainer";
import Tabs from "./components/Tabs";
import { useState } from "react";
import DateSlot from "./components/DateSlot";
import PageBanner from "./components/PageBanner";
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
  return (
    <div>
      <PageBanner />
      <ContentContainer className="flex pt-[70px] pb-[120px]">
        <Tabs
          steps={steps}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
        <div className="flex-1 ">
          <DateSlot
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />
        </div>
      </ContentContainer>
    </div>
  );
};

export default BookNowIndexComponent;
