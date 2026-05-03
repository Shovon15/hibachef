"use client";
import PrimaryButton from "@/components/common/button/PrimaryButton";
import { useState } from "react";
import { MAP_AREAS, MapArea } from "./LocationData";
import { HighlightHeading } from "@/components/common/typography/HighlightHeading";

type Props = { data?: any };

const LocationMap = ({ data }: Props) => {
  const [activeId, setActiveId] = useState("colorado");
  const [hovered, setHovered] = useState<string | null>(null);
  const activeArea = MAP_AREAS.find((area) => area.id === activeId);
  const [tooltip, setTooltip] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  return (
    <div className="py-10 lg:py-20">
      <HighlightHeading
        text={`Select your Location to book your Hibachef`}
        highlight={["Hibachef"]}
        highlightClassName="text-primary "
        className="text-center max-w-[90%] lg:max-w-[50%] mx-auto"
      />

      <div className="flex flex-col lg:flex-row lg:gap-20 px-[4vw]">
        <div className="relative w-full md:w-[60%] py-10">
          <svg
            viewBox="0 0 1060 661"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <g clipPath="url(#clip0_211_1972)">
              {MAP_AREAS.map((area: MapArea) => {
                const isDisabled = area?.disabled;

                return (
                  <path
                    key={area.id}
                    d={area.d}
                    fill="#E4002B"
                    fillOpacity={
                      isDisabled
                        ? 0.12
                        : activeId === area.id || hovered === area.id
                          ? 1
                          : 0.22
                    }
                    stroke={area.disabled ? "#ffffff" : "#E4002B"}
                    strokeWidth="0.970631"
                    strokeLinejoin="round"
                    className={`transition-all duration-200 ${
                      isDisabled ? "" : "cursor-pointer"
                    }`}
                    onMouseEnter={(e) => {
                      if (isDisabled) return;

                      setHovered(area.id);
                      setTooltip({
                        name: area.name,
                        x: e.clientX,
                        y: e.clientY,
                      });
                    }}
                    onMouseMove={(e) => {
                      if (isDisabled) return;

                      setTooltip((prev) =>
                        prev ? { ...prev, x: e.clientX, y: e.clientY } : prev,
                      );
                    }}
                    onMouseLeave={() => {
                      if (isDisabled) return;

                      setHovered(null);
                      setTooltip(null);
                    }}
                    onClick={() => {
                      if (isDisabled) return;

                      setActiveId(area.id);
                    }}
                  />
                );
              })}
            </g>
            <defs>
              <filter
                id="filter0_d_211_1972"
                x="259.2"
                y="221.2"
                width="213.6"
                height="139.6"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="13.4" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.894118 0 0 0 0 0 0 0 0 0 0.168627 0 0 0 0.16 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_211_1972"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_211_1972"
                  result="shape"
                />
              </filter>
              <clipPath id="clip0_211_1972">
                <rect width="1060" height="661" fill="white" />
              </clipPath>
            </defs>
          </svg>

          {tooltip && (
            <MapTooltip name={tooltip.name} x={tooltip.x} y={tooltip.y} />
          )}
        </div>
        <div className="w-full lg:w-[40%] flex flex-col gap-5 justify-center items-start text-left">
          <h3 className="font-cooperBlack font-[400] text-[48px]">
            {activeArea?.name}
          </h3>

          <p>Contact with us or book a Hibachef in {activeArea?.name}</p>
          <PrimaryButton>Book Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;

const MapTooltip = ({ name, x, y }: { name: string; x: number; y: number }) => {
  return (
    <div
      className="!pointer-events-none fixed z-[9999]"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -115%)",
      }}
    >
      {/* Tooltip box */}
      <div className="relative inline-flex items-center justify-center px-4 py-6 bg-white rounded-xl shadow-md">
        <span className="whitespace-nowrap text-sm font-semibold text-black">
          {name}
        </span>

        {/* Arrow */}
        <div className="absolute left-1/2 top-full -translate-x-1/2">
          <div className="h-0 w-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-white" />
        </div>
      </div>
    </div>
  );
};
