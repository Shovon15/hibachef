import { useState } from "react";
import MainTitle from "../../../common/Titles/MainTitle";
import InputComponent from "../../../common/inputFields/InputComponent";
import ButtonComponent from "./ButtonComponent";
import { EntreeChoices } from "./EntreeChoices";
import InputBottomText from "./InputBottomText";

type EntreeItem = {
  id: string;
  entree: string;
  quantity: string;
};
type FormDataType = {
  regularGuest: string;
  specialGuest: string;
  kids: string;
  entreeChoices: EntreeItem[];
  filetQty: string;
  lobsterQty: string;
};
type Props = {
  setCurrentStep: (step: number) => void;
};
const HibachiPackages = ({ setCurrentStep }: Props) => {
  const [formData, setFormData] = useState<FormDataType>({
    regularGuest: "",
    specialGuest: "",
    kids: "",
    entreeChoices: [{ id: "1", entree: "", quantity: "" }],
    filetQty: "",
    lobsterQty: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProceed = () => {
    console.log("Proceeding with:", formData);
    setCurrentStep(4);
  };

  const handlePrevious = () => {
    console.log("Going to previous step");
    setCurrentStep(2);
  };

  return (
    <div className="lg:pl-20">
      <MainTitle text1="Hibachi" text2="Packages" />
      <div className="w-full rounded-4xl bg-[#F2F2F2] p-6.5 mt-9 lg:mt-12">
        <div className="grid gap-x-7 gap-y-6 grid-cols-1 md:grid-cols-3">
          <div>
            <InputComponent
              label="Guest Number (Regular) *"
              name="regularGuest"
              type="number"
              value={formData.regularGuest}
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              Hibachi Regular -<span className="text-[#E4002B]">$55</span>
              /person
            </InputBottomText>
          </div>
          <div>
            <InputComponent
              label="Guests Number (Special)"
              name="specialGuest"
              type="number"
              value={formData.specialGuest}
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              Hibachi Special -<span className="text-[#E4002B]">$65</span>
              /person
            </InputBottomText>
          </div>
          <div>
            <InputComponent
              label="Kids"
              name="kids"
              type="number"
              value={formData.kids}
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              Hibachi Kids -<span className="text-[#E4002B]">$30</span>
              /person
            </InputBottomText>
          </div>
        </div>{" "}
        {formData.entreeChoices.length > 0 && (
          <div className="mt-8">
            <EntreeChoices formData={formData} setFormData={setFormData} />
          </div>
        )}
        <p className=" font-semibold font-graphikTrial my-6 text-[#000000] text-base">
          Entree Upgrade
        </p>
        <div className="grid gap-x-7 gap-y-6 grid-cols-1 md:grid-cols-2">
          <div>
            <InputComponent
              label="Filet Qty"
              name="filetQty"
              type="number"
              value={formData.filetQty}
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              Filet Mignon -<span className="text-[#E4002B]">$8</span>
              /upgrade
            </InputBottomText>
          </div>
          <div>
            <InputComponent
              label="Lobster Qty"
              name="lobsterQty"
              type="number"
              value={formData.lobsterQty}
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              Lobster -<span className="text-[#E4002B]">$15</span>
              /upgrade
            </InputBottomText>
          </div>
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

export default HibachiPackages;
