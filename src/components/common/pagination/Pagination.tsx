"use client";

import ArrowIcon from "@/assets/icons/ArrowIcon";
import LeftArrow from "@/assets/icons/LeftArrow";
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useMemo } from "react";

interface PaginationProps {
  totalPages: number;
  onPageChange?: (page: number) => void;
}

export function Pagination({ totalPages, onPageChange }: PaginationProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      onPageChange?.(page);
    }
  };

  // Calculate which page numbers to show based on screen size
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const siblingCount = 2; // Pages to show on each side of current page

    // Always show first page
    pages.push(1);

    // Calculate start and end of the range around current page
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages - 1,
    );

    // Add left ellipsis if needed
    if (leftSiblingIndex > 2) {
      pages.push("...");
    }

    // Add sibling pages
    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pages.push(i);
    }

    // Add right ellipsis if needed
    if (rightSiblingIndex < totalPages - 1) {
      pages.push("...");
    }

    // Always show last page (if more than 1 page)
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  // Compact version for mobile - shows fewer pages
  const compactPageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const siblingCount = 1; // Only 1 sibling on mobile

    pages.push(1);

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPages - 1,
    );

    if (leftSiblingIndex > 2) {
      pages.push("...");
    }

    for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
      pages.push(i);
    }

    if (rightSiblingIndex < totalPages - 1) {
      pages.push("...");
    }

    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages]);

  const renderPageButton = (
    page: number | string,
    index: number,
    isMobile: boolean = false,
  ) => {
    if (page === "...") {
      return (
        <span
          key={`ellipsis-${index}`}
          className="px-1 sm:px-2 text-neutral-400 text-xs sm:text-sm font-medium"
        >
          ...
        </span>
      );
    }

    const pageNum = page as number;
    const isActive = pageNum === currentPage;

    return (
      <button
        key={pageNum}
        onClick={() => handlePageChange(pageNum)}
        className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded font-graphikTrial  font-medium text-xs sm:text-base transition-all duration-200 ${
          isActive
            ? "bg-[#FDEDF0] text-[#E4002B]  "
            : " text-[#667085]  hover:bg-[#FDEDF0] active:scale-95"
        }`}
        aria-current={isActive ? "page" : undefined}
      >
        {pageNum}
      </button>
    );
  };

  return (
    <div className="flex flex-col gap-4 py-6 sm:py-8">
      {/* Desktop view */}
      <div className="hidden sm:flex items-center justify-between gap-3">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center font-graphikTrial font-medium text-xs lg:text-base gap-2 justify-center  disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 text-[#667085] hover:text-[#E4002B]"
          aria-label="Previous page"
        >
          <ArrowIcon className="w-3 h-3" />
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-2">
          {pageNumbers.map((page, index) =>
            renderPageButton(page, index, false),
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center font-graphikTrial font-medium text-xs lg:text-base gap-2 justify-center  disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95 text-[#667085] hover:text-[#E4002B]"
          aria-label="Next page"
        >
          Next
          <ArrowIcon className="w-3 h-3" direction="right"  />
        </button>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden flex items-center justify-center gap-1.5">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center w-8 h-8 border border-[#2D3135] rounded hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
          aria-label="Previous page"
        >
          {/* <ChevronLeft className="w-4 h-4 text-[#2D3135]" /> */}
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {compactPageNumbers.map((page, index) =>
            renderPageButton(page, index, true),
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center w-8 h-8 border border-[#2D3135] rounded hover:bg-neutral-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-95"
          aria-label="Next page"
        >
          {/* <ChevronRight className="w-4 h-4 text-[#2D3135]" /> */}
        </button>
      </div>
    </div>
  );
}
