import React from "react";
import Icon from "../icon";
import { GridItemInterface } from "@/config/site.config";

const ProjectBox = ({ item }: { item: GridItemInterface }) => {
  return (
    <div className="flex items-center gap-3">
      <Icon type={item.icon ?? ""} />
      <div className="w-full text-lg font-semibold">{item.title}</div>
    </div>
  );
};

export default ProjectBox;
