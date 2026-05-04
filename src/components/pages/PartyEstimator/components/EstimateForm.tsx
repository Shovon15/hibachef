"use client";
import { Dropdown } from "@/components/common/inputFields/Dropdown";
import InputComponent from "@/components/common/inputFields/InputComponent";
import { useState } from "react";
type FormDataType = {
  noodlesQty: number;
};
const ENTREE_OPTIONS = [
  "Grilled Salmon",
  "Filet Mignon",
  "Chicken Parmesan",
  "Vegetarian Pasta",
  "Lobster Tail",
  "Duck Breast",
];

const EstimateForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    noodlesQty: 0,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: Number(value) }));
  };
  return (
    <div className=" space-y-6">
      <InputComponent
        label="Noodles Qty"
        name="noodlesQty"
        type="number"
        value={formData.noodlesQty > 0 ? formData.noodlesQty : ""}
        onChange={handleChange}
        className=" "
      />
      <InputComponent
        label="Noodles Qty"
        name="noodlesQty"
        type="number"
        value={formData.noodlesQty > 0 ? formData.noodlesQty : ""}
        onChange={handleChange}
        className=" "
      />
      <InputComponent
        label="Noodles Qty"
        name="noodlesQty"
        type="number"
        value={formData.noodlesQty > 0 ? formData.noodlesQty : ""}
        onChange={handleChange}
        className=" "
      />
      <InputComponent
        label="Noodles Qty"
        name="noodlesQty"
        type="number"
        value={formData.noodlesQty > 0 ? formData.noodlesQty : ""}
        onChange={handleChange}
        className=" "
      />
      <InputComponent
        label="Noodles Qty"
        name="noodlesQty"
        type="number"
        value={formData.noodlesQty > 0 ? formData.noodlesQty : ""}
        onChange={handleChange}
        className=" "
      />
      <Dropdown
        label="Which one of our locations is closest to your event? (contact us for NY/NJ)"
        options={ENTREE_OPTIONS}
        placeholder=""
        value={""}
        onChange={(value) => handleChange}
      />
      <InputComponent
        label="Noodles Qty"
        name="noodlesQty"
        type="number"
        value={formData.noodlesQty > 0 ? formData.noodlesQty : ""}
        onChange={handleChange}
        className=" "
      />
    </div>
  );
};
export default EstimateForm;
