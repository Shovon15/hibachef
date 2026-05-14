import { useState } from "react";
import InputComponent from "../../../common/inputFields/InputComponent";
import ButtonComponent from "./ButtonComponent";
import MainTitle from "../../../common/Titles/MainTitle";
type Props = {
  setCurrentStep: (step: number) => void;
};
const YourInformation = ({
  setCurrentStep,
  formData,
  setFormData,
  handleStepChange,
}: Props & {
  formData: any;
  setFormData: (data: any) => void;
  handleStepChange: (stepId: number) => void;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProceed = () => {
    console.log("Proceeding with:", formData);
    handleStepChange(3);
  };

  
  return (
    <div className="lg:pl-20">
      <MainTitle text1="Give Your" text2="Information" />
      <div className="w-full rounded-4xl bg-[#F2F2F2] p-6.5 mt-9 lg:mt-12">
        <div className="grid gap-x-14 gap-y-6 grid-cols-1 md:grid-cols-2">
          <InputComponent
            label="Your Name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="md:col-span-2 "
          />

          <InputComponent
            label="E-mail"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <InputComponent
            label="Phone Number"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <InputComponent
            label="Address of Party"
            name="address"
            type="text"
            required
            value={formData.address}
            onChange={handleChange}
          />
          <InputComponent
            label="Post Code "
            name="postCode"
            type="text"
            required
            value={formData.postCode}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mt-10">
          <ButtonComponent
            text="PREVIOUS STEP"
            onClick={() => handleStepChange(1)}
            className="flex-1"
            isbgRed={false}
          />
          <ButtonComponent
            text="PROCEED"
            onClick={handleProceed}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default YourInformation;
