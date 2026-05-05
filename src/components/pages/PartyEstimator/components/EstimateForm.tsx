"use client";
import { Dropdown } from "@/components/common/inputFields/Dropdown";
import InputComponent from "@/components/common/inputFields/InputComponent";
import { useState } from "react";

const EstimateForm = ({ formData, setFormData, ENTREE_OPTIONS }: any) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: Number(value) }));
  };
  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className=" space-y-6">
      <InputComponent
        label="How many adults will be at your event?(age 13+)"
        name="adultsQty"
        type="number"
        value={formData.adultsQty > 0 ? formData.adultsQty : 0}
        onChange={handleChange}
        className=" "
        islabelActive={true}
        required={true}
      />
      <InputComponent
        label="How many kids will be at your event?(age 5-12)"
        name="kidsQty"
        type="number"
        value={formData.kidsQty}
        onChange={handleChange}
        className=" "
        islabelActive={true}
        required={true}
      />
      <InputComponent
        label="Filet Mignon protein upgrades? (PUT 0 for none) ($5 up-charge for each)"
        name="mignonProtein"
        type="number"
        value={formData.mignonProtein}
        onChange={handleChange}
        className=" "
        islabelActive={true}
      />
      <InputComponent
        label="Lobster protein upgrades? (PUT 0 for none) ($10 up-charge for each)"
        name="lobsterProtein"
        type="number"
        value={formData.lobsterProtein}
        onChange={handleChange}
        className=" "
        islabelActive={true}
      />
      <InputComponent
        label="Garlic Noodle Add on? (PUT 0 for none) ($5 up-charge for each)"
        name="garlicNoodle"
        type="number"
        value={formData.garlicNoodle}
        onChange={handleChange}
        className=" "
        islabelActive={true}
      />
      <Dropdown
        label="Which one of our locations is closest to your event? (contact us for NY/NJ)"
        options={ENTREE_OPTIONS}
        placeholder=""
        value={formData.location}
        onChange={(value) => handleDropdownChange("location", value)}
        islabelActive={true}
      />
      <InputComponent
        label="How far (in miles) is your event from the zip-code you picked above?"
        name="miles"
        type="number"
        value={formData.miles}
        onChange={handleChange}
        className=" "
        islabelActive={true}
      />
    </div>
  );
};
export default EstimateForm;
