import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { motion } from "framer-motion";

const variants = cva(
  "shadow-grid border rounded-3xl bg-white dark:bg-neutral-900 dark:border-neutral-900 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "col-span-1 row-span-2 p-8",
        "2x1": "col-span-2 row-span-1 px-8 py-4",
        "2x2": "col-span-2 row-span-2 p-8",
        "2x4": "col-span-2 row-span-4 relative overflow-hidden",
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
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        scale: 0.8,
      }}
      className={cn(variants({ size, className: "bg-white" }))}
    >
      {children}
    </motion.div>
  );
};

export default GridItems;
