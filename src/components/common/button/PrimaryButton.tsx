import React from "react";
import { cn } from "@/utils/helpers/cn";
import ButtonComponent, { BaseButtonProps } from ".";

type Props = BaseButtonProps & {
  className?: string;
  innerClassName?: string;
};

const PrimaryButton = ({ className, innerClassName, ...props }: Props) => {
  return (
    <div className={cn("inline-block p-[1px]", className)}>
      <ButtonComponent
        {...props}
        className={cn(
          "bg-primary text-white capitalize rounded-full",
          "w-full",
          "px-10",
          "py-[2.71vw] md:py-[1.2vw] lg:py-[8px] xl:py-[10px]",
          "text-[3.5vw] md:text-[1.5vw] lg:text-[0.99vw]",
          "transition font-dmSans",
          innerClassName,
        )}
      />
    </div>
  );
};

export default PrimaryButton;
