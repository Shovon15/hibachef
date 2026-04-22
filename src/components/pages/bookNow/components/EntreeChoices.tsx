"use client";

import X from "@/assets/icons/X";
import { Dropdown } from "./Dropdown";
import InputComponent from "./InputComponent";
import CloseIcon from "@/assets/icons/CloseIcon";

interface EntreeItem {
  id: string;
  entree: string;
  quantity: string;
}

interface EntreeChoicesProps {
  formData: {
    entreeChoices: EntreeItem[];
  };
  setFormData: ((data: any) => void);
}

const ENTREE_OPTIONS = [
  "Grilled Salmon",
  "Filet Mignon",
  "Chicken Parmesan",
  "Vegetarian Pasta",
  "Lobster Tail",
  "Duck Breast",
];

export function EntreeChoices({ formData, setFormData }: EntreeChoicesProps) {
  const handleEntreeChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      entreeChoices: formData.entreeChoices.map((item) =>
        item.id === id ? { ...item, entree: value } : item,
      ),
    });
  };

  const handleQuantityChange = (id: string, value: string) => {
    setFormData({
      ...formData,
      entreeChoices: formData.entreeChoices.map((item) =>
        item.id === id ? { ...item, quantity: value } : item,
      ),
    });
  };

  const handleRemoveEntree = (id: string) => {
    setFormData({
      ...formData,
      entreeChoices: formData.entreeChoices.filter((item) => item.id !== id),
    });
  };

  const handleAddEntree = () => {
    const newId = Math.random().toString(36).substr(2, 9);
    setFormData({
      ...formData,
      entreeChoices: [
        ...formData.entreeChoices,
        { id: newId, entree: "", quantity: "" },
      ],
    });
  };

  return (
    <div className="bg-gray-200 rounded-lg p-5.5 relative">
      <h2 className="font-boldCond font-semibold text-base text-[#000000] mb-4">Entree Choices</h2>

      <div className="space-y-6">
        {formData.entreeChoices.map((item) => (
          <div key={item.id} className="flex gap-8 items-end relative group">
            {/* Entree Dropdown */}
            <div className="flex-1">
              <Dropdown
                label="Entree"
                options={ENTREE_OPTIONS}
                placeholder="Select entree Choice"
                value={item.entree}
                onChange={(value) => handleEntreeChange(item.id, value)}
              />
            </div>

            {/* Quantity Input */}
            <div className="w-1/4">
              <InputComponent
                label="Quantity"
                type="number"
                placeholder="Quantity"
                value={item.quantity}
                name={`quantity-${item.id}`}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                className=""
              />
            </div>

            {/* Close Button for individual rows */}
            {formData.entreeChoices.length > 1 && (
              <button
                onClick={() => handleRemoveEntree(item.id)}
                className="text-gray-600 hover:text-gray-900 transition-colors pb-3"
              >
                <CloseIcon/>
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Add More Button */}
      <button
        onClick={handleAddEntree}
        className="w-full mt-8 py-3 border border-[#E4002B] text-[#E4002B] font-medium text-base rounded-full hover:bg-red-50 transition-colors"
      >
        + ADD MORE
      </button>

      {/* Close Button for entire section */}
      {/* {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-600 hover:text-gray-900 transition-colors"
        >
          X
        </button>
      )} */}
    </div>
  );
}
