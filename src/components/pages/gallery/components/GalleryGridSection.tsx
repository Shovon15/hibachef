import { cn } from "@/utils/helpers/cn";
import { GalleryItem } from "..";
import ImageComponent from "@/components/common/image";

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
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-[26px] [grid-auto-flow:dense]",
        className,
      )}
      style={{ gridAutoRows: "36.9px" }}
    >
      {data.map((item, i) => {
        const rowSpan = ROW_SPANS[i % ROW_SPANS.length];

        return (
          <figure
            key={i}
            className="relative overflow-hidden rounded-[4.6px] bg-muted group"
            style={{ gridRow: `span ${rowSpan}` }}
          >
            <ImageComponent
              src={item.src}
              alt={item.alt ?? ""}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500"
            />

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
  );
};

export default GalleryGridSection;

//  return (
//     <section className={cn("w-full", className)}>
//       <div className="grid grid-cols-3 gap-3 auto-rows-auto">
//         {visibleData.map((item, index) => (
//           <div
//             key={item.id}
//             className={cn(
//               "relative overflow-hidden rounded-[6px] bg-zinc-200",
//               layoutClasses[index] || "h-[120px]",
//               hasMore &&
//                 index === 11 &&
//                 "after:absolute after:inset-0 after:bg-black/50",
//             )}
//           >
//             <Image
//               src={item.src}
//               alt={item.alt}
//               fill
//               className="object-cover"
//             />

//             {item.type === "video" && (
//               <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between rounded-full bg-black/50 px-2 py-1 text-[8px] text-white">
//                 <span>▶ Video</span>
//                 {item.duration && <span>{item.duration}</span>}
//               </div>
//             )}

//             {hasMore && index === 11 && (
//               <div className="absolute inset-0 z-10 flex items-center justify-center text-white">
//                 <span className="text-[18px] font-semibold">
//                   +{data.length - 12}
//                 </span>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
