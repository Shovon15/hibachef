import { cn } from "@/utils/helpers/cn";
import { HeadingOne } from "./Heading";
import { ReactNode } from "react";

type HighlightHeadingProps = {
  text: string;
  highlight?: string | string[];
  highlightClassName?: string;
  className?: string;
};

export const HighlightHeading = ({
  text,
  highlight,
  highlightClassName = "text-red-500",
  className,
  ...props
}: HighlightHeadingProps) => {
  const highlights = Array.isArray(highlight) ? highlight : [highlight];

  const renderText = () => {
    if (!highlight) return text;

    let parts: (string | ReactNode)[] = [text];

    highlights.forEach((word) => {
      if (!word) return;
      parts = parts.flatMap((part) => {
        if (typeof part !== "string") return part;

        const split = part.split(new RegExp(`(${word})`, "gi"));

        return split.map((chunk, i) =>
          chunk.toLowerCase() === word.toLowerCase() ? (
            <span key={i} className={highlightClassName}>
              {chunk}
            </span>
          ) : (
            chunk
          ),
        );
      });
    });

    return parts;
  };

  return (
    <HeadingOne className={cn(`font-cooperBlack`, className)} {...props}>
      {renderText()}
    </HeadingOne>
  );
};
