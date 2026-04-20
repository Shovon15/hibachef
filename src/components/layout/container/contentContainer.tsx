import { cn } from "@/utils/helpers/cn";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  disablePX?: boolean;
  disablePR?: boolean;
  disablePL?: boolean;
  disablePLOnLg?: boolean;
};

const ContentContainer = ({
  children,
  className = "",
  disablePX,
  disablePR,
  disablePL,
  disablePLOnLg,
}: Props) => {
  const padding = ` ${disablePX ? "!px-0" : ""} ${disablePL ? "!pl-0" : ""} ${
    disablePR ? "!pr-0" : ""
  } ${disablePLOnLg ? "lg:!pl-0" : ""}`;

  return (
    <div
      className={cn(
        "2xl:px-[16.67vw] lg:px-[16.67vw] px-4 h-full",
        padding,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ContentContainer;
