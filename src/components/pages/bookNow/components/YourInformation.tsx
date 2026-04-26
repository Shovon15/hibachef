import { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import MainTitle from "../../../common/Titles/MainTitle";
type Props = {
  setCurrentStep: (step: number) => void;
};
const YourInformation = ({ setCurrentStep }: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    postCode: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProceed = () => {
    console.log("Proceeding with:", formData);
    setCurrentStep(3);
  };

  const handlePrevious = () => {
    console.log("Going to previous step");
    setCurrentStep(1);
  };

  return (
    <div className="pl-20">
      <MainTitle text1="Give Your" text2="Information" />
      <div className="w-full rounded-4xl bg-[#F2F2F2] p-6.5  mt-12">
        <div className="grid gap-x-14 gap-y-6 grid-cols-1 md:grid-cols-2">
          <InputComponent
            label="Your Name *"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="col-span-2 "
          />

          <InputComponent
            label="E-mail *"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
          <InputComponent
            label="Phone Number *"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
          />
          <InputComponent
            label="State *"
            name="state"
            type="text"
            value={formData.state}
            onChange={handleChange}
          />
          <InputComponent
            label="Post Code *"
            name="postCode"
            type="text"
            value={formData.postCode}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 mt-10">
          <ButtonComponent
            text="PREVIOUS STEP"
            onClick={handlePrevious}
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
