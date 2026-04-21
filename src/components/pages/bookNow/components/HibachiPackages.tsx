import { useState } from "react";
import MainTitle from "./MainTitle";
import InputComponent from "./InputComponent";

const HibachiPackages = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    postCode: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pl-20">
      <MainTitle text1="Hibachi" text2="Packages" />
      <div className="w-full rounded-4xl bg-[#F2F2F2] p-6.5  mt-12">
        <div className="grid gap-x-7 gap-y-6 grid-cols-1 md:grid-cols-3">
          <InputComponent
            label="Guest Number (Regular) *"
            name="name"
            type="number"
            value={formData.name}
            onChange={handleChange}
            className=" "
          />
          <InputComponent
            label="Guests Number (Special)"
            name="name"
            type="number"
            value={formData.name}
            onChange={handleChange}
            className=" "
          />
          <InputComponent
            label="Kids"
            name="name"
            type="number"
            value={formData.name}
            onChange={handleChange}
            className=" "
          />
        </div>
      </div>
    </div>
  );
};

export default HibachiPackages;
