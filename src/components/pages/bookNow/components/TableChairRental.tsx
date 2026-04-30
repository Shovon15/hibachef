import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import InputBottomText from "./InputBottomText";
import InputComponent from "../../../common/inputFields/InputComponent";
import MainTitle from "../../../common/Titles/MainTitle";
type FormDataType ={
  personQty: number;
  tipPercentage: number;
}

type Props = {
  setCurrentStep: (step: number) => void;
};

const TableChairRental = ({ setCurrentStep }: Props) => {
  const [formData, setFormData] = useState<FormDataType>({
    personQty: 0,
    tipPercentage: 18,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

    const handleTipChange = (percentage: number) => {
    setFormData((prev) => ({ ...prev, tipPercentage: percentage }));
  };
  const handleProceed = () => {
    console.log("Proceeding with:");
    setCurrentStep(6);
  };

  const handlePrevious = () => {
    console.log("Going to previous step");
    setCurrentStep(4);
  };
  return (
    <div className="lg:pl-20">
      <MainTitle text1="Table/Chair" text2="Rental" />
      <div className="w-full rounded-4xl bg-[#F2F2F2] p-6.5 mt-9 lg:mt-12">
        <div>
          <InputComponent
            label="Person QTY *"
            name="personQty"
            type="number"
            value={formData.personQty > 0 ? formData.personQty : ""}
            onChange={handleChange}
            className=" "
          />
          <InputBottomText>
            Table Pricing 
            <span className="text-[#E4002B]">$15 Per Person</span>
            /Comes with Table, Chairs ,Utensils, Plates Table Cloths, Set up and
            Clean up
          </InputBottomText>
        </div>
        <div className="mt-8">
          <h3 className="text-base font-semibold text-[#000000] mb-4 font-graphikTrial">
            Tip Suggestions
          </h3>
          <div className="flex gap-6">
            {[18, 20, 25].map((percentage) => (
              <label
                key={percentage}
                className="relative flex items-center cursor-pointer group"
              >
                <input
                  type="radio"
                  name="tip-percentage"
                  value={percentage}
                  checked={formData.tipPercentage === percentage}
                  onChange={() => handleTipChange(percentage)}
                  className="sr-only peer"
                />
                <div className="w-3 h-3 border border-red-600 rounded-full bg-transparent  transition duration-300 flex justify-center items-center" >
                  <div className="w-3/5 h-3/5 rounded-full group-has-[:checked]:bg-red-600"/>
                </div>
                <span className="font-normal font-graphikTrial text-[#000000] text-base ml-2">{percentage}%</span>
              </label>
            ))}
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
            text="Submit"
            onClick={handleProceed}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};

export default TableChairRental;
