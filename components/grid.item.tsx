import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const variants = cva(
  "shadow-grid rounded-3xl bg-white dark:bg-neutral-900 flex flex-col justify-center",
  {
    variants: {
      size: {
        "1x2": "col-span-2 md:col-span-1 row-span-2 p-8",
        "2x1": "col-span-1 md:col-span-2 row-span-1 px-8 py-4",
        "2x2": "col-span-2 row-span-2 p-8",
        "2x4": "col-span-1 md:col-span-2 row-span-4 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

type GridItemsProps = { children: React.ReactNode } & VariantProps<
  typeof variants
>;

const GridItems = ({ size, children }: GridItemsProps) => {
  return (
    <div className={cn(variants({ size, className: "bg-emerald-100" }))}>
      {children}
    </div>
  );
};

export default GridItems;
