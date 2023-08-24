import React from "react";
import Icon from "../icon";
import { GridItemInterface } from "@/config/site.config";
import Link from "next/link";

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <Link className="flex items-center gap-3" href={item.buttonLink ?? ""}>
      <Icon type={item.icon ?? ""} color={item.color} />
      <div className="w-full text-lg font-semibold">{item.title}</div>
      <div>
        <span>{item.stars}</span>
      </div>
    </Link>
  );
};

export default ProjectBox;
