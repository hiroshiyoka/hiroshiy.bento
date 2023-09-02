import React from "react";
import Icon from "../icon";
import { GridItemInterface } from "@/config/site.config";
import Link from "next/link";
import { LuStar } from "react-icons/lu";

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link className="flex items-center gap-3" href={item.buttonLink ?? ""}>
      <Icon type={item.icon ?? ""} color={item.color} />
      <div className="w-full @md:text-lg text-base font-semibold">
        {item.title}
      </div>
      <div className="flex items-center gap-1">
        <span className="mt-[1px]">{item.stars}</span>
        <LuStar size="16" fill="currentColor" />
      </div>
    </Link>
  );
};

export default ProjectBox;
