"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenis = useSmoothScroll();
  const pathname = usePathname();

  // useEffect(() => {
  //   if (lenis) {
  //     lenis.scrollTo(0);
  //   }
  // }, [pathname, lenis]);

  return <>{children}</>;
}
