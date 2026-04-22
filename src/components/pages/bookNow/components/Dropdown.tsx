'use client';

import ChevronDownIcon from '@/assets/icons/ChevronDownIcon';
import { useState, useRef, useEffect } from 'react';
// import { ChevronDown } from 'lucide-react';

interface DropdownProps {
  options: string[];
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function Dropdown({ options, placeholder, value, onChange,label }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`pt-3 pb-2  w-full px-0 mt-0 bg-transparent border-0 border-b border-[#6C757D] appearance-none focus:outline-none focus:ring-0 focus:border-[#E4002B] peer transition-colors duration-200 font-graphikTrial font-normal text-base text-black flex items-center justify-between ${ value ? 'border-[#E4002B]' : 'border-[#6C757D]'}`}
      >
        <span className={isOpen || value ? 'text-black' : 'text-gray-400'}>
          {value || placeholder}
        </span>
        {/* <ChevronDown
          size={20}
          className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        /> */}
        <ChevronDownIcon  className={` transition-transform ${isOpen ? 'rotate-180' : ''}`}/>
      </button>
      
      {/* {label && (
        <label className={`absolute origin-0 transition-all duration-300 pointer-events-none font-medium ${
          isOpen || value
            ? "-top-2 text-xs text-[#EE1F26]"
            : "top-3 text-base text-[#ADADAD]"
        }`}>
          {label}
        </label>
      )} */}


      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-3 hover:bg-gray-100 focus:outline-none border-b last:border-b-0 text-gray-900"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
