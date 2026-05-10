"use client";
import { cn } from "@/utils/helpers/cn";
import { GalleryItem } from "..";
import ImageComponent from "@/components/common/image";
import Modal from "@/components/common/modal/modal";
import { useState } from "react";

type GallerySectionProps = {
  data: GalleryItem[];
  className?: string;
};

const SIZE_MAP = {
  tall: 12, // ~728px
  medium: 5, // ~307px
  short: 4, // ~230px
  large: 7, // ~410px
};

const ROW_SPANS = [
  SIZE_MAP.tall,
  SIZE_MAP.medium,
  SIZE_MAP.short,
  SIZE_MAP.tall,
  SIZE_MAP.tall,
  SIZE_MAP.short,
  SIZE_MAP.large,
  SIZE_MAP.large,
  SIZE_MAP.large,
  SIZE_MAP.medium,
  SIZE_MAP.medium,
  SIZE_MAP.short,
];

const GalleryGridSection = ({ data, className }: GallerySectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);

  const handleOpen = (item: any) => {
    setActiveItem(item);
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-[26px] [grid-auto-flow:dense]",
          className,
        )}
        style={{ gridAutoRows: "36.9px" }}
      >
        {data.map((item, i) => {
          const rowSpan = ROW_SPANS[i % ROW_SPANS.length];

          return (
            <figure
              key={i}
              onClick={() => handleOpen(item)}
              className="relative overflow-hidden rounded-[4.6px] bg-muted group cursor-pointer"
              style={{ gridRow: `span ${rowSpan}` }}
            >
              {/* IMAGE */}
              {item.type !== "video" ? (
                <ImageComponent
                  src={item.src}
                  alt={item.alt ?? ""}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
                />
              ) : (
                <>
                  {/* VIDEO THUMBNAIL */}
                  <video
                    src={typeof item.src === "string" ? item.src : item.src.src}
                    className="absolute inset-0 h-full w-full object-cover"
                    muted
                  />

                  {/* PLAY ICON */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80">
                      <div className="ml-1 h-0 w-0 border-y-[10px] border-y-transparent border-l-[16px] border-l-black" />
                    </div>
                  </div>
                </>
              )}

              {item.label && (
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-black/60 to-transparent px-2.5 py-1.5 text-[11px] font-medium text-white">
                  <span className="inline-flex items-center gap-1">
                    <span className="inline-block h-0 w-0 border-y-[4px] border-y-transparent border-l-[6px] border-l-white" />
                    {item.label}
                  </span>

                  {item.duration && (
                    <span className="tabular-nums opacity-90">
                      {item.duration}
                    </span>
                  )}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="!w-[100%] !h-[100%] !max-w-none !max-h-none bg-[#000000B5] shadow-none p-10 md:p-20 flex items-center justify-center"
        iconColor="#FFFFFF"
      >
        <div className="w-full h-full flex items-center justify-center">
          {activeItem?.type === "video" ? (
            <video
              src={activeItem.src}
              controls
              autoPlay
              className="max-h-full max-w-full rounded-lg"
            />
          ) : (
            <ImageComponent
              src={activeItem?.src}
              alt={activeItem?.alt ?? ""}
              className="max-h-full max-w-full object-contain rounded-lg"
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default GalleryGridSection;
