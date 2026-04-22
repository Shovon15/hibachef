import { useState } from "react";
import InputBottomText from "./InputBottomText";
import InputComponent from "./InputComponent";
import MainTitle from "./MainTitle";
import ButtonComponent from "./ButtonComponent";
interface FormDataType {
  noodlesQty: number;
  mixedVeggiesQty: number;
  eggFriedRiceQty: number;
  additionalChicken: number;
  additionalShrimps: number;
  additionalPrimeNYStrip: number;
}

const SideOrders = () => {
  const [formData, setFormData] = useState<FormDataType>({
    noodlesQty: 0,
    mixedVeggiesQty: 0,
    eggFriedRiceQty: 0,
    additionalChicken: 0,
    additionalShrimps: 0,
    additionalPrimeNYStrip: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };

  const handleProceed = () => {
    console.log("Proceeding with:", formData);
  };

  const handlePrevious = () => {
    console.log("Going to previous step");
  };
  return (
    <div className="pl-20">
      <MainTitle text1="Choose" text2=" Side Orders" />
      <div className="w-full rounded-4xl bg-[#F2F2F2] p-6.5  mt-12">
        <div className="grid gap-x-7 gap-y-6 grid-cols-1 md:grid-cols-3">
          <div>
            <InputComponent
              label="Noodles Qty"
              name="noodlesQty"
              type="number"
              value={formData.noodlesQty > 0 ? formData.noodlesQty : ""}
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              <span className="text-[#E4002B]">$8</span>
              /Noodles
            </InputBottomText>
          </div>
          <div>
            <InputComponent
              label="Mixed Veggies Qty"
              name="mixedVeggiesQty"
              type="number"
              value={
                formData.mixedVeggiesQty > 0 ? formData.mixedVeggiesQty : ""
              }
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              <span className="text-[#E4002B]">$10</span>
              /Mixed Veggies
            </InputBottomText>
          </div>
          <div>
            <InputComponent
              label="Egg Fried Rice Qty"
              name="eggFriedRiceQty"
              type="number"
              value={
                formData.eggFriedRiceQty > 0 ? formData.eggFriedRiceQty : ""
              }
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              <span className="text-[#E4002B]">$6</span>
              /Egg Fried Rice
            </InputBottomText>
          </div>
          <div>
            <InputComponent
              label="Additional Chicken"
              name="additionalChicken"
              type="number"
              value={
                formData.additionalChicken > 0 ? formData.additionalChicken : ""
              }
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              <span className="text-[#E4002B]">$12</span>
              /Additional Chicken
            </InputBottomText>
          </div>
          <div>
            <InputComponent
              label="Additional Shrimps"
              name="additionalShrimps"
              type="number"
              value={
                formData.additionalShrimps > 0 ? formData.additionalShrimps : ""
              }
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              <span className="text-[#E4002B]">$6</span>
              /Additional Shrimps
            </InputBottomText>
          </div>
          <div>
            <InputComponent
              label="Additional Prime NY Strip"
              name="additionalPrimeNYStrip"
              type="number"
              value={
                formData.additionalPrimeNYStrip > 0
                  ? formData.additionalPrimeNYStrip
                  : ""
              }
              onChange={handleChange}
              className=" "
            />
            <InputBottomText>
              <span className="text-[#E4002B]">$15</span>
              /Additional Prime NY Strip
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

export default SideOrders;
